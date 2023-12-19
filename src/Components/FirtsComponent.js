import React, { Component } from "react";
import './First.css'

export default class FirtsComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="parent">
          <h1>FirtsComponent</h1>
          <br />
          <h3>Monako</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam odio
            error doloremque dolore, assumenda voluptas laborum accusamus unde
            impedit iure itaque incidunt at, perferendis id, repudiandae in sunt
            repellendus nobis.
          </p>
          <img src="https://w.forfun.com/fetch/8d/8d79869163d2fc7e416d4fd8c5894a1e.jpeg" alt="" />
        </div>
        <div className="prent"></div>
      </div>
    );
  }
}

// import React, { Component } from "react";

// export default class FirtsComponent extends Component {
//   render() {
//     let { users, count, func1, func2 } = this.props;
//     return (
//       <div className="container">
//         <table className="table table-dark mt-4">
//           <thead>
//             <tr>
//               <th>Number</th>
//               <th>Name</th>
//               <th>Salary</th>
//               <th>GPA</th>
//             </tr>
//           </thead>

//           {users.map((item, index) => {
//             return (
//               <tbody>
//                 <tr>
//                   <td>{index + 1}</td>
//                   <td>{item.name}</td>
//                   <td>{item.salary}</td>
//                   <td>{item.gpa}</td>
//                 </tr>
//               </tbody>
//             );
//           })}
//         </table>
//         <button onClick={func2}>-</button>
//         {count}
//         <button onClick={func1}>+</button>
//       </div>
//     );
//   }
// }
