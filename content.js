export const scoringModel = {
  description: 'Weighted for a solo builder who wants a transferable asset rather than a full-time operating job.',
  weights: {
    'Demonstrated acquirer market': 25,
    'Paid demand evidence': 20,
    'Low maintenance after stabilization': 20,
    'Built-in distribution': 15,
    'Low support, liability, and platform risk': 10,
    'Defensibility beyond code': 10
  },
  rule: 'A score above 9 requires paid retention, low measured owner hours, clean financials, and buyer interest. Research alone cannot produce a 10.'
};

export const strategy = {
  name: 'Atlassian Forge micro-app portfolio',
  currentScore: 8.7,
  provenCeiling: 9.3,
  recommendation: 'Validate one narrow Confluence utility, then reuse the same Forge, support, billing, documentation, and buyer relationships for two adjacent utilities.',
  realityCheck: 'No honest 10/10 exists yet. Tiny says it buys businesses with real profit and customer trust; strategic buyers likewise pay for paying installs, retention, distribution, and clean operations—not an unvalidated codebase.',
  whyThisLane: [
    'Forge supplies hosting and databases, reducing the infrastructure a buyer must inherit.',
    'Atlassian handles Marketplace licensing and billing for Paid via Atlassian apps.',
    'As of January 1, 2026, qualifying Forge partners keep 100% of the first $1 million in lifetime Forge revenue.',
    'Appfire has repeatedly acquired Atlassian apps, including the narrow Numbered Headings utility.',
    'Marketplace installs, reviews, trials, and renewals are more transferable than a founder-dependent consulting funnel.'
  ],
  nonNegotiables: [
    'Forge-only architecture; no external database or AI API in version one.',
    'One job, one buyer, and one-screen onboarding per app.',
    'Written support ceiling and automated diagnostics before launch.',
    'Separate company brand, domain, repository, documentation, and financial records.',
    'Do not build app two until app one has five paid design partners and repeat usage.',
    'Operate long enough to prove retention; budget 12–24 months, not an immediate flip.'
  ],
  exitGate: 'Begin quiet buyer conversations after at least $3,000 MRR or 75 paying organizations, six months of retention data, under four owner-hours per month, no single customer above 15% of revenue, and documented transfer procedures.',
  sources: [
    'https://developer.atlassian.com/platform/forge/introduction/why-build-with-forge/',
    'https://developer.atlassian.com/platform/marketplace/pricing-payment-and-billing/',
    'https://appfire.com/resources/blog/appfire-acquires-numbered-headings-from-avisi-apps',
    'https://tiny.com/sell-your-saas'
  ]
};

export const candidateUniverse = [
  { rank: 1, name: 'Forge micro-app portfolio', score: 8.7, decision: 'Best business lane', reason: 'Hosted platform, billing, distribution, high seller revenue share, and demonstrated strategic buyers.' },
  { rank: 2, name: 'DocLint for Confluence', score: 8.3, decision: 'Validate first', reason: 'Narrow deterministic utility with adjacent install evidence and no exact dominant linter found.' },
  { rank: 3, name: 'GitHub audit evidence pack', score: 7.7, decision: 'Conditional', reason: 'Acute paid pain and buyer fit, but exact entrants exist and compliance trust raises support.' },
  { rank: 4, name: 'Shopify theme-residue intelligence', score: 7.3, decision: 'Watch and validate', reason: 'Strong app-acquirer ecosystem, but a direct competitor launched July 3, 2026 and safe cleanup is support-heavy.' },
  { rank: 5, name: 'Shopify B2B PDF catalog app', score: 7.3, decision: 'Reject generic version', reason: 'Paid category and buyer ecosystem, but many mature catalog/line-sheet apps already exist.' },
  { rank: 6, name: 'FacilityProof for churches', score: 7.2, decision: 'Founder-fit fallback', reason: 'Clear buyer map and adjacent spend, but SafetyCulture offers a generous free substitute and churches need onboarding.' },
  { rank: 7, name: 'WordPress client-care evidence reports', score: 7.0, decision: 'Reject', reason: 'Plugin acquirers exist, but ManageWP/MainWP/WP Umbrella and security maintenance make this crowded.' },
  { rank: 8, name: 'Google Workspace sharing audit', score: 6.9, decision: 'Reject', reason: 'Willingness to pay exists, but OAuth verification, sensitive permissions, and enterprise support conflict with low effort.' },
  { rank: 9, name: 'Home-service estimator widgets', score: 6.9, decision: 'Validate only with partner', reason: 'Simple embeds and strategic buyers, but distribution depends on founder-led agency or association sales.' },
  { rank: 10, name: 'Industry-rules data product', score: 6.7, decision: 'Reject for Sam', reason: 'Data can be defensible, but regulatory updates create permanent maintenance and liability.' },
  { rank: 11, name: 'Consumer local-first utilities', score: 6.5, decision: 'Archive', reason: 'Low operations, but low prices, weak recurring revenue, and no built-in strategic buyer market.' },
  { rank: 12, name: 'Chrome micro-extension utility', score: 6.0, decision: 'Reject', reason: 'Easy build and store discovery, but weak buyer quality, browser changes, copy risk, and security scrutiny.' }
];

