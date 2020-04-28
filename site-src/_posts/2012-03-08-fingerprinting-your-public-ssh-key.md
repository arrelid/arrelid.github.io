---
layout: post
redirect_from:
 - /post/18942416614/fingerprinting-your-public-ssh-key
tumblr_id: 18942416614
date: 2012-03-08 09:12:53 UTC
title: Fingerprinting your public SSH key
---

In the light of the recent [GitHub public key security vulnerability](https://github.com/blog/1068-public-key-security-vulnerability-and-mitigation), you might want to figure out what the fingerprint of your public SSH key looks like. Why? GitHub have disabled all public keys (associated with your account) until you manually audit them, meaning you need to verify the name and fingerprint of each and every public key listed on your [GitHub SSH key settings page](https://github.com/settings/ssh) again.

So, how do you produce the fingerprint for your public SSH key?

```bash
$ ssh-keygen -l -f ~/.ssh/id_rsa.pub
2048 d2:18:b4:65:8b:87:4f:10:7c:ef:2b:9e:74:96:b4:02
```

Piece of cake, aight?
