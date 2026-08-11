import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div className="app">
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
