import React, { Component } from 'react';
import About from './components/about';
import resumeData from './resumeData';
import './App.css';

class App extends Component {
  render() {
    return (
      <About resumeData={resumeData}/>
    );
  }
}

export default App;
