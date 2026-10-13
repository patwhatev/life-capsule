import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Skateboarding from "./Skateboarding";
import Why7not from "./Why7not";


const videos = [
  {
    name: 'skateboarding',
    className: 'Skateboarding',
    id: 'skateboarding',
    description: 'The content, all goes, right here, : )',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: 'why7not',
    className: 'Why7not',
    id: 'why7not',
    description: 'The content, all goes, right here, : )',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  }
]

class VideoNav extends Component {
  render() {
    return (
        <div>
        	<div className="subNav">
	          <ul>
	  		    {videos.map(({ name, id }) => (
	  		      <li key={id}>
	  		        <NavLink to={`/video/${id}`}>{name}</NavLink>
	  		      </li>
	  		    ))}
	  		  </ul>
  		  </div>
  		  <div className="sub-content">
          <Routes>
            <Route path="skateboarding" element={<Skateboarding/>}/>
            <Route path="why7not" element={<Why7not/>}/>
          </Routes>
  		  </div>
        </div>
    );
  }
}
 
export default VideoNav;