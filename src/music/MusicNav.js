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

const music = [
  {
    name: 'Bluebird',
    className: 'Bluebird',
    id: 'Bluebird',
    description: 'The content, all goes, right here, : )'
  },
  {
    name: 'Catcher',
    className: 'Catcher',
    id: 'Catcher',
    description: 'The content, all goes, right here, : )'
  },
  {
    name: 'Horses',
    className: 'Horses',
    id: 'Horses',
    description: 'The content, all goes, right here, : )'
  },
  {
    name: 'Bronson',
    className: 'Bronson',
    id: 'Bronson',
    description: 'some other stuff'
  },
  {
    name: 'Why7Not',
    className: 'Why7Not',
    id: 'Why7Not',
    description: 'some other stuff'
  }
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