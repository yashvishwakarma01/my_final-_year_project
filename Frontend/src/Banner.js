import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import restrauntbanner from './images/restrauntbanner.png'
import electricianBanner  from './images/electricianBanner.png'
import mason from './images/mason.jpg'
import educationBanner from './images/educationBanner.png'
import medicationBanner from './images/medicationBanner.jpg'
import rentBanner from './images/rentBanner.jpg'
import './App.css'

function Banner() {
  return (
    <div className='banner' style={{ width:'60vw', padding: 30,backgroundColor:'rgb(245, 245, 220)',margin: "10px 35px"}}> 
    <Carousel > 
      <Carousel.Item interval={500}> 
        <img 
          className="d-block w-100 "
src={restrauntbanner}
          alt="Restraunt"
        /> 
        <Carousel.Caption> 
          <h3>Label for first slide</h3> 
          <p>Sample Text for Image One</p> 
        </Carousel.Caption> 
      </Carousel.Item> 
      <Carousel.Item interval={500}> 
        <img 
          className="d-block w-100"
src={electricianBanner}
          alt="Electrician pic"
          style={{height:'100%'}}
        /> 
        <Carousel.Caption> 
          <h3>Label for second slide</h3> 
          <p>Sample Text for Image Two</p> 
        </Carousel.Caption> 
      </Carousel.Item> 
      <Carousel.Item interval={500}> 
        <img 
          className="d-block w-100 "
src={mason}
          alt="mason pic"
        /> 
        <Carousel.Caption> 
          <h3>Label for first slide</h3> 
          <p>Sample Text for Image One</p> 
        </Carousel.Caption> 
      </Carousel.Item> 

      <Carousel.Item interval={500}> 
        <img 
          className="d-block w-100 "
src={educationBanner}
          alt="Education"
        /> 
        <Carousel.Caption> 
          <h3>Label for first slide</h3> 
          <p>Sample Text for Image One</p> 
        </Carousel.Caption> 
      </Carousel.Item>

      <Carousel.Item interval={500}> 
        <img 
          className="d-block w-100 "
src={medicationBanner}
          alt="Medication"
        /> 
        <Carousel.Caption> 
          <h3>Label for first slide</h3> 
          <p>Sample Text for Image One</p> 
        </Carousel.Caption> 
      </Carousel.Item>

      <Carousel.Item interval={500}> 
        <img 
          className="d-block w-100 "
src={rentBanner}
          alt="Rent"
        /> 
        <Carousel.Caption> 
          <h3>Label for first slide</h3> 
          <p>Sample Text for Image One</p> 
        </Carousel.Caption> 
      </Carousel.Item>
    </Carousel> 
  </div> 
  );
}

export default Banner;