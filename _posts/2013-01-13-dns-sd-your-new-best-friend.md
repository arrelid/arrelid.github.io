---
layout: post
redirect_from:
 - /post/40415133722/dns-sd-your-new-best-friend
tumblr_id: 40415133722
date: 2013-01-13 09:03:00 UTC
title: dns-sd, your new best friend
---

Do you depend on a service running on a remote machine? Are you a cheap ass who can't afford a static IP? Are you tired of the free dynamic DNS services out there? Well look no further!

If the service in question is running on a machine where the currently logged in (OS) user is logged in to [Back to My Mac](http://en.wikipedia.org/wiki/Back_to_My_Mac), you're safe. Through the marvelous wonders of wide-area Bonjour services, you can list all running services (and corresponding endpoints) of a certain kind within your virtual (Back to My Mac) network by simply invoking...

```sh
dns-sd -B _ssh
```

...in your favorite shell (the dns-sd command is a network diagnostic tool, much like _ping_ or _traceroute_ - read its man page for more details).

If this should be too much of a process, Terminal.app can do this auto discovery for you - just invoke the _New Remote Connection_ option, and it will list all (Back to my Mac) machines running a certain service kind.

Magic, isn't it?
