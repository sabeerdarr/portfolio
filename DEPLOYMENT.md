# Deployment guide — GitHub Pages + sabeerdarr.com

The site deploys automatically via `.github/workflows/deploy.yml` on every
push to `main`. This guide covers first-time setup.

## 1. Create the GitHub repository

1. Sign in to GitHub → **New repository**.
2. Name it anything (e.g. `portfolio` or `sabeerdarr.com`). Public or private
   both work (private Pages requires a paid plan).
3. Don't initialise with a README — the project already has one.

## 2. Push the project

```bash
cd /path/to/this/project
git init                      # skip if already a repo
git add -A
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## 3. Enable GitHub Pages with GitHub Actions

1. Repository → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
   The first successful run publishes the site.

## 4. Add the custom domain in GitHub Pages settings

1. Still in **Settings → Pages**, enter `sabeerdarr.com` under **Custom domain**
   and save.
2. Also verify the domain account-wide: GitHub profile → **Settings →
   Pages → Verified domains** → add `sabeerdarr.com` and create the TXT
   record it shows you. This prevents domain takeover if the repo setting
   is ever removed.

## 5. The CNAME file

`public/CNAME` already contains exactly `sabeerdarr.com` and is copied into
every build, so the custom domain persists across deploys. Don't delete it.

## 6. Configure DNS at your registrar

The exact interface depends on your domain registrar (Namecheap, GoDaddy,
Cloudflare, etc.), but the records are:

**Apex/root domain (`sabeerdarr.com`)** — four `A` records pointing at
GitHub Pages. As of this writing GitHub documents these IPs:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

> ⚠️ **Verify before use.** Check GitHub's current documentation
> ("Managing a custom domain for your GitHub Pages site") before entering
> these — GitHub can change them. If your registrar supports `ALIAS`/`ANAME`
> records, pointing the apex at `YOUR-USERNAME.github.io` is a
> future-proof alternative.

**www subdomain** — one `CNAME` record:

```
www  →  YOUR-USERNAME.github.io
```

## 7. Enable HTTPS

1. Wait for DNS to propagate (minutes to ~24 h; check with
   `dig sabeerdarr.com +noall +answer`).
2. In **Settings → Pages**, once the domain check passes, tick
   **Enforce HTTPS**. GitHub provisions the certificate automatically.

## 8. Test both hosts

- `https://sabeerdarr.com` — must load the site.
- `https://www.sabeerdarr.com` — with the CNAME record above, GitHub
  automatically redirects www to the apex domain (because the apex is set
  as the custom domain). Test in a private window.

## 9. Canonical domain

`sabeerdarr.com` (no www) is the canonical host:

- `astro.config.mjs` sets `site: 'https://sabeerdarr.com'`.
- Every page emits a canonical `<link>` built from that URL.
- Sitemap and RSS use it.
- The www → apex redirect is handled by GitHub (step 8); nothing else needed.

Keep using the bare domain in all profiles and links so search engines see
one consistent host.

## 10. Troubleshooting

| Symptom                                        | Likely cause / fix                                                                                                              |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `DNS check unsuccessful` in Pages settings     | Records not propagated yet, or a stray conflicting record (old `A`/`AAAA`/`CNAME`). Remove conflicts, wait, re-save the domain. |
| Certificate stuck on "provisioning"            | Usually DNS: confirm all four A records and no `AAAA` pointing elsewhere. Remove and re-add the custom domain to retry.         |
| Site loads at `*.github.io` but not the domain | `public/CNAME` missing from the build, or custom domain not saved in settings.                                                  |
| 404 after deploy                               | Check the Actions run succeeded and the artifact came from `dist/`.                                                             |
| www doesn't redirect                           | Ensure the `www` CNAME points at `YOUR-USERNAME.github.io` (not at the apex domain or an IP).                                   |
| Old content after deploy                       | Hard-refresh; GitHub's CDN can take a minute.                                                                                   |

## Production environment variables

Forms, newsletter, and analytics read `PUBLIC_*` variables at build time.
Set them in **Settings → Secrets and variables → Actions → Variables**
(they're non-secret publishable IDs). The workflow passes them to the build.
