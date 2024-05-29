import React from 'react'
import food from '../images/food.jpg'
import CardBody from '../CardBody'
import hotel from '../images/hotel.jpg'
import catering from '../images/catering.jpg'
import sweet from '../images/sweet.jpg'
import grocery from '../images/grocery.jpg'
import chef from '../images/chef.jpg'
import maid from '../images/maid.jpg'
import kitchenShop from '../images/kitchen_shop.jpg'
function Food() {
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
   <CardBody title='restraunts' image={food} message={"Leveraging wonderful Restraunt  nearby you.Click on the below button to access the services"}/>
   <CardBody title='hotels' image={hotel} message={"Leveraging wonderful Hotels nearby you.Click on the below button to access the services"}/>
   <CardBody title='catering' image={catering} message={"Leveraging wonderful Catering services nearby you.Click on the below button to access the services"}/>
   <CardBody title='sweet_shop' image={sweet} message={"Leveraging wonderful Sweet Shop nearby you.Click on the below button to access the services"}/>
   <CardBody title='grocery_shop' image={grocery} message={"Leveraging wonderful Grocery Shop nearby you.Click on the below button to access the services"}/>
   <CardBody title='chef' image={chef} message={"Leveraging wonderful Chef nearby you.Click on the below button to access the services"}/>
   <CardBody title='kitchen_shop' image={kitchenShop} message={"Leveraging wonderful Kitchen Shop nearby you.Click on the below button to access the services"}/>
   <CardBody title='maid' image={maid} message={"Leveraging skilled Maid nearby you.Click on the below button to access the services"}/>
  
  </div>
  )
}

export default Food
