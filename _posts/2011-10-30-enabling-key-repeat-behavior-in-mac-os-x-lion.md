---
layout: post
redirect_from:
 - /post/12116160449/enabling-key-repeat-behavior-in-mac-os-x-lion
tumblr_id: 12116160449
date: 2011-10-30 14:53:04 UTC
title: Enabling key repeat behavior in Mac OS X Lion
---

Just fire up your shell of choice, and invoke something like...

```applescript
defaults write -g ApplePressAndHoldEnabled -bool false
```

...and you will once again be able to press any key on your keyboard and have Mac OS X behave the way it should behave.
