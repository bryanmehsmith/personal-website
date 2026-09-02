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
    tagline: 'A single Azure Container App serving static browser demos and starting small JSON APIs only when a live data request needs them.',
    description: [
      {
        subtitle: 'Problem',
        text: 'Needed a low cost way to publish independent proof of concept demos without provisioning and running a separate service for every project.'
      },
      {
        subtitle: 'Approach',
        text: 'Caddy serves static HTML and JavaScript frontends directly. A small process manager starts the Python JSON APIs for live market data only on demand, then reaps idle processes. Each demo remains an independent Git submodule, while GitHub Actions builds and deploys the shared container.'
      },
      {
        subtitle: 'Impact',
        text: 'New demos use a submodule, route, and optional API registration. Static demos consume no background process, while data backed demos retain an optional live refresh path. This remains a proof of concept hosting pattern.'
      }
    ],
    stack: ['Docker', 'Caddy', 'Vanilla JavaScript', 'JSON APIs', 'GitHub Actions', 'Azure Container Apps', 'Python'],
    steps: ['Demo Repo', 'Static Frontend', 'Optional Live API', 'Caddy Routing', 'Azure Container App'],
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
    tagline: 'A guided research lab for constructing and testing a long only momentum strategy on the Johannesburg Stock Exchange.',
    description: [
      {
        subtitle: 'Problem',
        text: 'Wanted to examine the mechanics, risks, and limitations of a momentum strategy on a smaller market without relying on a vendor backtesting black box.'
      },
      {
        subtitle: 'Approach',
        text: 'The Python research implementation computes a 12 minus 1 momentum signal, ranks a JSE universe into quantiles, and backtests an equal weighted top quantile portfolio with monthly rebalancing. A static JavaScript frontend ports the same calculations into the browser and runs against a bundled monthly price snapshot. A companion JSON API is used only for optional live price refreshes.'
      },
      {
        subtitle: 'Impact',
        text: 'The tested workflow reports returns, volatility, Sharpe ratio, and maximum drawdown while explaining formation windows, portfolio construction, and momentum crash risk. It is research and education using public market data, not investment advice.'
      }
    ],
    stack: ['Python', 'JavaScript', 'yfinance', 'pandas', 'NumPy', 'pytest', 'JSON API', 'KaTeX'],
    steps: ['Market Data', '12 Minus 1 Signal', 'Quantile Portfolio', 'Risk & Performance', 'Browser Lab'],
    links: { repo: 'https://github.com/bryanmehsmith/basic-jse-momentum-factor', demo: 'https://demo.bryansmith.co.za/demos/momentum-factor/' }
  },
  {
    name: 'Factor Regression Lab',
    tagline: 'A guided statistical inference lab for testing whether apparent alpha is distinct from known factor exposure.',
    description: [
      {
        subtitle: 'Problem',
        text: 'A return alone does not show whether outperformance came from alpha or known factor exposure. Inference also changes when residual variance and autocorrelation violate classical OLS assumptions.'
      },
      {
        subtitle: 'Approach',
        text: 'Runs nested CAPM, Fama French three factor, five factor, and five factor plus momentum models. It compares classical, White HC1, and Newey West HAC standard errors, then adds residual, multicollinearity, nested model, and rolling stability diagnostics. A static JavaScript frontend runs against bundled monthly snapshots, while a companion JSON API supports optional live data and ticker requests.'
      },
      {
        subtitle: 'Impact',
        text: 'The browser implementation is checked through Python parity fixtures and distribution reference tests. The result is an inspectable workflow for asking whether alpha survives model choice and appropriate uncertainty estimates, without presenting the output as investment advice.'
      }
    ],
    stack: ['Python', 'JavaScript', 'statsmodels', 'pandas', 'yfinance', 'pytest', 'JSON API', 'KaTeX'],
    steps: ['Factor & Asset Data', 'Nested Models', 'Robust Inference', 'Diagnostics', 'Rolling Stability', 'Python Parity'],
    links: { repo: 'https://github.com/bryanmehsmith/factor-regression-lab', demo: 'https://demo.bryansmith.co.za/demos/factor-regression/' }
  },
  {
    name: 'Security Anti-Patterns',
    tagline: 'Five interactive walkthroughs of everyday security practices that feel safe but leave important risks unresolved.',
    description: [
      {
        subtitle: 'Problem',
        text: 'Security advice is often presented as rules without showing the failure mode, which makes weak controls such as emailed files, reused credentials, and fragile password protection feel safer than they are.'
      },
      {
        subtitle: 'Approach',
        text: 'Built five browser based modules covering file transfer, password protected files, credential reuse, phishing, and data at rest. Each starts in plain language and exposes technical detail only when useful, including an illustrative crack time calculator and interactive breach and phishing scenarios.'
      },
      {
        subtitle: 'Scope',
        text: 'A static educational demo built with HTML, CSS, and vanilla JavaScript. Figures are illustrative approximations for comparing relative risk, not audited security measurements or penetration testing guidance.'
      }
    ],
    stack: ['HTML', 'CSS', 'Vanilla JavaScript', 'Security Awareness'],
    steps: ['File Transfer', 'Password Protection', 'Credential Reuse', 'Phishing', 'Data at Rest'],
    links: { repo: 'https://github.com/bryanmehsmith/security-anti-patterns', demo: 'https://demo.bryansmith.co.za/demos/security-anti-patterns/' }
  },
  {
    name: 'NN Foundations Lab',
    status: 'In progress',
    tagline: 'An in progress guided lab that builds neural network fundamentals from explicit mathematics and small implementations.',
    description: [
      {
        subtitle: 'Problem',
        text: 'High level frameworks make neural networks productive but can hide the mechanics of tensors, losses, gradients, optimisation, and numerical stability.'
      },
      {
        subtitle: 'Approach',
        text: 'Implements tensors, layers, activations, losses, manual backpropagation, SGD, Adam, regularisation, and training loops from scratch in NumPy and JavaScript. Numerical gradient checks verify backward passes, while parity checks compare the reference implementations with PyTorch and TensorFlow.js.'
      },
      {
        subtitle: 'Status',
        text: 'The live static lab currently covers regression, probability, classification, softmax and cross entropy, Jacobians, SVD, normalisation, backpropagation, optimisers, regularisation, and framework parity. The project remains in progress as the explanations and checks are refined.'
      }
    ],
    stack: ['NumPy', 'PyTorch', 'JavaScript', 'TensorFlow.js', 'pytest', 'KaTeX'],
    steps: ['Math Foundations', 'Forward Pass', 'Loss', 'Backpropagation', 'Optimisation', 'Parity Checks'],
    links: { repo: 'https://github.com/bryanmehsmith/nn-foundations-lab', demo: 'https://demo.bryansmith.co.za/demos/nn-foundations/' }
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
      <span className="project-title">
        <span className="project-name">{project.name}</span>
        {project.status && <span className="project-status">{project.status}</span>}
      </span>
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
