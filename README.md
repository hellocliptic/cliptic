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

## Update 7
- Videos, results, saved clips and checkpoints are stored in the browser (IndexedDB). Refresh keeps everything; unfinished analysis resumes.
- Clips tab is a Library of videos; open one to see progress or its clips. Bottom dock navigation.
- Templates: Clip gaming and streams (webcam finder + confirm box), Clip long videos, Auto-edit talking video, Captions.
- Local AI titles (LaMini-Flan-T5 via Transformers.js), editable, with regenerate. Scores and "signals" are content-quality hints, not view predictions.
- To update on GitHub: upload the changed files (index.html, sw.js, README.md) over the old ones; Render redeploys.

## Update 8
- Options sheet after choosing a video (length range, clipping mode, clip length, auto headline, language) with the ownership notice.
- Paste a link to a direct video file you own (MP4/WebM). YouTube and social-site links are refused on purpose.
- Clip cards show tilted previews of the real clip.
- Skips music and singing (estimate from the sound; Settings > Speech only).
- Webcam finder: pick another frame if the webcam is not visible, then search that frame.
- AI titles can also look at two frames per clip (Settings > AI titles > Text + frames).
- Topic-aware clip boundaries; audio decoded at 16 kHz; fewer frame samples.

## Update 9 – redesign pass
- Bottom dock has a sliding pill indicator; screens slide in direction-aware (respects "reduce motion").
- Busy dot is now a small badge on the icon corner instead of sitting beside it.
- Status row is rounded icon pills (Speech, CPU/GPU, On-device).
- Options sheet is frosted/translucent (shows the page behind it), no green; toggles are neutral.
- Subtitle styles are live preview cards (rendered with the real caption renderer) instead of text buttons.
- Segmented controls have a sliding thumb; buttons, panels and inputs are rounder and more consistent.
- Fixed a horizontal-overflow bug that the new style row would otherwise cause.
Tested in a desktop Chromium at phone size only, not on a real phone. Re-upload `index.html`, `sw.js`, `README.md`; reload twice so the new service worker takes over.

## Update 10
- Home page no longer lists templates. After you pick a video, the options sheet opens with "Choose a template" cards at the top.
- Segmented buttons no longer overflow: long labels wrap inside their button.
- Dock "Clips" icon is now scissors.
- Subtitle style previews use a frame of the current video as their background.
- The CPU/GPU pill follows the Settings choice (icon and label), and changing it makes the speech model reload with that device. After a model loads, the pill shows the device actually used.
- The page behind the options sheet and menus no longer scrolls while they are open.
Tested in a desktop Chromium at phone size, not on a real phone.

## Update 13
- Logo: your new logo, static (no splash, no glow). Icons in `icons/` were replaced in update 11; re-upload the folder if you have not.
- Processing screen: big percentage that rolls digit by digit, a time estimate ("About 2 minutes left", shown after a few seconds of progress), a smooth progress bar, and a stage list with spinner and animated check marks. The Library numbers (clips, top score, words) count up.
- 9 new subtitle styles (17 total): Neon, Sunset, Comic, Typewriter, Wave, Outline, Blue box, Retro, Reveal. The picker scrolls sideways.
- New "Visual FX" control in the editor: Clean, Punchy (camera shake and flash on emphasis moments) and Cinematic (slow push-in, vignette, film grain, fades). Stream clips default to Punchy. Saved clips use the same renderer.
- Speed: the speech model starts loading as soon as the options sheet opens (while you choose options) instead of after you press the button; screen transitions are shorter. Saving a clip still runs in real time (a 30 s clip takes about 30 s).
Tested in a desktop Chromium at phone size, not on a real phone.

## Update 14
- Desktop and tablet layouts (left rail on wide screens, 2-column clips and editor).
- Smooth reveal-on-scroll and hover animations; reduced-motion respected.
- On-device analysis card (loudness timeline, pace, scene cuts, face visibility, insights). Rule-based, not a cloud AI.
- Follow-face framing using MediaPipe (loads about 10 MB once from a CDN).
- Many caption fonts (Google Fonts, need internet the first time).
- Zoom hook, Post-style hook card (name, handle and photo set in Settings).
- Voice Clear/Studio (EQ, compression, limiter; not noise removal) and generated whoosh/pop/boom sounds.
- Keyboard shortcuts: Space, left/right arrows in the editor.
- Service worker cache cliptic-v14. Reload the app twice after uploading.