export const acquisitionIdeas = [
  {
    id: 'doclint',
    rank: 1,
    name: 'DocLint for Confluence',
    category: 'Atlassian Forge document-quality utility',
    score: { current: 8.3, ceiling: 9.2 },
    status: 'Best concrete idea — validate before coding',
    oneLiner: 'Scan Confluence pages for structural quality problems and give documentation owners a fix list without sending content outside Atlassian.',
    verdict: 'This is the best first product inside the stronger 8.7/10 Forge portfolio strategy. It is not yet a build recommendation because adjacent tools prove demand, not this exact bundle.',
    fit: [
      'Deterministic checks avoid AI cost, hallucinations, and prompt-support work.',
      'Forge can host the UI, functions, and storage; no separate database is required.',
      'The first useful report can be narrow and read-only, limiting damage risk.',
      'Documentation, accessibility, migration, and governance vendors are plausible strategic buyers.'
    ],
    observedEvidence: [
      'Numbered Headings has 5,259 active installs and 114 reviews at 4.5/5 on the Atlassian Marketplace.',
      'At 100 users, Numbered Headings displayed a July 2026 cloud estimate of $107 per month.',
      'Appfire acquired Numbered Headings from Avisi Apps, proving that a narrow Confluence document utility can be strategically acquired.',
      'Link Management shows 597 installs and 4.4/5 from 10 reviews; Spellproof shows 44 installs; Accessibility for Confluence shows 19 installs.',
      'Marketplace searches found strong adjacent utilities but no exact dominant app combining heading hierarchy, alt-text, link wording, table headers, and exportable quality findings.'
    ],
    inferences: [
      'Documentation teams may pay for a simpler quality report if it is faster and less expensive than broad workflow suites.',
      'A portfolio of adjacent deterministic checks is more defensible and acquirable than one easily copied rule.',
      'Install counts do not reveal revenue, active usage, profitability, or customer satisfaction.'
    ],
    competitors: [
      { name: 'Numbered Headings', price: '$107/month estimate at 100 cloud users; free 30-day trial', signal: '5,259 active installs · 114 reviews · 4.5/5', strength: 'Extremely focused heading utility, one-click numbering, export support, Runs on Atlassian.', opening: 'It formats headings; it does not present a broad document-quality issue register.', url: 'https://marketplace.atlassian.com/apps/16063/numbered-headings?hosting=cloud&tab=overview' },
      { name: 'Link Management', price: 'Paid tiered Marketplace app', signal: '597 installs · 10 reviews · 4.4/5', strength: 'Broken-link detection, migration support, and bulk editing.', opening: 'Avoid bulk editing in v1; combine read-only link findings with structure and accessibility-oriented quality checks.', url: 'https://marketplace.atlassian.com/search?query=broken%20links%20confluence%20bulk%20redirect' },
      { name: 'Accessibility for Confluence', price: 'Paid Marketplace app', signal: '19 installs · 2 reviews · 5/5', strength: 'Screen-reader, contrast, keyboard, WCAG/Section 508 positioning.', opening: 'Low install signal; DocLint should avoid conformance promises and focus on content-authoring quality.', url: 'https://marketplace.atlassian.com/search?query=accessibility%20checker%20Confluence%20alt%20text' },
      { name: 'Spellproof for Confluence', price: 'Paid Marketplace app', signal: '44 installs · 5 reviews · 4.3/5', strength: 'Spelling, grammar, and style fixes.', opening: 'Use deterministic structural checks instead of competing with language and AI editors.', url: 'https://marketplace.atlassian.com/search?query=accessibility%20checker%20Confluence%20alt%20text' },
      { name: 'Comala Document Management', price: 'Paid enterprise-oriented tiers', signal: '6.1k installs · 172 reviews · 4.7/5', strength: 'Full document control, lifecycle, approvals, governance, audit readiness.', opening: 'Do not build workflows; serve teams that only want a fast quality inventory and export.', url: 'https://marketplace.atlassian.com/search?query=heading%20accessibility%20document%20quality%20confluence' }
    ],
    risks: [
      'Atlassian could add similar authoring checks natively.',
      'The direct search gap may indicate weak demand rather than opportunity.',
      'Parsing every Confluence content edge case can expand support.',
      'Accessibility language can create compliance expectations; never promise certification.',
      'Marketplace rank and Solution Partner referrals still require active launch work.'
    ],
    requirements: [
      'Forge-only Confluence Cloud app using UI Kit or minimal Custom UI.',
      'Read-only scanner for heading order, missing alt text, vague link text, empty anchors, table headers, duplicated headings, and broken internal references.',
      'Space/page filters, issue severity, owner assignment, ignore rules, and rescan.',
      'CSV and printable HTML/PDF evidence export with timestamp and rule version.',
      'No external content storage, no LLM, no automatic edits, and no compliance guarantee.',
      'Automated fixture tests for Atlassian Document Format and permission failures.',
      'In-app diagnostics, support bundle, privacy policy, terms, and deletion/export paths.'
    ],
    exclude: ['Automatic page rewrites', 'AI writing', 'External crawler infrastructure', 'WCAG certification', 'Jira support in v1', 'Custom consulting', 'Data Center edition'],
    pricing: ['Free for up to 10 users or one space', 'Hypothesis: $15–$29/month for small sites', 'Hypothesis: $49–$99/month for 100–500 users', 'Annual option at ten months; validate willingness before setting Marketplace tiers'],
    distribution: ['Atlassian Marketplace listing and search', 'Free one-space scan', 'Confluence documentation-quality checklist', 'Atlassian Solution Partners and migration consultants', 'Technical-writing and knowledge-management communities', 'Comparison pages against manual audits and oversized workflow suites'],
    buyers: ['Appfire', 'The Adaptavist Group / Kolekti', 'K15t', 'AppFox', 'Refined', 'Atlassian Solution Partners', 'Accessibility and documentation-tool vendors'],
    acquisitionCase: 'A buyer gets Forge-native installs, recurring Marketplace revenue, a reusable ADF rule engine, documented low support, and cross-sell access to Confluence administrators.',
    moat: ['Rule fixtures built from real customer edge cases', 'Historical space-quality trends', 'Solution Partner referrals', 'Low-noise ignore rules', 'A shared engine supporting a second narrow Forge utility'],
    maintenance: {
      build: 'Estimated 6–10 focused weeks for the read-only MVP, Marketplace listing, trust documents, and fixtures.',
      ownerHours: 'Target 2–5 hours/month after stabilization; this is an inference until measured.',
      tasks: ['Review Atlassian changelog monthly', 'Triage permission/parser edge cases', 'Update rule fixtures and documentation', 'Answer Marketplace support and renewal questions'],
      automation: ['Scheduled dependency updates', 'ADF regression fixture suite', 'Synthetic Forge scans', 'One-click diagnostic bundle'],
      danger: 'If support exceeds eight hours/month for two consecutive months, freeze features and simplify the supported content surface.'
    },
    validation: {
      steps: ['Interview 12 Confluence admins, technical writers, or accessibility leads using a one-page sample report.', 'Run a manual scanner against five donated/exported spaces and count which findings owners actually fix.', 'Offer a $99–$299 annual paid design-partner agreement before building the Forge app.', 'Ask ten Atlassian Solution Partners whether they would use or resell the report.', 'Build only the three checks selected by at least half of paid partners.'],
      gate: 'Proceed only with five non-friend paid design partners, at least three partners completing a second scan, and two Solution Partners requesting a pilot or referral arrangement.',
      stop: 'Stop if teams only want native/free checks, refuse content permissions, or require broad workflow/automatic remediation.'
    },
    milestones: ['Proof: 5 paid design partners', 'Product: 25 paying sites and second-scan usage above 50%', 'Operational: support under 5 hours/month', 'Exit-ready: 75 paying sites or $3k MRR with six-month retention'],
    sources: [
      'https://marketplace.atlassian.com/apps/16063/numbered-headings?hosting=cloud&tab=overview',
      'https://appfire.com/resources/blog/appfire-acquires-numbered-headings-from-avisi-apps',
      'https://developer.atlassian.com/platform/forge/introduction/why-build-with-forge/',
      'https://developer.atlassian.com/platform/marketplace/pricing-payment-and-billing/',
      'https://marketplace.atlassian.com/search?query=accessibility%20checker%20Confluence%20alt%20text',
      'https://marketplace.atlassian.com/search?query=broken%20links%20confluence%20bulk%20redirect'
    ]
  },
  {
    id: 'github-proof',
    rank: 2,
    name: 'GitHub Audit Evidence Pack',
    category: 'Developer compliance evidence action',
    score: { current: 7.7, ceiling: 9.0 },
    status: 'Acute pain, but exact competitors already exist',
    oneLiner: 'Generate a timestamped, verifiable evidence bundle for repository controls without buying a full compliance platform.',
    verdict: 'Potentially valuable and acquirable, but not a near-10 idea today. An exact $99/month entrant has zero stars and Audit Packs has one star, so willingness and adoption remain unproven.',
    fit: ['Deterministic API collection can run inside GitHub Actions.', 'Evidence and recurring audit deadlines can create repeat usage.', 'Compliance platforms and security vendors are obvious buyer categories.', 'A CLI/action can minimize infrastructure if licensing is kept simple.'],
    observedEvidence: [
      'GitHub Marketplace returned 13 results for “audit evidence.”',
      'GitHub SOC2 Audit Evidence Exporter offers two free checks and a $99/month paid tier with five checks, ZIP export, PDFs, timestamps, API endpoints, and raw JSON; it showed zero stars.',
      'Audit Packs maps scanner output into evidence-backed compliance artifacts and showed one Marketplace star.',
      'Drata and Secureframe both appear in GitHub Marketplace audit-evidence search results, demonstrating incumbent platform distribution.'
    ],
    inferences: ['Small SaaS teams may pay for a narrow evidence export before they are ready for a broad GRC platform.', 'Virtual CISOs and audit consultants could be a stronger channel than direct developer search.', 'Marketplace stars are attention signals, not revenue or active-install evidence.'],
    competitors: [
      { name: 'GitHub SOC2 Audit Evidence Exporter', price: 'Free limited tier; $99/month paid', signal: '0 Marketplace stars when checked', strength: 'Exact one-click SOC 2 evidence PDFs, raw JSON, timestamps, and scheduled Action.', opening: 'No visible adoption proof; test consultant distribution and a lower-risk local evidence format.', url: 'https://github.com/marketplace/actions/github-soc2-audit-evidence-exporter' },
      { name: 'Audit Packs', price: 'Open-source Marketplace action', signal: '1 Marketplace star when checked', strength: 'OSCAL, SARIF, compliance mappings, many scanners, rich artifacts.', opening: 'Complexity creates a possible opening for a simple repository-controls evidence packet.', url: 'https://github.com/marketplace/actions/audit-packs' },
      { name: 'Drata', price: 'Quote-based compliance platform', signal: 'Listed in GitHub Marketplace search', strength: 'Broad automated compliance platform and integrations.', opening: 'Serve pre-audit or small teams only; do not attempt a GRC platform.', url: 'https://github.com/marketplace?query=audit%20evidence' },
      { name: 'Secureframe', price: 'Quote-based compliance platform', signal: 'Listed in GitHub Marketplace search', strength: 'Broad compliance automation and evidence collection.', opening: 'Portable evidence bundle and consultant workflow, not an always-on control platform.', url: 'https://github.com/marketplace?query=audit%20evidence' }
    ],
    risks: ['Auditors may reject mappings or require evidence beyond GitHub.', 'GitHub API permissions and organization plans vary.', 'Compliance terminology raises trust and support expectations.', 'A license server reintroduces operations.', 'Exact competitors can copy pricing and features quickly.'],
    requirements: ['GitHub Action plus signed standalone CLI', 'Read-only organization/repository permissions', 'Raw JSON, human-readable HTML/PDF, timestamps, API endpoints, hashes, and collection manifest', 'Explicit framework/rule versioning and disclaimer', 'Local artifact generation with optional customer-owned storage', 'Fixture tests against GitHub API versions and permission tiers', 'Consultant-friendly multi-repository batch mode only after paid request'],
    exclude: ['Certification claims', 'Always-on dashboard', 'Employee monitoring', 'Secret storage', 'Custom auditor consulting', 'Broad GRC workflows', 'AI-written control narratives'],
    pricing: ['Concierge evidence pack test: $249 once', 'Annual CLI/action hypothesis: $199–$499 per organization', 'Consultant batch license hypothesis: $1,500–$3,000/year', 'Do not copy $99/month until repeat monthly value is proven'],
    distribution: ['Virtual CISO and SOC 2 consultant pilots', 'GitHub Marketplace action', 'Free repository-control checklist', 'Open-source two-check core', 'Auditor-ready sample artifact', 'Partnerships with boutique compliance firms'],
    buyers: ['Drata', 'Secureframe', 'Vanta', 'Thoropass', 'Sprinto', 'GitHub security vendors', 'Virtual-CISO platforms'],
    acquisitionCase: 'A buyer gets a low-friction evidence collector, consultant channel, rule mappings, and small-team customers that can be upgraded into a broader compliance platform.',
    moat: ['Accepted auditor artifact examples', 'Consultant referral network', 'Versioned rule and API fixture corpus', 'Cross-framework mapping history'],
    maintenance: {
      build: 'Estimated 6–10 weeks for a narrow GitHub-controls packet and signed release pipeline.',
      ownerHours: 'Target 3–8 hours/month; evidence mappings and support make this higher than Forge DocLint.',
      tasks: ['Track GitHub API/permission changes', 'Version mappings and disclaimers', 'Maintain signed binaries/actions', 'Investigate auditor and plan-specific edge cases'],
      automation: ['Recorded API fixtures', 'Scheduled action smoke tests', 'Reproducible signed builds', 'Artifact schema validation'],
      danger: 'Reject the business if customers expect audit opinions or custom evidence mapping.'
    },
    validation: {
      steps: ['Interview ten first-time SOC 2 teams and ten virtual CISOs.', 'Manually produce five evidence packs from customer-owned exports.', 'Charge $249 for the concierge packet before automating.', 'Have two independent auditors or consultants review the output format.', 'Test annual versus per-audit payment.'],
      gate: 'Proceed only with five paid teams, two consultant referral agreements, and written confirmation that the evidence format was accepted or materially reduced collection time.',
      stop: 'Stop if full platforms already satisfy the workflow, auditors reject portable evidence, or every sale requires custom control consulting.'
    },
    milestones: ['Proof: 5 paid packs and 2 consultant channels', 'Product: 20 annual organizations', 'Operational: under 8 support hours/month', 'Exit-ready: $3k MRR-equivalent and repeat consultant referrals'],
    sources: ['https://github.com/marketplace?query=audit%20evidence', 'https://github.com/marketplace/actions/github-soc2-audit-evidence-exporter', 'https://github.com/marketplace/actions/audit-packs', 'https://tiny.com/sell-your-audit-and-reporting-software-business']
  },
  {
    id: 'residue',
    rank: 3,
    name: 'Shopify Theme Residue Intelligence',
    category: 'Agency-first theme audit and fingerprint data',
    score: { current: 7.3, ceiling: 8.9 },
    status: 'Interesting new category; direct entrant arrived first',
    oneLiner: 'Give Shopify agencies a read-only report of code left by uninstalled apps, with evidence and safe manual cleanup guidance.',
    verdict: 'Do not build one-click cleanup. Validate a white-label agency audit and app-signature dataset because Residue launched the exact consumer cleanup product on July 3, 2026 with no reviews yet.',
    fit: ['Shopify has built-in marketplace billing and an active app acquisition ecosystem.', 'The report can begin read-only and use customer-created theme copies.', 'A fingerprint database can become a transferable data asset.', 'Agencies can distribute across many stores and reduce consumer support.'],
    observedEvidence: [
      'Residue launched July 3, 2026 at $49/year and showed no reviews when checked July 16.',
      'Residue promises free scanning, app attribution, one-click cleanup, automatic theme backup, reversibility, and regular alerts.',
      'Rewind Backups showed 608 reviews; Theme Updater & Backups showed 253; TinyBackup showed 46; Media Cleanup showed 10.',
      'Shop Circle has a public acquisition process and seller stories, and its site advertised a $100 million credit facility for software acquisitions.',
      'Shopify says developers keep 100% of the first $1 million in gross app revenue from January 1, 2025, subject to a 2.9% processing fee.'
    ],
    inferences: ['Agency audit reports may avoid the trust burden of automatic deletion.', 'A growing app-signature corpus is more defensible than the scanner UI.', 'Residue may validate the category—or may reveal that merchants will not pay. Its zero reviews are not evidence either way.'],
    competitors: [
      { name: 'Residue', price: '$49/year', signal: 'Launched July 3, 2026 · 0 reviews at check', strength: 'Exact leftover-code scan, app attribution, backup, reversible one-click cleanup, alerts.', opening: 'Agency white-label reports, no automatic deletion, confidence scoring, and transferable signature data.', url: 'https://apps.shopify.com/search?q=uninstalled%20app%20leftover%20code%20scanner%20cleanup' },
      { name: 'Rewind Backups', price: 'Free trial; tiered paid plans', signal: '608 Shopify App Store reviews · 4.3/5', strength: 'Mature automated store backup and restore.', opening: 'Residue identification and agency evidence, not broad backup.', url: 'https://apps.shopify.com/backup' },
      { name: 'Theme Updater & Backups', price: 'Free plan available', signal: '253 reviews · 4.1/5', strength: 'Theme updates, sections, and backups from a known theme vendor.', opening: 'Cross-vendor app residue fingerprinting and audit exports.', url: 'https://apps.shopify.com/theme-updater-by-out-of-the-sandbox' },
      { name: 'Media Cleanup', price: 'Free plan available', signal: '10 reviews · 4.6/5', strength: 'Finds and deletes unused media.', opening: 'Shows merchants will install cleanup utilities, but does not prove code-residue spend.', url: 'https://apps.shopify.com/search?q=uninstalled%20app%20leftover%20code%20scanner%20cleanup' }
    ],
    risks: ['False positives can break storefronts or destroy trust.', 'Theme and app signatures change continuously.', 'Residue already owns the clearest wording and core feature set.', 'Shopify API/theme permission changes require monitoring.', 'Agency customers may demand manual cleanup services.'],
    requirements: ['Read-only scan of a duplicate/unpublished theme', 'Evidence snippet, file path, app attribution confidence, and manual explanation', 'No deletion in v1', 'White-label HTML/PDF report and CSV', 'Versioned signature library with provenance and confidence', 'Theme parser fixtures and known-good/known-bad samples', 'Agency workspace only after five paid manual audits'],
    exclude: ['One-click deletion', 'Storefront performance guarantee', 'Live theme modification', 'Custom cleanup service', 'All-app universal attribution claim', 'AI-generated fixes'],
    pricing: ['$49–$99 one-off agency audit test', '$39–$79/month agency batch hypothesis', 'Per-store credits before unlimited plans', 'Do not undercut Residue until agencies show a distinct workflow'],
    distribution: ['Shopify agencies and freelancers', 'Free read-only single-theme scan', 'Before/after audit report examples', 'Theme vendors', 'Storetasker-style expert networks', 'Performance and migration consultants'],
    buyers: ['Shop Circle', 'Rewind', 'Out of the Sandbox', 'Shopify performance-app vendors', 'Theme vendors', 'Agency marketplaces', 'Store maintenance platforms'],
    acquisitionCase: 'A buyer gets agency distribution, a versioned app-residue fingerprint dataset, report workflow, and cross-sell into backup, theme, and performance customers.',
    moat: ['Signature corpus and provenance', 'False-positive feedback from agencies', 'Theme/app/version compatibility history', 'White-label agency distribution'],
    maintenance: {
      build: 'Estimated 8–14 weeks for a credible read-only parser, signatures, reports, fixtures, and Shopify review.',
      ownerHours: 'Target 5–12 hours/month; this conflicts more with the low-effort requirement.',
      tasks: ['Update app signatures', 'Review Shopify/theme API changes', 'Investigate false positives', 'Maintain parser fixtures and agency documentation'],
      automation: ['Corpus regression scans', 'Confidence thresholds', 'No-write permission enforcement', 'Theme fixture matrix'],
      danger: 'Stop before launch if accurate app attribution requires manual research on most scans.'
    },
    validation: {
      steps: ['Recruit ten Shopify agencies and collect 30 customer-authorized theme copies.', 'Produce manual read-only reports and measure verified precision.', 'Charge five agencies $49–$99 for a white-label audit.', 'Ask agencies whether they would buy monthly credits instead of cleanup labor.', 'Track Residue reviews, pricing, and feature changes for 90 days.'],
      gate: 'Proceed only with five paid agencies, at least 90% verified precision on high-confidence findings, and three agencies requesting a second report within 60 days.',
      stop: 'Stop if Residue earns strong adoption with the same agency workflow, attribution precision is poor, or buyers demand hands-on cleanup.'
    },
    milestones: ['Proof: 5 paid agencies and 30 themes', 'Product: 25 agencies or 250 reports', 'Operational: under 8 hours/month', 'Exit-ready: recurring agency revenue plus a defensible signature corpus'],
    sources: ['https://apps.shopify.com/search?q=uninstalled%20app%20leftover%20code%20scanner%20cleanup', 'https://apps.shopify.com/backup', 'https://shopify.dev/docs/apps/launch/distribution/revenue-share', 'https://shopcircle.co/pages/sell-your-business']
  },
  {
    id: 'facilityproof',
    rank: 4,
    name: 'FacilityProof for Churches',
    category: 'Micro-vertical inspection evidence PWA',
    score: { current: 7.2, ceiling: 8.7 },
    status: 'Strong founder fit; weak without an insurer or platform partner',
    oneLiner: 'A phone-first recurring facility inspection log that turns photos, checks, signatures, and remediation into an annual evidence packet.',
    verdict: 'This has the best founder/domain fit, but it is only worth building with a church insurer, denomination, or facility-software pilot. Free generic inspection software is a serious substitute.',
    fit: ['Sam understands church volunteer and facility reality.', 'Offline-first inspection capture can be operationally simple.', 'The workflow matches the audit/reporting category Tiny says it buys.', 'Church management, facility, and insurance platforms are plausible strategic buyers.'],
    observedEvidence: [
      'eSPACE prices its basic work-order and asset product at $99/month billed annually and includes unlimited users, 100 equipment/spaces, 50 monthly work orders, onboarding, and mobile access.',
      'SafetyCulture offers up to ten users, five active inspection templates, reports, basic tasks, and evidence history for free; Premium is $24/seat/month annually.',
      'Smart Church Solutions offers church-specific events, work orders, assets, preventive maintenance, assessments, integrations, setup, and support.',
      'Tiny publicly says it buys profitable audit/reporting software used for evidence, checklists, findings, remediation, and recurring reporting.'
    ],
    inferences: ['A focused annual evidence packet may be simpler and cheaper than eSPACE for small churches.', 'Insurance or denominational distribution is the moat; a standalone checklist app is not.', 'Church purchasing cycles and volunteer turnover can create onboarding/support work.'],
    competitors: [
      { name: 'eSPACE', price: 'Basic work order/asset plan $99/month billed annually', signal: 'Established church-specific platform; public sales unknown', strength: 'Events, work orders, assets, preventive maintenance, mobile, onboarding, many integrations.', opening: 'Inspection evidence only for small churches that do not need full facility management.', url: 'https://www.smartchurchsolutions.com/software/pricing/' },
      { name: 'SafetyCulture', price: 'Free up to 10 users/5 templates; Premium $24/seat/month annually', signal: 'Global inspection platform; customer count not used as proof', strength: 'Templates, inspections, reports, tasks, evidence history, analytics, training.', opening: 'Church-specific templates, annual board/insurer packet, simpler setup, no per-seat price.', url: 'https://safetyculture.com/pricing' },
      { name: 'MaintainX', price: 'Free and paid per-user maintenance plans', signal: 'Mature maintenance/operations platform', strength: 'Work orders, procedures, inspections, assets, team operations.', opening: 'Avoid becoming maintenance software; own only recurring evidence and remediation proof.', url: 'https://www.getmaintainx.com/pricing' },
      { name: 'Church/insurer PDF checklists', price: 'Often free', signal: 'Common substitute; usage and completion unknown', strength: 'Trusted, printable, no new software.', opening: 'Reminders, photos, signatures, carried-forward findings, and annual evidence packet.', url: 'https://www.churchmutual.com/' }
    ],
    risks: ['Free SafetyCulture and PDFs may be good enough.', 'Safety wording can create perceived liability.', 'Churches often need help setting up volunteers and templates.', 'The niche may be too small for an independent financial buyer.', 'Strategic buyers may prefer a feature partnership over acquisition.'],
    requirements: ['Installable offline-first PWA', 'Template versioning without legal/compliance guarantees', 'Photo, note, status, assignee, due date, sign-off, and remediation evidence', 'Printable annual packet plus customer-owned JSON/CSV backup', 'One church, one facility, one recurring inspection in MVP', 'No background checks, incident case management, payments, or cloud photo dependency', 'Partner co-branding only after a paid pilot'],
    exclude: ['Legal compliance certification', 'Incident/abuse reporting', 'Full work-order system', 'Asset depreciation', 'HVAC/IoT integrations', 'Custom consulting', 'Permanent cloud photo archive in v1'],
    pricing: ['$149–$299/year small-church hypothesis', '$500–$1,500/year insurer/denomination pilot hypothesis', 'Free printable sample checklist as acquisition', 'No per-volunteer seat fees'],
    distribution: ['Church insurers', 'Denominational offices', 'Church facility consultants', 'Church management software marketplaces', 'Safety and stewardship workshops', 'Annual board-report template'],
    buyers: ['Smart Church Solutions / eSPACE', 'Ministry Brands', 'Church management software companies', 'Church insurers', 'Denominational technology providers', 'SafetyCulture or vertical inspection platforms'],
    acquisitionCase: 'A strategic buyer gets a small-church inspection wedge, partner distribution, church-specific templates, and structured remediation history to add to a broader platform.',
    moat: ['Insurer-approved or partner-reviewed templates', 'Denominational distribution agreements', 'Church-specific remediation history', 'Extremely simple volunteer workflow'],
    maintenance: {
      build: 'Estimated 6–10 weeks for one offline inspection, packet export, backup, and phone testing.',
      ownerHours: 'Target 2–6 hours/month technically, but onboarding and sales can exceed this before partner distribution.',
      tasks: ['Review templates with qualified partners', 'Support device/export issues', 'Test offline storage and backups', 'Maintain browser/PWA compatibility'],
      automation: ['Offline backup reminders', 'Export regression fixtures', 'Template version checks', 'In-app guided sample inspection'],
      danger: 'Do not proceed without a partner who owns distribution and template review.'
    },
    validation: {
      steps: ['Run ten real facility inspections at five churches using a no-code prototype.', 'Ask one insurer, one denomination, and three facility consultants to review the annual packet.', 'Sell five $149 annual founding licenses before engineering the PWA.', 'Measure whether a volunteer can finish the first inspection without live help.', 'Request a written co-branded pilot or integration LOI from a strategic partner.'],
      gate: 'Proceed only with five paid churches plus one written distribution pilot from an insurer, denomination, or church-software company; at least four churches must complete a second inspection without founder help.',
      stop: 'Stop if free SafetyCulture/PDFs satisfy the workflow, partners will not review templates, or onboarding stays founder-dependent.'
    },
    milestones: ['Proof: 5 paid churches and 1 partner LOI', 'Product: 50 churches through partner distribution', 'Operational: second inspection without support', 'Exit-ready: contract/channel that a strategic buyer can inherit'],
    sources: ['https://www.smartchurchsolutions.com/software/pricing/', 'https://www.smartchurchsolutions.com/software/features/preventive-maintenance-software/', 'https://safetyculture.com/pricing', 'https://tiny.com/sell-your-audit-and-reporting-software-business']
  }
];

