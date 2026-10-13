import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe94ef7b8f2461e51df8/1570504351588/IMG_3777.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe717107a66f2b9fb3a9/1570504317955/IMG_4217.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe347107a66f2b9fadf5/1570504257117/WEBSITE+COVER+PHOTO.TIF-8.png?format=2500w",
    ]

class Hollywood
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
 
export default Hollywood
;