import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Skateboarding from "./Skateboarding";
import Why7not from "./Why7not";
import VideoWelcome from "./VideoWelcome";


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
	constructor({match}) {
		super();
		this.match = this.props;
	}

  render() {
    return (
        <HashRouter>
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
  		  	 <Route exact path="/video" component={VideoWelcome}/>
  		     <Route path={'/video/skateboarding'} component={Skateboarding}/>
  		     <Route path={'/video/why7not'} component={Why7not}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default VideoNav;