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

    ['Enterprise Data Integration', 'Azure Cloud Integration & Security', 'Performance Optimisation'].forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
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

  test('quantifies the platform and reporting footprint at an aggregate level', () => {
    render(<Experience />);

    const section = document.querySelector('.experience.card-container');
    expect(section).toHaveTextContent(/100\+ (production )?pipelines/i);
    expect(section).toHaveTextContent(/dozens of source systems/i);
    expect(section).toHaveTextContent(/enterprise reporting estate/i);
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
