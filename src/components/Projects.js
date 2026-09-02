import React, { useState } from 'react';
import usePageTitle from '../hooks/usePageTitle';

export const projects = [
  {
    name: 'Local Data Platform',
    tagline: 'A self-built, from-scratch data lakehouse with a local AI/RAG and text-to-SQL layer, running end-to-end on a single machine.',
    description: [
      {
        subtitle: 'Problem',
        text: 'Wanted a realistic, full data lakehouse (batch and streaming ETL, warehouse, BI, local AI/RAG) to build and run end-to-end without depending on any cloud vendor.'
      },
      {
        subtitle: 'Approach',
        text: 'A modular, phased Docker Compose stack uses MinIO, Nessie, and Trino/DuckDB as the lakehouse core; Dagster for batch orchestration; dbt for transforms and tests; Redpanda for streaming; a local LLM (Ollama) and RAG layer (Qdrant, Open WebUI), including a text-to-SQL pipeline with its own eval harness; Metabase for BI; and a full observability stack (Prometheus, Grafana, Loki, cAdvisor). The stack starts with one command and can scale from one machine to a small cluster without changing tools.'
      },
      {
        subtitle: 'Impact',
        text: 'A fully working, from-scratch modern data platform spanning storage, orchestration, streaming, ML/LLM (RAG and text-to-SQL with measurable eval accuracy), BI, and observability.'
      }
    ],
    stack: ['Dagster', 'Apache Iceberg', 'Nessie', 'Trino', 'DuckDB', 'dbt', 'Redpanda', 'MinIO', 'Ollama', 'Qdrant', 'Open WebUI', 'Metabase', 'Prometheus', 'Grafana', 'Loki', 'FastAPI', 'React', 'Docker Compose'],
    steps: ['Storage & Catalog', 'Orchestration & Transform', 'Streaming', 'Query', 'AI/RAG + Text-to-SQL', 'BI & Observability'],
    links: { repo: 'https://github.com/bryanmehsmith/local-data-platform', demo: null }
  },
  {
    name: 'Demo Hosting Platform',
    tagline: 'A single Azure Container App fronting multiple lightweight POC demos behind one Caddy reverse proxy, auto-deployed on every push.',
    description: [
      {
        subtitle: 'Problem',
        text: 'Needed a low-cost, low-friction way to publish and share small proof-of-concept demos (static pages and Streamlit apps) without provisioning separate infrastructure for each one.'
      },
      {
        subtitle: 'Approach',
        text: 'One Docker image runs Caddy as a reverse proxy. Static and JavaScript demos are served directly, while Python demos are pulled in as git submodules and run with Streamlit as internal processes proxied at /demos/<slug>. Streamlit is a deliberately lightweight, portable choice because it turns a plain Python script into a shareable web UI with no separate frontend to build. A new proof of concept can therefore go from a script to a live, clickable demo in one small app file. GitHub Actions builds the image, pushes it to ghcr.io, and updates the Azure Container App on every push to main. Individual demo repos can auto-bump their submodule reference here to trigger a redeploy on their own push.'
      },
      {
        subtitle: 'Impact',
        text: 'New POC demos go live with a submodule add, a config entry, and a Caddy route, with no manual server provisioning per demo. This is intentionally a fast way to share proof-of-concept work, not a production deployment pattern.'
      }
    ],
    stack: ['Docker', 'Caddy', 'Streamlit', 'GitHub Actions', 'Azure Container Apps', 'ghcr.io', 'Python'],
    steps: ['Demo Repo (submodule)', 'Docker Build', 'GitHub Actions CI', 'Azure Container App', 'Caddy Reverse Proxy'],
    links: { repo: 'https://github.com/bryanmehsmith/demo-site', demo: 'https://demo.bryansmith.co.za' }
  },
  {
    name: 'This Portfolio Website',
    tagline: 'A React site with an authoritative LaTeX resume, compiled to PDF automatically in CI and deployed on every push.',
    description: [
      {
        subtitle: 'Problem',
        text: 'Needed a professional, always-current site and resume without manually keeping a PDF in sync.'
      },
      {
        subtitle: 'Approach',
        text: 'React site with an authoritative LaTeX resume compiled to PDF automatically in CI, deployed as an Azure Static Web App on every push to main.'
      },
      {
        subtitle: 'Impact',
        text: 'The resume PDF a visitor downloads always matches the source of truth, with no manual sync step and a fully automated deploy pipeline.'
      }
    ],
    stack: ['React', 'react-router-dom', 'GitHub Actions', 'Azure Static Web Apps', 'LaTeX', 'latexmk'],
    steps: ['LaTeX Resume Source', 'GitHub Actions CI', 'Azure Static Web Apps'],
    links: { repo: 'https://github.com/bryanmehsmith/personal-website', demo: 'https://www.bryansmith.co.za' }
  },
  {
    name: 'JSE Momentum Factor Backtest',
    tagline: 'A transparent, from-scratch quant research pipeline testing the momentum factor on the Johannesburg Stock Exchange.',
    description: [
      {
        subtitle: 'Problem',
        text: 'Wanted to test whether a well-documented equity factor (momentum) holds up on a smaller, less liquid market like the JSE, with a transparent, from-scratch pipeline rather than a vendor black box.'
      },
      {
        subtitle: 'Approach',
        text: 'Pulls adjusted close prices for a JSE ticker universe, computes a "12-1" momentum signal (12-month formation window, skipping the most recent month to avoid short-term reversal), ranks the universe into quantiles, and runs a vectorized long-only top-quantile backtest with monthly rebalancing.'
      },
      {
        subtitle: 'Impact',
        text: 'A working, tested, end-to-end factor research pipeline (data, signal, portfolio, performance report covering returns, max drawdown, and turnover), demonstrating quantitative research rigor directly relevant to the asset-management domain, using only public market data.'
      }
    ],
    stack: ['Python', 'yfinance', 'pandas', 'numpy', 'pytest', 'uv'],
    steps: ['Price Data', 'Momentum Signal (12-1)', 'Quantile Portfolio Construction', 'Backtest & Performance Report'],
    links: { repo: 'https://github.com/bryanmehsmith/basic-jse-momentum-factor', demo: 'https://demo.bryansmith.co.za/demos/momentum-factor/' }
  },
  {
    name: 'Factor Regression Lab',
    tagline: 'An interactive tool for decomposing asset returns into risk-factor exposure and genuine alpha, with rigorous standard-error diagnostics.',
    description: [
      {
        subtitle: 'Problem',
        text: 'A quoted return in isolation is meaningless. Outperformance can be genuine skill (alpha) or exposure to well-known, cheaply replicable risk factors, while naive OLS often overstates significance when residuals are autocorrelated.'
      },
      {
        subtitle: 'Approach',
        text: 'Runs nested regressions on excess returns against CAPM, Fama-French 3-factor, Fama-French 5-factor, and FF5+Momentum models to show how alpha shrinks as more factors are added, computing standard errors three ways (Classical OLS, White HC1, Newey-West HAC) alongside Breusch-Pagan, Durbin-Watson, Ljung-Box, Jarque-Bera, and VIF diagnostics, plus rolling-window estimates to catch time-varying exposures.'
      },
      {
        subtitle: 'Impact',
        text: 'A transparent, interactive tool that turns "is this alpha real?" into a testable, diagnosable question rather than a single misleading OLS t-stat.'
      }
    ],
    stack: ['Python', 'Streamlit', 'statsmodels', 'pandas', 'yfinance', 'matplotlib', 'pytest', 'uv'],
    steps: ['Factor & Price Data', 'Alignment', 'Nested Regression (CAPM to FF5+Mom)', 'Diagnostics & Robust SEs', 'Rolling Stability', 'Visualization'],
    links: { repo: 'https://github.com/bryanmehsmith/factor-regression-lab', demo: 'https://demo.bryansmith.co.za/demos/factor-regression/' }
  }
];

