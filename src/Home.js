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
			<a data-flickr-embed="true" href="https://www.flickr.com/photos/181921471@N08/albums/72157712088284866" title="LC 2020"><img src="https://live.staticflickr.com/65535/48030360382_b530bd5e11_o.jpg" width="212" height="504" alt="LC 2020"></img></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
      	</div>

      	<div className="hometrack">
			<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src={posts.test.song}></iframe>
      	</div>
      </div>
    );
  }
}

export default Home;