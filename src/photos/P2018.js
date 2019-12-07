import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                  "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb1864ce1e084cec62f962/1575688294148/SEPT2018-1-2.jpg?format=1500w",
                  "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb1e1dae6aff2a4b147306/1575689759580/S236476-R1-012-4A.jpg?format=1500w",
                        "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb1875d4078151fc51a778/1575688311316/S236107-R1-004-0A.jpg?format=1500w",
                  "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb1e41ce1e084cec636d86/1575722413506/S236476-R1-052-24A.jpg?format=1500w",
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