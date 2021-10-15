import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './navbar/Navbar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Education from './components/Education';
import Home from './components/Home';
import Leadership from './components/Leadership';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Home/>
        <AboutMe/>
        <Education/>
        <Skills/>
        <WorkExperience/>
        <Projects/>
        <Leadership/>
        <Contact/>
      </div>
    );
  }
}

export default App;
