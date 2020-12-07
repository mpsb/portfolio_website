import React, { Component } from 'react';
import About from './components/about';
import Header from './components/header';
import resumeData from './resumeData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
