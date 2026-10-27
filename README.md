# Our Little Universe ❤️ — Personalized Edition

Made for **Meri Roshmalai**, from **Meh tumhara Chamcham**. Dreamy cinematic style.

## Preview locally
Open `index.html` in a browser, or use a simple local server such as VS Code Live Server.

## Personalize more
Edit `index.html`:
- Relationship timeline: search for `THE DAY WE MET`, `A FAVORITE MEMORY`, `OUR FUNNIEST MOMENT`, and `WHY YOU'RE SPECIAL`.
- Love letter: search for `Meri Roshmalai, my sweetest love,`.
- Reasons: edit the six `.reason` buttons and their `data-reason` messages.
- Gallery: replace each `.photo-placeholder` block with an image. Example:
  `<img src="assets/photo1.jpg" alt="Our memory">`
  Then add to `style.css`:
  `.photo-placeholder img { width:100%; height:100%; min-height:inherit; object-fit:cover; border-radius:10px; }`
- Names: the main copy is already personalized. Search for `Meri Roshmalai` and `Meh tumhara Chamcham` to update them.

## Music
Add an `assets` folder and place a royalty-free MP3 you have permission to use at `assets/romantic-music.mp3`. The visible Music button plays or pauses it after a tap. Autoplay is not forced.

## Publish a public URL
### Easiest: Netlify Drop
1. Extract this ZIP on your phone or computer.
2. Visit https://app.netlify.com/drop.
3. Sign in if asked, then upload the extracted `our_little_universe_personalized` folder (or drag the folder contents into the drop area, depending on the interface).
4. Netlify will publish the static site and provide a public URL. Open that URL once to test it, then send it to Meri Roshmalai.

### Other options
- GitHub Pages: upload the files to a repository and enable Pages in repository settings.
- Vercel: import a repository containing these files. No build command is needed.

## Included features
Responsive layout, animated stars and rose petals, timeline, opening envelope, interactive love reasons, gallery controls, proposal, YES confetti/hearts, gentle second option, and replay.
