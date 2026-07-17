import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);

async function read(name) {
  return readFile(new URL(name, root), 'utf8');
}

test('page is phone-first and accessible', async () => {
  const html = await read('index.html');
  assert.match(html, /name="viewport" content="width=device-width, initial-scale=1"/);
  assert.match(html, /class="skip-link"/);
  assert.match(html, /<main[^>]+id="main-content"/);
  assert.match(html, /aria-label="Research sections"/);
});

test('page leads with the acquisition-first decision and honest score limits', async () => {
  const html = await read('index.html');
  for (const id of ['overview', 'strategy', 'doclint', 'github-proof', 'residue', 'facilityproof', 'scorecard', 'exit-plan', 'original-archive', 'sources']) {
    assert.match(html, new RegExp(`id="${id}"`), `Missing section: ${id}`);
  }
  assert.match(html, /No honest 10\/10 exists yet/);
  assert.match(html, /Forge micro-app portfolio first/);
});

test('deep research data covers four acquisition-first finalists', async () => {
  const { acquisitionIdeas } = await import('../content.js');
  assert.deepEqual(acquisitionIdeas.map((idea) => idea.id), ['doclint', 'github-proof', 'residue', 'facilityproof']);

  const competitors = acquisitionIdeas.flatMap((idea) => idea.competitors.map((item) => item.name));
  for (const name of ['Numbered Headings', 'GitHub SOC2 Audit Evidence Exporter', 'Residue', 'eSPACE', 'SafetyCulture']) {
    assert.ok(competitors.includes(name), `Missing competitor: ${name}`);
  }

  for (const idea of acquisitionIdeas) {
    assert.ok(idea.competitors.length >= 3, `${idea.name} needs competitor depth`);
    assert.ok(idea.observedEvidence.length >= 3, `${idea.name} needs observed evidence`);
    assert.ok(idea.inferences.length >= 2, `${idea.name} needs explicit inferences`);
    assert.ok(idea.requirements.length >= 5, `${idea.name} needs build requirements`);
    assert.ok(idea.buyers.length >= 4, `${idea.name} needs buyer mapping`);
    assert.ok(idea.maintenance.tasks.length >= 3, `${idea.name} needs maintenance detail`);
    assert.ok(idea.validation.steps.length >= 4, `${idea.name} needs a validation plan`);
    assert.ok(idea.validation.gate.length > 30);
    assert.ok(idea.sources.length >= 3, `${idea.name} needs source links`);
    assert.ok(idea.score.current < 10 && idea.score.ceiling < 10, 'Unvalidated ideas must not be rated 10/10');
    assert.ok(idea.score.ceiling >= idea.score.current);
  }
});

test('broad universe and acquisition scoring model are present', async () => {
  const { candidateUniverse, scoringModel, strategy } = await import('../content.js');
  assert.ok(candidateUniverse.length >= 11);
  assert.equal(Object.values(scoringModel.weights).reduce((sum, value) => sum + value, 0), 100);
  assert.ok(strategy.currentScore < 10);
  assert.ok(strategy.provenCeiling < 10);
  assert.match(strategy.realityCheck, /revenue|profit|paying/i);
});

test('render targets and progressive-disclosure controls are wired', async () => {
  const [html, app] = await Promise.all([read('index.html'), read('app.js')]);
  assert.match(html, /id="idea-sections"/);
  assert.match(html, /id="expand-all"/);
  assert.match(html, /id="collapse-all"/);
  assert.match(app, /document\.createElement\(['"]details['"]\)/);
  assert.match(app, /acquisitionIdeas/);
  assert.match(app, /localStorage/);
});

test('original three ideas remain available as a clearly labeled archive', async () => {
  const { products } = await import('../content.js');
  assert.deepEqual(products.map((product) => product.id), ['moving', 'payday', 'pattern']);
  const html = await read('index.html');
  assert.match(html, /Original research archive/);
});

test('phone layout prevents long research text from widening the page', async () => {
  const css = await read('styles.css');
  assert.match(css, /body\s*\{[^}]*overflow-x:\s*hidden/s);
  assert.match(css, /overflow-wrap:\s*anywhere/);
  assert.match(css, /min-width:\s*0/);
});
