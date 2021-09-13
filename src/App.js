import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
}
from 'react-router-dom';

import Navigation from './navbar/Navbar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Education from './components/Education';
import Hackathons from './components/Hackathons';
import Home from './components/Home';
import Leadership from './components/Leadership';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import PageNotFound from './components/PageNotFound';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home"></Redirect>}></Route>
            <Route exact path="/about-me" component={ AboutMe }></Route>
            <Route exact path="/education" component={ Education }></Route>
            <Route exact path="/hackathons" component={ Hackathons }></Route>
            <Route exact path="/home" component={ Home }></Route>
            <Route exact path="/leadership" component={ Leadership }></Route>
            <Route exact path="/projects" component={ Projects }></Route>
            <Route exact path="/skills" component={ Skills }></Route>
            <Route exact path="/work-experience" component={ WorkExperience }></Route>
            <Route component={ PageNotFound }></Route>
          </Switch>
          <Contact></Contact>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
