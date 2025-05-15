import React from 'react';
import './App.css';
import Profile from './Profile';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Profile />
      <About />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
