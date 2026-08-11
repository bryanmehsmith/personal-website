import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactLinks from './ContactLinks';

describe('ContactLinks component', () => {
  test('renders a LinkedIn link', () => {
    render(<ContactLinks />);
    const link = screen.getByRole('link', { name: /linkedin/i });
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/bryansmithza/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });

  test('renders a GitHub link', () => {
    render(<ContactLinks />);
    const link = screen.getByRole('link', { name: /github/i });
    expect(link).toHaveAttribute('href', 'https://github.com/bryanmehsmith');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });

  test('does not render an email link', () => {
    render(<ContactLinks />);
    expect(screen.queryByRole('link', { name: /email/i })).not.toBeInTheDocument();
    expect(document.querySelector('a[href^="mailto:"]')).not.toBeInTheDocument();
  });
});
