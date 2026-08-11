import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import ContactLinks from './ContactLinks';
import DownloadCVButton from './DownloadCVButton';

const NAV_ITEMS = [
  { path: '/', label: 'Summary' },
  { path: '/skills', label: 'Skills' },
  { path: '/experience', label: 'Experience' },
  { path: '/education', label: 'Education' },
  { path: '/projects', label: 'Projects' },
];

const getInitialDarkMode = () => {
  const stored = window.localStorage.getItem('darkMode');
  if (stored !== null) return stored === 'true';
  return Boolean(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
};

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    return () => {
      document.body.classList.remove('dark-mode');
    };
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      window.localStorage.setItem('darkMode', String(next));
      return next;
    });
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-identity">
          <h1 className="header-title">Bryan Smith</h1>
          <p className="header-role">Data Scientist &amp; Data Engineer</p>
          <p className="header-breadth">Data Analytics • Business Intelligence • Software Engineering</p>
          <p className="header-specialisms">Azure • Microsoft Fabric • Spark • Python • SQL</p>
          <p className="header-location">Pretoria, South Africa</p>
        </div>
        <div className="header-actions">
          <ContactLinks />
          <DownloadCVButton />
          <div className="dark-mode-toggle-container">
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                aria-label="Toggle dark mode"
              />
              <span className="slider">
                <span className="icon sun" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                    <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                      <path d="M12 2.5v2" />
                      <path d="M12 19.5v2" />
                      <path d="M4.8 4.8l1.4 1.4" />
                      <path d="M17.8 17.8l1.4 1.4" />
                      <path d="M2.5 12h2" />
                      <path d="M19.5 12h2" />
                      <path d="M4.8 19.2l1.4-1.4" />
                      <path d="M17.8 6.2l1.4-1.4" />
                    </g>
                  </svg>
                </span>
                <span className="icon moon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.8 6.8 0 0 0 21 12.8z" fill="currentColor" />
                  </svg>
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <nav className="site-nav" aria-label="CV sections">
        <ul className="nav-list">
          {NAV_ITEMS.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;