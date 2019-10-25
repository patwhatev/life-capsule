import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Eden from "./Eden";

const paper = [
  {
    name: 'eden rock',
    className: 'Eden',
    id: 'eden',
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
              <NavLink to={`/photos/st/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <div className="sub-content">
           <Route path={'/photos/st/eden'} component={Eden}/>
        </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default PhotographsNav;