import React, { Component } from "react";
import { Route, Routes, } from "react-router-dom";
// import SecondComponent from "./Components/SecondComponent";
// import FirtsComponent from "./Components/FirtsComponent";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Carpage from "./Components/Carpage";
import Car from "./Components/Car";


export default class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <div className="parent">
          <nav>
            <Link to="/" className="btn btn-primary">
              FirtsComponent
            </Link>
            <Link to="/second" className="btn btn-primary">
              SecondComponent
            </Link>
          </nav>
          <p>First Homework</p>
          <Routes>
            <Route path="/" element={<FirtsComponent />} />
            <Route path="second" element={<SecondComponent />} />
          </Routes>
        </div> */}
        <br /><br />
        <p>Second Homework</p>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Login' element={<Login />} />
          <Route path='Carpage' element={<Carpage />} />
          <Route path='Car' element={<Car />} />
        </Routes>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import "./App.css";
// import FirtsComponent from "./Components/FirtsComponent";

// export default class App extends Component {
//   state = {
//     users: [
//       { name: "Humoyun", salary: "$ 3000", gpa: 3.4 },
//       { name: "Abdulloh", salary: "$ 2000", gpa: 4.0 },
//       { name: "Umar", salary: "$ 5500", gpa: 2.3 },
//     ],
//     count: 0,
//   };

//   plusFunc = () => {
//     let { count } = this.state;
//     this.setState({
//       count: count + 1
//     })
//   };

//   minusFunc = () => {
//     let { count } = this.state;
//     this.setState({
//       count: count - 1
//     })
//   };

//   render() {
//     let { users, count, } = this.state;
//     return <FirtsComponent users={users} count={count} func1 = {this.plusFunc} func2 = {this.minusFunc}/>;
//   }
// }
