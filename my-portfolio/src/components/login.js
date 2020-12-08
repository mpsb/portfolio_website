import React, { Component } from "react";

export default class Login extends Component {
  render() {

    return (
      <section id="login">
        <div className="row">
          <div className="twelve columns main-col">
            <h2>Login</h2>
            </div>
        </div>
        <div className="row">
          <div className="twelve columns main-col">
              <form>
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
              </div>
        </div>
      </section>
    );
  }
}