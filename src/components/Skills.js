import React from 'react';
import usePageTitle from '../hooks/usePageTitle';

export const TIERS = ['Core', 'Working knowledge', 'Familiar with'];

export const skillGroups = [
  {
    title: 'Data Processing',
    tiers: {
      'Core': ['Spark'],
      'Working knowledge': ['Batch Processing', 'Stream Processing'],
      'Familiar with': ['Ab Initio']
    }
  },
  {
    title: 'Business Intelligence',
    tiers: {
      'Core': ['Power BI Reports', 'Power BI Paginated Reports'],
      'Working knowledge': ['DAX'],
      'Familiar with': []
    }
  },
  {
    title: 'Cloud',
    tiers: {
      'Core': ['Azure Container Apps', 'Azure Static Web Apps', 'Azure Functions'],
      'Working knowledge': ['Azure Key Vault', 'Azure Logic Apps'],
      'Familiar with': []
    }
  },
  {
    title: 'Data Ingestion & Source Systems',
    tiers: {
      'Core': ['API Ingestion', 'Salesforce', 'SFTP Ingestion'],
      'Working knowledge': ['SharePoint', 'Web Scraping'],
      'Familiar with': []
    }
  },
  {
    title: 'Data Platforms & Warehousing',
    tiers: {
      'Core': ['Microsoft Fabric', 'Microsoft SQL Server'],
      'Working knowledge': ['Postgres'],
      'Familiar with': ['MySQL', 'Teradata']
    }
  },
  {
    title: 'Analytics & Modeling',
    tiers: {
      'Core': ['Data Visualization', 'Feature Engineering'],
      'Working knowledge': ['Statistical Analysis'],
      'Familiar with': []
    }
  },
  {
    title: 'Data Modeling & Database Management',
    tiers: {
      'Core': ['Dimensional Modeling (Kimball)', 'Database Administration', 'Database Design'],
      'Working knowledge': [],
      'Familiar with': []
    }
  },
  {
    title: 'AI & Machine Learning',
    tiers: {
      'Core': [],
      'Working knowledge': [
        'Azure AI Foundry',
        'LLM Integration',
        'Agentic AI Development',
        'Unsupervised Learning',
        'Predictive Modeling'
      ],
      'Familiar with': []
    }
  },
  {
    title: 'Infrastructure & DevOps',
    tiers: {
      'Core': ['Azure DevOps', 'Monitoring & Alerting', 'Docker'],
      'Working knowledge': ['Airflow', 'CI/CD'],
      'Familiar with': []
    }
  },
  {
    title: 'Programming & Scripting',
    tiers: {
      'Core': ['Python', 'SQL (T-SQL)'],
      'Working knowledge': ['Bash'],
      'Familiar with': ['R']
    }
  },
  {
    title: 'Software Engineering',
    tiers: {
      'Core': [],
      'Working knowledge': ['JavaScript', 'React'],
      'Familiar with': []
    }
  }
];

export const languages = [
  { language: 'Afrikaans', fluency: 'Fluent' },
  { language: 'English', fluency: 'Fluent' }
];

const Skills = () => {
  usePageTitle('Skills');
  return (
    <>
      <section className="skills-section" aria-label="Skills">
        <h2>Skills</h2>
        <div className="card-container skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="card skill-card">
              <h3 className="card-title">{group.title}</h3>
              {TIERS.filter((tier) => group.tiers[tier].length > 0).map((tier) => (
                <div key={tier} className="skill-tier">
                  <h4 className="skill-tier-label">{tier}</h4>
                  <ul className="tag-list">
                    {group.tiers[tier].map((skill) => (
                      <li key={skill} className="tag skill-tag">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="languages-section" aria-label="Languages">
        <h2>Languages</h2>
        <p className="languages-line">
          {languages.map((entry) => `${entry.language} (${entry.fluency})`).join(' · ')}
        </p>
      </section>
    </>
  );
};

export default Skills;
