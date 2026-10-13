import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                    'https://bandcamp.com/EmbeddedPlayer/album=2619858442/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=22937234/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=1528413869/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=2037392456/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=858663770/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=1092955824/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=3273577487/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                ]
class P2016
 extends Component {
  render() {
    return (
      <div className="gallery">
          {albums.map(image => (
            <iframe border="0" width="195px" height="387px" src={image} seamless></iframe>
          ))}         
      </div>
    );
  }
}
 
export default P2016
;