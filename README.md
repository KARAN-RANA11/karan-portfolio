# Karan Rana — Portfolio (React + Vite)

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Where to edit
| What | File |
| --- | --- |
| Name, roles, bio, email, links, stats, about cards | `src/data/profile.js` |
| Skills and levels | `src/data/skills.js` |
| Projects and filter chips | `src/data/projects.js` |
| Work experience | `src/data/experience.js` |
| Nav / section list | `src/data/sections.js` |
| Hero code card | `src/components/CodeCard.jsx` |
| Colors, fonts, spacing | `src/styles.css` (CSS variables at the top) |

## Add a new section
1. Create `src/components/MySection.jsx` (copy `Experience.jsx` as a template).
2. Add `["id", "Label"]` to `src/data/sections.js`.
3. Render `<MySection />` in `src/App.jsx`.

## Deploy
Netlify: connect the repo (settings come from `netlify.toml`) or drag the `dist/` folder to app.netlify.com/drop after `npm run build`.
