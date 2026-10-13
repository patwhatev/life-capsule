import React, { Component } from "react";

const imgs = [
];

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