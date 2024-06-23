import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import P2017 from "./P2017";
import P2018 from "./P2018";
import P2019 from "./P2019";
import P2023 from "./P2023";
import P2024 from "./P2024";
import Paris from "./Paris";

const paper = [
  {
    name: '2017',
    className: 'P2017',
    id: '2017'
  },
  {
    name: '2018',
    className: 'P2018',
    id: '2018'
  },
  {
    name: '2019',
    className: 'P2019',
    id: '2019'
  },
  {
    name: '2023',
    className: 'P2023',
    id: '2023'
  },
  {
    name: '2024',
    className: 'P2024',
    id: '2024'
  },
  {
    name: 'tv',
    className: 'Paris',
    id: 'paris'
  }
]

class PhotographsNav extends Component {
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
	  		    {paper.map(({ name, id }) => (
	  		      <li key={id}>
	  		        <NavLink to={`/photos/${id}`}>{name}</NavLink>
	  		      </li>
	  		    ))}
	  		  </ul>
	  		</div>
  		  <div className="sub-content">
           <Route path={'/photos/2017'} component={P2017}/>
           <Route path={'/photos/2018'} component={P2018}/>
           <Route path={'/photos/2019'} component={P2019}/>
           <Route path={'/photos/2023'} component={P2023}/>
           <Route path={'/photos/2024'} component={P2024}/>
           <Route path={'/photos/paris'} component={Paris}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default PhotographsNav;