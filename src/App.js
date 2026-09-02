import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './style.css';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

const SITE_URL = 'https://bryansmith.co.za';

const RouteMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <RouteMetadata />
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
