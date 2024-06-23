import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                  "https://images.squarespace-cdn.com/content/v1/53667a41e4b0e77173cb3dd1/f6936f36-7e2a-489b-b301-e2666d064a2c/000001340033.jpg?format=1500w",
                  "https://images.squarespace-cdn.com/content/v1/53667a41e4b0e77173cb3dd1/b13fef9b-7472-438e-a500-7b82b4c4b4ef/000001330013.jpg?format=1500w",
                  "https://images.squarespace-cdn.com/content/v1/53667a41e4b0e77173cb3dd1/43349a5e-570a-4382-baa6-edbb54bcbdd4/000001360011.jpg?format=1500w",
                  "https://images.squarespace-cdn.com/content/v1/53667a41e4b0e77173cb3dd1/933f749b-974c-4126-9323-d9e6bdc711aa/000001330030.jpg?format=1500w",
                  "https://images.squarespace-cdn.com/content/v1/53667a41e4b0e77173cb3dd1/8927929e-7700-4c31-8b27-f33bcce85bcf/000001330008.jpg?format=1500w",
                  "https://images.squarespace-cdn.com/content/v1/53667a41e4b0e77173cb3dd1/04bd531a-0abf-483f-a4c6-9f381ea4efae/000001330007.jpg?format=1500w",

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