import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from './Education';

describe('Education component', () => {
  test('renders all education entries', () => {
    render(<Education />);
    
    // Check for main education titles
    expect(screen.getByText('BSc Computer Science (Part-Time)')).toBeInTheDocument();
    expect(screen.getByText('BSc Actuarial and Financial Mathematics')).toBeInTheDocument();
    expect(screen.getByText('Actuarial Exams (ASSA)')).toBeInTheDocument();
  });

  test('displays institution and duration information correctly', () => {
    render(<Education />);
    
    // Check for institution and duration details
    expect(screen.getByText(/University of Witwatersrand/)).toBeInTheDocument();
    expect(screen.getByText(/2022 - 2025/)).toBeInTheDocument();
    expect(screen.getByText(/Johannesburg/)).toBeInTheDocument();
    
    expect(screen.getByText(/University of Pretoria/)).toBeInTheDocument();
    expect(screen.getByText(/2016 - 2019/)).toBeInTheDocument();
    expect(screen.getByText(/Pretoria/)).toBeInTheDocument();
  });

  test('renders descriptions for each education entry', () => {
    render(<Education />);
    
    expect(screen.getByText(/Completed part-time alongside full-time work/))
      .toBeInTheDocument();
    expect(screen.getByText(/Comprehensive quantitative degree combining actuarial science/))
      .toBeInTheDocument();
    expect(screen.getByText(/Passed a series of professional exams covering various aspects/))
      .toBeInTheDocument();
  });

  test('surfaces relevant coursework for each degree', () => {
    render(<Education />);

    expect(screen.getByText(/Relevant coursework: Machine Learning, Parallel Computing/))
      .toBeInTheDocument();
    expect(screen.getByText(/Relevant coursework: Multivariate Analysis, Stochastic Processes/))
      .toBeInTheDocument();
  });

  test('displays module information with year groupings', () => {
    render(<Education />);
    
    // Check for year headings
    expect(screen.getAllByText('Year 1')).toHaveLength(2); // Two education entries have Year 1
    expect(screen.getAllByText('Year 2')).toHaveLength(2); // Two education entries have Year 2
    expect(screen.getAllByText('Year 3')).toHaveLength(2); // Two education entries have Year 3
    
    // Check for exam levels
    expect(screen.getByText('A100')).toBeInTheDocument();
    expect(screen.getByText('A200')).toBeInTheDocument();
  });

  test('renders specific modules correctly', () => {
    render(<Education />);

    // Module names only - university course codes carry no signal for a reader.
    expect(screen.getByText('Basic Computer Organisation')).toBeInTheDocument();
    expect(screen.getByText('Software Design')).toBeInTheDocument();
    expect(screen.getByText('Imperative Programming')).toBeInTheDocument();

    // ASSA exam codes are retained - they are the recognised public paper identifiers.
    expect(screen.getByText(/A111 - Actuarial Statistics/)).toBeInTheDocument();
    expect(screen.getByText(/A213 - Contingencies/)).toBeInTheDocument();
  });

  test('strips university course codes from module names', () => {
    render(<Education />);

    const section = document.querySelector('.education.card-container');
    expect(section).not.toHaveTextContent(/\b(COMS|APPM|MATH|ECON|COS|WST|WTW|IAS|INF|FBS|EKN)\d{3}/);
  });

  test('renders proper HTML structure with correct CSS classes', () => {
    render(<Education />);
    
    // Check for card structure
    const cards = document.querySelectorAll('.card-full-width');
    expect(cards).toHaveLength(3); // Three education entries
    
    // Check for module cards
    const moduleCards = document.querySelectorAll('.card');
    expect(moduleCards.length).toBeGreaterThan(0);
    
    // Check for card lists
    const cardLists = document.querySelectorAll('.card-list');
    expect(cardLists.length).toBeGreaterThan(0);
    
    // Check that the section has the correct classes
    const section = document.querySelector('.education.card-container');
    expect(section).toBeInTheDocument();
  });

  test('handles education entries without duration or location', () => {
    render(<Education />);
    
    // The ASSA entry doesn't have duration or location
    const assaEntry = screen.getByText('Actuarial Society of South Africa').closest('.card-full-width');
    expect(assaEntry).toBeInTheDocument();
    
    // Should still render the description
    expect(screen.getByText(/Passed a series of professional exams/)).toBeInTheDocument();
  });
});