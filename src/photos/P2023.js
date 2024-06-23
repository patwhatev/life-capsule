import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                  "https://images.squarespace-cdn.com/content/v1/53667a41e4b0e77173cb3dd1/1b241d12-98a7-4e9a-b5ea-f0b95e7b5412/000098430021.jpg?format=1500w",
                  "https://images.squarespace-cdn.com/content/v1/53667a41e4b0e77173cb3dd1/dcb7bd77-cfb8-4ba7-a373-499e53793dda/000098450024.jpg?format=1500w",
                  "https://images.squarespace-cdn.com/content/v1/53667a41e4b0e77173cb3dd1/60943b66-3d1e-4b0f-8ffb-8e87fc7cb9be/000098450014.jpg?format=1500w",
                  "https://images.squarespace-cdn.com/content/v1/53667a41e4b0e77173cb3dd1/09c2aac9-dd81-493c-ae19-affffefdd5b3/000098460002.jpg?format=1500w",
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