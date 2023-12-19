import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Car extends Component {
  render() {
    return (
      <div>
        <Link to='/' className='btn btn-primary '>Home</Link>
        <h1>Car</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil
          tenetur quaerat at perferendis neque ipsum voluptatum recusandae a
          quos, qui accusamus eos ratione iusto reprehenderit debitis similique
          odio illo!
        </p>
        <img src="https://steamuserimages-a.akamaihd.net/ugc/1752432259979938956/1CABED7C89C38A6E2B9F7F798F1FC7A2380842A3/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" alt="" />
      </div>
    );
  }
}
