import React from "react";
import CardBody from "./CardBody";
import edu from "./images/edu.jpg";
import medication from "./images/medication.jpg";
import food from "./images/food.jpg";
import electrician from "./images/electrician.jpg";
import rent from "./images/rent.jpg";
import plumber from "./images/plumber.jpg";
import labour from "./labour.jpg";
import beauty from "./images/beauty.jpg";
import Banner from "./Banner";

function ServiceItem() {
  return (
    <>
     <Banner />
      <div className="serviceCardItems"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignContent: "space-between",
          margin: "10px 35px",
          gap: "20px",
        }}
      >
       
        <CardBody title={"education"} image={edu} message={"Leveraging wonderful educational services nearby you.Click on the below button to access the services"}/>
        <CardBody title={"medication"} image={medication} message={"Leveraging wonderful medication services nearby you.Click on the below button to access the services"}/>
        <CardBody title={"food"} image={food} message={"Leveraging wonderful food and restraunts nearby you.Click on the below button to access the services"}/>
        <CardBody title={"beauty"} image={beauty} message={"Leveraging wonderful beauty and saloons nearby you.Click on the below button to access the services"}/>
        <CardBody title={"plumber"} image={plumber} message={"Leveraging wonderful plumber services nearby you.Click on the below button to access the services"} />
        <CardBody title={"labour"} image={labour} message={"Leveraging wonderful labour services nearby you.Click on the below button to access the services"}/>
        <CardBody title={"electricien"} image={electrician} message={"Leveraging wonderful electricien services nearby you.Click on the below button to access the services"}/>
        <CardBody title={"rent"} image={rent} message={"Leveraging wonderful rent services nearby you.Click on the below button to access the services"}/>
      </div>
    </>
  );
}

export default ServiceItem;
