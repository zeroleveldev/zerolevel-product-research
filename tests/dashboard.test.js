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

test('page exposes every decision section and a clear starting recommendation', async () => {
  const html = await read('index.html');
  for (const id of ['overview', 'moving', 'payday', 'pattern', 'exit-plan', 'sources']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  assert.match(html, /Do not build all three/);
  assert.match(html, /Validate MoveManifest first/);
});

test('research data includes all three narrowed products and critical competitors', async () => {
  const { products } = await import('../content.js');
  assert.equal(products.length, 3);
  assert.deepEqual(products.map((product) => product.id), ['moving', 'payday', 'pattern']);

  const competitors = products.flatMap((product) => product.competitors.map((item) => item.name));
  for (const name of ['SmartLabels', 'Boxes', 'Wallet Forecast', 'BalanceCast', 'Docuslice', 'PosterTile']) {
    assert.ok(competitors.includes(name), `Missing competitor: ${name}`);
  }

  for (const product of products) {
    assert.ok(product.painPoints.length >= 4);
    assert.ok(product.marketing.length >= 4);
    assert.ok(product.buyers.length >= 3);
    assert.ok(product.validation.gate.length > 20);
  }
});

test('render targets and detail controls are wired for progressive disclosure', async () => {
  const [html, app] = await Promise.all([read('index.html'), read('app.js')]);
  assert.match(html, /id="product-sections"/);
  assert.match(html, /id="expand-all"/);
  assert.match(html, /id="collapse-all"/);
  assert.match(app, /document\.createElement\(['"]details['"]\)/);
  assert.match(app, /localStorage/);
});

test('phone layout prevents long research text from widening the page', async () => {
  const css = await read('styles.css');
  assert.match(css, /body\s*\{[^}]*overflow-x:\s*hidden/s);
  assert.match(css, /overflow-wrap:\s*anywhere/);
  assert.match(css, /min-width:\s*0/);
});
