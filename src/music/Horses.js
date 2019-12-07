import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                    'https://bandcamp.com/EmbeddedPlayer/album=1688633868/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=4041971751/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=1519246960/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=1852123857/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=2638991351/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/'
                ]
class P2016
 extends Component {
  render() {
    return (
      <div>
          {albums.map(image => (
            <iframe border="0" width="195px" height="387px" src={image} seamless><a href="http://bluebird-burner.bandcamp.com/album/ifonlyif">ifonlyif by bluebird</a></iframe>
          ))}         
      </div>
    );
  }
}
 
export default P2016
;