import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import manifest from '../public/manifest.json';

const routerFuture = { v7_startTransition: true, v7_relativeSplatPath: true };

const renderApp = (initialEntries = ['/']) =>
  render(
    <MemoryRouter initialEntries={initialEntries} future={routerFuture}>
      <App />
    </MemoryRouter>
  );

describe('App navigation', () => {
  beforeEach(() => {
    document.head.innerHTML = `
      <link rel="canonical" href="https://www.bryansmith.co.za/" />
      <meta property="og:url" content="https://www.bryansmith.co.za/" />
    `;
  });

  test('renders summary page by default', () => {
    renderApp();
    expect(screen.getByRole('heading', { level: 2, name: /summary/i })).toBeInTheDocument();
  });

  test('opens the summary page at the installed app start URL', () => {
    renderApp([manifest.start_url]);

    expect(screen.getByRole('heading', { level: 2, name: /summary/i })).toBeInTheDocument();
  });

  test('publishes the current route under the apex canonical domain', () => {
    renderApp(['/skills']);

    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://bryansmith.co.za/skills'
    );
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
      'content',
      'https://bryansmith.co.za/skills'
    );
  });

  test('navigates between sections when nav links are clicked', async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(screen.getByRole('link', { name: /skills/i }));
    expect(screen.getByRole('heading', { level: 3, name: /data processing/i })).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: /experience/i }));
    expect(screen.getByRole('heading', { level: 3, name: /data scientist/i })).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: /education/i }));
    expect(screen.getByRole('heading', { level: 3, name: /bsc computer science/i })).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: /projects/i }));
    expect(screen.getByText(/local data platform/i)).toBeInTheDocument();
  });

  test('renders a not-found page for an unknown route instead of a blank page', () => {
    renderApp(['/does-not-exist']);

    expect(screen.getByRole('heading', { level: 2, name: /page not found/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back to summary/i })).toBeInTheDocument();
  });
});
