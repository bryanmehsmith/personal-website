import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const NotFound = () => {
  usePageTitle('Page not found');
  return (
    <section className="not-found-section">
      <h2>Page not found</h2>
      <p>That page doesn't exist. Try the summary, or pick a section from the navigation above.</p>
      <p>
        <Link to="/" className="download-button">Back to summary</Link>
      </p>
    </section>
  );
};

export default NotFound;
