# Tabo Geelen — Portfolio Website

## Folder structure

```
tabo-site/
│
├── index.html              ← The website shell (don't touch unless changing layout)
│
├── css/
│   └── style.css           ← All visual styling (colours, fonts, spacing)
│
├── js/
│   ├── site-data.js        ← Your name, bio, expertise cards, contact details
│   ├── projects-data.js    ← All project content (the main file you'll edit)
│   └── render.js           ← Builds the page from data (don't touch)
│
└── assets/
    ├── hero.jpg            ← Hero section background photo
    ├── portrait.jpg        ← Your portrait photo (about section)
    └── projects/
        ├── coffee/         ← Photos for the Mbinga coffee project
        ├── bsf/            ← Photos for the BSF project
        ├── suriname/       ← Photos for the Suriname project
        └── ecuador/        ← Photos for the Ecuador project
```

---

## How to add a new project

1. Open `js/projects-data.js`
2. Copy the block for any existing project (from `{` to its matching `},`)
3. Paste it after the last project in the array
4. Change the `id` to something unique like `"kenya"` or `"digital-mapping"`
5. Fill in all the fields (title, bullets, sections, etc.)
6. Create a folder: `assets/projects/YOUR-ID/`
7. Drop photos in that folder and update the `src` fields

---

## How to add a photo to a project

1. Put the photo file in `assets/projects/PROJECT-ID/`
   - Use web-friendly formats: `.jpg` or `.webp`
   - Keep file sizes under 500 KB for fast loading
2. Open `js/projects-data.js`
3. Find the project and update the `coverPhoto` or `photos` fields:
   ```js
   coverPhoto: "assets/projects/coffee/cover.jpg",
   photos: [
     { src: "assets/projects/coffee/training.jpg", caption: "Farmer training" },
     { src: "assets/projects/coffee/testplot.jpg", caption: "Test plot" },
   ]
   ```

---

## How to add a video to a project

1. Upload the video to YouTube or Vimeo
2. Get the embed URL:
   - YouTube: `https://www.youtube.com/embed/VIDEO_ID`
   - Vimeo: `https://player.vimeo.com/video/VIDEO_ID`
3. Open `js/projects-data.js`, find the project, set the `video` field:
   ```js
   video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
   ```

---

## How to change contact details

Open `js/site-data.js` and update the `contact` block:
```js
contact: {
  email: "tabo@yourdomain.com",
  linkedin: "linkedin.com/in/your-profile",
  location: "Utrecht, Netherlands",
},
```

---

## How to add a partner / organisation logo

1. Put the logo file in `assets/` (e.g. `assets/logos/wakuli.png`)
2. Open `js/site-data.js`, find the `partners` array, add an entry:
   ```js
   { name: "Wakuli", src: "assets/logos/wakuli.png" },
   ```

---

## Running locally

Open `index.html` in a browser. That's it — no build step needed.

If photos aren't loading, make sure you're running through a local server
(not just double-clicking the file). In VS Code: install Live Server extension
and click "Go Live". Or run: `npx serve .`

---

## Colours (CSS variables in style.css)

| Variable        | Value     | Used for                  |
|-----------------|-----------|---------------------------|
| `--green`       | `#2d4a35` | Primary green, headings   |
| `--green-light` | `#4a7459` | Hover states, accents     |
| `--green-pale`  | `#e8ede9` | Backgrounds, placeholders |
| `--cream`       | `#f5f1eb` | About section background  |
| `--charcoal`    | `#1e1e1b` | Projects section, footer  |
| `--warm-grey`   | `#8a8680` | Body text, labels         |
