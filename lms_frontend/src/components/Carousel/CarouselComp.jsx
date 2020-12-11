import React from "react";
import bank1 from './images/bank1.jpg'
import bank2 from './images/bank2.jpg'
import bank3 from './images/bank3.jpg'

import {Carousel} from 'react-bootstrap'
const CarouselComp = (props) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bank3}
            alt="First slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bank2}
            alt="Third slide"
          />

          <Carousel.Caption>
       
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bank1}
            alt="Third slide"
          />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
