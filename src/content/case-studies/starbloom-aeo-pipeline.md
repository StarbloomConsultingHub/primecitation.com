---
title: "Patient Zero — How an AEO Pipeline Self-Corrected Its Own Broken Entity Markup"
description: "An AEO audit pipeline ran against its own site and found 11 broken Wikidata Q-IDs pointing to cacti and tin mines. The self-audit process and what it revealed about entity-level optimization."
clientName: "Self-Audit"
metrics:
  - "Detected 15 JSON-LD blocks across 7 pages, identifying 11 broken Wikidata entity links"
  - "AEO Score jumped from 35/100 to 68/100 in one pipeline run"
  - "Self-corrected entity references — replaced broken Q-ID for Edge Computing (was pointing to a cactus genus)"
  - "7 schema types validated and cross-referenced across Organization, FAQPage, Service, AboutPage, ProfilePage, ItemList, and TechArticle"
  - "Full pipeline: 4 agents executing sequentially — Semantic Miner → Authority Validator → Executive Editor"
  - "Zero human intervention — pipeline detected, diagnosed, and documented every fix autonomously"
pubDate: 2026-05-23
author: "Darren Kelly"
tags:
  - "AEO"
  - "answer engine optimization"
  - "structured data"
  - "Wikidata"
  - "entity linking"
---

## The Problem

We launched starbloomconsulting.com with structured data — Organization schema, FAQPage blocks, Service definitions, founder Person entities with `knowsAbout` tags linked to Wikidata Q-IDs. On paper, the site was semantically rich. But when we ran our own pipeline against it for the first time, the results were humbling.

**AEO Score: 35 out of 100.**

The pipeline's Semantic Miner agent crawled all seven pages and found the wreckage:

- **11 broken Wikidata Q-IDs.** Our Edge Computing reference linked to Q5337692 — a genus of cactus. Our Looker Studio Q-ID pointed to a Bolivian tin mine. Our Cloudflare Tunnel reference resolved to a computer network security page about Application Layer Gateways — technically adjacent, but conceptually wrong.
- **Zero cross-page entity coherence.** The Organization schema in the global layout and the AboutPage schema used different `knowsAbout` Wikidata references. Google's Knowledge Graph saw two different entities claiming the same name.
- **Missing answer blocks.** The FAQPage schema had 7 questions, but only 2 had corresponding answer blocks in the visible HTML. The AI parsers couldn't find ground truth to validate the schema claims.
- **Thin content signals.** One case study. One blog post. No legal pages. Crawlers interpreted this as a parked domain, not an operating business.

We had built a tool to audit other people's websites, and our own site failed the audit. So we turned the pipeline on ourselves.

## The Solution

The analysis pipeline is a multi-agent system running entirely on local hardware — no cloud API dependency for core processing.

### Agent 1 — Semantic Miner

Crawls every page on the target site using dual-pass extraction:
1. **Markdown extraction** — pulls clean readable content from each page
2. **Raw HTML schema extraction** — regex-based JSON-LD parsing to inventory every structured data block

For the self-audit, Agent 1 found 15 JSON-LD blocks across 7 pages, identifying 7 distinct schema types. It then cross-referenced every `sameAs` Wikidata Q-ID against known-good entity references and flagged the 11 broken links.

### Agent 2 — Authority Validator

Powered by DeepSeek, this agent performs a structured analysis:
- **Entity coherence check** — does every page reference the same Organization entity?
- **Wikidata verification** — are all Q-IDs valid and contextually correct?
- **Answer block validation** — do FAQPage schema entries have corresponding visible HTML content?
- **Trust signal inventory** — does the site have privacy policy, terms, and contact information?
- **Competitive gap analysis** — what are competitors doing that this site isnt?

The output is a scored report with specific, actionable recommendations — not vague advice, but exact Q-ID replacements, exact schema additions, exact content gaps.

### Agent 3 — Executive Editor

Takes the raw audit and produces a structured markdown AEO report: executive summary, entity profile, gap analysis, prioritized fixes, and a competitive score.

### Master Controller

Orchestrates the sequential execution of all three agents, validates output, and writes the final report. The entire pipeline fires from a single webhook with a target URL.

## The Results

### Score Impact

**Before self-audit: 35/100**
**After v2.9 fixes: 68/100**
**Target after Phase 2 content: 85+/100**

The 33-point jump came entirely from structural fixes — correcting entity links, adding answer blocks, creating legal pages, and unifying the Organization profile. No new content was created for the initial fix.

### The Broken Q-ID List (Actual Examples)

Here is what the pipeline caught — real Wikidata entities our site was accidentally linking to:

| Intended Entity | What It Actually Resolved To |
|---|---|
| Edge Computing | Cleistocactus — a genus of cactus |
| Looker Studio | Cerro Rico — a Bolivian tin mine |
| Cloudflare Tunnel | Application Layer Gateway (wrong concept) |
| Docker | Deprecated — merged into another entity |
| BigQuery | Redirected to a different Google product |
| On-Premise Deployment | Ambiguous — pointed to a general concept |

Six of our 10 `knowsAbout` Wikidata links were pointing to cacti, tin mines, or deprecated entities. That is the kind of semantic drift that destroys AEO scores. No human reviewer would catch this without manually checking every Q-ID. The pipeline caught it in under 90 seconds.

## Why This Matters

Most AEO consulting firms sell you a service. They run an audit and hand you a report. You never see the tool, never own the pipeline.

This approach is different. The pipeline that audited our site can audit yours — but it runs on your hardware, with your data, under your control.

That is the difference between selling consulting hours and deploying infrastructure.
