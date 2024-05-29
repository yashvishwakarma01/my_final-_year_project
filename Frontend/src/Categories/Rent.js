import React from 'react'
import rent from '../images/rent.jpg'
import CardBody from '../CardBody'
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
   <CardBody title='house' image={rent} message={"Leveraging wonderful House Rent nearby you.Click on the below button to access the services"}/>
   <CardBody title='room' image={rent} message={"Leveraging wonderful Room Rent services nearby you.Click on the below button to access the services"}/>
   <CardBody title='shop' image={rent} message={"Leveraging wonderful Shop Rent services nearby you.Click on the below button to access the services"}/>
   <CardBody title='car' image={rent} message={"Leveraging wonderful Car Rent services nearby you.Click on the below button to access the services"}/>
   <CardBody title='bike' image={rent} message={"Leveraging wonderful Bike Rent services nearby you.Click on the below button to access the services"}/>
  </div>
  )
}

export default Rent
