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
