import React, { Component } from "react";

const imgs = [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe32ef7b8f2461e5165a/1570504257539/18.jpg.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9f50a51fc08962a642c98a/5d9f51069eb7101c8dd8f678/1570722061959/44Vl7hzA.jpeg?format=1500w"
    ] 
class Graphs
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
 
export default Graphs
;