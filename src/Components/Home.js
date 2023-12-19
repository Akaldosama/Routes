import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/Login' className="btn btn-primary">Login</Link>
        <h1>Home Page</h1>
        <div className="child">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            maiores et quod nobis animi aperiam, eius optio asperiores saepe
            beatae, voluptatem vero nulla praesentium vitae natus cupiditate.
            Commodi, at iusto.
          </p>
        </div>
      </div>
    );
  }
}
