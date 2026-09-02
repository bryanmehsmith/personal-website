import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const routerFuture = { v7_startTransition: true, v7_relativeSplatPath: true };

const renderHeader = (initialEntries = ['/']) =>
  render(
    <MemoryRouter initialEntries={initialEntries} future={routerFuture}>
      <Header />
    </MemoryRouter>
  );

describe('Header component', () => {
  beforeEach(() => {
    document.body.classList.remove('dark-mode');
    window.localStorage.clear();
  });

  test('highlights the active page', () => {
    renderHeader(['/skills']);
    expect(screen.getByRole('link', { name: /skills/i })).toHaveClass('active');
    expect(screen.getByRole('link', { name: /summary/i })).not.toHaveClass('active');
  });

  test('toggles dark mode class on body', async () => {
    const user = userEvent.setup();
    renderHeader();

    const toggle = screen.getByRole('checkbox');
    expect(toggle).not.toBeChecked();
    expect(document.body.classList.contains('dark-mode')).toBe(false);

    await user.click(toggle);
    expect(toggle).toBeChecked();
    expect(document.body.classList.contains('dark-mode')).toBe(true);

    await user.click(toggle);
    expect(toggle).not.toBeChecked();
    expect(document.body.classList.contains('dark-mode')).toBe(false);
  });

  test('persists dark mode preference across renders', async () => {
    const user = userEvent.setup();
    const { unmount } = renderHeader();

    await user.click(screen.getByRole('checkbox'));
    expect(window.localStorage.getItem('darkMode')).toBe('true');
    unmount();

    renderHeader();
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  test('falls back to the OS color-scheme preference when nothing is stored', () => {
    const matchMediaMock = jest.fn().mockReturnValue({ matches: true });
    window.matchMedia = matchMediaMock;

    renderHeader();

    expect(matchMediaMock).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
    expect(screen.getByRole('checkbox')).toBeChecked();

    delete window.matchMedia;
  });

  test('renders contact links and a download CV button', () => {
    renderHeader();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute('href', '/resume.pdf');
  });

  test('uses the evidence-based data platform headline', () => {
    renderHeader();
    expect(screen.getByText('Data Scientist | Data Platform & Analytics Engineering')).toBeInTheDocument();
  });
});
