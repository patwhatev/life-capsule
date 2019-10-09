import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import Eden from "./Eden";
import Hollywood from "./Hollywood";
import Korean from "./Korean";
import Metal from "./Metal";
import Perris from "./Perris";
import Studio from "./Studio";

const paper = [
  {
    name: 'eden',
    className: 'Eden',
    id: 'eden',
    description: 'The content, all goes, right here, : )',
    resources: [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe8c9d666c083dbc5010/1570504345400/IMG_3174.JPEG.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe963dc97713cd090190/1570504355377/henr486-023.tif.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe837161583d7ba0feb3/1570504335933/henr486-028.tif.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe7a891ec13e8f7d9dd9/1570504328829/henr486-025.tif.png?format=1500w",
    ]
  },
  {
    name: 'hollywood',
    className: 'Hollywood',
    id: 'hollywood',
    description: 'The content, all goes, right here, : )',
    resources: [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfeadef7b8f2461e52011/1570504376625/IMG_3169.JPEG.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe84b9c85c1e741b16c2/1570504337287/IMG_3744.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe94ef7b8f2461e51df8/1570504351588/IMG_3777.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe717107a66f2b9fb3a9/1570504317955/IMG_4217.TIF.png?format=1500w",
      "",
      "",
    ]
  },
  {
    name: 'korean',
    className: 'Korean',
    id: 'korean',
    description: 'The content, all goes, right here, : )',
    resources: [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfec19d666c083dbc5430/1570504397611/IMG_3172.JPEG.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfec7e77d8a0f62507242/1570504398034/IMG_3175.JPEG.png?format=1500"
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfebb18af836bfce968db/1570504389492/IMG_4251.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfebbb9c85c1e741b1c0d/1570504388936/IMG_3170.JPEG.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfeae9d666c083dbc529d/1570504381169/IMG_6043.jpg.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfec7e77d8a0f62507242/1570504398034/IMG_3175.JPEG.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfec19d666c083dbc5430/1570504397611/IMG_3172.JPEG.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfebbb9c85c1e741b1c0d/1570504388936/IMG_3170.JPEG.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe8c9d666c083dbc5010/1570504345400/IMG_3174.JPEG.png?format=1500w",
      "",
      "",
      "",
      "",
      "",
    ]
  },
  {
    name: 'metal',
    className: 'Metal',
    id: 'metal',
    description: 'The content, all goes, right here, : )',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: 'perris',
    className: 'Perris',
    id: 'perris',
    description: 'The content, all goes, right here, : )',
    resources: [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfea63dc97713cd0902bc/1570504369603/IMG_4252.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe963dc97713cd090190/1570504355377/henr486-023.tif.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfec018af836bfce969b7/1570504396220/IMG_4246.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfebb18af836bfce968db/1570504389492/IMG_4251.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfea63dc97713cd0902bc/1570504369603/IMG_4252.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfea018af836bfce96563/1570504363436/WEBSITE+COVER+PHOTO.TIF-7.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe732da89a7537538481/1570504321300/IMG_4249.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe6b3dc97713cd08fd95/1570504308749/WEBSITE+COVER+PHOTO.TIF-10.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe65b9c85c1e741b13c7/1570504302784/WEBSITE+COVER+PHOTO.TIF-6.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe587107a66f2b9fb181/1570504290704/IMG_4139.TIF.png?format=1500w",
    ]
  },
  {
    name: 'studio',
    className: 'Studio',
    id: 'studio',
    description: 'The content, all goes, right here, : )',
    resources: [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe8eb9c85c1e741b17fb/1570504345574/IMG_4144.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfeb57161583d7ba1033d/1570504387147/IMG_3915.jpg.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe9cef7b8f2461e51e8d/1570504361572/WEBSITE+COVER+PHOTO.TIF-0.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe6bb9c85c1e741b1457/1570504311728/IMG_3745.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe62ef7b8f2461e519ce/1570504302808/WEBSITE+COVER+PHOTO.TIF-4.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe55b9c85c1e741b12a2/1570504286070/IMG_3772.TIF.png?format=1500w",
      ""
    ]
  }
]

class PhotographsNav extends Component {
	constructor({match}) {
		super();
		this.match = this.props;
	}

  render() {
    return (
        <HashRouter>
        <div>
          <ul>
  		    {paper.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/photos/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
  		  <div className="sub-content">
  		     <Route path={'/photos/eden'} component={Eden}/>
  		     <Route path={'/photos/hollywood'} component={Hollywood}/>
  		     <Route path={'/photos/korean'} component={Korean}/>
  		     <Route path={'/photos/metal'} component={Metal}/>
  		     <Route path={'/photos/perris'} component={Perris}/>
  		     <Route path={'/photos/studio'} component={Studio}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default PhotographsNav;