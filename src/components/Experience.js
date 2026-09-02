import React from 'react';
import usePageTitle from '../hooks/usePageTitle';

export const experiences = [
  {
    company: 'Peregrine Capital',
    role: 'Data Scientist',
    duration: 'Nov 2021 - Present',
    location: 'Sandton',
    summary: 'Built and own Peregrine\'s end-to-end data platform: 100+ production pipelines drawing from dozens of source systems into hundreds of modelled tables, feeding an enterprise reporting estate used across the business.',
    description: [
      {
        subtitle: 'Data Platform Ownership',
        text: 'Built the platform from the ground up, initially using Airflow, Docker, and Postgres before migrating to Microsoft Fabric Pipelines, PySpark, and T-SQL. It now runs 100+ pipelines across hundreds of modelled tables. I own platform-level architecture and administration.'
      },
      {
        subtitle: 'Enterprise Data Integration',
        text: 'Unified dozens of source systems into a single analytics ecosystem, spanning file transfers, APIs, and web-based integrations, including sources with no API. I also built and maintained functionality within a CRM platform, owning it as a system of record for the analytics team.'
      },
      {
        subtitle: 'Stream-Based Ingestion',
        text: 'Replaced schedule-based file ingestion with event-driven, stream-based processing, triggering downstream processing the instant a file lands. This removed the guesswork of scheduling around estimated arrival times and cut the lag between a file arriving and the data being available.'
      },
      {
        subtitle: 'Machine Learning & Feature Engineering',
        text: 'Built unsupervised models that flag data points falling outside a dataset\'s expected norm, surfacing anomalies for investigation. Engineered features for downstream analysis, including temporal decomposition and derived labels that drive stakeholder analyses.'
      },
      {
        subtitle: 'BI & Reporting',
        text: 'Delivered a wide-reaching enterprise reporting estate across Power BI and paginated reports, now used firm-wide, owning both the visualisation layer and its governance. These reports are the primary decision-making surface for the business teams that consume them.'
      },
      {
        subtitle: 'Data Modeling & Database Administration',
        text: 'Designed and maintained logical and physical data models using Kimball methodology with Snowflake schemas. Owned database design and administration across reporting and analytics environments, including schemas, access controls, and performance tuning.'
      },
      {
        subtitle: 'AI-Augmented Workflows',
        text: 'Embedded LLMs into operational processes via Azure AI Foundry. OCR paired with LLM classification turns document images into structured data, and speech-to-text plus LLM extraction turns meeting discussions into tracked, documented work items. I also built an LLM-powered spam detection agent to classify inbound messages, a query router agent to direct user requests to the appropriate tool, workflow, or specialist agent, and AI-assisted developer tooling to support the team\'s day-to-day engineering work.'
      },
      {
        subtitle: 'Monitoring & Alerting',
        text: 'Implemented pipeline- and report-level alerting that flags data quality issues before invalid outputs reach reports, backed by an AI agent that assists with error diagnosis and remediation guidance for an engineer to action directly.'
      },
      {
        subtitle: 'Internal Applications',
        text: 'Built internal web applications on Azure Container Apps and Azure Static Web Apps, plus Microsoft Teams bots that automate collaboration workflows through group chat creation, Adaptive Cards, and acknowledgement tracking.'
      },
      {
        subtitle: 'Team Leadership & Delivery',
        text: 'Work directly with stakeholders across the full delivery lifecycle, covering requirements analysis, solution design, architectural planning, environment setup, implementation, deployment, and ongoing support. I also provide technical mentorship and code review, onboard new hires, and set technical direction. I manage delivery through Azure DevOps with structured environments and formal change control.'
      },
      {
        subtitle: 'Azure Cloud Integration & Security',
        text: 'Built secure, scalable automation with Azure Logic Apps, Function Apps, Storage Accounts, and Key Vault, with enterprise-grade authentication and secrets management across environments. Configured Microsoft Entra application identities and implemented SAML SSO integrations that support enterprise MFA requirements across applications hosted on Azure and enterprise SaaS platforms.'
      }
    ]
  },
  {
    company: 'First National Bank',
    role: 'Data Engineer',
    duration: 'Jan 2020 - Oct 2021',
    location: 'Randburg',
    summary: 'Built high-performance ETL pipelines and large-scale data integrations in an enterprise banking environment, focused on optimised workflows and reducing system overhead.',
    description: [
      {
        subtitle: 'ETL Pipeline Development',
        text: 'Built dynamic, reusable ETL pipelines using Ab Initio and Teradata SQL, ingesting high volumes from Kafka queues, Postgres, and MySQL. These pipelines powered the App, USSD, and Online channels, with a modular design that enabled cross-channel reuse.'
      },
      {
        subtitle: 'Cost & Efficiency Gains',
        text: 'Redesigned Teradata table structures to balance cost against speed. Strategic indexing, structural refinements, and multi-value compression (MVC) cut storage by up to 50% while reducing resource consumption and improving throughput.'
      },
      {
        subtitle: 'Performance Optimisation',
        text: 'Tuned pipelines to process gigabytes within short batch windows through repeated rounds of indexing, partitioning, and resource management.'
      },
      {
        subtitle: 'Complex Data Modeling',
        text: 'Developed logical and physical data architectures spanning dozens of interconnected tables, which depended on understanding the source system logic in depth and designing transformations that kept data flows accurate under load.'
      },
      {
        subtitle: 'Team Contributions & Leadership',
        text: 'Progressed quickly into code review and mentorship responsibilities, and was trusted by senior engineers to deliver production-grade code.'
      },
      {
        subtitle: 'Database & Access Administration',
        text: 'Managed SQL environment permissions and access controls across production and development layers, minimising risk.'
      }
    ]
  },
];

const Experience = () => {
  usePageTitle('Experience');
  return (
    <section className="experience card-container">
      <h2>Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="card-full-width">
          <div className="experience-card-header">
            <h3 className="card-title">{exp.role}</h3>
            <span className="details">{exp.company} | {exp.duration}, {exp.location}</span>
          </div>
          <p className="summary">{exp.summary}</p>
          {Array.isArray(exp.description) ? (
            <ul className="card-list">
              {exp.description.map((point, i) => (
                <li key={i} className="card-list-item">
                  <strong>{point.subtitle}</strong>: {point.text}
                </li>
              ))}
            </ul>
          ) : (
            <p>{exp.description}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default Experience;
