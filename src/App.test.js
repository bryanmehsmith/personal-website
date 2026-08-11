import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const routerFuture = { v7_startTransition: true, v7_relativeSplatPath: true };

const renderApp = (initialEntries = ['/']) =>
  render(
    <MemoryRouter initialEntries={initialEntries} future={routerFuture}>
      <App />
    </MemoryRouter>
  );

describe('App navigation', () => {
  test('renders summary page by default', () => {
    renderApp();
    expect(screen.getByRole('heading', { level: 2, name: /summary/i })).toBeInTheDocument();
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
