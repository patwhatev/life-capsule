import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import Eden from "./Eden";
import Hollywood from "./Hollywood";
import Korean from "./Korean";
import Metal from "./Metal";
import Perris from "./Perris";
import Studio from "./Studio";

const paper = [
  {
    name: 'eden',
    className: 'Eden',
    id: 'eden',
    description: 'The content, all goes, right here, : )',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: 'hollywood',
    className: 'Hollywood',
    id: 'hollywood',
    description: 'The content, all goes, right here, : )',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: 'korean',
    className: 'Korean',
    id: 'korean',
    description: 'The content, all goes, right here, : )',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: 'metal',
    className: 'Metal',
    id: 'metal',
    description: 'The content, all goes, right here, : )',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: 'perris',
    className: 'Perris',
    id: 'perris',
    description: 'The content, all goes, right here, : )',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: 'studio',
    className: 'Studio',
    id: 'studio',
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
  		    {paper.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/photos/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
  		  <div className="sub-content">
  		     <Route path={'/photos/eden'} component={Eden}/>
  		     <Route path={'/photos/hollywood'} component={Hollywood}/>
  		     <Route path={'/photos/korean'} component={Korean}/>
  		     <Route path={'/photos/metal'} component={Metal}/>
  		     <Route path={'/photos/perris'} component={Perris}/>
  		     <Route path={'/photos/studio'} component={Studio}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default PaperNav;