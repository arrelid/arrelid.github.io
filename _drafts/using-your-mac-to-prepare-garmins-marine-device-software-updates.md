My dad recently purchased a Garmin echoMAP CHIRP 72sv. Checking its software version, I realized there was a newer version available over at [Garmin's support website](https://www8.garmin.com/support/download_details.jsp?id=4749). The problem? Garmin seems to think people don't know how to copy files to an SD card manually, hence embedding all the necessary files within a Windows executable designed to do the "hard work" for you. There has to be a fix for that, right?

# Instructions
You will need to install 7zip, download the Garmin software, decompress the software and finally copy a directory onto the SD card. It's pretty simple. I've tested it on a Garmin 740s and it worked as expected.

## Install 7z on your OS

### OS X
```
brew install p7zip
```
### Ubuntu
```
sudo apt-get install p7zip-full
```

## Download the Garmin update
Garmin uses 7z file compression. The downloaded file has the extension `.exe`. Change this to `.zip` once you receive it.

## Decompress the archive
- Place the `.zip` file in it's own directory/folder.
- Open a terminal and cd into that directory
- Issue command `7z x filename.zip` (be sure to change the filename to the downloaded file)

## Copy to the SD Card
There will be a folder called `Root`. Open that folder and drag the Garmin folder onto the SD card.

Tadaaaa! You just installed a Garmin update without a PC. Brilliant.
