import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import BooksNav from "./BooksNav";
 
class Books
 extends Component {

 	// <img src='https://images.squarespace-cdn.com/content/v1/5ad4d6c7a2772c84c876a433/1549771807746-26MYXTRK3CLWV2SUYRQX/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/ERD-REVERSE-KEITH-RICHARDS-BOOK.jpg?format=2500w' alt="" />
 	// <img src='https://images.squarespace-cdn.com/content/v1/5ad4d6c7a2772c84c876a433/1549776840941-4IE4SNSFK77W7LBDW9LR/ke17ZwdGBToddI8pDm48kAu58WIj4CSVpqkUrReJsbF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UXzxf7EWixty0XRmzo12iQi0DAAoPWCGLgdAtyTyhiEZJvwGh1qtNWvMhYKnvaKhbA/10257+REVERSE_KEITH_RICHARDS-022.png?format=2500w' alt="" />
 	// <img src='https://images.squarespace-cdn.com/content/v1/5ad4d6c7a2772c84c876a433/1549777218770-RB4DIR652T8TF972OB2H/ke17ZwdGBToddI8pDm48kAu58WIj4CSVpqkUrReJsbF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UXzxf7EWixty0XRmzo12iQi0DAAoPWCGLgdAtyTyhiEZJvwGh1qtNWvMhYKnvaKhbA/10257+REVERSE_KEITH_RICHARDS-022.png?format=2500w' alt="" />
 	// <img src='https://images.squarespace-cdn.com/content/v1/5ad4d6c7a2772c84c876a433/1549777386321-7S2L0MU0WWFUFM23RILB/ke17ZwdGBToddI8pDm48kAu58WIj4CSVpqkUrReJsbF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UXzxf7EWixty0XRmzo12iQi0DAAoPWCGLgdAtyTyhiEZJvwGh1qtNWvMhYKnvaKhbA/10257+REVERSE_KEITH_RICHARDS-022.png?format=2500w' alt="" />
 	// <img src='https://images.squarespace-cdn.com/content/v1/5ad4d6c7a2772c84c876a433/1549771896179-867T3REN4IL56BM3U5NK/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/ERD-REVERSE-KEITH-RICHARDS-BOOK-3.jpg?format=2500w' alt="" />

  render() {
    return (
      <div class="content">
      	<BooksNav/>
      	<Carousel>
      	  <Carousel.Item>
      	    <img
      	      className="d-block w-100"
      	      src='https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5c5f8d154785d396610c3b07/5c5f8d326e9a7f5815fc0f1c/1563547665165/henr260-001.tif.png?format=1000w'
      	      alt="Third slide"
      	    />
      	  </Carousel.Item>
      	  <Carousel.Item>
      	    <img
      	      className="d-block w-100"
      	      src='https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5c5f8d154785d396610c3b07/5c5fc1551905f4fc9c250216/1563547665172/IMG_2399.png?format=1000w'
      	      alt="Third slide"
      	    />
      	  </Carousel.Item>
      	  <Carousel.Item>
      	    <img
      	      className="d-block w-100"
      	      src='https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5c5f8d154785d396610c3b07/5c5f8d159b747a2840769157/1563547665161/henr260-023.tif.png?format=1000w'
      	      alt="Third slide"
      	    />
      	  </Carousel.Item>
      	  <Carousel.Item>
      	    <img
      	      className="d-block w-100"
      	      src="https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5c5f8d154785d396610c3b07/5c5f8d45e5e5f0cc9007567e/1563547665168/henr260-022.tif.png?format=1000w"
      	      alt="First slide"
      	    />
      	  </Carousel.Item>
      	  
      	</Carousel>        
      </div>
    );
  }
}
 
export default Books
;
