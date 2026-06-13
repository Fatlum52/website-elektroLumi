# Going Online with Cloudflare Pages

This guide walks you through publishing the Elektro Lumi website to the internet
using **Cloudflare Pages** — a free hosting service for static sites that deploys
straight from your GitHub repo and gives you HTTPS automatically.

Because this site is pure HTML/CSS/JS with **no build step**, the setup is simple:
Cloudflare just serves the files exactly as they are in the repo.

---

## Prerequisites

- The code is pushed to GitHub: `github.com/Fatlum52/website-elektroLumi`
- You can sign in to that GitHub account (you'll authorize Cloudflare to read it)

---

## Step 1 — Create a Cloudflare account

1. Go to <https://dash.cloudflare.com/sign-up>
2. Sign up with your email and a password, then verify the email Cloudflare sends you.
3. Log in to the dashboard at <https://dash.cloudflare.com>.

The free plan is enough for this website — no credit card required.

---

## Step 2 — Connect the GitHub repository

1. In the dashboard sidebar, open **Compute (Workers & Pages)** → **Pages**.
2. Click **Create application** → **Pages** tab → **Connect to Git**.
3. Choose **GitHub** and click **Connect GitHub**. A GitHub authorization
   window opens.
4. Authorize Cloudflare. When asked which repositories to allow, you can pick
   **Only select repositories** and choose `website-elektroLumi`
   (or grant access to all — your choice).
5. Back in Cloudflare, select the `website-elektroLumi` repo and click
   **Begin setup**.

---

## Step 3 — Configure the build

Because there is no framework or build system, the settings are minimal:

| Setting | Value |
|---|---|
| **Project name** | `elektrolumi` (this becomes part of the free URL) |
| **Production branch** | `main` |
| **Framework preset** | `None` |
| **Build command** | *(leave empty)* |
| **Build output directory** | `/` |

> The output directory is `/` (the repo root) because `index.html` and the other
> pages live at the top level of the repo, not inside a `dist/` or `public/` folder.

Click **Save and Deploy**.

---

## Step 4 — First deployment

Cloudflare clones the repo and publishes it. After ~30–60 seconds you'll get a
live URL like:

```
https://elektrolumi.pages.dev
```

Open it to confirm the site loads, including the injected header/footer (Cloudflare
serves over HTTPS, so the `fetch()` calls work just like the local Python server).

---

## Step 5 — Automatic deploys

From now on, **every push to the `main` branch redeploys the site automatically.**
The typical workflow:

```bash
git add <files>
git commit -m "feat: ..."
git push
```

Within a minute the live site updates. You can watch each deploy under
**Pages → elektrolumi → Deployments**. Pushes to other branches create
*preview* deployments with their own temporary URLs, so you can check changes
before merging into `main`.

---

## Step 6 — Connect a custom domain (optional)

To use a real domain like `elektrolumi.ch` instead of the `.pages.dev` URL:

1. In your Pages project, go to the **Custom domains** tab → **Set up a domain**.
2. Enter your domain (e.g. `www.elektrolumi.ch`) and follow the prompts.
3. **If the domain is registered elsewhere** (e.g. at a Swiss registrar like
   Hostpoint or Infomaniak): Cloudflare shows you DNS records (a `CNAME`) to add
   at your registrar — or you can move the domain's nameservers to Cloudflare for
   automatic management.
4. **If you buy/transfer the domain into Cloudflare** (Registrar section of the
   dashboard): the DNS is wired up for you automatically.

HTTPS certificates are issued automatically and for free once the domain verifies
(can take a few minutes up to a few hours).

---

## Troubleshooting

- **Header/footer missing on the live site** — these load via `fetch()`, which
  needs the files served over HTTP(S). On Cloudflare Pages they are, so if they're
  missing, check the browser console for a 404 on `header.html` / `footer.html`
  (usually a wrong path or filename casing — Linux servers are case-sensitive).
- **Old version still showing** — Cloudflare caches assets. Hard-refresh
  (`Cmd+Shift+R`), or purge cache under the domain's **Caching** settings.
- **Deploy didn't trigger** — confirm the push landed on `main` and that Cloudflare
  still has GitHub access under **Pages → Settings → Builds & deployments**.

---

## Summary

| What | Where |
|---|---|
| Hosting dashboard | <https://dash.cloudflare.com> → Pages |
| Free URL | `https://elektrolumi.pages.dev` |
| Deploy trigger | `git push` to `main` |
| Build command | none |
| Output directory | `/` |
