import AboutMe from './components/Aboutme/aboutme.tsx';
import Header from './components/Header/header.tsx';
import Hobbies from './components/Hobbies/hobbies';
import Portfolio from './components/Portfolio/portfolio';
import Skills from './components/Skills/skills';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills/>
      <Hobbies/>
      <Portfolio/>
    </div>
  );
}

export default App;
