---
layout: post
date: 2023-05-30 11:30:00 UTC
title: What is preventing macOS from sleeping?
---

For a number of reasons that I'm too lazy to list here, I've setup macOS to lock the screen (and require my password) should I've been inactive for a couple of minutes. This usually works well, but sometimes it just... doesn't.

Up until now, I never really bothered figuring out why; I usually lock my computer manually before leaving it, so it's not very often that I experience the above scenario.

Well, yesterday I forgot to lock my computer during lunch, and when I can back to it, the screen was on and the mail app was waiting for me to complete a draft I'd been working on. Not good.

A quick search on the interwebs told me that there are a couple of ways you can troubleshoot this.

- Using **Activity Monitor.app**. Check out the _Energy_ tab, and the _Preventing Sleep_ column - if there's something preventing macOS from sleeping, it should be listed here. You could also tell the app to show this column in the _CPU_ tab, should you feel like it
- Using **pmset** in your favourite shell. Just invoke `pmset -g assertions`, and you should get a textual representation telling you why macOS thinks it shouldn't sleep right now

The culprit yesterday? Slack.app. Solution? Restarting the app, and tada - it no longer prevents macOS from sleeping.

Case closed.