# Spec: cloud-native-pills blog

> Retroactive spec, reconstructed from the initial conversation.

## Goal

A blog of short Markdown "pills" (≤ 5 min read) focused on Go, Kubernetes and observability (especially OpenTelemetry) to:

- Learn, practice and stay up to date on topics from the CNCF ecosystem.
- Promote myself on LinkedIn.

The author writes the posts in English and Spanish. The existing harness article is retained as an exception to the blog's topic focus.

## Requirements

- Bilingual: English and Spanish, same slug in both languages.
- Posts are Markdown files with frontmatter (`level`, `readingTime`, `tags`, optional `category`, `linkedin`).
- Hosted on GitHub Pages at `https://cloudnativepills.com/`.
- Publishing is automatic: every push to `main` triggers a GitHub Actions deploy.
- Design: minimalist, digital, slightly retro. Source code must look great.
- Accent color taken from a stack technology.

## Topics covered

Go, Kubernetes and observability, with a special focus on OpenTelemetry.

## Decisions

- Framework: Astro with the AstroPaper theme.
- Name: `cloud-native-pills`.

## Open

- Final accent color (currently Go cyan `#00ADD8`).
