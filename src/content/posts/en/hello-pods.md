---
title: "Hello, pods: how this blog works"
description: "What cloud-native-pills is, how the random-topic format works, and a taste of code rendering."
pubDatetime: 2026-11-12T20:00:00+01:00
tags: [meta, kubernetes, go]
category: kubernetes
level: intro
readingTime: 2
featured: true
---

Welcome to **cloud-native-pills**: short posts (5 minutes or less) about the cloud-native stack. The goal is twofold: learn and practice in public, and keep up with a fast-moving ecosystem.

## The rules

- **Stack:** Kubernetes, Go, Terraform/AWS, CNCF projects, and system design (load balancing, events with Kafka, networking).
- **Random topics:** each pill's topic is assigned at random, so I have to learn things outside my comfort zone.
- **Bilingual:** every pill is published in English and Spanish.

## Anatomy of a pill

1. What it is
2. Why it matters
3. A minimal example
4. Trade-offs: when to use it (and when not)
5. Something to practice

## A taste of code

```go file="main.go"
package main

import "fmt"

func main() {
	fmt.Println("hello, cloud native") // [!code highlight]
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
      command: ["echo", "hello, cloud native"]
```

```bash
kubectl apply -f pod.yaml && kubectl logs hello
```

See you in the next pill.
