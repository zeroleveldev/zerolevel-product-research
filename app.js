import { products, exitPlan, researchNotes } from './content.js';

const reviewedKey = 'zerolevel-research-reviewed-v1';

function list(items, className = 'clean-list') {
  return `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
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
        <div><dt>Attention signal</dt><dd>${item.signal}</dd></div>
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

function saveReviewed(reviewed) {
  localStorage.setItem(reviewedKey, JSON.stringify([...reviewed]));
}

const reviewed = loadReviewed();

function reviewButton(product) {
  const isReviewed = reviewed.has(product.id);
  return `
    <div class="review-control">
      <span class="review-state">${isReviewed ? 'Saved as reviewed on this phone.' : 'Mark this section when you finish it.'}</span>
      <button type="button" class="review-button" data-product-id="${product.id}" data-reviewed="${isReviewed}">
        ${isReviewed ? '✓ Reviewed' : 'Mark reviewed'}
      </button>
    </div>`;
}

function renderProduct(product) {
  const shell = document.querySelector(`[data-product="${product.id}"]`);
  if (!shell) return;

  shell.innerHTML = `
    <div class="product-header">
      <div>
        <div class="product-number">OPTION ${String(product.rank).padStart(2, '0')}</div>
        <p class="section-kicker">${product.original.toUpperCase()}</p>
        <h2>${product.name}</h2>
        <p class="product-promise">${product.promise}</p>
      </div>
      <div class="product-meta">
        <span class="badge">${product.score}</span>
        <span class="badge ${product.status.includes('no-go') ? 'stop' : 'conditional'}">${product.status}</span>
      </div>
    </div>
    <div class="verdict"><strong>Bottom line</strong>${product.verdict}</div>
    <div class="why-grid">${product.why.map((reason, index) => `<article class="why-card"><span>WHY ${index + 1}</span><p>${reason}</p></article>`).join('')}</div>
    <div class="detail-stack" data-detail-stack></div>
    ${reviewButton(product)}
  `;

  const stack = shell.querySelector('[data-detail-stack]');
  stack.append(
    detail('Competitors and current pricing', competitorCards(product.competitors), true),
    detail('Customer pain points', list(product.painPoints)),
    detail('What we would do better', `${list(product.better)}<h4>Keep out of version one</h4>${list(product.exclude, 'clean-list exclusion-list')}`),
    detail('Pricing and packaging', list(product.pricing)),
    detail('Marketing and search opportunities', `<div class="two-col"><div class="subcard"><h4>Marketing assets</h4>${list(product.marketing)}</div><div class="subcard"><h4>Search language</h4>${list(product.searchTerms)}</div></div>`),
    detail('Partners, scaling, and potential buyers', `<div class="two-col"><div class="subcard"><h4>Distribution partners</h4>${list(product.partners)}</div><div class="subcard"><h4>Buyer categories</h4>${list(product.buyers)}</div></div><div class="validation-gate"><strong>Sale story:</strong> ${product.saleStory}</div>`),
    detail('Validation plan and build gate', `<ol>${product.validation.steps.map((step) => `<li>${step}</li>`).join('')}</ol><div class="validation-gate"><strong>Proceed only if:</strong> ${product.validation.gate}</div><div class="stop-rule"><strong>Stop rule:</strong> ${product.validation.stop}</div>`)
  );
}

function renderExitPlan() {
  document.querySelector('#exit-headline').textContent = exitPlan.headline;
  const sections = [
    ['Build for transfer', exitPlan.buildForTransfer],
    ['Metrics a buyer can verify', exitPlan.metrics],
    ['When to contact buyers', exitPlan.triggers],
    ['Partnership-to-acquisition path', exitPlan.approach]
  ];
  document.querySelector('#exit-content').innerHTML = sections.map(([title, items]) => `<article class="exit-card"><h3>${title}</h3>${list(items)}</article>`).join('');
}

function renderNotes() {
  document.querySelector('#research-notes').innerHTML = researchNotes.map((note) => `<li>${note}</li>`).join('');
}

function wireControls() {
  document.querySelector('#expand-all').addEventListener('click', () => {
    document.querySelectorAll('.product-shell details').forEach((element) => { element.open = true; });
  });
  document.querySelector('#collapse-all').addEventListener('click', () => {
    document.querySelectorAll('.product-shell details').forEach((element) => { element.open = false; });
  });
  document.querySelectorAll('.review-button').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.productId;
      if (reviewed.has(id)) reviewed.delete(id); else reviewed.add(id);
      saveReviewed(reviewed);
      const selected = products.find((product) => product.id === id);
      if (selected) renderProduct(selected);
      wireReviewButton(id);
    });
  });
}

function wireReviewButton(id) {
  const button = document.querySelector(`.review-button[data-product-id="${id}"]`);
  if (!button) return;
  button.addEventListener('click', () => {
    if (reviewed.has(id)) reviewed.delete(id); else reviewed.add(id);
    saveReviewed(reviewed);
    const selected = products.find((product) => product.id === id);
    if (selected) renderProduct(selected);
    wireReviewButton(id);
  });
}

products.forEach(renderProduct);
renderExitPlan();
renderNotes();
wireControls();
