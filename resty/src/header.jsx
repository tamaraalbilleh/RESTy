import React from 'react';
import { Link } from "react-router-dom";
import './header.scss';
import {BrowserRouter as Router} from "react-router-dom";

const Header = ()=>{
    return (
      
        <header className="App-header">
            <h1> RESTy </h1>
            <nav id="nav">
          <ul>
            <li className="list">
            
              <Link to="/">Home</Link>
            </li>
            <li className="list">
              <Link to="/history">History</Link>
            </li>
            <li className="list">
              <Link to="/help"> Help</Link>
            </li>
          </ul>
        </nav>
        </header>
       
    )
}

export default Header;