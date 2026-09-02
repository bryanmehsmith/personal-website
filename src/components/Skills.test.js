import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills, { skillGroups, TIERS, languages } from './Skills';

describe('Skills component', () => {
  test('renders every technical skill group as a level-3 heading', () => {
    render(<Skills />);

    const expectedGroups = [
      'Data Processing',
      'Business Intelligence',
      'Cloud',
      'Data Ingestion & Source Systems',
      'Data Platforms & Warehousing',
      'Analytics & Modeling',
      'Data Modeling & Database Management',
      'AI & Machine Learning',
      'Infrastructure & DevOps',
      'Programming & Scripting',
      'Software Engineering',
      'Investment Data & Reporting',
    ];

    expectedGroups.forEach(group => {
      expect(screen.getByRole('heading', { level: 3, name: group })).toBeInTheDocument();
    });
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(expectedGroups.length);
  });

  test('does not render Languages as a technical skill group', () => {
    render(<Skills />);
    expect(screen.queryByRole('heading', { level: 3, name: /languages/i })).not.toBeInTheDocument();
  });

  test('renders languages as plain text in their own section', () => {
    render(<Skills />);

    expect(screen.getByRole('heading', { level: 2, name: /languages/i })).toBeInTheDocument();
    expect(screen.getByText('Afrikaans (Fluent) · English (Fluent)')).toBeInTheDocument();
  });

  test('renders no progress bars or numeric self-ratings', () => {
    render(<Skills />);

    expect(screen.queryAllByRole('progressbar')).toHaveLength(0);
    expect(screen.queryByText(/\d\s*\/\s*5/)).not.toBeInTheDocument();
  });

  test('groups skills under their tier, Core first', () => {
    render(<Skills />);

    const card = screen.getByRole('heading', { level: 3, name: 'Data Processing' }).closest('.skill-card');
    const labels = [...card.querySelectorAll('.skill-tier-label')].map(el => el.textContent);
    expect(labels).toEqual(['Core', 'Working knowledge', 'Familiar with']);

    expect(screen.getByText('Spark').closest('.skill-tier')).toHaveTextContent('Core');
    expect(screen.getByText('Batch Processing').closest('.skill-tier')).toHaveTextContent('Working knowledge');
    expect(screen.getByText('Ab Initio').closest('.skill-tier')).toHaveTextContent('Familiar with');
  });

  test('omits tiers that have no skills', () => {
    render(<Skills />);

    // Cloud has no 'Familiar with' skills, so that label should not render.
    const cloud = screen.getByRole('heading', { level: 3, name: 'Cloud' }).closest('.skill-card');
    const cloudLabels = [...cloud.querySelectorAll('.skill-tier-label')].map(el => el.textContent);
    expect(cloudLabels).toEqual(['Core', 'Working knowledge']);

    // AI & Machine Learning has only its middle tier populated, so both the
    // leading Core and trailing 'Familiar with' labels are omitted.
    const ai = screen.getByRole('heading', { level: 3, name: 'AI & Machine Learning' }).closest('.skill-card');
    const aiLabels = [...ai.querySelectorAll('.skill-tier-label')].map(el => el.textContent);
    expect(aiLabels).toEqual(['Working knowledge']);

    // 'Familiar with' still renders where it is populated.
    const platforms = screen.getByRole('heading', { level: 3, name: 'Data Platforms & Warehousing' }).closest('.skill-card');
    const platformLabels = [...platforms.querySelectorAll('.skill-tier-label')].map(el => el.textContent);
    expect(platformLabels).toEqual(['Core', 'Working knowledge', 'Familiar with']);
  });

  test('does not list Git as a skill', () => {
    render(<Skills />);
    // Git is table stakes - listing it adds no signal.
    expect(screen.queryByText('Git')).not.toBeInTheDocument();
  });

  test('lists identity and Teams bot skills as working knowledge', () => {
    render(<Skills />);

    ['Microsoft Entra ID', 'SAML SSO', 'Microsoft Teams Bots', 'Adaptive Cards'].forEach(skill => {
      expect(screen.getByText(skill).closest('.skill-tier')).toHaveTextContent('Working knowledge');
    });
  });

  test('lists evidence-backed platform, cloud, software, and operational skills', () => {
    render(<Skills />);

    [
      'Microsoft Fabric Lakehouse',
      'Direct Lake',
      'Semantic Models',
      'TMDL',
      'Bicep',
      'OAuth',
      'Conditional Access',
      'TypeScript',
      'Node.js',
      'Microsoft Graph',
      'Observability',
      'Root Cause Analysis',
      'Positions & Trades',
      'Reconciliation',
      'Investor Reporting',
    ].forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});

describe('skillGroups data integrity', () => {
  test('every group declares all three tiers with string-array values', () => {
    skillGroups.forEach(group => {
      expect(Object.keys(group.tiers).sort()).toEqual([...TIERS].sort());
      TIERS.forEach(tier => {
        expect(Array.isArray(group.tiers[tier])).toBe(true);
        group.tiers[tier].forEach(skill => {
          expect(typeof skill).toBe('string');
          expect(skill.trim().length).toBeGreaterThan(0);
        });
      });
    });
  });

  test('no group is entirely empty and no skill is duplicated within a group', () => {
    skillGroups.forEach(group => {
      const all = TIERS.flatMap(tier => group.tiers[tier]);
      expect(all.length).toBeGreaterThan(0);
      expect(new Set(all).size).toBe(all.length);
    });
  });

  test('languages are declared with a fluency', () => {
    expect(languages.length).toBeGreaterThan(0);
    languages.forEach(entry => {
      expect(typeof entry.language).toBe('string');
      expect(typeof entry.fluency).toBe('string');
    });
  });
});
