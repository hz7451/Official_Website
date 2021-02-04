import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path='/Official_Website/' exact component={Home} />
            <Route path='/Official_Website/about' component={About} />
            <Route path='/Official_Website/work' component={Work} />
            <Route path='/Official_Website/contact' component={Contact} />
          </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
