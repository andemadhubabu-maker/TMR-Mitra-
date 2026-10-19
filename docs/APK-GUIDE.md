# Make the Android app (APK)

The app is a web app. The APK is a thin Android wrapper (a "Trusted Web Activity") that opens your published link in full screen, with no address bar, and works offline through the same service worker. It keeps every feature of the Chrome version (share, clipboard, GPS, voice, photos, PDF download). A plain WebView wrapper would break several of those, so use the method below.

**Needs:** the app published on GitHub Pages (see INSTALL.md), Chrome installed on the phone, and a free account-free tool, PWABuilder.

## Step 1. Publish and keep a stable link
1. Upload all files of this package to your GitHub repository and turn on Pages (INSTALL.md). Example link: `https://YOURNAME.github.io/tmr-mitra/`
2. Open the link in Chrome on a phone, install it once and check ⚙ → *Check now* says offline copy found.

## Step 2. Create the APK with PWABuilder (no coding)
1. Open **pwabuilder.com** and paste your link. Wait for the report.
2. Choose **Package for stores → Android**.
3. Fill in:
   - **Package ID:** `in.tmrmitra.app` (any unique name; never change it later)
   - **App name:** TMR Mitra, **Version:** 1.0.64 (raise it each new APK)
   - **Signing key:** *Create new*. **Enable "Location delegation"** (needed for Add GPS to message).
4. Download the zip. It contains the signed **APK** (install on phones), an **AAB** (for Google Play), `signing.keystore` and `signing-key-info.txt`, and `assetlinks.json`.
5. **Keep the keystore and its passwords safe** (copy to two places). Without them you cannot publish an update under the same app.

## Step 3. Remove the address bar (verify the link) - important
Android shows a thin address bar until the app is verified as belonging to your site.
1. Open the `assetlinks.json` from the PWABuilder zip, or use `docs/assetlinks.json.example` and paste the **SHA-256 fingerprint** from `signing-key-info.txt`.
2. For a project link like `https://YOURNAME.github.io/tmr-mitra/` the file must be served from the **top of the domain**: `https://YOURNAME.github.io/.well-known/assetlinks.json`.
   - Create a second GitHub repository named exactly `YOURNAME.github.io`.
   - Add an empty file `.nojekyll` and the folder `.well-known` with `assetlinks.json` inside. Turn on Pages for it.
3. Open that address in a browser. If the JSON shows, verification will work. Uninstall and reinstall the APK. With a custom domain, put the file at `https://yourdomain/.well-known/assetlinks.json` instead.

## Step 4. Install and share
- Copy the APK to the phone (WhatsApp, Drive, cable). Allow *Install unknown apps* for that app. Android may show a "Play Protect" warning for apps outside the Play Store. Choose *Install anyway*.
- Open once with internet, then it works offline.
- **Updating the app:** upload new files to GitHub (as in INSTALL.md). The APK opens the website, so everyone gets the update; you do **not** need a new APK. Make a new APK only if you change the package settings, icon or name.

## Optional: Google Play
Needs a developer account (one-time fee) and the **AAB** file. Use `PRIVACY.md` as the privacy policy page (publish it on Pages), state clearly that this is *not an official Railway tool*, and expect a review.

## Test list before sharing
1. App opens full screen with no address bar. 2. Airplane mode: opens and works. 3. Copy message and Share to WhatsApp. 4. Add GPS to message (allow location). 5. Photo stamp and PDF download/share. 6. Backup and restore (data is kept when the app is updated). 7. Speak (voice) in quick entry. If voice does not work in the app, use Chrome install instead for voice.

## For a developer (alternative)
`npm i -g @bubblewrap/cli`, then `bubblewrap init --manifest=https://YOURNAME.github.io/tmr-mitra/manifest.json` and `bubblewrap build`. It needs JDK 17 and the Android SDK.
