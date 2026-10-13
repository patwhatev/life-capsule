import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Music from "./music/Music";
import Photographs from "./photos/Photographs";
import Video from "./video/Video";
import Sculpture from "./sculpture/Sculpture";
import Writing from "./writing/Writing";
import BonerPills from "./bonerpills/BonerPills";

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
            <li><NavLink to="/music">Music</NavLink></li>
            <li><NavLink to="/photos">Photographs</NavLink></li>
            <li><NavLink to="/video">Video</NavLink></li>
            <li><NavLink to="/writing">Writing</NavLink></li>
            <li><NavLink to="/boner-pills">Boner Pills</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/music/*" element={<Music/>}/>
              <Route path="/photos/*" element={<Photographs/>}/>
              <Route path="/video/*" element={<Video/>}/>
              <Route path="/writing/*" element={<Writing/>}/>
              <Route path="/boner-pills" element={<BonerPills/>}/>
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;