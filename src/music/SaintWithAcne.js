import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const videos = [
                  "https://www.youtube.com/embed/ENc0jTpZye0?controls=0",
                  "https://www.youtube.com/embed/Zh_5T5t1CW8?controls=0",
                  "https://player.vimeo.com/video/275150933?color=FFF&title=0&byline=0&portrait=0"
                ];

const albums = [
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
        <p>
          In this album, Saint With Acne immerses the listener in the self-defeating cycles of repetition. Solely focused on the addiction of a young man lost in urban plight, Travis takes an unflinching look at RIP Able, a small-time rapper from Spokane, Washington who has thoroughly documented his substance abuse and rap career candidly on Youtube
        </p>

        <p>
          Sourced from over 300 videos uploaded by Able, the collection of songs focuses on small snippets of self-recorded videos of meth use and rapping in bathrooms, cars, driveways, basements, and in the middle of streets. Everman examines these shards of lyricism studiously, looping small phrases over and over and letting them transform from face value to a more personal and often darker narrative
        </p>

        <p>
          All of the samples used in the album are pure and unadulterated, meaning no additional instruments are used and only one sample is playing at any given time. The effect is haunting, and transports the listener from the universal commons of a raw moment to the world through the eyes of intoxication and personal loss that comes with long term drug use
        </p>

        <p>
          Part chop and screw, part disintegration loops, the series of lenses with which we view Able vary from portraits of the typical fitted cap monster-slurping gas station drug dealer to heartbreaking confessions of a  drug addict holding onto what little he has left. 
        </p>
          {albums.map(image => (
            <iframe border="0" width="195px" height="387px" src={image} seamless></iframe>
          ))}         
      </div>
    );
  }
}
 
export default P2016
;