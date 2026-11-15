# Spec: cloud-native-pills blog

> Retroactive spec, reconstructed from the initial conversation.

## Goal

A blog of short Markdown "pills" (≤ 5 min read) to:

- Learn, practice and stay up to date on a tech stack.
- Promote myself on LinkedIn.

Topics are suggested at random to push me out of my comfort zone. The author writes the posts.

## Requirements

- Bilingual: English and Spanish, same slug in both languages.
- Posts are Markdown files with frontmatter (`level`, `readingTime`, `tags`, optional `category`, `linkedin`).
- Hosted on GitHub Pages at `https://cloudnativepills.com/`.
- Publishing is automatic: every push to `main` triggers a GitHub Actions deploy.
- Design: minimalist, digital, slightly retro. Source code must look great.
- Accent color taken from a stack technology.

## Stack covered

AWS (networking, VPC, IAM, ECS, EC2, S3, ElastiCache, RDS, Secrets Manager, Lambda/API Gateway), observability (OpenTelemetry, CloudWatch), security (IAM, Secrets Manager, KMS), system design, CI/CD (GitHub Actions, OIDC/Keycloak), Terraform, Python (FastAPI). Go later.

## Decisions

- Framework: Astro with the AstroPaper theme.
- Name: `cloud-native-pills`.

## Open

- Final accent color (currently Go cyan `#00ADD8`).
