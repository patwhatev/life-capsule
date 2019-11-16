import React, { Component } from "react";

const imgs = [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe94ef7b8f2461e51df8/1570504351588/IMG_3777.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe717107a66f2b9fb3a9/1570504317955/IMG_4217.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe347107a66f2b9fadf5/1570504257117/WEBSITE+COVER+PHOTO.TIF-8.png?format=2500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5dc8ee4fd1c0ab7b9e6918d0/1573449379225/IMG_5430.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5dc8ee4fb4679c4cebfd5793/1573449942112/IMG_5435.jpg.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5dc8ee7dac6af558c0d2af29/1573449942128/IMG_5437.png?format=1500w"
    ]

class Hollywood
 extends Component {
  render() {
    return (
      <div>
        {imgs.map(image => (
        	<img src={image} alt="" />
        ))}
      </div>
    );
  }
}
 
export default Hollywood
;