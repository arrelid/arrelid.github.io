---
layout: post
title: Using your Mac to prepare Garmin's Marine Device Software Updates
---

My dad recently purchased a Garmin echoMAP CHIRP 72sv. Checking its software version, I realized there was a newer version available over at [Garmin's support website](https://www8.garmin.com/support/download_details.jsp?id=4749). The problem? Garmin seems to think people don't know how to copy files to an SD card manually, hence embedding all the necessary files within a Windows executable designed to do the "hard work" for you. There has to be a fix for that, right?

Enter 7-Zip, who will help us extract the files on computer running !Windows.

```bash
$ brew install p7zip
$ 7z e ~/Downloads/echoMAPwithSDCard_20160606.exe # Change to proper path
```

TBC...
