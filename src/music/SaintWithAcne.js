import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                    'https://bandcamp.com/EmbeddedPlayer/track=955306075/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
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