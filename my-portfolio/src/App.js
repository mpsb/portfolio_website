import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from "./components/about";
import Header from "./components/header";
import Login from "./components/login";
import Projects from "./components/projects";
import Dashboard from "./components/dashboard";
import resumeData from "./resumeData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Projects resumeData={resumeData} />
        <Login resumeData={resumeData} />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
