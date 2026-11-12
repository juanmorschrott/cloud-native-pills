# cloud-native-pills

Bite-sized pills (≤ 5 min read) on Kubernetes, Go, Terraform/AWS, CNCF projects and system design. Bilingual (EN/ES). Built with [Astro](https://astro.build) + [AstroPaper](https://github.com/satnaing/astro-paper), deployed to GitHub Pages.

Live: https://juanmorschrott.github.io/cloud-native-pills/

## Writing a pill

1. Copy `src/content/posts/_template.md` to `src/content/posts/en/<slug>.md` and `src/content/posts/es/<slug>.md` (same slug in both languages so the language switcher links them).
2. Fill in the frontmatter (`category`, `level`, `readingTime` ≤ 5, `tags`) and remove `draft: true`.
3. After posting on LinkedIn, add `linkedin: <url>` to the frontmatter.

Code blocks support file names and highlights:

````md
```go file="main.go"
fmt.Println("hi") // [!code highlight]
```
````

## Development

```bash
pnpm install
pnpm dev      # http://localhost:4321/cloud-native-pills/
pnpm build    # type-check + build + search index
```

Every push to `main` deploys via `.github/workflows/deploy.yml`.

## Design

Accent color: Go cyan `#00ADD8` (darkened in light mode for contrast). Tokens live in `src/styles/theme.css`; retro touches in `src/styles/global.css`.
