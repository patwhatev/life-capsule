import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import La from "./La";
import St from "./St";
import At from "./At";

const paper = [
  {
    name: 'los angeles',
    className: 'La',
    id: 'la',
    description: 'The content, all goes, right here, : )'
  },
  {
    name: 'st. tropez',
    className: 'St',
    id: 'st',
    description: 'The content, all goes, right here, : )'
  },
  {
    name: 'austin, tx',
    className: 'At',
    id: 'at',
    description: 'The content, all goes, right here, : )'
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
          <ul>
  		    {paper.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/photos/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
  		  <div className="sub-content">
           <Route path={'/photos/la'} component={La}/>
           <Route path={'/photos/st'} component={St}/>
  		     <Route path={'/photos/at'} component={At}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default PhotographsNav;