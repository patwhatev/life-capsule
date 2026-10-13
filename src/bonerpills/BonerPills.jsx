import React, { Component } from "react";
import FadeImg from "../FadeImg";
import pills from "./pills.json";

class BonerPills
 extends Component {
  render() {
    return (
      <div className="boner-pills">
        {pills.map(file => (
          <FadeImg key={file} src={`${import.meta.env.BASE_URL}boner-pills/${file}`} />
        ))}
      </div>
    );
  }
}
 
export default BonerPills
;
