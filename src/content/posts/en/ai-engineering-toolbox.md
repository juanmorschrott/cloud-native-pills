---
title: "Harness engineering: my quick notes"
description: "A lightweight cheat sheet of the pieces around an AI agent: specs, AGENTS.md, skills and the harness."
pubDatetime: 2026-11-14T23:00:00+01:00
tags: [AI-Engineering]
level: intro
readingTime: 2
# linkedin: https://www.linkedin.com/posts/...
---

## Overview

After experimenting with several projects built with AI, I've gathered the key elements of what is known as
_harness engineering_, which consists of setting a series of guidelines and limits for AI agents
so they can develop autonomously with a minimum degree of "determinism".

From instructions you don't want to keep repeating in prompts, such as "Act as a senior Java developer",
to specifications to implement (specs), here are the basic elements, broken down.

My goal is twofold: to practice and absorb the concepts, and to leave a dated
snapshot to see how this constantly changing technology evolves.

## Where everything lives

```text
<project-root-folder>/        # the project
├── AGENTS.md                 # instructions for any agent working here
└── docs/specs/blog.md        # the spec: what to build and why

~/.agents/skills/             # reusable skills, shared across projects
├── find-skills/
└── show-me/

~/.<agent-folder>/            # the agent's memory (depends on the tool)
├── checkpoints/              # summaries of what was done and decided
├── files/                    # artifacts that don't belong in git
└── research/                 # notes gathered while investigating
```

## What each piece is

- **Spec**: what you want, written down before coding. Here I wrote it afterwards; ideally the agent builds from it.
- **`AGENTS.md`**: a README for agents. It tells them how to work in the repo (commands, conventions, docs).
- **Skills**: reusable instructions the agent loads only when the task matches.
- **Commands**: saved prompts you run with `/name` to repeat the same task the same way.
- **Harness**: everything around the model that makes it useful: tools, permissions, sub-agents and context management. The model thinks; the harness acts.
- **Checkpoints**: summaries the harness saves so a long session keeps its context. There is no standard: each tool stores them its own way.
- **MCP**: a standard protocol to connect the agent to external tools and data.

## References

- [AGENTS.md](https://agents.md)
- [Agent Skills](https://agentskills.io)
- [Model Context Protocol](https://modelcontextprotocol.io)
