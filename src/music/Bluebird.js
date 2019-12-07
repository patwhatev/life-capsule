import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                    'https://bandcamp.com/EmbeddedPlayer/album=3441988798/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=2546412797/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=3903701882/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=3443237767/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/'
                ]
class P2016
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
 
export default P2016
;