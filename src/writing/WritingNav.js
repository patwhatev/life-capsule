import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Rkr from "./Rkr";

const writing = [
  {
    name: 'Reverse Keith Richards',
    className: 'Rkr',
    id: 'rkr',
    description: 'The content, all goes, right here, : )',
    resources: [
    ]
  }
]

class WritingNav extends Component {
	constructor({match}) {
		super();
		this.match = this.props;
	}

  render() {
    return (
        <HashRouter>
        <div>
          <ul>
  		    {writing.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/writing/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
  		  <div className="sub-content">
  		     <Route exact path={'/#/writing/rkr'} component={Rkr}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default WritingNav;