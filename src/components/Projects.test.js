import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Projects, { projects } from './Projects';

describe('Projects component', () => {
  test('renders the page heading', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { level: 2, name: /projects/i })).toBeInTheDocument();
  });

  test('renders a note clarifying the infra choices are cost-driven, not enterprise-representative', () => {
    render(<Projects />);
    expect(screen.getByText(/keep costs and operational overhead low/i)).toBeInTheDocument();
  });

  test('renders the public projects heading', () => {
    render(<Projects />);

    expect(screen.getByRole('heading', { level: 3, name: /public projects/i })).toBeInTheDocument();
  });

  test('renders every project name, collapsed by default', () => {
    render(<Projects />);
    projects.forEach((project) => {
      const card = screen.getByText(project.name).closest('.project-card');
      expect(card).not.toHaveAttribute('open');
    });
  });

  test('renders working repo/demo links without needing to expand the card', () => {
    render(<Projects />);

    const localDataPlatformCard = screen.getByText('Local Data Platform').closest('.project-card');
    expect(within(localDataPlatformCard).getByRole('link', { name: /view repo/i })).toHaveAttribute(
      'href',
      'https://github.com/bryanmehsmith/local-data-platform'
    );

    const momentumCard = screen.getByText('JSE Momentum Factor Backtest').closest('.project-card');
    expect(within(momentumCard).getByRole('link', { name: /view repo/i })).toHaveAttribute(
      'href',
      'https://github.com/bryanmehsmith/basic-jse-momentum-factor'
    );
    expect(within(momentumCard).getByRole('link', { name: /live demo/i })).toHaveAttribute(
      'href',
      'https://demo.bryansmith.co.za/demos/momentum-factor/'
    );

    const factorRegressionCard = screen.getByText('Factor Regression Lab').closest('.project-card');
    expect(within(factorRegressionCard).getByRole('link', { name: /view repo/i })).toHaveAttribute(
      'href',
      'https://github.com/bryanmehsmith/factor-regression-lab'
    );
    expect(within(factorRegressionCard).getByRole('link', { name: /live demo/i })).toHaveAttribute(
      'href',
      'https://demo.bryansmith.co.za/demos/factor-regression/'
    );

    const demoHostingCard = screen.getByText('Demo Hosting Platform').closest('.project-card');
    expect(within(demoHostingCard).getByRole('link', { name: /view repo/i })).toHaveAttribute(
      'href',
      'https://github.com/bryanmehsmith/demo-site'
    );
    expect(within(demoHostingCard).getByRole('link', { name: /live demo/i })).toHaveAttribute(
      'href',
      'https://demo.bryansmith.co.za'
    );

    const portfolioCard = screen.getByText('This Portfolio Website').closest('.project-card');
    expect(within(portfolioCard).getByRole('link', { name: /view repo/i })).toHaveAttribute(
      'href',
      'https://github.com/bryanmehsmith/personal-website'
    );
    expect(within(portfolioCard).getByRole('link', { name: /live demo/i })).toHaveAttribute(
      'href',
      'https://www.bryansmith.co.za'
    );
  });

  test('shows a disabled demo button alongside a working repo link', () => {
    render(<Projects />);

    const repoOnlyProjects = ['Local Data Platform'];
    repoOnlyProjects.forEach((name) => {
      const card = screen.getByText(name).closest('.project-card');
      expect(within(card).getByRole('link', { name: /view repo/i })).toBeInTheDocument();
      expect(within(card).getByText(/live demo/i).closest('.project-link-disabled')).toBeInTheDocument();
      expect(within(card).queryByRole('link', { name: /live demo/i })).not.toBeInTheDocument();
    });
  });

  test('expands a project on click to reveal its full case study', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const card = screen.getByText('Local Data Platform').closest('.project-card');
    expect(within(card).queryByText(/Problem/i)).not.toBeVisible();

    await user.click(screen.getByText('Local Data Platform'));

    expect(card).toHaveAttribute('open');
    expect(within(card).getByText(/Problem/i)).toBeVisible();
    projects[0].stack.forEach((tech) => {
      expect(within(card).getByText(tech)).toBeInTheDocument();
    });
  });

  test('clicking a project link does not toggle the card open', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const card = screen.getByText('Local Data Platform').closest('.project-card');
    const repoLink = within(card).getByRole('link', { name: /view repo/i });

    await user.click(repoLink);

    expect(card).not.toHaveAttribute('open');
  });

  test('clicking a disabled button shows a coming-soon message instead of opening the card', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const card = screen.getByText('Local Data Platform').closest('.project-card');
    const disabledDemoButton = within(card).getByText(/live demo/i).closest('.project-link-disabled');

    await user.click(disabledDemoButton);

    expect(within(card).getByText('Coming soon!')).toBeInTheDocument();
    expect(card).not.toHaveAttribute('open');
  });
});
