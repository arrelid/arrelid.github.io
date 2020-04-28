---
layout: post
redirect_from:
 - /post/2624526484/the-interracial-application
tumblr_id: 2624526484
date: 2011-01-06 17:09:40 UTC
title: The interracial application
---

During the last couple of years I've been struggling trying to decide whether I prefer web applications or native applications. Obviously, they both have their pros/cons and ins/outs.

The by far largest advantage when developing a web application compared to a traditional native application is the possibility of a seriously awesome kick-ass UI/UX experience - if the developer decides to uses HTML5 with all its bells and whistles that is. Of course, you'll be able to create wonderful UIs using native UI toolkits as well, but it takes gazillions of hours as soon as your UI starts to become more complex. Needless to say, these interfaces are cross-plattform by default, as long as there are capable browsers available for your platforms of choice. On the other hand, these web applications cannot do **everything** a native application can do. Just take a look at Grooveshark's [latest incarnation](http://listen.grooveshark.com/) - it's wonderful and all, but it doesn't do what it's supposed to (play music) unless the user has Flash installed. This means **fail** on the iPhone, **fail** on the iPad, as **fail** on any browser that has Flash blocked.

What about native applications then? Just invert the above paragraph and you've got them covered; they can do basically **anything** you want them to do, but writing an accompanying compelling UI is a cumbersome task (depending on platform that is - there are platforms out there who facilitate the construction of compelling user interfaces without too much manual work... I'm looking at you iOS). Neither will your application work across multiple platforms by default, unless you use some crap like [Adobe Air](http://www.adobe.com/products/air/) or [Java Swing](http://en.wikipedia.org/wiki/Swing_(Java)). History has proven that these applications aren't really up to the competition; they seem to have some passion for implementing the least common denominator for all platforms, which (to be honest) makes them go into the _piece of crap_ category of software.

So, which method should you choose when developing a new application then? Just a few years ago, I would have told you to go with a native application. Sure, writing UIs for each and every platform you support was (and is) kind of tedious, but at least you could have common code in the model and controller layers (think [libspotify](http://developer.spotify.com/en/libspotify/overview/) with a custom platform specific UI on top of it). More importantly - HTML5 was just a draft back then, and neither was there a nice cross-platform HTML5 library readily available for (ab)use.

Take a few steps forward (that's today) and I will recommend something completely different. Since Google indicated that the term wasn't invented just yet I give you:

**in‧ter‧ra‧cial ap‧pli‧ca‧tion** |ˌintərˈrā sh əl ˌapliˈkā sh ən|
noun (pl. -s)
an application designed in such a way that its non-visible components are written in some cross-platform language, while as its UI consists of a combination of web views and native UI components. Needless to say, an interracial application is easily ported to new exotic platforms since there's very little (if any) native UI to implement.

Going about writing such an application today isn't very hard. The building blocks for the [invisible parts](http://www.boost.org/) are readily available already, and NSApplication + NSWindow (or equivalent) combined with [Chromium Embedded Framework](http://code.google.com/p/chromiumembedded/) will allow you to write a wonderful HTML5 powered UI in almost no time at all. Best of all? Your application will be portable as hell.

That said, developers still need to see some invention in the field of the APIs that combines native frameworks with WebKit et al. UIApplication's [canOpenURL:](http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplication_Class/Reference/Reference.html#//apple_ref/occ/instm/UIApplication/canOpenURL:) is one step in the right direction, but you will want to be able to do the same thing from a browser instance - ever seen a web page asking you if you have application _X_ installed?

While you're digesting the fact that there's a new strategy for writing applications in town, you might want to check out some applications that implements the above techniques already. My gut feeling is that these applications aren't implementing a very platform independent model/controller layer (they're most likely written in Objective-C), but they _do_ showcase what you can achieve by combining native UI controls and web views. I give you [Fliboard](http://www.flipboard.com/) (iPad), The [Mac App Store](http://www.apple.com/mac/app-store/) (Mac OS X, basically a big WebKit view!) and [Twitter](http://www.engadget.com/2010/09/01/twitter-for-ipad-review/) (iPad).

Once you're done mourning over your current application strategy - wake up and give the world what it always needs; more awesome applications.
