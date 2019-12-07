import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                        "https://www.youtube.com/embed/326Iq4CJoxc?controls=0",
                        "https://www.youtube.com/embed/ustZO46Tla8?controls=0",
                        "https://www.youtube.com/embed/Zh_5T5t1CW8?controls=0",
                        "https://player.vimeo.com/video/275150933?color=FFF&title=0&byline=0&portrait=0"
                    ]
class Bronson
 extends Component {
  render() {
    return (
      <div className="gallery">
          {albums.map(image => (
            <iframe width="430" height="249" src={image} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          ))}         
      </div>
    );
  }
}
 
export default Bronson
;