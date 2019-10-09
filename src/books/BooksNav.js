import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import Rkr from "./Rkr";
import Pe18 from "./Pe18";
import Poesie from "./Poesie";

const books = [
  {
    name: 'Reverse Keith Richards',
    className: 'Rkr',
    id: 'rkr',
    description: 'The content, all goes, right here, : )',
    resources: [
    ]
  },
  {
    name: 'Printemps Ete 18',
    className: 'Pe18',
    id: 'pe18',
    description: 'some other stuff',
    resources: [
      '../src/img/PAINTINGS/graphs/18.jpg'
    ]
  },
  {
    name: 'Poesie',
    className: 'Poesie',
    id: 'poesie',
    description: 'some other stuff',
    resources: [
      '../src/img/PAINTINGS/graphs/18.jpg'
    ]
  }
]

class BooksNav extends Component {
	constructor({match}) {
		super();
		this.match = this.props;
	}

  render() {
    return (
        <HashRouter>
        <div>
          <ul>
  		    {books.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/books/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
  		  <div className="sub-content">
  		     <Route path={'/books/rkr'} component={Rkr}/>
  		     <Route path={'/books/pe18'} component={Pe18}/>
  		     <Route path={'/books/poesie'} component={Poesie}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default BooksNav;