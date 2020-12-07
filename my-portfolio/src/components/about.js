import React, { Component } from "react";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profile.jpg" alt="" />
          </div>
          <div className='nine columns main-col'>
              <h2>About Me</h2>
              <p>
                  {
                      resumeData.aboutme
                  }
              </p>
              <div className='row'>
                  <div className="columns contact-details">
                      <h2>Contact Details</h2>
                  </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}
