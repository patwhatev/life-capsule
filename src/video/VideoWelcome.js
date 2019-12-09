import React, { Component } from "react";
 
const albums = [
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd3e7d4078151fc84ad87/1575867375472/fil.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd3e7ce1e084cec9671d9/1575867374301/509.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd42aae6aff2a4b46c8f3/1575867464822/kf.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd3f9d4078151fc84af36/1575867393878/fifty.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd3fe3606224f96810ee1/1575867426419/five.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd3ef7ace79162d3f0370/1575867386367/bs.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd3ffd4078151fc84af78/1575867411802/fsnos.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd410ce1e084cec9675b1/1575867446225/fsnoseb.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd3ec48db126bf41d414b/1575867388617/board.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd447ce1e084cec967952/1575867480637/layback.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd443ce1e084cec967905/1575867465241/kickturn.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd42dd4078151fc84b23f/1575867475010/kfnose.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd41d48db126bf41d4526/1575867438211/kcnozs.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd477d4078151fc84b959/1575867521764/nollie.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd47f7ace79162d3f1094/1575867534292/nose.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd4553606224f96811695/1575867509781/nbd.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd4557ace79162d3f0db5/1575867486994/loose.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd44cae6aff2a4b46cb64/1575867479273/lev.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd3ec7ace79162d3f0358/1575867377319/5099.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd45d3606224f9681174d/1575867516446/nh.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd470ce1e084cec967ccf/1575867532721/noin.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd487ce1e084cec967e92/1575867549152/noseslide.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd48aae6aff2a4b46d09d/1575867543961/rack.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd3f73606224f96810e85/1575867393365/bsboard.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd494ce1e084cec967ffe/1575867557606/shuv.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd498ce1e084cec968047/1575867564683/snap.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd4a2d4078151fc84be04/1575867586806/ssbsts.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd4a9d4078151fc84beb1/1575867578171/swb.gif?format=1000w",
			"https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/5dedd3e7d4078151fc84ad85/5dedd4b73606224f96811e0b/1575867586789/swtre.gif?format=1000w"
	    ]

class Video
 extends Component {
  render() {
    return (
        <div className="gallery-gif">
          {albums.map(image => (
            <img src={image} alt=""/>
          ))}         
      </div>
    );
  }
}
 
export default Video
;
