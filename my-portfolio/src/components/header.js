import React, { Component } from "react";


export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
        <header id="home" className="App-header">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li className="current">
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li className="current">
                <a className="smoothscroll" href="#login">
                  Login
                </a>
              </li>
            </ul>
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                Hi there, {resumeData.name} here.
              </h1>

              <h3 style={{ color: "#fff", fontFamily: "sans-serif" }}>
                {resumeData.role}. {resumeData.roleDescription}
              </h3>

              <hr />

              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <br></br>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="fa fa-arrow-circle-down"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
