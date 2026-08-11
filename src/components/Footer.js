import React from 'react';
import ContactLinks from './ContactLinks';

const Footer = () => (
  <footer className="footer">
    <ContactLinks />
    <p>&copy; {new Date().getFullYear()} Bryan Smith. All rights reserved.</p>
  </footer>
);

export default Footer;
