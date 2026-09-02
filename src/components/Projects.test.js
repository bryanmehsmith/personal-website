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

    const securityCard = screen.getByText('Security Anti-Patterns').closest('.project-card');
    expect(within(securityCard).getByRole('link', { name: /view repo/i })).toHaveAttribute(
      'href',
      'https://github.com/bryanmehsmith/security-anti-patterns'
    );
    expect(within(securityCard).getByRole('link', { name: /live demo/i })).toHaveAttribute(
      'href',
      'https://demo.bryansmith.co.za/demos/security-anti-patterns/'
    );

    const neuralNetworkCard = screen.getByText('NN Foundations Lab').closest('.project-card');
    expect(within(neuralNetworkCard).getByRole('link', { name: /view repo/i })).toHaveAttribute(
      'href',
      'https://github.com/bryanmehsmith/nn-foundations-lab'
    );
    expect(within(neuralNetworkCard).getByRole('link', { name: /live demo/i })).toHaveAttribute(
      'href',
      'https://demo.bryansmith.co.za/demos/nn-foundations/'
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
      'https://bryansmith.co.za'
    );
  });

  test('shows NN Foundations Lab as in progress', () => {
    render(<Projects />);

    const card = screen.getByText('NN Foundations Lab').closest('.project-card');
    expect(within(card).getByText('In progress')).toBeVisible();
  });

  test('describes self-hosted home network infrastructure without public links', () => {
    render(<Projects />);

    const card = screen.getByText('Home Network Infrastructure').closest('.project-card');
    ['self-hosted Linux', 'Pi-hole', 'Unbound', 'recursive DNS', 'caching', 'full-tunnel WireGuard VPN'].forEach(term => {
      expect(card).toHaveTextContent(new RegExp(term, 'i'));
    });
    expect(card.querySelector('.project-links')).not.toBeInTheDocument();
  });

  test('describes the hybrid local AI development workflow without public links', () => {
    render(<Projects />);

    const card = screen.getByText('Local AI Development Environment').closest('.project-card');
    ['OpenCode', 'Ollama', 'Qwen', 'Gemma', 'hosted frontier models', 'orchestration', 'planning', 'review', 'discovery', 'bounded implementation', 'hosted token use'].forEach(term => {
      expect(card).toHaveTextContent(new RegExp(term, 'i'));
    });
    expect(card.querySelector('.project-links')).not.toBeInTheDocument();
  });

  test('keeps home engineering projects below quantitative and security work', () => {
    const names = projects.map(project => project.name);
    const firstHomeProject = Math.min(
      names.indexOf('Home Network Infrastructure'),
      names.indexOf('Local AI Development Environment')
    );

    expect(firstHomeProject).toBeGreaterThan(names.indexOf('JSE Momentum Factor Backtest'));
    expect(firstHomeProject).toBeGreaterThan(names.indexOf('Factor Regression Lab'));
    expect(firstHomeProject).toBeGreaterThan(names.indexOf('Security Anti-Patterns'));
  });

  test('describes the current browser-first momentum and factor regression demos', () => {
    render(<Projects />);

    const momentumCard = screen.getByText('JSE Momentum Factor Backtest').closest('.project-card');
    expect(momentumCard).toHaveTextContent(/static JavaScript frontend/i);
    expect(momentumCard).toHaveTextContent(/bundled monthly price snapshot/i);
    expect(momentumCard).toHaveTextContent(/companion JSON API/i);
    expect(momentumCard).toHaveTextContent(/returns, volatility, Sharpe ratio, and maximum drawdown/i);
    expect(momentumCard).not.toHaveTextContent(/turnover/i);

    const factorCard = screen.getByText('Factor Regression Lab').closest('.project-card');
    expect(factorCard).toHaveTextContent(/static JavaScript frontend/i);
    expect(factorCard).toHaveTextContent(/bundled monthly snapshots/i);
    expect(factorCard).toHaveTextContent(/Python parity/i);
  });

  test('describes the current local data platform reporting and application stack', () => {
    render(<Projects />);

    const localDataPlatformCard = screen.getByText('Local Data Platform').closest('.project-card');
    expect(localDataPlatformCard).toHaveTextContent(/native application reporting/i);
    expect(localDataPlatformCard).toHaveTextContent(/FastAPI/i);
    expect(localDataPlatformCard).toHaveTextContent(/React/i);
    expect(localDataPlatformCard).toHaveTextContent(/Vite/i);
    expect(localDataPlatformCard).toHaveTextContent(/Grafana Alloy/i);
    expect(localDataPlatformCard).not.toHaveTextContent(/Metabase/i);
    expect(localDataPlatformCard).not.toHaveTextContent(/measurable eval accuracy/i);
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
