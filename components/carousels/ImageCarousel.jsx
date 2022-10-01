import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImageCarousel = ({children}) => {
  return (
   <>
    
   <Carousel autoPlay transitionTime={500} showArrows={false}  showThumbs={false} showIndicators showStatus={false} >

     {children}
   </Carousel>
 
   </>
  )
}

export default ImageCarousel