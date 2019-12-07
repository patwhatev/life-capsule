import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                      "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb9dd3d4078151fc586515/1575722462019/55000001.JPG?format=1500w",
                      "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb9e18d4078151fc586849/1575722530981/16640001.JPG?format=1500w",
                      "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb9e197ace79162d12648f/1575722533431/16640004.JPG?format=1500w",
                      "https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5deb1864ae6aff2a4b140573/5deb9e21ae6aff2a4b1aa7c0/1575722539240/16640006.JPG?format=1500w",
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