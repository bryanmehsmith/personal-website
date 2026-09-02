import React from 'react';
import usePageTitle from '../hooks/usePageTitle';

export const summaryParagraphs = [
  'Data Scientist and Data Engineer who builds and owns production data platforms. At Peregrine Capital I built the platform that runs the business\'s analytics: 100+ pipelines drawing from dozens of source systems into hundreds of modelled tables, feeding an enterprise reporting estate used firm-wide.',
  'Hands-on across Azure, Microsoft Fabric, Spark, Airflow, Python, and SQL. Depth in data ingestion, warehousing, schema design, database administration, and performance tuning, with applied machine learning and generative AI on top.',
  'I adapt quickly. I pivoted from actuarial and financial mathematics into data, then learned each new stack on the job, including Ab Initio and Teradata at First National Bank, followed by Azure, Microsoft Fabric, and AI tooling at Peregrine.',
  'I have since grown into technical leadership and software engineering: mentoring and onboarding team members, setting technical direction, and building internal web applications and tooling. My delivery standards are pragmatic: secure access patterns, automated deployments, and proactive alerting. This helps teams move fast without trading away reliability.',
];

const Summary = () => {
  usePageTitle('Summary');
  return (
    <section className="summary-section">
      <h2>Summary</h2>
      {summaryParagraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </section>
  );
};

export default Summary;
