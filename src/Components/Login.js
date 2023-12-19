import React, { Component } from "react";
import {  Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Link to='/Carpage' className="btn btn-primary">Carpage</Link>
        <h1>Login</h1>
        <div className="child">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            laudantium ipsam ullam, fuga ad dolorem quia, accusamus, recusandae
            eum laboriosam ea quas. Deserunt recusandae sequi dolor, voluptate
            porro ipsam officiis?
          </p>
        </div>
      </div>
    );
  }
}
