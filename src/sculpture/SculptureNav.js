import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import Chaise from "./Chaise";

const sculptures = [
  {
    name: 'Chaise Manteau',
    className: 'Chaise',
    id: 'chaise',
    description: 'The content, all goes, right here, : )',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  }
]

class PaperNav extends Component {
	constructor({match}) {
		super();
		this.match = this.props;
	}

  render() {
    return (
        <HashRouter>
        <div>
          <ul>
  		    {sculptures.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/sculpture/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
  		  <div className="sub-content">
  		     <Route path={'/sculpture/chaise'} component={Chaise}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default PaperNav;