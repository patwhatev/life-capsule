import React, { Component } from "react";
 
class Home extends Component {

  render() {
    return (
      <div>

      	<div className="hometext">
      		<p>I was on the earth, with no buildings and it was dusty and deserted but dry like new mexico where my grandma died. I rode around on a shitty wagon through hardened mud and had a sense of urgency. There were fences of barbed wire and chain link. like a fence without a post, i would put my back against the fence and lean on it, then somersault over the trampled metal over and over. I raced with a sense of urgency, i thought i was in the lead, no one else was in the dream but i thought people were nearby and racing with me. I entered the shack and walked across the wood floor, then i had a sense of disappointment as i saw instant photographs on the ground. people would race all the way here as fast as they could, only to have their picture taken? there was no one here and no trace of any life other than the photos. I raced through the ether of life for substance, and it ended up being a shitty polaroid.</p>
      	</div>

      	<div className="homephoto">
			<a data-flickr-embed="true" href="https://www.flickr.com/photos/181921471@N08/albums/72157712088284866" title="LC 2020"><img src="https://live.staticflickr.com/65535/48030360382_b530bd5e11_o.jpg" width="212" height="504" alt="LC 2020"></img></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
      	</div>

      	<div className="hometrack">
			<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/680332400&color=%23f2edd9&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      	</div>
      </div>
    );
  }
}

export default Home;