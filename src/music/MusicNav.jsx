import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Bluebird from "./Bluebird";
import Catcher from "./Catcher";
import Horses from "./Horses";
import Bronson from "./Bronson";
import Why7Not from "./Why7Not";
import Patwhatev from "./Patwhatev";
import PatrickEverman from "./PatrickEverman";
import SaintWithAcne from "./SaintWithAcne";

const music = [
  {
    name: 'Saint With Acne',
    className: 'SaintWithAcne',
    id: 'SaintWithAcne',
  },
  {
    name: 'PatrickEverman',
    className: 'PatrickEverman',
    id: 'PatrickEverman',
  },
  {
    name: 'Patwhatev',
    className: 'Patwhatev',
    id: 'Patwhatev',
  },
  {
    name: 'Why7Not',
    className: 'Why7Not',
    id: 'Why7Not',
  },
  {
    name: 'Bluebird',
    className: 'Bluebird',
    id: 'Bluebird',
  },
  {
    name: 'Bronson',
    className: 'Bronson',
    id: 'Bronson',
  },
  {
    name: 'Catcher',
    className: 'Catcher',
    id: 'Catcher',
  },
  {
    name: 'Horses',
    className: 'Horses',
    id: 'Horses',
  },
  
]

class MusicNav extends Component {
  render() {
    return (
        <div>
	        <div className="subNav">
	          <ul>
	  		    {music.map(({ name, id }) => (
	  		      <li key={id}>
	  		        <NavLink to={`/music/${id}`}>{name}</NavLink>
	  		      </li>
	  		    ))}
	  		  </ul>
	  		  </div>
  		  <div className="sub-content">
          <Routes>
            <Route path="patwhatev" element={<Patwhatev/>}/>
            <Route path="saintwithacne" element={<SaintWithAcne/>}/>
            <Route path="patrickeverman" element={<PatrickEverman/>}/>
            <Route path="bluebird" element={<Bluebird/>}/>
            <Route path="catcher" element={<Catcher/>}/>
            <Route path="horses" element={<Horses/>}/>
            <Route path="bronson" element={<Bronson/>}/>
            <Route path="why7not" element={<Why7Not/>}/>
          </Routes>
  		  </div>
        </div>
    );
  }
}
 
export default MusicNav;