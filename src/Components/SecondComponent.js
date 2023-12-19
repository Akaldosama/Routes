import React, { Component } from "react";
import './First.css'

export default class SecondComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="parent">
          <h1>SecondComponent</h1>
          <br />
          <h3>Norway, Oslo</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ullam,
          blanditiis praesentium officiis atque quod tempora quibusdam sit
          tenetur libero in soluta eius reprehenderit beatae aliquid pariatur.
          Ipsam, quidem non.
          <img src="https://w.forfun.com/fetch/6e/6e1cb712e57e8a72e9abc442b35c9031.jpeg" alt="" />
        </div>
      </div>
    );
  }
}
