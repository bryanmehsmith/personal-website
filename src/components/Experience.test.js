import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from './Experience';

describe('Experience component', () => {
  test('renders each experience card with expected metadata', () => {
    render(<Experience />);

    const cards = screen.getAllByRole('heading', { level: 3 });
    expect(cards.map(card => card.textContent)).toEqual([
      'Data Scientist',
      'Data Engineer',
    ]);

    expect(screen.getByText(/Peregrine Capital \| Nov 2021 - Present, Sandton/)).toBeInTheDocument();
    expect(screen.getByText(/First National Bank \| Jan 2020 - Oct 2021, Randburg/)).toBeInTheDocument();
  });

  test('renders descriptive lists for each role', () => {
    render(<Experience />);

    const summaryParagraphs = document.querySelectorAll('.experience .summary');
    expect(summaryParagraphs).toHaveLength(2);

    const lists = document.querySelectorAll('.experience .card-list');
    expect(lists).toHaveLength(2);
    lists.forEach(list => {
      expect(list.children.length).toBeGreaterThan(0);
    });
  });

  test('includes representative bullet subtitles without pinning full copy', () => {
    render(<Experience />);

    ['Microsoft Fabric Platform Engineering', 'Investment Data & Reporting', 'Data Modelling & Data Contracts', 'Enterprise Integration & Event Driven Processing', 'Applied Modelling & Feature Engineering', 'AI & Governed Workflows', 'Internal Products & Team Automation', 'Cloud, Identity & Security', 'Monitoring, Diagnosis & Reliability', 'Stakeholder Delivery & Technical Leadership', 'Performance Optimisation'].forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  test('presents ten focused Peregrine achievements', () => {
    render(<Experience />);

    const peregrineCard = document.querySelector('.experience .card-full-width');
    expect(peregrineCard.querySelectorAll('.card-list-item')).toHaveLength(10);
  });

  test('includes the LLM spam detector and query router achievements', () => {
    render(<Experience />);

    const section = document.querySelector('.experience.card-container');
    expect(section).toHaveTextContent(/spam detection agent/i);
    expect(section).toHaveTextContent(/query router agent/i);
  });

  test('shows direct stakeholder work across the delivery lifecycle', () => {
    render(<Experience />);

    const section = document.querySelector('.experience.card-container');
    expect(section).toHaveTextContent(/directly with stakeholders/i);
    expect(section).toHaveTextContent(/requirements analysis/i);
    expect(section).toHaveTextContent(/architectural planning/i);
    expect(section).toHaveTextContent(/environment setup/i);
  });

  test('shows internal bot and enterprise identity integration experience', () => {
    render(<Experience />);

    const section = document.querySelector('.experience.card-container');
    expect(section).toHaveTextContent(/Microsoft Teams bots/i);
    expect(section).toHaveTextContent(/Adaptive Cards/i);
    expect(section).toHaveTextContent(/acknowledgement tracking/i);
    expect(section).toHaveTextContent(/Microsoft Entra application identities/i);
    expect(section).toHaveTextContent(/SAML SSO/i);
    expect(section).toHaveTextContent(/MFA requirements/i);
  });

  test('shows governed platform, reporting, integration, and diagnostic depth', () => {
    render(<Experience />);

    const peregrineCard = document.querySelector('.experience .card-full-width');
    ['Lakehouse', 'Direct Lake', 'semantic models', 'paginated reporting', 'positions', 'trades', 'reconciliation', 'REST API', 'SFTP', 'event driven', 'dimensional models', 'data contracts', 'temporal decomposition', 'derived labels', 'human review', 'alerting', 'source rows', 'build versus buy'].forEach(term => {
      expect(peregrineCard).toHaveTextContent(new RegExp(term, 'i'));
    });
  });

  test('does not publish unverified Peregrine estate counts or sole authorship', () => {
    render(<Experience />);

    const peregrineCard = document.querySelector('.experience .card-full-width');
    expect(peregrineCard).not.toHaveTextContent(/100\+ (production )?pipelines/i);
    expect(peregrineCard).not.toHaveTextContent(/hundreds of modelled tables/i);
    expect(peregrineCard).not.toHaveTextContent(/built the platform from the ground up/i);
  });

  test('does not state raw data volume', () => {
    render(<Experience />);

    // Volume is deliberately omitted - 200GB reads as small against Spark/big-data claims.
    const section = document.querySelector('.experience.card-container');
    expect(section).not.toHaveTextContent(/\d+\s*(GB|TB|gigabytes|terabytes)\b/i);
  });

  test('maintains card layout semantics', () => {
    render(<Experience />);

    const section = document.querySelector('.experience.card-container');
    expect(section).toBeInTheDocument();

    const cards = section?.querySelectorAll('.card-full-width');
    expect(cards).toHaveLength(2);
  });
});
