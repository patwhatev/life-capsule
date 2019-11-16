import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
	"https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da67b599033071d0cf49c46/1571191649561/IMG_5432.TIF.png?format=1500w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5dc8ee4fd1c0ab7b9e6918d0/1573449379225/IMG_5430.png?format=1500w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5dc8ee4fb4679c4cebfd5793/1573449942112/IMG_5435.jpg.png?format=1500w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5dc8ee7dac6af558c0d2af29/1573449942128/IMG_5437.png?format=1500w"
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