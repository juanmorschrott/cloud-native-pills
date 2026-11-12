---
title: "Hola, pods: cómo funciona este blog"
description: "Qué es cloud-native-pills, cómo funciona el formato de temas aleatorios y un adelanto del renderizado de código."
pubDatetime: 2026-11-12T20:00:00+01:00
tags: [meta, kubernetes, go]
category: kubernetes
level: intro
readingTime: 2
featured: true
---

Bienvenido a **cloud-native-pills**: posts breves (5 minutos o menos) sobre el stack cloud native. El objetivo es doble: aprender y practicar en público, y mantenerme al día en un ecosistema que cambia rápido.

## Las reglas

- **Stack:** Kubernetes, Go, Terraform/AWS, proyectos CNCF y diseño de sistemas (balanceo de carga, eventos con Kafka, networking).
- **Temas aleatorios:** el tema de cada píldora se asigna al azar, para obligarme a aprender fuera de mi zona de confort.
- **Bilingüe:** cada píldora se publica en inglés y en español.

## Anatomía de una píldora

1. Qué es
2. Por qué importa
3. Un ejemplo mínimo
4. Trade-offs: cuándo usarlo (y cuándo no)
5. Algo para practicar

## Un adelanto del código

```go file="main.go"
package main

import "fmt"

func main() {
	fmt.Println("hola, cloud native") // [!code highlight]
}
```

```yaml file="pod.yaml"
apiVersion: v1
kind: Pod
metadata:
  name: hello
spec:
  containers:
    - name: hello
      image: busybox
      command: ["echo", "hola, cloud native"]
```

```bash
kubectl apply -f pod.yaml && kubectl logs hello
```

Nos vemos en la próxima píldora.
