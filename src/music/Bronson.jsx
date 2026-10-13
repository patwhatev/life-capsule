import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                    'https://bandcamp.com/EmbeddedPlayer/album=1941549238/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=3298068215/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=2264591569/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=503369232/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=1952967654/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=1610227093/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=2581192708/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/'
                ]
class Bronson
 extends Component {
  render() {
    return (
      <div className="gallery">
          {albums.map(image => (
            <iframe border="0" width="195px" height="387px" src={image} seamless><a href="http://bluebird-burner.bandcamp.com/album/ifonlyif">ifonlyif by bluebird</a></iframe>
          ))}         
      </div>
    );
  }
}
 
export default Bronson
;