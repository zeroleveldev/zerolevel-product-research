import {
  acquisitionIdeas,
  candidateUniverse,
  scoringModel,
  strategy,
  products,
  exitPlan,
  researchNotes
} from './content.js';

const reviewedKey = 'zerolevel-acquisition-reviewed-v2';

function list(items, className = 'clean-list') {
  return `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function numbered(items) {
  return `<ol>${items.map((item) => `<li>${item}</li>`).join('')}</ol>`;
}

function links(items) {
  return `<ul class="source-list">${items.map((url, index) => `<li><a href="${url}" target="_blank" rel="noreferrer">Source ${index + 1}</a><small>${url}</small></li>`).join('')}</ul>`;
}

function detail(title, body, open = false) {
  const element = document.createElement('details');
  element.open = open;
  element.innerHTML = `<summary>${title}</summary><div class="detail-body">${body}</div>`;
  return element;
}

function competitorCards(competitors) {
  return `<div class="competitor-list">${competitors.map((item) => `
    <article class="competitor">
      <div class="competitor-head">
        <a href="${item.url}" target="_blank" rel="noreferrer">${item.name}</a>
        <span class="competitor-price">${item.price}</span>
      </div>
      <dl>
        <div><dt>Observed signal</dt><dd>${item.signal}</dd></div>
        <div><dt>What it does well</dt><dd>${item.strength}</dd></div>
        <div><dt>Possible opening</dt><dd>${item.opening}</dd></div>
      </dl>
    </article>`).join('')}</div>`;
}

function loadReviewed() {
  try {
    const value = JSON.parse(localStorage.getItem(reviewedKey) || '[]');
    return new Set(Array.isArray(value) ? value : []);
  } catch {
    return new Set();
  }
}

const reviewed = loadReviewed();

function reviewControl(idea) {
  const done = reviewed.has(idea.id);
  return `<div class="review-control">
    <span class="review-state">${done ? 'Saved as reviewed on this phone.' : 'Mark this section when you finish it.'}</span>
    <button type="button" class="review-button" data-idea-id="${idea.id}" aria-pressed="${done}">${done ? '✓ Reviewed' : 'Mark reviewed'}</button>
  </div>`;
}

function renderStrategy() {
  const root = document.querySelector('#strategy-content');
  root.innerHTML = `
    <div class="strategy-score">
      <div><span>Research score</span><strong>${strategy.currentScore}/10</strong></div>
      <div><span>Conditional ceiling</span><strong>${strategy.provenCeiling}/10</strong></div>
    </div>
    <div class="verdict"><strong>Recommendation</strong>${strategy.recommendation}</div>
    <div class="reality-check"><strong>Reality check</strong><p>${strategy.realityCheck}</p></div>
    <div class="two-col">
      <article class="subcard"><h3>Why this lane wins</h3>${list(strategy.whyThisLane)}</article>
      <article class="subcard"><h3>Non-negotiables</h3>${list(strategy.nonNegotiables)}</article>
    </div>
    <div class="validation-gate"><strong>Exit conversation gate:</strong> ${strategy.exitGate}</div>
    <details><summary>Strategy sources</summary><div class="detail-body">${links(strategy.sources)}</div></details>`;
}

function renderIdea(idea) {
  const shell = document.querySelector(`[data-idea="${idea.id}"]`);
  if (!shell) return;

  shell.innerHTML = `
    <div class="product-header">
      <div>
        <div class="product-number">FINALIST ${String(idea.rank).padStart(2, '0')}</div>
        <p class="section-kicker">${idea.category.toUpperCase()}</p>
        <h2>${idea.name}</h2>
        <p class="product-promise">${idea.oneLiner}</p>
      </div>
      <div class="product-meta">
        <span class="badge">${idea.score.current} / 10 now</span>
        <span class="badge conditional">${idea.score.ceiling} ceiling</span>
      </div>
    </div>
    <div class="verdict"><strong>Bottom line</strong>${idea.verdict}</div>
    <div class="status-line"><strong>Status:</strong> ${idea.status}</div>
    <div class="why-grid">${idea.fit.map((reason, index) => `<article class="why-card"><span>FIT ${index + 1}</span><p>${reason}</p></article>`).join('')}</div>
    <div class="detail-stack" data-detail-stack></div>
    ${reviewControl(idea)}
  `;

  const stack = shell.querySelector('[data-detail-stack]');
  stack.append(
    detail('Competitors, pricing, and openings', competitorCards(idea.competitors), true),
    detail('Observed evidence vs. inference', `<div class="two-col"><article class="subcard observed"><h4>Observed</h4>${list(idea.observedEvidence)}</article><article class="subcard inferred"><h4>Inference / hypothesis</h4>${list(idea.inferences)}</article></div>`),
    detail('Requirements and strict version-one boundary', `<h4>Required</h4>${list(idea.requirements)}<h4>Exclude</h4>${list(idea.exclude, 'clean-list exclusion-list')}`),
    detail('Risks and reasons this may fail', list(idea.risks, 'clean-list risk-list')),
    detail('Pricing and distribution', `<div class="two-col"><article class="subcard"><h4>Pricing tests</h4>${list(idea.pricing)}</article><article class="subcard"><h4>Distribution</h4>${list(idea.distribution)}</article></div>`),
    detail('Build effort and ongoing maintenance', `<p><strong>Build estimate:</strong> ${idea.maintenance.build}</p><p><strong>Owner-hour target:</strong> ${idea.maintenance.ownerHours}</p><div class="two-col"><article class="subcard"><h4>Recurring tasks</h4>${list(idea.maintenance.tasks)}</article><article class="subcard"><h4>Automate before launch</h4>${list(idea.maintenance.automation)}</article></div><div class="stop-rule"><strong>Maintenance stop rule:</strong> ${idea.maintenance.danger}</div>`),
    detail('Moat, strategic buyers, and acquisition case', `<div class="two-col"><article class="subcard"><h4>Defensibility</h4>${list(idea.moat)}</article><article class="subcard"><h4>Potential strategic buyers</h4>${list(idea.buyers)}</article></div><div class="validation-gate"><strong>Acquisition case:</strong> ${idea.acquisitionCase}</div>`),
    detail('Validation plan, gates, and milestones', `${numbered(idea.validation.steps)}<div class="validation-gate"><strong>Proceed only if:</strong> ${idea.validation.gate}</div><div class="stop-rule"><strong>Stop rule:</strong> ${idea.validation.stop}</div><h4>Milestones</h4>${list(idea.milestones)}`),
    detail('Direct research sources', links(idea.sources))
  );
}

function renderScorecard() {
  document.querySelector('#scoring-model').innerHTML = `
    <div class="scoring-box"><h3>Scoring weights</h3><p>${scoringModel.description}</p>
      <div class="weight-list">${Object.entries(scoringModel.weights).map(([name, value]) => `<div><span>${name}</span><strong>${value}%</strong></div>`).join('')}</div>
      <p class="model-rule">${scoringModel.rule}</p>
    </div>`;

  document.querySelector('#universe-list').innerHTML = candidateUniverse.map((item) => `
    <article class="universe-item">
      <span class="universe-rank">${String(item.rank).padStart(2, '0')}</span>
      <div><h3>${item.name}</h3><p>${item.reason}</p><small>${item.decision}</small></div>
      <strong class="universe-score">${item.score}</strong>
    </article>`).join('');
}

function renderExitPlan() {
  document.querySelector('#exit-headline').textContent = 'The goal is not zero operation. The goal is a measured, documented operation that can be handed off without Sam.';
  const sections = [
    ['Build for transfer', [...exitPlan.buildForTransfer, 'Marketplace/vendor accounts with transfer checklist', 'Contractor-ready support inbox and response templates']],
    ['Metrics a buyer can verify', [...exitPlan.metrics, 'Gross and net retention', 'Trial-to-paid and second-use rate']],
    ['When to contact buyers', ['At least $3,000 MRR or 75 paying organizations', 'Six months of retention cohorts', 'Owner time below four hours/month', 'No customer above 15% of revenue', 'Automated tests and incident history', 'Clean IP, security, privacy, and dependency records']],
    ['Acquisition preparation', ['Maintain a buyer map from day one', 'Send quarterly product updates to partner relationships—not sale pitches', 'Record every recurring task and support exception', 'Use contractors only through transferable agreements', 'Prepare a 30-day handoff plan and buyer-specific integration demo']]
  ];
  document.querySelector('#exit-content').innerHTML = sections.map(([title, items]) => `<article class="exit-card"><h3>${title}</h3>${list(items)}</article>`).join('');
}

function renderArchive() {
  document.querySelector('#archive-content').innerHTML = products.map((product) => `
    <article class="archive-card">
      <div><strong>${product.name}</strong><small>${product.original}</small></div>
      <span>${product.score}</span>
      <p>${product.verdict}</p>
    </article>`).join('');
}

function renderNotes() {
  const notes = [
    'Observed facts were checked against first-party documentation, marketplace listings, pricing pages, acquisition announcements, and acquirer pages on July 16, 2026.',
    'Install counts, stars, reviews, and acquisition announcements do not establish competitor revenue, profit, churn, or deal price.',
    'Scores are a weighted research judgment. Pricing hypotheses, owner-hour estimates, conversion gates, and buyer lists remain unproven until customers or buyers confirm them.',
    'Tiny explicitly describes real profit and customer trust as acquisition fit. Therefore no unbuilt idea receives a 10/10.',
    'The research did not include paid keyword-volume tools, private marketplace financials, legal opinions, security review, customer interviews, or buyer LOIs.',
    ...researchNotes.slice(1)
  ];
  document.querySelector('#research-notes').innerHTML = notes.map((note) => `<li>${note}</li>`).join('');
}

function wireControls() {
  document.querySelector('#expand-all').addEventListener('click', () => {
    document.querySelectorAll('.idea-shell details').forEach((element) => { element.open = true; });
  });
  document.querySelector('#collapse-all').addEventListener('click', () => {
    document.querySelectorAll('.idea-shell details').forEach((element) => { element.open = false; });
  });
  document.querySelector('#idea-sections').addEventListener('click', (event) => {
    const button = event.target.closest('.review-button');
    if (!button) return;
    const id = button.dataset.ideaId;
    if (reviewed.has(id)) reviewed.delete(id); else reviewed.add(id);
    try { localStorage.setItem(reviewedKey, JSON.stringify([...reviewed])); } catch { /* Private mode may block storage. */ }
    const selected = acquisitionIdeas.find((idea) => idea.id === id);
    if (selected) renderIdea(selected);
  });
}

renderStrategy();
acquisitionIdeas.forEach(renderIdea);
renderScorecard();
renderExitPlan();
renderArchive();
renderNotes();
wireControls();
