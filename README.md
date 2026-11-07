<div align="center">

# CineCanvas

**The ultimate 21:9 ultrawide media extension built exclusively for Mozilla Firefox.**

[![Version](https://img.shields.io/badge/version-0.3.2-blue.svg)](#whats-new-in-v032)
[![Platform](https://img.shields.io/badge/platform-Mozilla%20Firefox-orange.svg)](#installation)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Privacy](https://img.shields.io/badge/tracking-none-brightgreen.svg)](#privacy--security)

Eliminate black bars, scale videos dynamically without distortion, and enjoy hardware-accelerated ambient lighting with zero overhead.

</div>

---

## What's New in v0.3.2

* **In-Player Sliders:** Added quick-access adjustment sliders (wing dimming, aura blur, edge blend, outer fade) directly into the on-screen player menu.
* **Multi-Language Support:** Added localizations for English, German, Polish, Czech, French, Dutch, Italian, Spanish, Russian, and Portuguese.
* **Code & Security:** Refactored DOM rendering to eliminate unsafe assignments and ensure full compliance with Mozilla's latest extension security policies.
* **Performance:** Fine-tuned player controls, MutationObserver efficiency, and ambient aura canvas rendering.

---

## Overview

**CineCanvas** is engineered specifically for 21:9 ultrawide monitors running on Mozilla Firefox. Standard 16:9 videos and classic 4:3 content often leave massive pillarbox bars on the sides. CineCanvas restores full visual immersion through real-time aspect ratio fitting, smart letterbox detection, and customizable ambient light projection—processed entirely on your local GPU via hardware-accelerated transforms.

---

## Key Features

### Multiple Aspect Ratio Modes
* **21:9 Crop:** Seamlessly zooms in to completely fill your 21:9 ultrawide display without distorting the picture.
* **21:9 Stretch:** Expands 16:9 content horizontally to cover the full panel.
* **Original (Off):** Leaves the native aspect ratio untouched.

### Live Video Ambilight & Illumination
* **Soft Ambient Glow:** A milky, diffused background projection reflecting live video colors across the side areas.
* **Vivid Ambilight:** Maximum luminance and saturated dynamic glow for complete visual immersion.
* **Cinematic Shadow:** Subtle edge darkening with a smooth, atmospheric falloff.
* **Soft Edge Feathering:** Retains full video sharpness while softly blending outer borders into the canvas—eliminating harsh cut-off edges.

### Smart Auto-Crop
* Scans frames automatically for black letterbox and pillarbox bars (including hardcoded 4:3 bands in 16:9 containers) and adapts the scaling mode dynamically without manual intervention.

### Branded Pillarbox Wings
* When viewing in native aspect ratio, replace plain black side bars with subtle, copyright-free vector badges tailored to your streaming service.
* Fully supports automatic Dark/Light theme switching and can be toggled on or off at any time.

### Universal Streaming Compatibility
* Engineered with non-invasive display pipelines compatible with **YouTube**, and custom embedded HTML5 players.

---

## Keyboard Shortcuts & OSD

Control playback enhancements instantly without opening the extension popup:

| Shortcut | Action |
| :--- | :--- |
| `Alt + C` | Cycle through video modes (Crop, Stretch, Ambilight, Off) |
| `Alt + W` | Toggle side wing overlays on/off |
| `Alt + L` | Switch wing theme between Dark and Light mode |
| `Alt + A` | Enable / disable automatic letterbox detection (Auto-Crop) |

*All key actions display an instant, non-intrusive On-Screen Display (OSD) badge on the player.*

---

## Privacy & Security

* **Zero Tracking:** No telemetry, analytics, cookies, or external network requests.
* **100% Client-Side:** All color sampling, scaling transforms, and DOM adjustments execute entirely on your machine.
* **Free & Open Source:** Licensed under the GNU General Public License v3.0.

---

## Installation (Firefox Temporary Add-on)

1. Clone or download this repository as a `.zip` file:
   ```bash
   git clone [https://github.com/Ship-of-Agony/CineCanvas.git](https://github.com/Ship-of-Agony/CineCanvas.git)
