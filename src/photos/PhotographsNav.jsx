import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink
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
  render() {
    return (
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
          <Routes>
            <Route path="2017" element={<P2017/>}/>
            <Route path="2018" element={<P2018/>}/>
            <Route path="2019" element={<P2019/>}/>
            <Route path="2023" element={<P2023/>}/>
            <Route path="2024" element={<P2024/>}/>
            <Route path="paris" element={<Paris/>}/>
          </Routes>
  		  </div>
        </div>
    );
  }
}
 
export default PhotographsNav;