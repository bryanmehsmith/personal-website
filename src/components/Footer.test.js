import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders footer element', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('footer');
  });

  test('displays copyright text with current year', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    const copyrightText = `© ${currentYear} Bryan Smith. All rights reserved.`;
    
    expect(screen.getByText(copyrightText)).toBeInTheDocument();
  });

  test('displays copyright symbol and author name', () => {
    render(<Footer />);
    
    expect(screen.getByText(/©/)).toBeInTheDocument();
    expect(screen.getByText(/Bryan Smith/)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
  });

  test('renders contact links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });

  test('renders with correct HTML structure', () => {
    render(<Footer />);
    
    const footer = document.querySelector('footer.footer');
    expect(footer).toBeInTheDocument();
    
    const paragraph = footer?.querySelector('p');
    expect(paragraph).toBeInTheDocument();
  });

  test('updates year dynamically', () => {
    const mockDate = new Date('2025-10-11T00:00:00Z');
    jest.useFakeTimers().setSystemTime(mockDate);

    render(<Footer />);

    expect(screen.getByText(/© 2025 Bryan Smith/)).toBeInTheDocument();

    jest.useRealTimers();
  });
});