import React from 'react';
import { render, screen } from '@testing-library/react';
import Summary from './Summary';

describe('Summary component', () => {
  test('renders summary section with heading and paragraphs', () => {
    render(<Summary />);

    const heading = screen.getByRole('heading', { level: 2, name: /summary/i });
    const section = heading.closest('section');
    expect(section).not.toBeNull();

    const paragraphs = section?.querySelectorAll('p');
    expect(paragraphs).toHaveLength(4);
  });

  test('mentions representative skills and outcomes', () => {
    render(<Summary />);

    const section = screen.getByRole('heading', { name: /summary/i }).closest('section');
    expect(section).not.toBeNull();
    expect(section).toHaveTextContent(/data platforms/i);
    expect(section).toHaveTextContent(/azure/i);
  });

  test('quantifies the platform at an aggregate level rather than describing it abstractly', () => {
    render(<Summary />);

    const section = screen.getByRole('heading', { name: /summary/i }).closest('section');
    expect(section).toHaveTextContent(/100\+ pipelines/i);
    expect(section).toHaveTextContent(/dozens of source systems/i);
    expect(section).toHaveTextContent(/enterprise reporting estate/i);
  });

  test('highlights technical tooling without asserting exact copy', () => {
    render(<Summary />);

    const section = screen.getByRole('heading', { name: /summary/i }).closest('section');
    expect(section).not.toBeNull();

    ['Spark', 'Airflow', 'Python'].forEach(keyword => {
      expect(section).toHaveTextContent(keyword);
    });
  });
});