import React, { Component } from 'react';
import './Task_Dashboard.css';
import { Link } from "react-router-dom";
// import down from '../images/caret-down.png'

class Task_Dashboard extends Component {
  render() {
    return (
      <div className="Task_Dashboard">
        <header className="App-header">
          <ul>
            <li className="navbar-menu"><Link className="link" to="/">ALL</Link></li>
            <li className="navbar-menu">ONGOING</li>
            <li className="navbar-menu">ASSIGNED</li>
            <li className="navbar-menu">SORT BY MI</li>
            <li className="navbar-menu">FOLLOWING</li>
            <li className="navbar-menu">PROJECT 
            {/* &nbsp;<img src={down} className="down"/> */}
            </li>
          </ul>
        </header>
        <div className="Task-intro" style={{margin : '50px'}}>
          <div className="search-section">
           <input className="custom-input" placeholder="Search "></input>
           <span className="plus-icon">
            &#10010; Add Project
           </span>
          </div>
          <div className="table-section">
            <table className="table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Complete</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Xyz</td>
                    <td>0</td>
                    <td>27/07/2018</td>
                    <td>06/08/2018</td>
                    <td>Status</td>
                </tr>
                <tr>
                    <td>Xyz</td>
                    <td>1</td>
                    <td>27/07/2018</td>
                    <td>06/08/2018</td>
                    <td>Status</td>
                </tr>
                <tr>
                    <td>Xyz</td>
                    <td>2</td>
                    <td>27/07/2018</td>
                    <td>06/08/2018</td>
                    <td>Status</td>
                </tr>
                <tr>
                    <td>Xyz</td>
                    <td>3</td>
                    <td>27/07/2018</td>
                    <td>06/08/2018</td>
                    <td>Status</td>
                </tr>
                <tr>
                    <td>Xyz</td>
                    <td>4</td>
                    <td>27/07/2018</td>
                    <td>06/08/2018</td>
                    <td>Status</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="btn">
          <span className="plus-icon">10 V</span> <span className="text">Rate</span> 
          </div>
        </div>
      </div>
    );
  }
}

export default Task_Dashboard;
