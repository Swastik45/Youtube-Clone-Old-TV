
# Youtube Legacy Hardware — Alternate

A small static demo site that reproduces a legacy YouTube-like layout and navigation for local testing and experimentation.

## Overview

This repository contains a lightweight static site (HTML, CSS, and JS) demonstrating an alternate UI for browsing playlists and videos.

## Features

- Simple, dependency-free static HTML pages
- Playlist and video views
- Minimal JavaScript in `shared.js` for navigation

## File map

- [index.html](index.html) — Landing / home view
- [channel.html](channel.html) — Channel-style listing
- [playlits.html](playlits.html) — Playlist index (note: filename as in repo)
- [video.html](video.html) — Video playback / details page
- [search.html](search.html) — Search UI
- [styles.css](styles.css) — Site styles
- [shared.js](shared.js) — Site behavior and navigation
- [LICENSE](LICENSE) — License

## Usage

Serve the folder with any static server and open `index.html` in your browser. Example using Python 3 built-in server:

```bash
cd Youtube-Legacy-Hardware-Alternate
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Development

- Edit the HTML/CSS/JS files directly. No build step required.
- Use a live-reload server (e.g. `live-server`) for quicker iteration.

## License

See [LICENSE](LICENSE) for details.

---

If you want, I can commit this change and add a short demo GIF or screenshots. What would you like next?

