import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Rkr from "./Rkr"

class BooksNav extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/rkr">Reverse Keith Richards</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Rkr}/>
             <Route path="/rkr" component={Rkr}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default BooksNav;