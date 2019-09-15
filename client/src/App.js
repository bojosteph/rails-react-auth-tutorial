import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Landing />
    </div>
    </Router>
  );
}

export default App;
