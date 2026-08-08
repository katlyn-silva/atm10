const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

function loadGuides() {
  const context = { window: {} };
  const source = fs.readFileSync(path.join(__dirname, '..', 'chapter-guides.js'), 'utf8');
  vm.runInNewContext(source, context);
  return context.window.ATM10_CHAPTER_GUIDES;
}

test('maps recovered content to all 60 current chapters', () => {
  const guides = loadGuides();
  const chapterIds = Array.from({ length: 60 }, (_, index) => String(index + 1));

  assert.deepEqual(Object.keys(guides.map), chapterIds);
  for (const id of chapterIds) {
    assert.ok(guides.map[id].length > 0, `chapter ${id} has no recovered guide`);
  }
});

test('every mapped draft exists and contains substantial content', () => {
  const guides = loadGuides();

  for (const [chapterId, draftIds] of Object.entries(guides.map)) {
    for (const draftId of draftIds) {
      const draft = guides.drafts[draftId];
      assert.ok(draft, `chapter ${chapterId} references missing draft ${draftId}`);
      assert.ok(draft.title.length > 3);
      assert.ok(draft.body.length > 250, `draft ${draftId} is unexpectedly short`);
    }
  }
});

test('recovered text cannot inject script elements', () => {
  const guides = loadGuides();
  const combined = Object.values(guides.drafts).map(draft => draft.body).join('\n');

  assert.equal(/<script\b/i.test(combined), false);
});

test('chapter 2 contains the complete Your First Machines walkthrough', () => {
  const guides = loadGuides();
  const draft = guides.drafts[2];

  assert.equal(guides.map['2'][0], 2);
  assert.match(draft.title, /Chapter 2: Your First Machines/);
  for (const section of [
    'Your First Power',
    'First Mekanism Machine',
    'Make Steel',
    'Ore Doubling',
    'Build Your Machine Room',
    'Common Mistakes',
    'Pro Tip',
  ]) {
    assert.match(draft.body, new RegExp(section));
  }
  assert.ok((draft.body.match(/☐|☑|⬜/g) || []).length >= 50);
});

test('chapter 3 contains the complete Allthemodium and Mining Dimension walkthrough', () => {
  const guides = loadGuides();
  const draft = guides.drafts[3];

  assert.equal(guides.map['3'][0], 3);
  assert.match(draft.title, /Chapter 3: Allthemodium & Unlocking the Mining Dimension/);
  for (const section of [
    'Find the Deep Dark',
    'Mine Your First Allthemodium',
    'Avoid the Warden',
    'Unlock the Mining Dimension',
    'Prepare for Automation',
    'Speedrun Route',
    'Chapter 3 Checklist',
    'Chapter Reward',
  ]) {
    assert.match(draft.body, new RegExp(section));
  }
  assert.ok((draft.body.match(/☐|☑/g) || []).length >= 35);
});
