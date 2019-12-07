import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Bluebird from "./Bluebird";
import Catcher from "./Catcher";
import Horses from "./Horses";
import Bronson from "./Bronson";
import Why7Not from "./Why7Not";
import Patwhatev from "./Patwhatev";

const music = [
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
	constructor({match}) {
		super();
		this.match = this.props;
	}

  render() {
    return (
        <HashRouter>
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
           <Route path={'/music/patwhatev'} component={Patwhatev}/>
           <Route path={'/music/bluebird'} component={Bluebird}/>
  		     <Route path={'/music/catcher'} component={Catcher}/>
  		     <Route path={'/music/horses'} component={Horses}/>
           <Route path={'/music/bronson'} component={Bronson}/>
           <Route path={'/music/why7not'} component={Why7Not}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default MusicNav;