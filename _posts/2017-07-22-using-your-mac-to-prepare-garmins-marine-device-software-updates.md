---
layout: post
date: 2017-07-22 09:30:00 UTC
title: Using your Mac to prepare Garmin's Marine Device Software Updates
---

My dad recently purchased a Garmin echoMAP CHIRP 72sv. Checking its software version, I realized there was a newer version available over at [Garmin's support website](https://www8.garmin.com/support/download_details.jsp?id=4749). The problem? Garmin created a Windows executable containing the update. There has to be a fix for that, right?

# Step by step instructions

You'll want a formatted SD card, 7zip, and a copy of the Garmin software you want to update your device to.

```
brew install p7zip
7z e ~/Downloads/echoMAPwithSDCard_20170612.exe
mv gupdate.gcd Garmin
cp -R Garmin /Volumes/Untitled
```

# Install the software

Power up your Garmin device. Wait until it's done booting. Insert the SD card you prepared above, and invoke the software update option from the popup.

Tada. You just installed a Garmin update without a Windows machine. Brilliant.
