import React from 'react';

const ContactLinks = () => (
  <ul className="contact-links">
    <li>
      <a
        href="https://www.linkedin.com/in/bryansmithza/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bryan Smith on LinkedIn"
        className="contact-link"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M6.94 8.5H4.03V20h2.91V8.5zM5.48 4a1.69 1.69 0 1 0 0 3.38 1.69 1.69 0 0 0 0-3.38zM20 20h-2.9v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20h-2.9V8.5h2.79v1.57h.04c.39-.73 1.34-1.5 2.75-1.5 2.94 0 3.25 1.94 3.25 4.46V20z" />
        </svg>
      </a>
    </li>
    <li>
      <a
        href="https://github.com/bryanmehsmith"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bryan Smith on GitHub"
        className="contact-link"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
        </svg>
      </a>
    </li>
  </ul>
);

export default ContactLinks;
