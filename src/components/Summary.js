import React from 'react';
import usePageTitle from '../hooks/usePageTitle';

export const summaryParagraphs = [
  'Data Scientist and data platform engineer with responsibility across the full lifecycle of production data platforms, analytics, and automation in investment management. I build Microsoft Fabric Lakehouse pipelines, semantic models, Power BI reporting, enterprise integrations, and secure internal tools.',
  'I work directly with stakeholders from requirements and architecture through deployment and support. My work spans Python, PySpark, T-SQL, Azure, Microsoft Graph, applied machine learning, and governed LLM workflows.',
  'I combine hands-on engineering with technical leadership, mentoring, code review, and platform planning. I focus on automated testing, least privilege, observability, deployment safety, and root cause diagnosis.',
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
