import React, { Component } from "react";
import {  Link } from "react-router-dom";

export default class Carpage extends Component {
  render() {
    return (
      <div>
        <Link to='/Car' className="btn btn-primary">Car</Link>
        <h1>Carpage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat
          dolor iste eaque blanditiis, maxime cum soluta deleniti quos
          laboriosam nam optio odit veniam modi earum quas quaerat labore ex!
        </p>
      </div>
    );
  }
}
