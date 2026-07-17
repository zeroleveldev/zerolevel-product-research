# ZeroLevel Acquisition Research

A mobile-first, evidence-led decision dashboard for a solo builder who wants to create a transferable software asset rather than run a support-heavy company indefinitely.

## Current decision

- **Best business lane:** Atlassian Forge micro-app portfolio — 8.7/10 research score, conditional 9.3/10 ceiling after proof
- **Best concrete first-product hypothesis:** DocLint for Confluence — 8.3/10
- **Other finalists:** GitHub Audit Evidence Pack, Shopify Theme Residue Intelligence, and FacilityProof for Churches
- **Reality check:** No unbuilt idea is rated 10/10. Paid retention, low measured owner hours, clean operations, and buyer interest are required.

The original MoveManifest, Paycheck Decision Tool, and PatternPrint QA research remains available in the archive section.

## Included research

- Twelve consistently scored opportunity lanes
- Direct and indirect competitors
- Current public pricing and marketplace signals
- Observed evidence separated from inference
- Version-one requirements and explicit exclusions
- Build and maintenance estimates
- Distribution channels and strategic-buyer maps
- Validation gates, stop rules, and exit-readiness milestones
- Direct first-party and marketplace source links

## Run locally

```bash
python3 -m http.server 4177
```

Open `http://127.0.0.1:4177/`.

## Test

```bash
npm test
npm run check
```

## Architecture and privacy

The site is dependency-free static HTML, CSS, and JavaScript. It has no backend, analytics, account system, or external API. Optional review checkmarks are stored only in the browser's local storage.
