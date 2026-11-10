# Norah's Den: a personal site

A simple personal website built with Jekyll. GitHub Pages builds and hosts it for free. You write in Markdown, push to GitHub, and the site updates within about a minute.

## Put it online (one time, about 10 minutes)

1. **Create a GitHub account** at github.com if you don't have one.
2. **Create a new repository** named exactly `<your-username>.github.io` (for example `norahx.github.io`). Make it **Public**. Don't add a README.
3. **Upload these files.** On the new repo page, click "uploading an existing file", then drag in *everything inside this folder*, including the folders that start with `_`. Commit.
   - Tip: if you're on a Mac, folders starting with `_` and `.` can be hidden in Finder. Dragging the whole unzipped folder's contents still works. Or use GitHub Desktop, which is easier for ongoing edits.
4. **Turn on Pages.** In the repo: Settings → Pages → "Build and deployment" → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
5. Wait a minute, then visit `https://<your-username>.github.io`.

If you named the repo something else (like `website`), open `_config.yml` and set `baseurl: "/website"`.

## Edit the basics

Open `_config.yml`:
- `title` is the site's name (currently "Norah's Den"). Change it in this one place.
- `author` is blank, so your name appears nowhere. Add it whenever you're ready.
- `tagline` is the big line on the home page.
- `topics` are the three topics used for writing, reading shelves, and filters.
- Add your email, LinkedIn, and so on. Blank ones stay hidden.

Your story lives in `about.md`.

You can edit any file directly on github.com: open it, click the pencil icon, edit, and commit.

## Add things

**A new post.** Create a file in `_posts/` named `YYYY-MM-DD-short-title.md`:

```markdown
---
title: What I learned from a year of crop reports
summary: One sentence that shows up in the list.
topic: markets        # markets | design | mind
---

Your writing here, in Markdown.
```

**A book.** Add an entry to `_data/readings.yml` with a `topic` (`markets`, `design`, or `mind`) and a `status` (`reading` gets a ribbon, `read` goes on the shelf, `next` goes in the Up next list). Pick a spine `color`. The books in there now are examples, so replace them.

**A design piece.** Put the image in `assets/img/design/` and add an entry to `_data/design.yml` with `kind: made` or `kind: admired` and a short note. The first three appear on the home page. The four in there now are placeholders.

**A project.** Create a file in `_projects/`, like `my-project.md`. Copy the front matter from `example-project.md`. Images go in `assets/img/`.

**Drafts.** Put unfinished posts in a `_drafts/` folder (no date in the filename). They won't be published.

## A common snag

In the `.yml` files, if a note contains a colon (`:`), wrap the whole note in double quotes, or the site won't build. GitHub emails you if a build fails.

## Change the look

All colors and fonts are at the top of `assets/css/style.css`.

## Use your own domain (optional, later)

Buy a domain (e.g. `norah.xyz`) from any registrar. In the repo go to Settings → Pages → Custom domain and follow GitHub's DNS instructions. Then set `url:` in `_config.yml` to your domain.

## Preview on your computer (optional)

You don't need this, but if you want to see changes before pushing: install Ruby, then run `bundle install` and `bundle exec jekyll serve` in this folder, and open http://localhost:4000.
