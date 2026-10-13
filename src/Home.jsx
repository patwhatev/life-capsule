import React, { Component } from "react";
import FadeImg from "./FadeImg";
import posts from "./posts.json"

class Home extends Component {

  render() {
    return (
      <div>

      	<div className="homephoto">
        <FadeImg src={posts.test.photos[0]} />
        </div>
        <div className="hometext">
      		<p>{posts.test.text}</p>
      	</div>

      	
      </div>
    );
  }
}

export default Home;