const ProjectDiagram = ({ steps }) => (
  <div className="project-diagram" aria-hidden="true">
    {steps.map((step, i) => (
      <React.Fragment key={step}>
        <span className="diagram-step">{step}</span>
        {i < steps.length - 1 && <span className="diagram-arrow">&rarr;</span>}
      </React.Fragment>
    ))}
  </div>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
  </svg>
);

const DisabledLink = ({ children }) => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <span
      className="project-link project-link-disabled"
      aria-disabled="true"
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowComingSoon(true);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          setShowComingSoon(true);
        }
      }}
      onMouseLeave={() => setShowComingSoon(false)}
      onBlur={() => setShowComingSoon(false)}
    >
      {showComingSoon ? 'Coming soon!' : children}
    </span>
  );
};

export const ProjectLinks = ({ links }) => (
  <div className="project-links" onClick={(e) => e.stopPropagation()}>
    {links.repo ? (
      <a
        href={links.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        aria-label="View repository"
      >
        <GitHubIcon />
        View Repo
      </a>
    ) : (
      <DisabledLink>
        <GitHubIcon />
        View Repo
      </DisabledLink>
    )}
    {links.demo ? (
      <a
        href={links.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        Live Demo &#8599;
      </a>
    ) : (
      <DisabledLink>Live Demo &#8599;</DisabledLink>
    )}
  </div>
);

const CaseStudyCard = ({ project }) => (
  <details className="card-full-width project-card">
    <summary className="card-title project-summary">
      <span className="project-name">{project.name}</span>
      <ProjectLinks links={project.links} />
    </summary>
    <div className="project-body">
      <p className="summary">{project.tagline}</p>
      <ProjectDiagram steps={project.steps} />
      <ul className="card-list">
        {project.description.map((point) => (
          <li key={point.subtitle} className="card-list-item">
            <strong>{point.subtitle}</strong>: {point.text}
          </li>
        ))}
      </ul>
      <ul className="tag-list">
        {project.stack.map((tech) => (
          <li key={tech} className="tag">{tech}</li>
        ))}
      </ul>
    </div>
  </details>
);

const Projects = () => {
  usePageTitle('Projects');
  const publicProjects = projects.filter((project) => project.description);

  return (
    <section className="projects card-container">
      <h2>Projects</h2>
      <p className="projects-note">
        Infrastructure choices below (e.g. single container, Docker Compose, shared hosting) were
        made to keep costs and operational overhead low for personal projects and demos. They are
        not intended to reflect how architecture or infrastructure decisions would be made in an
        enterprise environment.
      </p>

      <h3 className="project-group-heading">Public Projects</h3>
      {publicProjects.map((project) => (
        <CaseStudyCard key={project.name} project={project} />
      ))}
    </section>
  );
};

export default Projects;
