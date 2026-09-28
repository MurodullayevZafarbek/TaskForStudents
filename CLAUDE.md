# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A static, single-page site ("Vazifa", Uzbek for "task") that lists HTML/CSS homework assignments for students, grouped by lesson. Each assignment shows its keywords plus a reference image, with a Download button. UI text and data are in Uzbek. There is no build step, package manager, linter, or test suite: plain HTML/CSS/vanilla JS loaded directly by the browser.

## Running locally

Open `index.html` in a browser, or serve the directory (e.g. `python3 -m http.server`) so relative image paths and the Firebase ES module imports load correctly.

## Architecture

- `data.js` — the content. Each lesson is an array of `Route` objects (`dataTab1` … `dataTab9`), all collected into the global `tables` array at the bottom. Scripts are classic (non-module), so `tables` is shared via global scope with `main.js`; load order in `index.html` (`data.js` before `main.js`) matters.
- `Route(col1, col2, col3, col4, col5)`: `col1` = lesson title (header row only), `col2` = keywords, `col3` = resource path/URL. `col4` is accepted but ignored; a truthy `col5` adds the `end` class (thicker bottom border).
- `main.js` — renders one `<table>` per entry in `tables` into `.home`. **Row 0 of each array is treated as the header row** (`"<n>-dars", "Kalit so`zlar", "Resurslar"`); every other row renders as index / keywords / image thumbnail (`col3`) / Download link.
- Assets live in per-lesson folders (`1-dars/` … `8-dars/`, `n-dars/`), referenced from `data.js` with relative paths like `./3-dars/2.png`. `1-dars/logo.jpg` doubles as the favicon/OG image.
- `index.html` also includes Google Analytics (gtag) and Firebase Analytics via CDN module imports.

## Adding content

To add an assignment: drop the image into the lesson folder and append a `new Route("", "<keywords>", "./<lesson>/<file>")` to that lesson's array. To add a lesson: create a new `dataTabN` array whose first element is the header row, and add it to `tables`. Note that `col3` is always rendered as an `<img>`, so non-image links (e.g. the Figma URL in `dataTab9`) show as broken thumbnails.
