import React, { Component } from "react";

const imgs = [
     "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da67345969104796c2b17ca/1571189592456/DSC_6739.png?format=1500w",
     "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da673452cbaed1e3951c44a/1571189601130/19.png?format=1500w",
     "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da6734cffea006e2c4c58a5/1571189602774/31.png?format=1500w",
     "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da673539e99bd6c95b518f5/1571189609486/DSC_6741.png?format=1500w",
     "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da673579e99bd6c95b5194f/1571189612362/DSC_6740.png?format=1500w"
]
class P2018
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
 
export default P2018
;