import fs from 'fs';
import path from 'path';

describe('resume source', () => {
  const resume = fs.readFileSync(path.resolve(__dirname, '../resume/resume.tex'), 'utf8');
  const normalizedResume = resume.replace(/\s+/g, ' ');

  test('includes independent local AI engineering', () => {
    [
      'Independent AI Engineering',
      'OpenCode',
      'Ollama',
      'Qwen',
      'Gemma',
      'hosted frontier models',
      'orchestration',
      'planning',
      'review',
      'discovery',
      'bounded implementation',
      'hosted token use',
    ].forEach(term => {
      expect(normalizedResume).toMatch(new RegExp(term, 'i'));
    });
  });

  test('keeps home network infrastructure out of the CV', () => {
    ['Pi-hole', 'Unbound', 'WireGuard'].forEach(term => {
      expect(resume).not.toMatch(new RegExp(term, 'i'));
    });
  });
});
