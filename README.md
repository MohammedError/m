# Adaptive UI Research Defense — Web Presentation

A static, browser-based academic defense presentation built from the thesis **“The Impact of Adaptive User Interfaces on Player Retention in Mobile Games”** (Anas Academy, July 2026).

## Project structure

```text
adaptive-ui-defense-presentation/
├── index.html
├── style.css
├── script.js
├── assets/
└── README.md
```

No build step and no framework are required.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server.

Example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets/` folder.
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select the branch containing the project and `/ (root)`.
6. Save. GitHub Pages will publish the presentation.

## Controls

- `ArrowRight` / `ArrowDown` / `Space` → Next
- `ArrowLeft` / `ArrowUp` → Previous
- `Home` → First slide
- `End` → Last slide
- `F` → Fullscreen
- `Esc` → Exit fullscreen / close notes
- `N` → Toggle speaker notes

Mouse/touch navigation is also supported.

## Presentation design choices

The deck uses:
- 22 browser-native slides
- dark, premium academic visual system
- subtle transitions and no dependency on a presentation framework
- responsive layout for laptop/projector/large displays
- slide counter and progress bar
- hidden presenter notes that can be toggled during rehearsal
- recreated diagrams/visuals derived only from the thesis content

## Content fidelity

The thesis is treated as the source of truth. The presentation intentionally avoids invented numerical charts because the thesis text available in the source does not provide the underlying numeric values. Result slides therefore use qualitative comparisons where the thesis reports directional improvement.

The thesis explicitly distinguishes the adaptive engine from AI/ML: it uses predefined if–then rules. The presentation preserves that terminology and distinction.
