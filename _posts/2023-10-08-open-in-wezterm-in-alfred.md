---
layout: post
date: 2023-10-08 14:00:00 UTC
title: Using Wezterm as your terminal in Alfred.app
---

If you're using [Wezterm](https://wezfurlong.org/wezterm/index.html) on macOS and haven't been able to get [Alfred.app](https://www.alfredapp.com) to use it as its preferred terminal - look no further. Open Alfred, go into its Preferences, select Features and then Terminal, and then set the Application to _Custom_. Use the below AppleScript, and you're good to go (well, you should update the shell to whatever you're using vs the hardcoded path to fish):

PS: Combine this with an Alfred workflow that listens for a hotkey, grabs the current Finder selection and passes this on to the "Browse in terminal" object, and you could do something like selecting a file in Finder and pressing Cmd+Shift+Enter, and Wezterm will open with the file's directory as its working directory.

```applescript
on alfred_script(q)
    tell application "wezterm" to activate
    do shell script "/Applications/WezTerm.app/Contents/MacOS/wezterm cli spawn -- /opt/homebrew/bin/fish -c '" & q & "; and exec fish'"
end alfred_script
```
