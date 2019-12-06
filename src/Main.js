import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Paintings from "./paintings/Paintings";
import Music from "./music/Music";
import Photographs from "./photos/Photographs";
import Video from "./video/Video";
import Sculpture from "./sculpture/Sculpture";
import Writing from "./writing/Writing";

class Main extends Component {
  state = {
    v: '0'
  }

  listenScrollEvent = e => {
    this.setState({v: window.scrollY});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
  let scrollColor = `rgb(${this.state.v *.06}, 0, 0)`;

    return (
        <HashRouter>

        <div className="nav" style={{background: scrollColor}}>
          <h1></h1>
          <h1><a href="/#">patrickroberteverman</a></h1>
          <ul className="header">
            <li><NavLink to="/paintings">Paintings</NavLink></li>
            <li><NavLink to="/music">Music</NavLink></li>
            <li><NavLink to="/photos">Photographs</NavLink></li>
            <li><NavLink to="/video">Video</NavLink></li>
            <li><NavLink to="/writing">Writing</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/paintings" component={Paintings}/>
             <Route path="/music" component={Music}/>
             <Route path="/photos" component={Photographs}/>
             <Route path="/video" component={Video}/>
             <Route path="/writing" component={Writing}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;