# Norah's Garden

My personal site: essays, reading notes, projects, and a design gallery.

- **Live:** https://norahz3.github.io
- **Built with:** Jekyll, hosted on GitHub Pages (deploys from `main`, root folder)

## Publishing a change

Edit files, then commit and push. GitHub rebuilds the site in about a minute.

```bash
git add -A
git commit -m "Describe the change"
git push
```

You can also edit any file on github.com (pencil icon → commit). If a build fails, GitHub emails you, and the error appears in the repo's **Actions** tab.

## Site settings (`_config.yml`)

- `title`: the site's name, shown top-left, in browser tabs, and in the footer.
- `tagline`, `description`: the big line on the home page and the text under it.
- `author`: blank, so no name appears anywhere. Add it when you're ready.
- `topics`: the three topics (`markets`, `design`, `mind`) used for writing, reading shelves, and filters.
- `email`, `linkedin`, `github`, `substack`: blank links stay hidden.

Your bio lives in `about.md`. Colors and fonts are at the top of `assets/css/style.css`.

## Adding content

**Post:** create `_posts/YYYY-MM-DD-short-title.md`:

```markdown
---
title: What I learned from a year of crop reports
summary: One sentence that shows up in the list.
topic: markets        # markets | design | mind
---

Your writing here, in Markdown.
```

**Draft:** put it in `_drafts/` (no date in the filename). Drafts aren't published.

**Book:** add an entry to `_data/readings.yml` with a `topic`, a spine `color`, and a `status`: `reading` gets a ribbon, `read` goes on the shelf, `next` goes in the Up next list.

**Design piece:** put the image in `assets/img/design/` and add an entry to `_data/design.yml` with `kind: made` or `kind: admired` and a short note. The first three appear on the home page.

**Project:** copy `_projects/example-project.md` to a new file in `_projects/` and edit it. Images go in `assets/img/`.

**Still placeholders:** the books in `_data/readings.yml`, the four images in `_data/design.yml`, and `_projects/example-project.md`. Replace or remove them.

> **Common snag:** in `.yml` files, wrap any note that contains a colon (`:`) in double quotes, or the build fails.

## Previewing locally

Gems install into `vendor/` (ignored by git). This Mac needs Homebrew's Ruby 3.3, because the system Ruby is too old and Ruby 4 is too new for `github-pages`. Anaconda's compiler settings also have to be cleared, or native gems fail to build:

```bash
export PATH=/opt/homebrew/opt/ruby@3.3/bin:$PATH LANG=en_US.UTF-8
unset CC CXX CFLAGS LDFLAGS
bundle install                # first time, or after Gemfile changes
bundle exec jekyll serve      # then open http://localhost:4000
```

## Custom domain (optional)

Buy a domain from any registrar, add it in the repo's **Settings → Pages → Custom domain**, follow GitHub's DNS instructions, then set `url:` in `_config.yml` to the domain.
