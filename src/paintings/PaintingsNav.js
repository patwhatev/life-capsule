import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Graphs from "./Graphs";
import Heroin from "./Heroin";
import Valet from "./Valet";

const paintings = [
  {
    name: 'Graphs',
    className: 'Graphs',
    id: 'graphs',
    description: 'The content, all goes, right here, : )'
  },
  {
    name: 'Valet',
    className: 'Valet',
    id: 'valet',
    description: 'The content, all goes, right here, : )'
  },
  {
    name: 'Heroin',
    className: 'Heroin',
    id: 'heroin',
    description: 'some other stuff'
  }
]

class PaintingsNav extends Component {
	constructor({match}) {
		super();
		this.match = this.props;
	}

  render() {
    return (
        <HashRouter>
        <div>
          <ul>
  		    {paintings.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/paintings/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
  		  <div className="sub-content">
  		     <Route path={'/paintings/graphs'} component={Graphs}/>
  		     <Route path={'/paintings/valet'} component={Valet}/>
  		     <Route path={'/paintings/heroin'} component={Heroin}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default PaintingsNav;