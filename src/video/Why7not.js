import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                        "https://player.vimeo.com/video/80213525?color=FFF&title=0&byline=0&portrait=0",
                        "https://player.vimeo.com/video/81520380?color=FFF&title=0&byline=0&portrait=0",
                        "https://player.vimeo.com/video/81457879?color=FFF&title=0&byline=0&portrait=0",
                        "https://player.vimeo.com/video/82058356?color=FFF&title=0&byline=0&portrait=0",
                        "https://player.vimeo.com/video/81400274?color=FFF&title=0&byline=0&portrait=0",
                        "https://player.vimeo.com/video/80194872?color=FFF&title=0&byline=0&portrait=0"
                    ]
class Bronson
 extends Component {
  render() {
    return (
      <div>
          {albums.map(image => (
            <iframe src={image} width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          ))}         
      </div>
    );
  }
}
 
export default Bronson
;