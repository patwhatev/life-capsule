import React, { Component } from "react";

const imgs = [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe6bb9c85c1e741b1457/1570504311728/IMG_3745.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe9cef7b8f2461e51e8d/1570504361572/WEBSITE+COVER+PHOTO.TIF-0.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfeb57161583d7ba1033d/1570504387147/IMG_3915.jpg.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe62ef7b8f2461e519ce/1570504302808/WEBSITE+COVER+PHOTO.TIF-4.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe55b9c85c1e741b12a2/1570504286070/IMG_3772.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da67325c435d65031009e48/1571190459777/IMG_3832.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da6731a3c7d41426015026e/1571190459771/IMG_3837.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da672fe969104796c2b128e/1571190459769/IMG_3773.png?format=1500w"
    ] 
class Heroin
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
 
export default Heroin
;