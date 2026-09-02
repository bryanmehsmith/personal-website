import React from 'react';
import usePageTitle from '../hooks/usePageTitle';

export const experiences = [
  {
    company: 'Peregrine Capital',
    role: 'Data Scientist',
    duration: 'Nov 2021 - Present',
    location: 'Sandton',
    summary: 'Built and now own core parts of the production data and analytics platform, supporting investment data, reporting, enterprise integrations, and internal operational tooling.',
    description: [
      {
        subtitle: 'Microsoft Fabric Platform Engineering',
        text: 'Engineered a Microsoft Fabric platform spanning Lakehouse, pipelines, PySpark, T-SQL, Direct Lake semantic models, Power BI, paginated reporting, and governed deployment workflows.'
      },
      {
        subtitle: 'Investment Data & Reporting',
        text: 'Delivered governed reporting for positions, trades, returns, exposure, reconciliation, and investor reporting across multiple business functions. Coordinated compatible reporting changes across data, semantic, and presentation layers.'
      },
      {
        subtitle: 'Data Modelling & Data Contracts',
        text: 'Designed and maintained dimensional models, data contracts, database schemas, relationships, and access controls. Managed structural changes across pipelines, semantic models, and reports while preserving compatibility.'
      },
      {
        subtitle: 'Enterprise Integration & Event Driven Processing',
        text: 'Built ingestion, reconciliation, synchronisation, and delivery flows across portfolio, CRM, finance, web, REST API, SFTP, and file sources. Introduced event driven processing where appropriate, triggering downstream work when files arrive.'
      },
      {
        subtitle: 'Applied Modelling & Feature Engineering',
        text: 'Built unsupervised models that flag observations outside expected patterns. Engineered features for analysis, including temporal decomposition and derived labels used in stakeholder workflows.'
      },
      {
        subtitle: 'AI & Governed Workflows',
        text: 'Embedded OCR, speech to text, LLM extraction, classification, unsupervised modelling, and agent routing into operational workflows. Built a spam detection agent powered by an LLM for inbound messages and a query router agent for tools, workflows, or specialist agents, with human review and engineering safeguards.'
      },
      {
        subtitle: 'Internal Products & Team Automation',
        text: 'Built secure internal applications and Microsoft Teams bots using React, TypeScript, Node.js, Microsoft Graph, Adaptive Cards, group chat creation, and acknowledgement tracking.'
      },
      {
        subtitle: 'Cloud, Identity & Security',
        text: 'Built Azure services and infrastructure as code with guarded deployments. Configured Microsoft Entra application identities, OAuth, SAML SSO, MFA requirements, Key Vault, least privilege, and explicit access controls.'
      },
      {
        subtitle: 'Monitoring, Diagnosis & Reliability',
        text: 'Added automated tests, alerting, observability, deployment checks, and rollback safeguards. Diagnosed reporting and data issues end to end by tracing symptoms through paginated reports, semantic models, pipelines, historical records, and source rows.'
      },
      {
        subtitle: 'Stakeholder Delivery & Technical Leadership',
        text: 'Work directly with stakeholders and vendors across requirements analysis, solution design, architectural planning, environment setup, implementation, deployment, and support. Guide platform tradeoffs and build versus buy decisions, mentor engineers, review code, and apply structured change control.'
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
