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
    expect(paragraphs).toHaveLength(3);
  });

  test('mentions representative skills and outcomes', () => {
    render(<Summary />);

    const section = screen.getByRole('heading', { name: /summary/i }).closest('section');
    expect(section).not.toBeNull();
    expect(section).toHaveTextContent(/data platforms/i);
    expect(section).toHaveTextContent(/azure/i);
  });

  test('frames the work around investment management and full lifecycle delivery', () => {
    render(<Summary />);

    const section = screen.getByRole('heading', { name: /summary/i }).closest('section');
    expect(section).toHaveTextContent(/investment management/i);
    expect(section).toHaveTextContent(/requirements and architecture through deployment and support/i);
    expect(section).toHaveTextContent(/observability/i);
    expect(section).toHaveTextContent(/root cause diagnosis/i);
  });

  test('highlights the core platform and product capabilities', () => {
    render(<Summary />);

    const section = screen.getByRole('heading', { name: /summary/i }).closest('section');
    expect(section).not.toBeNull();

    ['Microsoft Fabric', 'Lakehouse', 'semantic models', 'Power BI', 'secure internal tools'].forEach(keyword => {
      expect(section).toHaveTextContent(keyword);
    });
  });

  test('does not publish unverified estate counts', () => {
    render(<Summary />);

    const section = screen.getByRole('heading', { name: /summary/i }).closest('section');
    expect(section).not.toHaveTextContent(/100\+ pipelines/i);
    expect(section).not.toHaveTextContent(/hundreds of modelled tables/i);
  });
});
