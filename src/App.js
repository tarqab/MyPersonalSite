import React from 'react';
import './index.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';



const App = () => {
  return (
    <div className='app'>

      <Navbar />
      <Main />
      <About />
      <Skills />
      <Work />
      <Contact />


    </div>
  )
}

export default App