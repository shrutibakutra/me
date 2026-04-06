import { useState, useEffect } from 'react';
import AboutMe from './components/Aboutme/aboutme.tsx';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Header from './components/Header/header.tsx';
import Hobbies from './components/Hobbies/hobbies';
import Portfolio from './components/Portfolio/portfolio';
import Skills from './components/Skills/skills';
import "./App.css";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

function App() {
  return (
    <div>
      <ScrollProgress />
      <Header />
      <AboutMe />
      <Skills/>
      <Hobbies/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
