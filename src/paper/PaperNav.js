import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import P2016 from "./P2016";
import P2017 from "./2017";
import P2018 from "./2018";
import P2019 from "./2019";

const paper = [
  {
    name: '2016',
    className: 'P2016',
    id: '2016',
    description: 'The content, all goes, right here, : )',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: '2017',
    className: 'P2017',
    id: '2017',
    description: 'The content, all goes, right here, : )',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: '2018',
    className: 'P2018',
    id: '2018',
    description: 'The content, all goes, right here, : )',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: '2019',
    className: 'P2019',
    id: '2019',
    description: 'some other stuff',
    resources: [
      '../src/img/PAINTINGS/graphs/18.jpg'
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
  		        <NavLink to={`/paper/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
  		  <div className="sub-content">
  		     <Route path={'/paper/2016'} component={P2016}/>
  		     <Route path={'/paper/2017'} component={P2017}/>
  		     <Route path={'/paper/2018'} component={P2018}/>
  		     <Route path={'/paper/2019'} component={P2019}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default PaperNav;