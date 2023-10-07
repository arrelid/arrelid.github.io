---
layout: post
date: 2023-10-07 10:30:00 UTC
title: Tailscale exit node activation on macOS based on the current Wi-Fi connection
---

Tailscale's excellent exit node feature lets you route all non-Tailscale internet traffic through a specific device on your Tailscale network. While you can easily enable/disable the use of an exit node through the Tailscale application itself, I've often found myself forgetting to enable it when I'm on a public Wi-Fi.

If you're on a Mac, you could do something like the below to have your computer do this for you automatically:

- Using Apple's own Shortcuts app: Create a new shortcut that enables/disables your exit node of choice based on the name of the current Wi-Fi connection, as well as the status/name of the current exit node (if any). [Tailscale covers the basics here](https://tailscale.com/kb/1233/mac-ios-shortcuts/)
- Using [Hammerspoon](https://hammerspoon.org/): Watch the [status of your Wi-Fi connection](http://www.hammerspoon.org/docs/hs.wifi.watcher.html), and trigger the above shortcut when the SSID of the current Wi-Fi connection changes. If you're on macOS Sonoma, you might need [this temporary workaround](https://github.com/Hammerspoon/hammerspoon/issues/3537#issuecomment-1743870568) for Hammerspoon not asking for the appropriate permissions

To make sure you don't enable/disable the exit node on _every_ SSID change, you might want to incorporate some logic that handles the switching of SSIDs at bit more gracefully. Remember that changing networks might lead to multiple callbacks where connection goes SSID A -> no SSID -> SSID B.

Also: Some kind of posting of notifications when the exit node changes might come in handy, or you'll have to monitor the Tailscale menu bar icon yourself to see that the exit node actually gets enabled/disabled properly.

Happy surfing.