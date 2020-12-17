import React from "react";
import "../bokeh.scss";

function Dashboard(props) {
  // handle click event of logout button
  const handleLogout = () => {
    props.history.push("./login");
  };

  let resumeData = this.props.resumeData;

  return (
    <React.Fragment>
      <header id="home">
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
                Logout
              </a>
            </li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Welcome, {resumeData.name}.</h1>

            <h3 style={{ color: "#fff", fontFamily: "sans-serif" }}>
              Carpe diem.
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
        <div className="background-animation">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <br></br>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="fa fa-arrow-circle-down"></i>
            </a>
          </p>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Dashboard;