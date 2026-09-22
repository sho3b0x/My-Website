# Shane Morton — Personal Site Template

A 4-page personal site (Home, Projects, Writing, Video) styled as a retro
desktop-OS "windows" theme, ready to host on GitHub Pages.

## Structure

```
index.html          Homepage: taskbar nav, About Me, Featured Work trifold
projects.html        Engineering Projects — pulled from your portfolio pptx
writing.html          Expandable/collapsible writing samples
video.html            YouTube embeds + channel/Instagram links
assets/css/style.css  All styling (one shared stylesheet)
assets/js/script.js   Accordion expand/collapse logic (writing.html only)
assets/img/           Photos + project images pulled from your portfolio deck
assets/docs/          Resume + Engineering Portfolio PDFs (linked from the nav)
```

## To customize

1. **Resume** — replace `assets/docs/Shane-Morton-Resume.pdf` with your real
   resume, keeping the same file name (or update the `href` in each page's
   nav bar if you rename it).
2. **Engineering Portfolio (PDF)** — already your real portfolio, converted
   straight from the pptx you uploaded. Re-export and replace the same file
   whenever the deck changes.
3. **LinkedIn / Instagram** — search each HTML file for `REPLACE-ME` and
   swap in your actual profile URLs (appears in the nav bar on every page,
   plus once more on `video.html`).
4. **Video page** — search `video.html` for `REPLACE_VIDEO_ID_1/2/3`. Grab
   the ID from a YouTube URL (the part after `watch?v=`) and drop it in.
5. **Writing page** — each entry is a `.win` block in `writing.html`. Copy
   one to add a new piece; give the button and panel matching, unique `id`s
   (e.g. `panel-4`) so the expand/collapse script can tell them apart.
6. **About Me photo** — swap `assets/img/profile-headshot.png` for a current
   photo any time (same file name, or update the `src` in `index.html`).
7. **Trifold cards** on the homepage currently point at Writing/Video with
   placeholder thumbnails — once you have a favorite piece and edit, swap in
   a real image and short description the same way the Engineering card
   already works.

## Notes

- No build step — plain HTML/CSS/JS. Push the whole folder to a GitHub Pages
  repo and it works as-is.
- The nav bar is duplicated at the top of each HTML file (no templating
  system) — if you edit it, update all four files.
- Fonts use a system stack (Tahoma/Segoe UI/Verdana) to match the Windows-XP
  look authentically on Windows and gracefully elsewhere — no external font
  loading needed.
