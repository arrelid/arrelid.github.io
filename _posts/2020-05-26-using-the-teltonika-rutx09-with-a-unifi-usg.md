---
layout: post
date: 2020-05-26 09:30:00 UTC
title: Using the Teltonika RUTX09 with a UniFi USG
---

Like many others, I’ve been working from home ever since COVID-19 took a solid grip of the world. While I’m fairly used to remote work, I’ve never done it for longer stretches. Days? Sure. Weeks? Stretching it. Months? Not so much.

Aside from missing the coffee machine and my coworkers, the home office setup has turned out to be pretty manageable. There’s just one thing that’s been nagging me - the video conference calls I’ve been on have all been quite choppy, and while this is fine for the occasional call, it isn’t as fun when you’re in multiple calls every day.

The culprit seems to be our apartment’s internet connection. 100/10 Mbps handles movie streaming and the occasional gaming session just fine, but when you throw some video conferencing into the mix it simply can’t keep up.

So... we need faster upload speeds, right? Problem? The ISP serving our apartment doesn’t have any reasonable upgrade paths :/

With this in mind, I started to look into mobile broadband options. Sweden has some pretty solid 4G infrastructure in place, and it’s not unusual to get download speeds around 250-280 Mbps combined with upload speeds hovering around 40-50 Mbps - at least if you’re on 4G LTE. Promising, right?

Since our cable modem is hooked up to a Ubiquiti UniFi system (router, switch and two APs serves the vast majority of our apartment with blazingly fast _internal_ connection speeds), we should - in theory - be able to replace its WAN (our crappy cable modem) with a 4G LTE router and viola - problem solved? Turns out that theory can be turned into practice without too much headache \o/ Here’s a rough step-by-step guide of what I did.

First, you’ll need to get your hands on a mobile broadband plan and a corresponding SIM. Since I was already paying my cellular provider for an extra data SIM, I decided to use that one. With a data SIM in my hand, I wanted to understand if it had a class A private IP address or a public one - remember that we’re throwing a proper router into the mix later, and we don’t want to end up with a double NAT setup if we can avoid it. Turned out I had a private address, but my cellular provider allowed me to turn it into a public one - self-serve style using their online customer portal <3.

With a data SIM ready, you’ll need a capable router. I opted for a [Teltonika RUTX09](https://teltonika-networks.com/product/rutx09/), which comes with three (3!) 1000MB/s ethernet ports and full support for 4G LTE Cat 6 speeds - 300/50 Mbps. Finally, it supports bridge mode which disables most of its internal routing services, instead allowing it to simply pass on its public WAN IP to a router downstream. Again - bye-bye double NAT.

Setting the RUTX09 to operate in bridge mode wasn’t too complicated - the only thing you might want to keep in mind is that you’ll want to figure out what MTU/MSS settings your mobile ISP enforces before you set it to bridge mode - doing so will make it simple to set the same ones for the USG later.

So, what steps are we looking at?

1. Insert your SIM into the router
2. Hook up your computer’s ethernet port to LAN1 on the router. Make sure you’ve got your adapter set to DHCP mode.
3. Turn on the router and login through its web interface - check the manual for details on its IP, or check your network adapter to understand what address the router can be reached at.
5. Bridging wasn’t present in some of the earlier firmware versions, so make sure you’ve got a [recent version](https://wiki.teltonika-networks.com/view/RUTX09_Firmware_Downloads) installed or you might not have the option to turn on bridge mode.
6. Factory reset the router to make sure it wipes any existing user settings. Shouldn’t be needed, but hey...
6. Enable the advanced (UI) mode by clicking on the “Basic” label at the top of the status overview.
7. Now first you want to make sure that WAN failover isn’t enabled. You do so in `Network → Failover`. This should not be the case for a newly reset router, but hey...
8. Optional: if you _do_ have a WAN hooked up to the WAN port of the RUTX09, you’ll need to make sure that the interface that corresponds to your mobile SIM is configured to be the primary network interface. Do so in  `Network —> Interfaces`. On the version of RutOS I’m on, you can simply drag and drop the interfaces to re-order their priority. Don’t forget to save/apply your changes!
9. Reminder: Now before you enable bridge mode, try to figure out which [MTU/MSS settings](http://speedguide.net/analyzer.php) your mobile ISP enforces. Save these for later (most notably, the MSS value).
10. In `Network → Interfaces`, press the configuration button for your mobile interface and select `Mode: Bridge` in the general tab section.
11. Optional: If you’ve got more than one device hooked up to the RUTX09, you’ll need to specify the MAC address of the device that the RUTX09 should pass on its public WAN to. Save/apply, and wait for the router apply the new configuration.
11. Disconnect your computer from the router, and connect LAN1 on the RUTX09 to the WAN port on the USG.

In a perfect world, you’re done now.

On the other hand... if you’re having problems accessing resources with your new and shiny setup - like TLS handshakes failing - you might need to adjust the USG’s MSS settings.

The MSS value can be setup by [in `config.gateway.json` on the UniFi controller](https://help.ui.com/hc/en-us/articles/215458888-UniFi-USG-Advanced-Configuration-Using-config-gateway-json). How?

To figure out what the relevant JSON blob should look like, SSH to the USG and configure its MSS value manually. There’s actually a mss-clamp value applied to a few selected interfaces already (like PPPoE), but we need to be applied for any outgoing connection, regardless of protocol.

I’m sure there’s an easier way to achieve this, but setting the same MSS value for all interfaces is simple and does the trick.

```
configure
set firewall options mss-clamp interface-type all
set firewall options mss-clamp mss 1400
commit
save
exit
```

Obviously, you’ll need to replace the MSS value with whatever value your ISP enforces.

Then invoke...

```
mca-ctrl -t dump-cfg
```

Check the output to figure out what the relevant JSON blob that the controller needs look like. Here’s my version.

```
{
	"firewall": {
		"options": {
			"mss-clamp": {
				"interface-type": [
					"all"
				],
				"mss": "1400"
			}
		}
	}
}
```

Copy this section to your `config.gateway.json` (i.e. deploy it to your controller), and force a provision of the USG. Once it’s up and running again, SSH to it and check that the new configuration has been applied.

```
mca-ctrl -t dump-cfg
```


Look out for the mss-clamp section in the JSON output - if it’s present, you’re good.

And that’s all folk. You’re now enjoying blazingly fast internet  over the air. Enjoy 👍!
