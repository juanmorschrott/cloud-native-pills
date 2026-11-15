# cloud-native-pills

Bite-sized pills (≤ 5 min read) on AWS, Terraform, Python, observability and system design. Bilingual (EN/ES). Built with [Astro](https://astro.build) + [AstroPaper](https://github.com/satnaing/astro-paper), deployed to GitHub Pages.

Live: https://juanmorschrott.github.io/cloud-native-pills/

## Writing a pill

1. Copy `src/content/posts/_template.md` to `src/content/posts/en/<slug>.md` and `src/content/posts/es/<slug>.md` (same slug in both languages so the language switcher links them).
2. Fill in the frontmatter (`category`, `level`, `readingTime` ≤ 5, `tags`) and remove `draft: true`.
3. After posting on LinkedIn, add `linkedin: <url>` to the frontmatter.

Code blocks support file names and highlights:

````md
```python file="main.py"
print("hi")  # [!code highlight]
```
````

## Development

```bash
pnpm install
pnpm dev      # http://localhost:4321/cloud-native-pills/
pnpm build    # type-check + build + search index
```

Every push to `main` deploys via `.github/workflows/deploy.yml`.

## Google Analytics and AdSense

Both integrations are disabled by default. These identifiers are public, not
secrets: configure them as GitHub Actions repository variables (Settings →
Secrets and variables → Actions → Variables), or in a local `.env` file.
Rebuild and deploy after changing a variable.

- `PUBLIC_GA_MEASUREMENT_ID`: GA4 web stream ID, e.g. `G-...`. Analytics
  loads only after the visitor accepts its separate analytics consent prompt;
  the settings link allows changing that choice. In GA4 enhanced measurement,
  disable page views based on browser history changes: the site sends its own
  page views for Astro navigation.
- `PUBLIC_ADSENSE_CLIENT`: AdSense client ID in the form `ca-pub-` followed by
  16 digits. Setting this variable adds the `google-adsense-account` verification
  meta tag to blog pages after rebuilding and deploying. `PUBLIC_ADSENSE_ENABLED`
  must also be set to `true` to load the AdSense script; otherwise no advertising
  script is loaded.

Before enabling AdSense, configure and publish an appropriate Google-certified,
IAB TCF-integrated CMP (for example via AdSense Privacy & messaging) for the
EEA, UK and Switzerland, and review the site's privacy disclosures and Google
policies. The analytics prompt is **not** an advertising CMP and does not
manage advertising consent. AdSense also requires Google approval and Auto ads
enabled in the account. Google may provide other site-verification methods
while the account is being set up.

Google recommends an `ads.txt` file at the domain root. This project is
published under `/cloud-native-pills/`, so a file added to `public/` here would
not appear at `https://juanmorschrott.github.io/ads.txt`. If needed, publish
Google's account-specific file through the separate GitHub Pages site that
controls that root.

Standard Google Analytics and AdSense are free to use; Analytics 360 and some
third-party CMPs may have costs. AdSense earnings and approval are not guaranteed.

## Design

Accent color: Go cyan `#00ADD8` (darkened in light mode for contrast). Tokens live in `src/styles/theme.css`; retro touches in `src/styles/global.css`.
