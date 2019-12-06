import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import P2016 from "./P2016";
import P2017 from "./2017";
import P2018 from "./2018";
import P2019 from "./2019";

const music = [
  {
    name: '2016',
    className: 'P2016',
    id: '2016',
    description: 'The content, all goes, right here, : )'
  },
  {
    name: '2017',
    className: 'P2017',
    id: '2017',
    description: 'The content, all goes, right here, : )'
  },
  {
    name: '2018',
    className: 'P2018',
    id: '2018',
    description: 'The content, all goes, right here, : )'
  },
  {
    name: '2019',
    className: 'P2019',
    id: '2019',
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
  		     <Route path={'/music/2016'} component={P2016}/>
  		     <Route path={'/music/2017'} component={P2017}/>
  		     <Route path={'/music/2018'} component={P2018}/>
  		     <Route path={'/music/2019'} component={P2019}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default MusicNav;