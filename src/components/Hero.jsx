import React from 'react'
import { MDBCarousel,MDBCarouselItem } from 'mdb-react-ui-kit'
import image from '../assets/image1.jpg'
import secImage from '../assets/image2.jpg'
import thirdImage from '../assets/image3.jpg'
function Hero() {
  return (
    <div>
          <MDBCarousel>
          <MDBCarouselItem itemId={1} >
        <img style={{objectFit:'cover'}}  height={500} src={thirdImage} className='d-block w-100' alt='...' /> 
      </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
        <img style={{objectFit:'cover'}} height={500} src={secImage} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img style={{objectFit:'cover'}} height={500} src={image} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
  
     
    </MDBCarousel>
      
    </div>
  )
}

export default Hero
