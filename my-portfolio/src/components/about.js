import React, { Component } from "react";
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';


export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="about">
        <div className="row">
          <div className="twelve columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns main-col">
            <h3>Current Weather where I'm at:</h3>
            <ReactWeather
                forecast="5days"
                unit="metric"
                apikey="c7c75da96862a9c0d7c60d22516458e1"
                type="city"
                city="Hong Kong"
                />
          </div>
        </div>
      </section>
    );
  }
}
