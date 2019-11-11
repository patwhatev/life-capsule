import React, { Component } from "react";
import SculptureNav from "./SculptureNav";
 
class Sculpture
 extends Component {

 	
  render() {
    return (
      <div>
        <SculptureNav/>
      	<img src="https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe4379967c1670297d4b/1570504284199/IMG_6044.TIF.png?format=1500w" alt="" />
        <img src="https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfeae9d666c083dbc529d/1570504381169/IMG_6043.jpg.png?format=2500w" alt="" />
        <img src="https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfeb47161583d7ba1033c/1570504387810/IMG_6042.jpg.png?format=1500w" alt="" />
      </div>
    );
  }
}
 
export default Sculpture
;