export const products = [
  {
    id: 'moving',
    rank: 1,
    name: 'MoveManifest',
    original: 'Moving-box QR inventory',
    score: '7 / 10',
    status: 'Conditional opportunity',
    verdict: 'Validate the moving-day workflow and partner channel before building a full product.',
    promise: 'Photograph a box, print your own QR label, and know what is loaded, delivered, and ready to open.',
    why: [
      'A move creates urgent, visual, time-limited pain.',
      'Movers, storage facilities, organizers, and realtors offer a credible distribution path.',
      'The remaining opening is moving-day speed—not generic household inventory.'
    ],
    competitors: [
      { name: 'SmartLabels', price: 'Core free; Professional $14.95/year', signal: '2,358 US ratings · 4.90/5', strength: 'Unlimited items/images, photo extraction, search, physical QR label packs.', opening: 'Printable labels, customer-owned backup, no annual fee, moving statuses.', url: 'https://www.qrsmartlabels.com/' },
      { name: 'Boxes', price: 'Free download with in-app purchase', signal: '921 US ratings · 4.84/5', strength: 'QR/NFC, photos, arbitrary labels, offline mode, sync, reports, manifests.', opening: 'Faster photo-first packing; less item-by-item typing; transparent price.', url: 'https://apps.apple.com/us/app/boxes-storage-made-simple/id1335784284' },
      { name: 'ToteScan', price: 'Physical labels plus cloud app', signal: 'Live product; sales unknown', strength: 'Photos, quantities, family sharing, PDF/CSV, US cloud storage.', opening: 'No account/cloud, printable labels, portable encrypted project.', url: 'https://totescan.com/' },
      { name: 'ElephantTrax', price: 'Label/app system with paid upgrades', signal: '399 US ratings · 4.31/5', strength: 'Recognizable QR storage workflow.', opening: 'Reliability and ownership; website was parked/for sale when checked.', url: 'https://apps.apple.com/us/app/elephanttrax-storage-tracker/id1502900545' },
      { name: 'Sortly', price: 'Free to $149/month; yearly billing', signal: '9,395 US ratings · 4.73/5', strength: 'Mature team/business inventory platform.', opening: 'Far too expensive and complex for a household move.', url: 'https://www.sortly.com/pricing/' }
    ],
    painPoints: [
      'Typing every item is too slow while packing.',
      'Customers fear losing the inventory after labeling all their boxes.',
      'Proprietary stickers create lock-in and shipping delays.',
      'Accounts and cloud photos create privacy and company-longevity concerns.',
      'Family sharing often requires another subscription or fails at the worst time.',
      'People need a human-readable fallback if the QR or phone fails.'
    ],
    better: [
      'Photograph the open box first; add detailed text later only if needed.',
      'Use packing, sealed, loaded, delivered, and priority-opened statuses.',
      'Print on plain paper or common Letter/A4 adhesive sheets.',
      'Put a readable room and box number beside every QR.',
      'Export an encrypted project file and a searchable PDF manifest.',
      'Keep the MVP local: QR IDs work after the project is imported on a device.'
    ],
    exclude: ['Physical-label fulfillment', 'Permanent cloud photo hosting', 'Live multi-user sync', 'Business stock control', 'Insurance valuation', 'AI object-recognition APIs'],
    pricing: ['Free: 12 boxes and one basic label sheet', 'Household: test $19–$25 lifetime', 'Professional organizer: test $79–$129', 'Partner bundles: negotiated bulk license codes'],
    marketing: [
      'Free 12-label generator',
      'Moving checklist by move date',
      'First-night box checklist',
      'Printable room-color labels',
      'Storage-unit and college-move inventory sheets',
      '15–30 second scan/search demonstrations for Shorts, TikTok, and Pinterest'
    ],
    searchTerms: ['QR labels for moving boxes', 'Printable moving-box QR labels', 'Photo inventory for moving', 'Find items after moving', 'Storage-bin inventory without subscription', 'Moving manifest template'],
    partners: ['Independent movers', 'Self-storage facilities', 'Professional organizers', 'Realtors and apartment locators', 'Senior-move managers', 'College and military-relocation publishers'],
    buyers: ['Moving and storage brands', 'Household inventory companies', 'Label/paper manufacturers', 'Professional-organizer software', 'Real-estate and homeowner platforms'],
    saleStory: 'We own a photo-first moving workflow and distribute it through organizations already present during a move.',
    validation: {
      steps: ['Build a free 12-label generator.', 'Create a clickable photo-first packing prototype.', 'Observe five households pack one real box each.', 'Contact 20 movers or professional organizers with a co-branded pilot.', 'Offer a real $19 early-access purchase.'],
      gate: 'Proceed only with paid consumer evidence or one real partner pilot, and only if a box can be captured in under 30 seconds.',
      stop: 'Stop if users prefer Boxes/SmartLabels or require effortless live family sync.'
    }
  },
  {
    id: 'payday',
    rank: 2,
    name: 'Paycheck Decision Tool',
    original: 'Payday cash-flow calendar',
    score: '6.5 / 10',
    status: 'Generic concept is a no-go',
    verdict: 'Test a narrow “lowest balance before next paycheck” calculator—not another full budgeting calendar.',
    promise: 'See your lowest projected balance before payday and test whether a purchase fits.',
    why: [
      'The timing problem is real and repeatedly described in reviews and government guidance.',
      'A free calculator is cheap to test and can acquire high-intent visitors.',
      'A white-label embed may be more saleable than another consumer app.'
    ],
    competitors: [
      { name: 'Wallet Forecast', price: '$49.99 lifetime; also weekly/monthly/yearly', signal: '6 US ratings · 4.0/5', strength: 'No bank login, account, or servers; daily forecasts and purchase planning.', opening: 'Paycheck-specific recurrence, auditable arithmetic, and distribution—not privacy.', url: 'https://apps.apple.com/us/app/wallet-forecast-cash-flow/id6752968405' },
      { name: 'BalanceCast', price: '$8.99 Premium', signal: '1 US rating; released July 2026', strength: 'Lowest upcoming balance and “when can I afford this?” planner.', opening: 'Very new and traction unknown; severe price pressure.', url: 'https://apps.apple.com/us/app/balancecast-budget-forecast/id6782167965' },
      { name: 'Dollarbird', price: '$7.99/month or $59.99/year Pro', signal: '3,471 US ratings · 4.69/5', strength: 'Polished calendar forecasting, collaboration, cloud sync.', opening: 'Repeated subscription-price complaints and unnecessary-feature fatigue.', url: 'https://apps.apple.com/us/app/dollarbird-budget-calendar/id1214299218' },
      { name: 'CalendarBudget', price: '$11.99/month or $89.99/year', signal: 'Established first-party product', strength: 'Day-by-day balances, long forecasts, reports, imports, bank connect.', opening: 'Focused setup, no account/bank link, and one-time purchase.', url: 'https://calendarbudget.com/' },
      { name: 'Cashflow Calendar', price: '$4.99 Pro; optional $3.99/month', signal: '4 US ratings · 2.5/5', strength: 'Future balances and what-if events.', opening: 'Reviews report recurrence and occurrence-editing defects.', url: 'https://apps.apple.com/us/app/cashflow-calendar/id1573469723' },
      { name: 'Buckets', price: '$64 one time', signal: 'Live private/local budgeting product', strength: 'Proves no-subscription private finance software can be sold.', opening: 'Envelope budgeting is broader and not payday-timing focused.', url: 'https://www.budgetwithbuckets.com/' }
    ],
    painPoints: [
      'Monthly totals hide the day a balance goes negative before payday.',
      'Repeated subscription increases anger users of money-saving products.',
      'Many people do not want to connect bank accounts.',
      'Biweekly and semimonthly schedules are commonly implemented incorrectly.',
      'Wrong or changing forecasts destroy trust immediately.',
      'Phone spreadsheets are awkward, fragile, and difficult to audit.'
    ],
    better: [
      'Lead with one answer: lowest balance before the next paycheck.',
      'Explain every projected number in a chronological ledger.',
      'Handle weekly, biweekly, semimonthly, month-end, and variable pay correctly.',
      'Allow skip, move, or edit-one-occurrence behavior.',
      'Compare a proposed purchase before and after, including earliest projected safe date.',
      'Use local autosave plus prominent customer-controlled backup.'
    ],
    exclude: ['Bank connections', 'Lending or overdraft products', 'AI categorization', 'Investment/debt advice', 'Money movement', 'Cloud sync', 'Small-business accounting'],
    pricing: ['Free: one unsaved “Can I afford this?” scenario', 'Consumer: test $19 versus $29 once', '$39–$49 only after proving superior reliability and portability', 'B2B embed: test $500–$1,500/year after a real request'],
    marketing: ['Free lowest-balance calculator', 'Biweekly versus semimonthly schedule calculator', 'Printable/Sheets paycheck calendar', 'Dollarbird and CalendarBudget alternative pages', 'Short demos showing a purchase moving the low point', 'White-label calculator for publishers and counselors'],
    searchTerms: ['Paycheck budget planner', 'Biweekly paycheck calculator', 'Semimonthly paycheck budget', 'Bill calendar by paycheck', 'Budget app without bank connection', 'Personal cash-flow forecast'],
    partners: ['Credit unions and community banks', 'Credit counselors', 'Finance educators and newsletters', 'Payroll and benefit brokers', 'EAP/financial-wellness providers', 'Shift-worker and gig-worker publishers'],
    buyers: ['Budgeting and personal-finance companies', 'Payroll and employee-benefit platforms', 'Credit-union technology providers', 'Finance publishers', 'Cash-flow and earned-wage products'],
    saleStory: 'We bring a rigorously tested paycheck-cycle engine, high-intent calculator traffic, and partner embeds without storing customer financial data.',
    validation: {
      steps: ['Create three message variants: lowest balance, can-I-afford-this, and private forecast.', 'Test $19, $29, and $49 refundable preorders.', 'Send about 300 qualified visitors.', 'Run 15 concierge pilots across biweekly, semimonthly, and variable pay.', 'Contact 30 credit unions, counselors, benefits brokers, or publishers.'],
      gate: 'Proceed only with 10 paid preorders from non-friends or two written B2B pilot LOIs, plus calculation agreement on every tested scenario.',
      stop: 'Email signups alone do not count. Keep the calculator as useful content or stop.'
    }
  },
  {
    id: 'pattern',
    rank: 3,
    name: 'PatternPrint QA',
    original: 'Exact-scale poster/PDF tiler',
    score: '6 / 10',
    status: 'Generic concept is a no-go',
    verdict: 'Validate a professional scale-verification workflow; do not clone a poster tiler.',
    promise: 'Print scale-critical patterns correctly by calibrating against a known measurement.',
    why: [
      'Generic tiling is crowded and price-compressed to free–$14.99.',
      'Woodworking and craft tools show willingness to pay for accuracy.',
      'The remaining opportunity is QA, not decorative poster creation.'
    ],
    competitors: [
      { name: 'Docuslice', price: 'Free; $9.99 or $14.99 one time', signal: '212 US ratings · 4.679/5; site claims broader aggregate', strength: 'PDF/image/SVG, exact size, vectors, editing, web/mobile/desktop.', opening: 'Reference-length scaling, X/Y profiles, selective print QA.', url: 'https://docuslice.com/' },
      { name: 'PosterTile', price: '$4.99 one-time Pro', signal: 'Released July 11, 2026; no rating sample', strength: 'True-size output, calibration page, offline/no data, Letter/A4/A3.', opening: 'New iPhone/photo tool; no stated professional PDF/SVG QA workflow.', url: 'https://apps.apple.com/us/app/postertile-big-poster-print/id6788100755' },
      { name: 'BigPrint', price: '$22 one time', signal: 'Live first-party Windows product', strength: 'Known-reference scaling, printer compensation, grids, measurement, ink saving.', opening: 'Windows-only and dated UX; best benchmark for our niche.', url: 'https://woodgears.ca/bigprint/' },
      { name: 'Rapid Resizer', price: '$39–$119/year', signal: 'Professional craft product; sales unknown', strength: 'Full-size craft patterns, stencils, design tools, material features.', opening: 'Higher recurring price and cloud/account workflow.', url: 'https://www.rapidresizer.com/' },
      { name: 'Poster Printing', price: 'Free with paid unlocks', signal: '400 US ratings · 4.56/5', strength: 'Mobile target-size image printing.', opening: 'Letter export, stability, color control, and transparent purchase.', url: 'https://apps.apple.com/us/app/poster-printing/id1565582111' },
      { name: 'Rasterbator', price: 'Free', signal: '42M+ self-reported completed jobs', strength: 'Very well-known image-to-multipage PDF utility.', opening: 'Not designed around exact professional scale or local pattern QA.', url: 'https://rasterbator.net/' }
    ],
    painPoints: [
      'Printer drivers silently apply Fit/Shrink and ruin physical scale.',
      'A4 and Letter conversions confuse pattern customers.',
      'Users waste material when one or two percent of scale error changes a cut.',
      'Blank sheets and full-color tiles waste paper and ink.',
      'Reprinting one damaged tile is often awkward.',
      'Accounts, ads, and split unlocks interrupt a one-time utility task.'
    ],
    better: [
      'Let the user click two points and enter the required real measurement.',
      'Save separate X and Y calibration by printer, driver, paper, and orientation.',
      'Include a final ruler/check square and explicit “100%, never Fit” instructions.',
      'Suppress blank tiles and export only selected damaged/missing pages.',
      'Offer per-project or per-tile grayscale and ink-lightening controls.',
      'Preserve vectors where safely supported and disclose any raster fallback.'
    ],
    exclude: ['Full graphic editor', 'Direct printer control', 'Cloud projects', 'AI upscaling', 'Pattern marketplace', 'Print-shop fulfillment', 'CAD/DXF in v1'],
    pricing: ['Free: calibration and page-count tools', 'Professional pattern QA: test $19–$29 once', 'Do not compete as a generic $5–$15 poster app', 'Creator/lab licensing only after repeated demand'],
    marketing: ['Printer calibration test page', 'A4-to-Letter pattern checker', 'Physical PDF-size inspector', 'Woodworking 1:1 printing guide', 'Sewing test-square troubleshooting', 'Creator referral instructions bundled with pattern PDFs'],
    searchTerms: ['Print PDF actual size multiple pages', 'Print woodworking plan 1 to 1', 'Sewing pattern test square wrong size', 'A0 sewing pattern on Letter paper', 'Print cosplay pattern to scale', 'Printer calibration test page PDF'],
    partners: ['Woodworking plan creators', 'Sewing and quilting pattern sellers', 'Stained-glass and scroll-saw designers', 'Cosplay template makers', 'Makerspaces and libraries', 'Craft educators and YouTubers'],
    buyers: ['PDF utility companies', 'Craft and cutting-machine ecosystems', 'Printer manufacturers', 'Pattern marketplaces', 'Design platforms'],
    saleStory: 'We own the scale-critical pattern audience and a measured calibration engine—not merely another PDF tiler.',
    validation: {
      steps: ['Build one reference-measurement and X/Y calibration prototype.', 'Benchmark the same file against Acrobat, Docuslice, PosterTile, and BigPrint.', 'Run measured print tests with ten pattern professionals.', 'Recruit ten pattern creators for a tracked pilot.', 'Offer a real $19 deposit or preorder.'],
      gate: 'Proceed only if users pay at least $19 and the prototype materially reduces completion time or measured errors.',
      stop: 'Stop if Docuslice or BigPrint performs equivalently or users only want free decorative posters.'
    }
  }
];

