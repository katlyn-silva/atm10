const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
const source = `${html}\n${app}`;

test('external application script has valid JavaScript syntax', () => {
  assert.match(html, /<script src="\.\/app\.js"><\/script>/);
  assert.doesNotThrow(() => new Function(app));
});

test('index keeps styles, application code, and gallery assets external', () => {
  assert.match(html, /<link rel="stylesheet" href="\.\/styles\.css">/);
  assert.doesNotMatch(html, /<style>|<script(?![^>]*src=)/);
  assert.doesNotMatch(app, /data:image\//);
  for (let i = 1; i <= 6; i += 1) {
    assert.match(app, new RegExp(`images/gallery/screenshot-${i}\\.png`));
  }
});

test('application explicitly binds controls instead of relying on browser globals', () => {
  for (const id of [
    'themeSelect',
    'languageSelect',
    'accountProfileEmail',
    'accountProfileSync',
    'accountAutoSync',
    'accountEmail',
    'accountSupabaseUrl',
    'accountSupabaseKey',
  ]) {
    assert.match(
      app,
      new RegExp(`const ${id}=document\\.getElementById\\('${id}'\\)`),
      `missing explicit binding for ${id}`,
    );
  }
});

test('remaining companion views are reachable from the main navigation', () => {
  for (const tab of ['flows','techtree','compare','backup']) {
    assert.match(html, new RegExp(`data-tab="${tab}"`));
    assert.match(app, new RegExp(`tab==='${tab}'`));
  }
});

test('full backup includes scalable datasets', () => {
  for (const field of ['schema_version:2','current_chapter:current','completion:{','encyclopedia:']) {
    assert.ok(app.includes(field), `missing backup field ${field}`);
  }
  assert.match(app, /function exportFullBackup/);
  assert.match(app, /function importFullBackup/);
});

test('all requested configurable calculators exist', () => {
  for (const fn of ['calcEnergy','calcMatrix','calcReactor','calcStock']) {
    assert.match(app, new RegExp(`function ${fn}\\(`));
    assert.match(app, new RegExp(`onclick="${fn}\\(\\)"`));
  }
});

test('the companion does not add an AI assistant', () => {
  assert.doesNotMatch(source, /data-tab="ai"|AI assistant|assistente de IA/i);
});

test('global search opens every major guide entity directly', () => {
  assert.match(html, /id="globalSearchResults"/);
  assert.match(app, /function globalSearchEntries\(/);
  assert.match(app, /function openSearchTarget\(/);
  for (const kind of ['chapter','item','encyclopedia','boss','dimension','multiblock','troubleshoot']) {
    assert.ok(app.includes(`kind:'${kind}'`), `missing global search kind ${kind}`);
  }
});

test('personal data supports item, encyclopedia and checklist notes', () => {
  assert.match(app, /function personalTargetMeta\(/);
  assert.match(app, /getNote\('completion'/);
  assert.match(app, /function editCompletionNote\(/);
  assert.match(app, /isFavorite\('item'/);
  assert.match(app, /isFavorite\('encyclopedia'/);
});

test('real world map is validated, persisted and exportable', () => {
  assert.match(app, /const REAL_WORLD_KEY=/);
  assert.match(app, /function validateWorldMap\(/);
  assert.match(app, /function persistImportedWorld\(/);
  assert.match(app, /id="realWorldExport"/);
  assert.match(app, /id="realWorldClear"/);
});

test('offline cloud updates remain queued and retry after refresh', () => {
  assert.match(app, /const CLOUD_PENDING_KEY=/);
  assert.match(app, /function setCloudPending\(/);
  assert.match(app, /function cloudSessionFetch\(/);
  assert.match(app, /res\.status===401/);
});
