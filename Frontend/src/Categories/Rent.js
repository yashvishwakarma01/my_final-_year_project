import React from 'react'
import rent from '../images/rent.jpg'
import CardBody from '../CardBody'
import houseRent from '../images/houseRent.jpg'
import pgRent from '../images/pgRent.jpg'

import shopRent from '../images/shop.jpg'
import carRent from '../images/carRent.jpg'
import bikeRent from '../images/bikeRent.jpg'

function Rent() {
  return (
    <div 
    style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "space-between",
        margin: "10px 35px",
        gap: "20px",
      }}>
   <CardBody title='house' image={houseRent} message={"Leveraging wonderful House Rent nearby you.Click on the below button to access the services"}/>
   <CardBody title='pg' image={pgRent} message={"Leveraging wonderful Room Rent services nearby you.Click on the below button to access the services"}/>
   <CardBody title='shop' image={shopRent} message={"Leveraging wonderful Shop Rent services nearby you.Click on the below button to access the services"}/>
   <CardBody title='car' image={carRent} message={"Leveraging wonderful Car Rent services nearby you.Click on the below button to access the services"}/>
   <CardBody title='bike' image={bikeRent} message={"Leveraging wonderful Bike Rent services nearby you.Click on the below button to access the services"}/>
  </div>
  )
}

export default Rent
