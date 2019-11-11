import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Sculpture from "./Sculpture";
import Chaise from "./Chaise";

const sculptures = [
  {
    name: 'Chaise Manteau',
    className: 'Chaise',
    id: 'chaise',
    description: 'The content, all goes, right here, : )',
    resources: [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfeb47161583d7ba1033c/1570504387810/IMG_6042.jpg.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfeb57161583d7ba1033d/1570504387147/IMG_3915.jpg.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe4379967c1670297d4b/1570504284199/IMG_6044.TIF.png?format=1500w"
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
  		     <Route exact path={'/#/sculpture/chaise'} component={Chaise}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default PaperNav;