import React, { useState } from 'react';
import usePageTitle from '../hooks/usePageTitle';

export const education = [
  {
    title: 'BSc Computer Science (Part-Time)',
    institution: 'University of Witwatersrand',
    duration: '2022 - 2025',
    location: 'Johannesburg',
    description: 'Completed part-time alongside full-time work.',
    highlight: 'Relevant coursework: Machine Learning, Parallel Computing, Advanced Analysis of Algorithms, Software Design.',
    moduleList: [
      {
        year: 'Year 1',
        modules: [
          { module: 'Mathematical Methods and Modelling' },
          { module: 'Mechanics' },
          { module: 'Scientific Computing' },
          { module: 'Basic Computer Organisation' },
          { module: 'Discrete Computational Structures' },
          { module: 'Introduction to Data Structures and Algorithms' },
        ]
      },
      {
        year: 'Year 2',
        modules: [
          { module: 'Mobile Computing' },
          { module: 'Computer Networks' },
          { module: 'Analysis of Algorithms' },
          { module: 'Economics' },
          { module: 'Abstract Mathematics' },
          { module: 'Advanced Analysis' }
        ]
      },
      {
        year: 'Year 3',
        modules: [
          { module: 'Formal Languages and Automata' },
          { module: 'Advanced Analysis of Algorithms' },
          { module: 'Operating Systems and System Programming' },
          { module: 'Machine Learning' },
          { module: 'Computer Graphics and Visualisation' },
          { module: 'Parallel Computing' },
          { module: 'Software Design Project' },
          { module: 'Software Design' },
        ]
      }
    ]
  },
  {
    title: 'BSc Actuarial and Financial Mathematics',
    institution: 'University of Pretoria',
    duration: '2016 - 2019',
    location: 'Pretoria',
    description: 'Comprehensive quantitative degree combining actuarial science, mathematics, and finance.',
    highlight: 'Relevant coursework: Multivariate Analysis, Stochastic Processes, Time Series Analysis, Financial Engineering.',
    moduleList: [
      {
        year: 'Year 1',
        modules: [
          { module: 'Imperative Programming' },
          { module: 'Economics' },
          { module: 'Financial Management' },
          { module: 'Mathematical Statistics' },
          { module: 'Calculus' },
          { module: 'Numerical Analysis' },
          { module: 'Linear Algebra' }
        ]
      },
      {
        year: 'Year 2',
        modules: [
          { module: 'Actuarial Mathematics' },
          { module: 'Informatics' },
          { module: 'Mathematical Statistics' },
          { module: 'Linear Algebra' },
          { module: 'Calculus' },
          { module: 'Analysis' },
          { module: 'Differential Equations' },
        ]
      },
      {
        year: 'Year 3',
        modules: [
          { module: 'Contingencies' },
          { module: 'Insurance and Actuarial Applications' },
          { module: 'Survival Models' },
          { module: 'Multivariate Analysis' },
          { module: 'Stochastic Processes' },
          { module: 'Time Series Analysis' },
          { module: 'Actuarial Statistics' },
          { module: 'Financial Engineering' },
          { module: 'Financial Mathematics' },
        ]
      }
    ]
  },
  {
    title: 'Actuarial Exams (ASSA)',
    institution: 'Actuarial Society of South Africa',
    description: 'Passed a series of professional exams covering various aspects of actuarial science.',
    moduleList: [
      {
        year: 'A100',
        modules: [
          { module: 'A111 - Actuarial Statistics' },
          { module: 'A112 - Economics' },
          { module: 'A113 - Business Finance' }
        ]
      },
      {
        year: 'A200',
        modules: [
          { module: 'A211 - Financial Mathematics' },
          { module: 'A213 - Contingencies' }
        ]
      }
    ]
    // ASSA exam codes are kept - unlike university module codes, they are the
    // recognised public identifiers for these papers.
  }
];

const Education = () => {
  usePageTitle('Education');
  const [expandedEntries, setExpandedEntries] = useState({});

  const toggleEntry = (index) => {
    setExpandedEntries((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="education card-container">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="card-full-width">
          <h3>{edu.title}</h3>
          <span className="details">
            {edu.institution}
            {edu.duration && ` | ${edu.duration}`}
            {edu.location && `, ${edu.location}`}
          </span>
          <p>{edu.description}</p>
          {edu.highlight && <p className="education-highlight">{edu.highlight}</p>}
          {edu.moduleList && (
            <div className="card-container">
              {edu.moduleList.map((yearData, idx) => (
                <details key={idx} className="card module-card" open={!!expandedEntries[index]}>
                  <summary
                    className="module-year"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleEntry(index);
                    }}
                  >
                    {yearData.year}
                  </summary>
                  <ul className="card-list">
                    {yearData.modules.map((module, moduleIdx) => (
                      <li key={moduleIdx} className="card-list-item">
                        {module.module}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Education;