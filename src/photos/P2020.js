import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                  "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb1e9dce1e084cec637372/1575722413972/410280_0005_05_4A.jpg?format=1500w",
                  "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb1ef948db126bf4ea9f47/1575722414103/410280_0005_33_32A.jpg?format=1500w",
                  "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb9b27ce1e084cec699b37/1575722413830/410280_0007_30_32A.jpg?format=1500w",
                  "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb9af0ce1e084cec699952/1575722414130/410280_0007_12_14A.jpg?format=1500w",
                    ]
class Bronson
 extends Component {
  render() {
    return (
      <div className="gallery">
          {albums.map(image => (
            <img src={image} alt="" />
          ))}         
      </div>
    );
  }
}
 
export default Bronson
;