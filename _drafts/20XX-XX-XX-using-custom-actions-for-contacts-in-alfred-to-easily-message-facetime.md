---
layout: post
date: 2022-08-07 12:30:00 UTC
title: Actioning a contact's info using custom actions in Alfred.app
---

If you're using Alfred.app to interact with your contacts (available in Contacts.app), you can define a couple of custom actions to easily invoke FaceTime/Messages/etc. for any of your contacts.

To give you an example of what I'm talking about, here are the steps I invoke to bring up Messages.app to send a new message to my brother:

1. Invoke Alfred
2. Start typing my brother's name. "Fre" is usually enough to have Alfred show him (his name is Fredrik)
3. Select the contact (unless already the first hit), and press enter
4. Type "mob" to have Alfred select the "mobile" field
5. Press enter

Perform the above dance, and Messages.app will launch with my brother selected in the conversations list. The compose view will have focus, so it's easy to start typing straight away. Great success!

How would one go about to implement this? Easy. Open Alfred.app's preferences, navigate to _Features_ and select _Contacts_. Add a couple of custom actions, as outlined below:

```
Field: Phone
Action: Pass to URL Scheme
URL Scheme: 'tel:{query}', 'imessage:{query}', 'facetime:{query}' or 'facetime-audio:{query}'
```

Decide which one you want as default - in my case the *imessage* URL scheme -and make sure you don't set any modifiers for it. This will allow you to just press enter to have it actioned.

For the other actions, perform whatever modifiers you want to. When you're at step 4 in the flow above, just hold the various modifers you have defined and you will note 
