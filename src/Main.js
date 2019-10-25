import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Paintings from "./paintings/Paintings";
import Paper from "./paper/Paper";
import Photographs from "./photos/Photographs";
import Video from "./video/Video";
import Sculpture from "./sculpture/Sculpture";
import Books from "./books/Books";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        
        <div>
          <h1>HENRIALEXANDERLEVY</h1>
          <ul className="header">
            <li><NavLink to="/paintings">Paintings</NavLink></li>
            <li><NavLink to="/paper">Works on paper</NavLink></li>
            <li><NavLink to="/photos">Photographs</NavLink></li>
            <li><NavLink to="/sculpture">Sculpture/Furniture</NavLink></li>
            <li><NavLink to="/books">Books/Zines</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/paintings" component={Paintings}/>
             <Route path="/paper" component={Paper}/>
             <Route path="/photos" component={Photographs}/>
             <Route path="/sculpture" component={Sculpture}/>
             <Route path="/books" component={Books}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;