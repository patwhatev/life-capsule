import React, { Component } from "react";

const imgs = [
	"https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9f50a51fc08962a642c98a/5d9f50a502898f0055cbe8d9/1570721966884/XoCi9rgg.jpeg?format=1500w"
] 
class Valet
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
 
export default Valet
;