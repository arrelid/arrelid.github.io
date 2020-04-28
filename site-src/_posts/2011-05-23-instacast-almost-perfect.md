---
layout: post
redirect_from:
 - /post/5761470790/instacast-almost-perfect
tumblr_id: 5761470790
date: 2011-05-23 07:24:47 UTC
title: Instacast - almost perfect
---

Ever since [Shawn Blanc wrote about Instacast](http://shawnblanc.net/2011/03/instacast/) earlier this year, I've been using it as my primary podcast manager. While I tend to agree that it kicks the shit out of Apple's iPod.app for subscribing to, listening to and updating podcasts, it still needs some love and care to become the _perfect_ podcast utility. So, what are the current issues driving me mad?

* The episode detail view does not allow me to go from one episode to another without first popping the view, and then select the next episode from the episodes list view. Instacast could learn from [Reeder](http://reederapp.com/) on the iPhone here, which lets you navigate from one item to the next without first popping to the items list view.

* There's no gradual feedback when I swipe over an item in the episodes list view. Once again, Instacast could learn from Reeder - as soon as I start a swipe operation, it gives me gradual feedback of how far I will have to swipe before an action (star et al.) kicks in.

* There's no rotation support in the episodes list view. This makes it a pain in the ass to go from streaming one episode to another, since I'll have to rotate the view back, pop back to the episodes list view, select another episode, hit stream and then rotate the view again. Sigh.

* There's no detection of reachability changes. This means that I can't start streaming the latest episode of a show when I'm about to leave the office, since I'll lose WiFI within 2 seconds. Extremely annoying. Just include [Apple's reachability sample code](http://developer.apple.com/library/ios/#samplecode/Reachability/Listings/Classes_Reachability_h.html) and you'll get the basic blocks for free.

* The offline cache isn't re-used for streaming. This means that I can't start listening to a partially synced podcast when I'm in areas without network coverage. This doesn't make sense at all - even if I do got proper network coverage, it seems evil to not use the cache (those data plans are freaking expensive, dammit).

* I can't see offline sync progress of an episode unless I'm in the episodes list view. It would make sense to be able see it when I'm in the episode view as well (neither can I pause/resume offline syncing of an episode in the episode view - same argument goes for this one).

* The hit area of the playback controls in landscape mode could be adjusted so that there is no dead space _between the controls_ - there's no reason to think I'd want to get rid of the controls overlay when I happen to tap a bit too far to the left of the pause button (that's the behavior when you tap on the controls overlay itself).

* The landscape mode doesn't behave like the artist mode when it comes to the controls overlay and single taps. While the landscape mode hides the controls overlay when I tap on the current podcast's artwork, the artist mode doesn't accept single taps at all. I'm not really sure this makes sense at all. Why not have it behave the same way in both modes? And while you're at it, why not include the speed scrubber in the controls overlay by default so that you can skip that pesky double tap...

Oh lord... I sound like someone who likes to complain, don't I? Still, Instacast _is still_ the best of the breed when it comes to podcast management, and I'm happily staying with it until something better shows up. If [Vemedio](http://vemedio.com/products/instacast) should happen to look this way for critique and inspiration, I wouldn't really mind though...
