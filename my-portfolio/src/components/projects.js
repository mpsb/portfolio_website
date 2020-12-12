import React, { Component } from "react";


export default class Projects extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="projects">
        <div className="row">
          <div className="twelve columns main-col">
            <h2>Projects</h2>
            <p>{resumeData.projects}</p>
          </div>
        </div>
      </section>
    );
  }
}