export const exitPlan = {
  headline: 'A buyer purchases proof and distribution—not just source code.',
  buildForTransfer: ['Separate domain and brand', 'Clean repository and automated tests', 'Transferable checkout and analytics', 'Support and release procedures', 'Dependency and license inventory', 'Privacy policy and terms', 'Monthly P&L and owner-time log'],
  metrics: ['Trailing 12-month net revenue', 'Sales by organic, partner, affiliate, and paid source', 'Visit-to-purchase conversion', 'Refund and chargeback rate', 'Support tickets per 100 customers', 'Owner hours per month', 'Partner concentration', 'Product failure rate'],
  triggers: ['6–12 months of stable sales', 'Majority organic or referral acquisition', 'Owner time below four hours monthly', 'Low support and refund rates', 'At least one repeatable partner channel', 'Clean IP and dependency records', 'A buyer-specific integration demo'],
  approach: ['Map 20 strategic buyers each quarter.', 'Identify the adjacent feature each buyer lacks.', 'Lead with a referral pilot, bundle, embed, or SDK.', 'Measure incremental value for the partner.', 'Discuss acquisition only after ownership is simpler than continuing the partnership.']
};

export const researchNotes = [
  'Observed facts came from first-party pricing pages, App Store listings, public review feeds, and government guidance on July 16, 2026.',
  'Ratings and counters indicate attention—not sales, profitability, or active customers.',
  'Prices, validation thresholds, scores, and buyer lists are hypotheses unless explicitly observed.',
  'The research does not include audited competitor revenue, formal keyword-volume data, legal clearance, or paid customer interviews.'
];
