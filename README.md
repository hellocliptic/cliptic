# Cliptic

Finds the best moments in a video, adds captions and a hook title, and saves vertical clips. Runs in the browser. Your video never leaves your device.

Installable on Android, iPhone, Windows, Mac and Linux (it is a PWA).

## Put it on GitHub (no git needed)
1. Sign in at github.com, click **+** (top right) then **New repository**. Name it `cliptic`, keep it **Public**, click **Create repository**.
2. On the new repo page click **uploading an existing file**.
3. Unzip `cliptic-web.zip` on your computer. Open the folder and drag **everything inside it** (index.html, sw.js, manifest.webmanifest, render.yaml, the icons folder, README.md) into the GitHub page. `index.html` must be at the top level, not inside another folder.
4. Click **Commit changes**.

## Put it online with Render
1. Sign in at render.com (you can use your GitHub account).
2. Click **New +** then **Static Site**.
3. Connect GitHub, pick the `cliptic` repo.
4. Set: Build Command = leave empty (or `echo ok`), Publish Directory = `.`
5. Click **Create Static Site**. After about a minute you get a link like `https://cliptic.onrender.com`. It is HTTPS, which installing as an app requires.

## Install as an app
- **Android (Chrome):** open the link, tap **Install Cliptic as an app** (or menu, then Install app).
- **iPhone/iPad (Safari):** tap Share, then **Add to Home Screen**.
- **Windows/Mac (Chrome or Edge):** click the install icon in the address bar.

The first time, the app asks the browser to keep its storage so the downloaded speech model is not deleted. Allow it if asked.

## Speed
- Settings, Caption timing: Fast (default) times each phrase and is quicker; Precise times every word.
- Settings, Multi-threading: uses several CPU cores when the browser allows it. If transcription ever freezes, switch it Off and reload.
- Picking the spoken language in Studio is faster than auto-detect.

## Notes
- First transcription downloads the speech model once (needs internet). Later runs reuse it.
- Saved clips record in real time. Keep the tab open and in front.
- When you change files on GitHub, change the `CACHE = 'cliptic-v6'` number in sw.js so phones pick up the update.
