# Ai-aac-phonics-app

# GazeVoice AAC: Dansk & English Phonics Eye-Tracker Prototype

An interactive **Augmentative and Alternative Communication (AAC)** web prototype designed for special education schools and speech therapists. It enables educators and therapists to evaluate and demonstrate **eye-gaze communication without requiring physical eye-tracking hardware** by using the mouse cursor as a simulated gaze fixation point.

---

## 🇩🇰 Dansk Understøttelse (Danish Language Support)

The prototype now natively supports **Dansk (Danish)** alongside English:

1. **Full 29-Letter Danish Alphabet:** Includes the three Danish vowels **Æ**, **Ø**, and **Å**.
2. **Danish Phonics Sounds (*Bogstavlyde*):**
   * Uses **pure Danish phonemes** (*rene bogstavlyde*) with **zero trailing "u" sounds**:
     * Stops/plosives (**B**, **D**, **G**, **K**, **P**, **T**) are crisp and clipped without any English-style "uh" / "u" suffix.
     * Continuants (**S**, **F**, **M**, **N**, **L**, **R**, **V**) produce pure sibilant, hum, and fricative sounds.
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

Open [index.html](file:///Users/jonas/.gemini/antigravity/scratch/aac-phonics-app/index.html) in your browser, or push to GitHub Pages to share with schools and clinics worldwide!
