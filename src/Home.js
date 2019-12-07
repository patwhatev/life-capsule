import React, { Component } from "react";
import posts from "./posts.json"

class Home extends Component {

  render() {
    return (
      <div>

      	<div className="hometext">
      		<p>{posts.test.text}</p>
      	</div>

      	<div className="homephoto">
        <img src={posts.test.photos[0]} alt="" />
      	</div>

      	<div className="hometrack">
			<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src={posts.test.song}></iframe>
      	</div>
      </div>
    );
  }
}

export default Home;