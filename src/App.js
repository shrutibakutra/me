import AboutMe from './components/Aboutme/aboutme.tsx';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Header from './components/Header/header.tsx';
import Hobbies from './components/Hobbies/hobbies';
import Portfolio from './components/Portfolio/portfolio';
import Skills from './components/Skills/skills';
import "./App.css";

function App() {
  return (
    <div>
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
