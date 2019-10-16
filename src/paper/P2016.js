import React, { Component } from "react";

const imgs = [
     "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da6774d9e99bd6c95b57592/1571190622056/50+part+2.png?format=1500w",
     "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da6774a969104796c2b6ec7/1571190613072/50.png?format=1500w",
     "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da6774a2f46d156f8965e66/1571190618964/51.png?format=1500w"
] 
class P2016
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
 
export default P2016
;