# Meme-Display-Extension
Mozilla Firefox Extension

Displays random meme everytime when the extension is clicked.

## Installing an example

Some examples work only on specific domains or pages. Details of any 
restrictions are provided in each example's README file. None of the 
examples work in private browsing windows by default, see 
[Extensions in Private Browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows) 
for details.

To run an example extension:

1. Open Firefox and load the `about:debugging` page. Click 
   [Load Temporary Add-on](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
   and select the `manifest.json` file within the folder of an example extension.
   Here is a [video](https://www.youtube.com/watch?v=cer9EUKegG4)
   that demonstrates how to do this.
2. Install the
   [web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext)
   tool. At the command line, open the example extension's folder and type
   `web-ext run`. This launches Firefox and installs the extension automatically.
   This tool provides some additional development features, such as
   [automatic reloading](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext#Automatic_extension_reloading).
