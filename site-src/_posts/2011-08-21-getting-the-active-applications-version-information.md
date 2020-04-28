---
layout: post
redirect_from:
 - /post/9213760522/getting-the-active-applications-version-information
tumblr_id: 9213760522
date: 2011-08-21 17:45:19 UTC
title: Getting the active application's version information
---

Whenever I'm trying out the latest and greatest internal versions of the Spotify Mac OS X desktop application, I try to be a good product owner by reporting any bugs in our internal bug tracking system. Whenever I do so, I always(-isch) provide information about _exactly_ which build I was running so that our developers can verify the bug using the exact same version as me.

Previously, this process involved:

1. Launching Spotify (through Xcode, Finder et al.)
2. Cmd-click the recently launched Spotify in Dock to reveal it in Finder
3. Right-click the selected Spotify item in Finder, and then invoke its "Get Info" menu item
4. Manually select and copy the string in the _Version_ field of the Info popup

Argh, tedious... so why not make your life a bit simpler by creating an AppleScript that will do the heavy lifting for you?

```applescript
return short version of (info for (path to frontmost application))
```

Binding the above script to whatever keyboard shortcut you feel is appropriate (using e.g. [Alfred](http://alfredapp.com/)), and the above process is now simplified to...

1. Switch to whatever app you're interested in
2. Invoke the global hotkey, and viola - you've got the app's version information in your clipboard

It sure feels great to automate sometimes, aight?
