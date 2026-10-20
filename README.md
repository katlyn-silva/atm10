# ATM10 Ultimate Guide

An installable, offline-first companion app for **All the Mods 10**, a large Minecraft modpack. It helps players plan their progress, track what they've done and look things up without leaving the game for a wiki.

The interface is in Portuguese by default, with an English option.

<!-- Add a screenshot of the app here, e.g. ![The guide's progress screen](images/app-screenshot.png) -->

## Features

- **Progress tracking** across chapters, bosses and dimensions, with a "what to do next" recommendation
- **Calculators** for in-game resources (antimatter, compressed blocks, Powah, Mana and more)
- **3D multiblock viewer** that shows structures layer by layer, with rotate, zoom and exploded views
- **World map** – a Python script reads a real Minecraft save and the app renders it as a rotatable 3D chunk map
- **100% checklist import** – a second script scans a game instance and imports quest and advancement progress
- **Optional cloud sync** with Supabase so progress follows you across devices
- **Works offline** and can be installed to a phone or desktop like a normal app
- Favourites, notes, themes and language saved locally in the browser

## How it's built

- **Front end:** vanilla JavaScript, HTML and CSS – no framework
- **Offline support:** a service worker caches the app; a web app manifest makes it installable
- **Python tools:** `world_importer.py` reads Minecraft's `level.dat` and region (`.mca`) files; `completion_importer.py` scans a game instance for quest progress
- **Backend (optional):** Supabase Auth and Postgres, with Row Level Security so each user can only read and write their own save
- **Tests and CI:** 31 JavaScript tests (Node's built-in test runner) and 10 Python tests (`unittest`), run on every push by GitHub Actions

## Running it locally

The app is a static site. Installing it as an app needs it served over `http://`, not opened as a file.

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Run the tests:

```bash
node --test tests/*.test.js
python -m unittest discover -s tests -p "test_*.py"
```

Import a world map (optional):

```bash
python world_importer.py /path/to/world --output atm10-world-map.json --radius 16
```

Cloud sync setup is explained in [CLOUD_AND_UPDATES.md](CLOUD_AND_UPDATES.md).

## Notes

This is a fan-made tool and isn't affiliated with the All the Mods team. Mod images are loaded from the official Modrinth and CurseForge pages rather than stored in this repo.
