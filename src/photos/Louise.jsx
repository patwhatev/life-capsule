import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
	"https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5dd067f579eb68338ebee991/5dd0686c1a63bd7bd18d91d1/1573939326702/IMG_5282.JPG?format=1000w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5dd067f579eb68338ebee991/5dd068826d59eb44ead9bd13/1573939340908/IMG_5285.JPG?format=1000w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5dd067f579eb68338ebee991/5dd0688a79eb68338ebef940/1573939352673/IMG_5289.JPG?format=1000w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5dd067f579eb68338ebee991/5dd067f64149017c6748c92d/1573939411558/IMG_5283.png?format=1000w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5dd067f579eb68338ebee991/5dd0690579eb68338ebf084a/1573939660091/IMG_5294.JPG?format=1000w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5dd067f579eb68338ebee991/5dd0687b79eb68338ebef84a/1573939332697/IMG_5284.jpg?format=1000w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5dd067f579eb68338ebee991/5dd069056be9a958a6d62dd1/1573939651453/IMG_5292.JPG?format=1000w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5dd067f579eb68338ebee991/5dd0689539d8ba0c2391532b/1573939395601/IMG_5291.JPG?format=1000w"
]
class Metal
 extends Component {
  render() {
    return (
      <div>
        <Carousel>
          {imgs.map(image => (
            <Carousel.Item>
              <img className="d-block w-100" src={image} alt="" />
            </Carousel.Item>
          ))}         
        </Carousel>
      </div>
    );
  }
}
 
export default Metal
;