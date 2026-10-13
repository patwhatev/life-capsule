import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const videos = [
                  "https://www.youtube.com/embed/ENc0jTpZye0?controls=0",
                  "https://www.youtube.com/embed/Zh_5T5t1CW8?controls=0",
                  "https://player.vimeo.com/video/275150933?color=FFF&title=0&byline=0&portrait=0"
                ];

const albums = [
                    'https://bandcamp.com/EmbeddedPlayer/album=3581861447/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=812469768/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',
                    'https://bandcamp.com/EmbeddedPlayer/album=3780451168/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/',

                ];
class P2016
 extends Component {
  render() {
    return (
      <div className="gallery" id="swa-page">
        <h4>TRAVIS</h4>
        <iframe width="430" height="249" src="https://www.youtube.com/embed/ENc0jTpZye0?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

          {albums.map(image => (
            <iframe border="0" width="195px" height="387px" src={image} seamless></iframe>
          ))}         
      </div>
    );
  }
}
 
export default P2016
;