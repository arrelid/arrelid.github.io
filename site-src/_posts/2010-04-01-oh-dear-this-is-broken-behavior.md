---
layout: post
redirect_from:
 - /post/1638507794/oh-dear-this-is-broken-behavior
tumblr_id: 1638507794
date: 2010-04-01 16:38:00 UTC
title: Oh dear, this is broken behavior
---

_Update February 13, 2011: I've created Radar [#8994725](rdar://problem/8994725) for the good people over at Apple to dissect._

Soon after the release of Spotify 0.4.0 for the iPhone, a number of subscribers told us that they could no longer connect to our service. Strange? We surely did some thorough Q&A before releasing this little beast into the wild - how could we have missed something so fundamental?

Soon it became apparent that some of these subscribers actually _were_ able to connect, but _only_ if the troublesome phone in question was connected to a carrier data network. Huh? Connect the phone to your preferred Wi-Fi again, and the app would just stall during login again...

I really, really, really, do hate this kind of symptoms: a few of our loyal subscribers could no longer use our service, and there was no way for us to reproduce the problem. Neither had we seen this problem during testing, and trust me - we do test our release candidates on a broad variety of customer routers. So... what do do?

When problems like these occur, it's great having subscribers [telling us about them](http://getsatisfaction.com/spotify/topics/issue_with_iphone_spotify_update) as soon as possible. Thanks to these subscribers, it soon became obvious that our application was unable to retrieve information about what Spotify servers it should try to connect to. How come? Time to dig deeper...

We use [SRV records](http://en.wikipedia.org/wiki/SRV_record) to be able to balance the load on our servers. When our Spotify clients start, they all construct a SRV record query. This query is then passed on to a system library that is supposed to perform the actual SRV lookup. On the iPhone, we're using [Apple’s DNS Service Discovery framework](http://developer.apple.com/mac/library/DOCUMENTATION/Networking/Conceptual/dns_discovery_api/) to perform this operation. So far so good...

Unfortunately, many customer routers have serious flaws in their implementations of how to handle these kind of queries. We’ve been working around most of those issues by making sure that the SRV record we use in our live system is limited in size, so that the majority of routers are able to process it. However, this problem was new to us - could some routers have broken enough implementations to make the query just hang forever?

Now the fun part begins - how the hell do you confirm your suspected culprit? Some sample code should get you going...

```c
#include <stdio.h>
#include <dns_sd.h>

void callback(
			DNSServiceRef sdRef,
			DNSServiceFlags flags,
			uint32_t interfaceIndex,
			DNSServiceErrorType errorCode,
			const char *fullname,
			uint16_t rrtype,
			uint16_t rrclass,
			uint16_t rdlen,
			const void *rdata,
			uint32_t ttl,
			void *context) {

	static int counter = 0;
	printf("Callback called: %d\n", ++counter);
}

void processQueryForSRVRecord(const char *record) {

	DNSServiceRef sdRef;
	int context;

	printf("Setting up query for record: %s\n", record);
	DNSServiceQueryRecord(&sdRef, 0, 0, record, kDNSServiceType_SRV, kDNSServiceClass_IN, callback, &context);

	printf("Processing query for record: %s\n", record);
	DNSServiceProcessResult(sdRef);

	printf("Deallocating query for record: %s\n", record);
	DNSServiceRefDeallocate(sdRef);
}

int main(void) {

	const char *record = "_example._tcp.example.com.";
	processQueryForSRVRecord(record);

	return 0;
}
```

Isn't that sample code just great? As a matter of fact, it's so spanking great that it will put the exact finger on what is wrong. Try to compile it yourself, and then run it... Notice anything strange compared to what you think might happen if you just look at the source code?

Yepp, the application just hangs forever. Why? It's trying to resolve a non-existing SRV record... and apparently such a call to `DNSServiceProcessResult` just hangs forever.

This is just plain wrong - the call should return almost straight away without our callback ever getting called. Instead it just hangs. If you're into GDB, attach to your test app and notice the following call stack:

```
(gdb) bt
#0  0x00007fff8827ef82 in recvfrom$NOCANCEL ()
#1  0x00007fff8827eebd in read_all ()
#2  0x00007fff8828074c in DNSServiceProcessResult ()
#3  0x0000000100000da3 in processQueryForSRVRecord ()
#4  0x0000000100000ddf in main ()
```

So, what will happen if you query for a valid record and you've got a fucked up router somewhere in between you and the rest of the internets? You will experience the above behavior. Not that very alarming if you're a developer just running a test app, but if you're a subscriber to the Spotify service, you'll get pissed. It should just work, right?

Exactly our thoughts, why we're replacing Apple's framework with libresolv instead. It's been serving our Mac OS X desktop client well throughout the years, and it will power our next iPhone release as well. And yes, it handles troublesome routers (and invalid records if you should like) just the way you'd expect it to - returning an error code instead of just hanging.

That's it. Thanks everyone for helping us troubleshoot this - it sure made the debugging much easier!
