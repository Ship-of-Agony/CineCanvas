<div align="center">

# CineCanvas

**The ultimate 21:9 ultrawide media extension engineered exclusively for YouTube on Mozilla Firefox.**

[![Version](https://img.shields.io/badge/version-0.4.2-blue.svg)](#whats-new-in-v042)
[![Platform](https://img.shields.io/badge/platform-Mozilla%20Firefox-orange.svg)](#installation)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Privacy](https://img.shields.io/badge/tracking-none-brightgreen.svg)](#privacy--security)

Get the most out of your 21:9 ultrawide display on YouTube. CineCanvas delivers smart aspect ratio scaling, soft edge blending, live ambient glow, customizable side frames, and custom wallpapers. Eliminate black bars, scale videos dynamically without distortion, and enjoy hardware-accelerated ambient lighting with zero overhead.


## What's New in v0.4.2

- **In-Player Sliders:** Added quick-access adjustment sliders (wing dimming, aura blur, edge blend, outer fade) directly into the embedded on-screen player menu without needing to open the browser menu.
- **Multi-Language Support:** Added automatic language detection with 10 fully localized languages (English, German, French, Spanish, Italian, Portuguese, Dutch, Polish, Czech, and Russian). English serves as the default fallback.
- **Code & Security:** Refactored DOM rendering to eliminate unsafe assignments and ensure full compliance with Mozilla's latest extension security policies.
- **Performance:** Fine-tuned player controls, MutationObserver efficiency, and ambient aura canvas rendering.

---

## Overview

**CineCanvas** is specifically designed and optimized for a flawless ultrawide viewing experience on YouTube. Standard 16:9 videos and classic 4:3 content often leave massive pillarbox bars on the sides. CineCanvas restores full visual immersion through real-time aspect ratio fitting, smart letterbox detection, and customizable ambient light projection — processed entirely on your local GPU via hardware-accelerated transforms. 

Seamlessly works with standard YouTube desktop playback, theater mode, and full-screen view. Access all mode selections, toggles, and adjustment sliders straight from the embedded player button.

---

## Key Features

### Multiple Aspect Ratio Modes
- **21:9 Crop:** Zooms seamlessly to completely fill your 21:9 ultrawide monitor without distorting the picture.
- **21:9 Stretch:** Expands 16:9 videos horizontally to cover the entire panel.
- **Original (Off):** Keeps native aspect ratios untouched.

### Live Video Ambilight & Illumination
- **Vivid Ambilight:** Maximum luminance and rich, saturated dynamic glow for full ultrawide immersion.
- **Soft Ambient Glow:** Milky, diffused background projection reflecting live colors across the side wings.
- **Cinematic Shadow:** Subtle edge darkening paired with smooth ambient falloff.
- **Granular Background Blur Slider:** Dedicated slider (0px to 80px) accessible directly in the player and popup, ranging from mirror-sharp reflections to deeply blurred velvety auras.

### Advanced Edge Blending (GPU-Powered CSS Masking)
- **Seamless Inward Fade:** Dedicated control (0 to 50) to soften harsh video borders. At 0, edges stay razor-sharp; higher values blend the video naturally into the ambient aura or background.
- **Seamless Bezel Transition:** Smooth slider (0% to 100%) fading outer monitor edges into deep black for a clean transition into physical screen bezels.
- **Zero Filter Bottlenecks:** Utilizes native linear gradient masks directly on the `<video>` element, avoiding expensive filter bottlenecks.

### Cinema Side Wings & Custom Frames
- **Customizable Wings:** Replace plain black pillarbox bars with stylized official YouTube badges, pre-saved theater frames (Frame 1 to 5), or upload your own custom high-resolution wallpaper.
- **Full Dimming Slider:** Adjust background brightness from 100% all the way down to true solid black (0%).
- **Independent Presets & Profiles:** Slider values for static frames and dynamic Ambilight operate independently — fine-tuning one does not overwrite the other.
- **Dynamic Theme Switching:** Supports automatic or manual Dark/Light mode switching.

### Smart Auto-Crop & Bar Detection
- **Intelligent Scanning:** Scans for black letterbox and pillarbox bars (including hardcoded 4:3 content inside 16:9 containers) and adapts video scaling dynamically.
- **Automatic Boundary Correction:** Automatically detects hardcoded black bars in 4:3 streams and positions the soft blend precisely where visible video begins.

---

## Keyboard Shortcuts & OSD

Control playback enhancements instantly without opening the extension popup. Subtle HUD badges provide immediate visual feedback on keypresses.

| Shortcut | Action |
| :--- | :--- |
| `Alt + C` | Cycle through video and ambilight modes |
| `Alt + W` | Toggle side wing overlays on/off |
| `Alt + L` | Switch wing theme between Dark and Light mode |
| `Alt + A` | Enable or disable automatic letterbox detection (Auto-Crop) |

---

## Privacy & Security

- **Completely Free:** No paywalls, no subscriptions, no ads.
- **Zero Data Collection:** No analytics, no telemetry, no external server requests (`data_collection_permissions: none`).
- **100% Local Processing:** Color extraction, canvas rendering, and custom background storage operate strictly client-side within your browser.

This project is licensed under the GNU General Public License v3.0.

---

## Feature Requests & Feedback

If you have requests for additional features or enhancements, please reach out via email to **ship.of.agony.labs[at]gmail.com**.

---

## Installation Add-on (Firefox)

Download Add-On:

   **[CineCanvas](https://addons.mozilla.org/de/firefox/addon/cinecanvas/versions/)**
