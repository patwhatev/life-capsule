import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                  "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb9c7dae6aff2a4b1a9069/1575722414243/1.jpg?format=1500w",
                  "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb9c2f48db126bf4f0bce6/1575722413955/dddddd.jpg?format=1500w",
                  "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb9c7fce1e084cec69aa2c/1575722413974/7.jpg?format=1500w",
                  "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb9c8ace1e084cec69aae9/1575722414136/aa.jpg?format=1500w",
                  "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb9c7dce1e084cec69aa28/1575722413615/4.jpg?format=1500w",
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