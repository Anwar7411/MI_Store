import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carousel_home = ({arr}) => {
  return (
    <Carousel>
      {arr?.map((e)=>(
         <Carousel.Item>
         <img
           className="d-block w-100"
           src={e}
           alt="First slide"
         />
      </Carousel.Item>
      ))}
  </Carousel>
);
}

export default Carousel_home