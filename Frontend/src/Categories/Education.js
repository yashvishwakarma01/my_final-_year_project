import React from 'react'
import CardBody from '../CardBody'
import school from '../images/school.jpg'
import college from '../images/college.jpg'
import coaching from '../images/coaching.jpg'
import library from '../images/library.jpg'
import tution from '../images/tution.jpg'
import hostel from '../images/hostel.jpg'
import stationary from '../images/stationary.jpg'
import training_center from '../images/training_center.jpg'


function Education() {
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
     <CardBody title='school' image={school} message={"Leveraging wonderful school services nearby you.Click on the below button to access the services"}/>
     <CardBody title='college' image={college} message={"Leveraging wonderful college services nearby you.Click on the below button to access the services"}/>
     <CardBody title='coaching' image={coaching} message={"Leveraging wonderful coaching services nearby you.Click on the below button to access the services"}/>
     <CardBody title='tution' image={tution} message={"Leveraging wonderful tution services nearby you.Click on the below button to access the services"}/>
     <CardBody title='stationary_shop' image={stationary} message={"Leveraging wonderful stationary shop services nearby you.Click on the below button to access the services"}/>
     <CardBody title='library' image={library} message={"Leveraging wonderful library services nearby you.Click on the below button to access the services"}/>
     <CardBody title='training_center' image={training_center} message={"Leveraging wonderful training center services nearby you.Click on the below button to access the services"}/>
     <CardBody title='hostel' image={hostel} message={"Leveraging wonderful hostel services nearby you.Click on the below button to access the services"}/>
    </div>
  )
}

export default Education
