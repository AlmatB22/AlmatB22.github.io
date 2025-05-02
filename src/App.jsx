import { useState, useEffect } from 'react'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import About from './components/Info/About/About'
import Experience from './components/Info/Experience/Experience'
import Projects from './components/Info/Projects/Projects'
import Cancel from './components/Info/InfoHeader/InfoHeader'
import './App.css'

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 760 && page !== 'home') {
        setPage('home');
      }
    };

    // Run once on mount
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [page]);

  return (
      <div id='app'>
        <Navigation />
        <div id='app-body'>
          {page === 'home' && <Home changePage={setPage}/>}
          {page === 'project' && <Projects changePage={setPage}/>}
          {page === 'experience' && <Experience changePage={setPage}/>}
          {page === 'about' && <About changePage={setPage}/>}
        </div>
      </div>
  )
}

export default App;
