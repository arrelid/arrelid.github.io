---
layout: post
redirect_from:
 - /post/28754668690/another-known-device-authentication-for-remote
tumblr_id: 28754668690
date: 2012-08-05 07:44:00 UTC
title: “Another known device” authentication for remote erase?
---

Mat Honan has [a pretty sad story](http://www.emptyage.com/post/28679875595/yes-i-was-hacked-hard) on how more or less all his (important) digital identities got hacked the other day. Maybe the worst part of this story was the remote erase feature of iCloud, which the hacker(s) used to remotely wipe all data on all his (iCloud connected) devices. Turns out that [social engineering](http://en.wikipedia.org/wiki/Social_engineering_(security)) was the culprit, but nevertheless it got me thinking...

Why isn't there some kind of [two-factor authentication](http://en.wikipedia.org/wiki/Two-factor_authentication) in place, using another _known_ device for this feature [1]? Some people have multiple iPhones/Macs/iPads - you could have iCloud send erase verification codes to any of these, requiring you to unlock them to be able to see the code(s). Another (not very practical) twist could be to require the device you're using _for_ verification to be within some kind of [geo-fence](http://en.wikipedia.org/wiki/Geo-fence) (like “at home”, “at work” etc.). They're not airtight (someone could steal multiple devices), but they would probably protect against casual hackers without access to any of your devices.

Or for those with only one iCloud connected device - why not provide iCloud (during setup?) with some other phone number (like to a friend, your wife etc.) which Apple can call and verify with _if_ someone should try to remotely erase your device?

I bet there are multiple implementations that would have saved Mat's data without too much pain.

[1] It's not uncommon to offer this kind of functionality - [Google](http://support.google.com/accounts/bin/answer.py?hl=en&answer=180744) and [Facebook](http://scoop.intel.com/increasing-facebook-security-with-an-sms-password/) does it already.
