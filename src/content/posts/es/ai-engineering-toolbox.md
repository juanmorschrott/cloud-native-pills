---
title: "Harness engineering: mis notas rápidas"
description: "Una chuleta ligera de las piezas que rodean a un agente de IA: specs, AGENTS.md, skills y el harness."
pubDatetime: 2026-11-14T23:00:00+01:00
tags: [AI-Engineering]
level: intro
readingTime: 2
# linkedin: https://www.linkedin.com/posts/...
---

## Descripción

Tras experimentar con varios proyectos hechos con IA, he recopilado los elementos clave de lo que se
conoce como *harness engineering*, que consiste en establecer una serie de guías y límites para agentes de IA, con el fin de poder desarrollar de forma autónoma con un mínimo grado de "determinismo".

Desde instrucciones que no quieres estar repitiendo continuamente en los prompts, como "Actúa como un
developer senior Java", hasta especificaciones por implementar (specs), dejo desgranados los elementos básicos.

Mi objetivo es doble: practicar y asimilar los conceptos, y dejar una
instantánea fechada para ver cómo evoluciona una tecnología que cambia constantemente.

## Dónde vive cada cosa

```text
<project-root-folder>/        # el proyecto
├── AGENTS.md                 # instrucciones para cualquier agente
└── docs/specs/blog.md        # la spec: qué se quiere construir y por qué

~/.agents/skills/             # skills reutilizables, compartidas entre proyectos
├── find-skills/
└── show-me/

~/.<agent-folder>/            # la memoria del agente (según la herramienta)
├── checkpoints/              # resúmenes de lo hecho y decidido
├── files/                    # artefactos que no van a git
└── research/                 # notas de investigación
```

## Qué es cada pieza

- **Spec**: lo que quieres, escrito antes de programar. Aquí la escribí después; lo ideal es que el agente construya a partir de ella.
- **`AGENTS.md`**: un README para agentes. Les explica cómo trabajar en el repo (comandos, convenciones, documentación).
- **Skills**: instrucciones reutilizables que el agente carga solo cuando la tarea coincide.
- **Commands**: prompts guardados que lanzas con `/nombre` para repetir una tarea siempre igual.
- **Harness**: todo lo que rodea al modelo y lo hace útil: herramientas, permisos, subagentes y gestión del contexto. El modelo piensa; el harness actúa.
- **Checkpoints**: resúmenes que guarda el harness para que una sesión larga conserve el contexto. No hay estándar: cada herramienta lo guarda a su manera.
- **MCP**: protocolo estándar para conectar al agente con herramientas y datos externos.

## Referencias

- [AGENTS.md](https://agents.md)
- [Agent Skills](https://agentskills.io)
- [Model Context Protocol](https://modelcontextprotocol.io)
