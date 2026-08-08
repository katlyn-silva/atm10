const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.join(__dirname, '..');
const workflow = fs.readFileSync(
  path.join(root, '.github', 'workflows', 'guide-checks.yml'),
  'utf8',
);
const serviceWorker = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');

test('GitHub Actions runs both test suites on pushes and pull requests', () => {
  assert.match(workflow, /^on:\s*$/m);
  assert.match(workflow, /^\s+push:\s*$/m);
  assert.match(workflow, /^\s+pull_request:\s*$/m);
  assert.match(workflow, /node --test tests\/\*\.test\.js/);
  assert.match(workflow, /python -m unittest discover -s tests -p 'test_\*\.py'/);
});

test('workflow uses read-only repository permissions and pinned runtime majors', () => {
  assert.match(workflow, /permissions:\s*\n\s+contents: read/);
  assert.match(workflow, /actions\/checkout@v6/);
  assert.match(workflow, /actions\/setup-node@v6/);
  assert.match(workflow, /node-version: 22/);
  assert.match(workflow, /actions\/setup-python@v6/);
  assert.match(workflow, /python-version: '3\.12'/);
});

test('offline app shell includes every extracted application asset', () => {
  for (const asset of ['styles.css', 'app.js', ...Array.from({ length: 6 }, (_, i) => `images/gallery/screenshot-${i + 1}.png`)]) {
    assert.ok(serviceWorker.includes(`'./${asset}'`), `missing offline asset ${asset}`);
  }
});
