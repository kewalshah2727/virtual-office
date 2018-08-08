import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';
// import down from './pages/images/caret-down.png'
import filter from './pages/images/filter-filled-tool-symbol.png';

import ClippedDrawer from './ClippedDrawer';



class App extends Component {
  render() {
    return (
      <div>
      <div>
        <ClippedDrawer />
          </div>  
            
          
      </div>
    );
  }
}

export default App;
