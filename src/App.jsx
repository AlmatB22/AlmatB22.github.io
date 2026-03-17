import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/Info/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Info/Experience/Experience';
import Projects from './components/Info/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div id="app">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
