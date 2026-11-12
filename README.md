# Ai-aac-phonics-app

# GazeVoice AAC: Dansk & English Phonics Eye-Tracker Prototype

An interactive **Augmentative and Alternative Communication (AAC)** web prototype designed for special education schools and speech therapists. It enables educators and therapists to evaluate and demonstrate **eye-gaze communication without requiring physical eye-tracking hardware** by using the mouse cursor as a simulated gaze fixation point.

---

## 🇩🇰 Dansk Understøttelse (Danish Language Support)

The prototype now natively supports **Dansk (Danish)** alongside English:

1. **Full 29-Letter Danish Alphabet:** Includes the three Danish vowels **Æ**, **Ø**, and **Å**.
2. **Danish Phonics Sounds (*Bogstavlyde*):**
   * **Default (computer voice):** browser speech engines spell out vowel-less text with letter names (`j` → "jod", `ss` → "æs æs"). To avoid that, each consonant is spoken as a short syllable with "ø" (J → "jø", S → "sø", M → "mø"). "ø" is used because "be", "de", "pe" etc. are the Danish letter *names*. The strings live in `danishPhonics` / `danishBlends` in `index.html` and are easy to tweak.
   * **🎙️ Record your own sounds (*Optag egne lyde*):** for true phonemes with no vowel at all, open **Indstillinger → Optag lyde** and record each sound with the microphone (max 3 s, silence is trimmed automatically). A recording replaces the computer voice for that letter or blend, including in *Lydord*. Recordings are stored in the browser (IndexedDB) on that device only. Recording requires `https://` (e.g. GitHub Pages) or a local file opened in Chrome/Edge.
     * **A**: /æ/ as in *Abe* 🐒
     * **Æ**: /ɛː/ as in *Æble* 🍎
     * **Ø**: /øː/ as in *Øje* 👁️
     * **Å**: /ɔː/ as in *Ål* 🐟
     * **R**: the Danish uvular /ʁ/ as in *Ræv* 🦊
3. **Danish Digraph & Blend Blending (*Lydsammenfald & Diftonger*):**
   * **Stumt H:** `H` + `V` flows into `/v/` (*hval*, *hvad* 🐋) and `H` + `J` flows into `/j/` (*hjul*, *hjerte* ❤️).
   * **Diphthongs:** `E` + `J` flows into `/aɪ/` (*leg*, *vej* 🎮), `Ø` + `J` into `/ʌɪ/` (*tøj*, *øje* 👕).
   * **Consonant clusters:** `S` + `K` (*skib* 🚢), `S` + `T` (*stol* 🪑), `S` + `P` (*spise* 🍽️).
4. **Danish Core Quick Words (*Kerneord*):**
   * Pinned at the top: `JA 👍`, `NEJ 👎`, `HJÆLP 🙋`, `TAK 🙏`, `STOP 🛑`, `MERE ➕`, `JEG VIL 💬`, `VAND 💧`.
5. **Danish Word Predictions:**
   * Suggests words like *KAT*, *HUND*, *SOL*, *IS*, *BIL*, *TOG*, *ÆBLE*, *ØJE*, *MAD*, *HUS*.
6. **Automatic Danish Voice Detection:**
   * Automatically pairs with native Danish system voices (`da-DK`), including *Sara*, *Magnus*, and *Google dansk*.

---

## 🔊 How to Download High-Quality Danish Voices (Free)

Modern operating systems have built-in Danish text-to-speech. To get the highest quality, most natural pediatric/teacher voice:

### On macOS / iPad / iPhone:
1. Open **System Settings** (Systemindstillinger).
2. Go to **Accessibility** (Tilgængelighed) > **Spoken Content** (Oplæst indhold).
3. Under **System Voice** (Systemstemme), click **Manage Voices...** (Administrer stemmer...).
4. Scroll to **Danish (Dansk)**.
5. Select and download **"Sara (Enhanced / Forbedret)"** or **"Magnus (Enhanced / Forbedret)"**.
6. That's it! The browser will automatically use the enhanced Danish voice with zero extra configuration.

### On Windows 10/11:
1. Go to **Settings** > **Time & Language** > **Speech**.
2. Under **Manage Voices**, click **Add voices** > choose **Danish (Denmark)** > install *Microsoft Helle*.

### On Google Chrome / Chromebook:
* Google Chrome includes the cloud-backed voice **"Google dansk"** by default out of the box.

---

## 🌟 Core Accessibility Features

1. **Mouse-as-Gaze Simulation:** Moving the mouse simulates where the child is looking, with a glowing reticle and smooth radial dwell timer.
2. **💤 Eye Rest & Thinking Zone (*Hvile- & Tænkezone*):** A dedicated safe zone where dwell is 100% disabled so the child can rest their eyes and think without triggering buttons.
3. **␣ Accessible Spacebar (*Mellemrum*):** Build multi-word sentences and phrases.
4. **⚡ Pinned Customizable Quick Words:** Dwell on any quick word to speak it instantly. Teachers can customize the list with the **"Rediger Kerneord"** button.
5. **High-Contrast Themes:** Dark Navy, High Contrast Yellow/Black (CVI standard), Crisp Light, and Sensory Calm Mint.
6. **Instant Language Switcher:** Switch between 🇩🇰 Dansk and 🇬🇧 English in real time via the top bar.

---

## 🚀 How to Run & Deploy

The app is a **Progressive Web App (PWA)** hosted on GitHub Pages:

**https://aiethicsjonas-cloud.github.io/Ai-aac-phonics-app/**

Every push to `main` updates the live site within a minute or two. Installed apps pick up the new version the next time they are opened.

### 📱 Install on a phone or tablet
* **iPhone / iPad (Safari):** open the link → tap **Share** → **Add to Home Screen** (*Føj til hjemmeskærm*).
* **Android (Chrome):** open the link → tap **Install app**, or ⋮ menu → **Add to Home screen**.
* **Windows / Mac (Chrome or Edge):** click the install icon in the address bar.

After the first visit the app works **offline**. Note that Android needs a Danish voice installed under *Settings → Google speech services* for Danish speech.

### Run locally
Open `index.html` in a browser. Offline mode and installing only work when the app is served over `https://` (or `localhost`).
