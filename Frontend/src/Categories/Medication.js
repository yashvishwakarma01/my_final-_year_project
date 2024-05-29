import React from 'react'
import CardBody from '../CardBody'
import medication from '../images/medication.jpg'
import clinics from '../images/clinics.jpg'
import medical_shop from '../images/medical_shop.jpg'
import blood_bank from '../images/blood.jpg'
import hospital from '../images/hospital.jpg'
import nurse from '../images/nurse.jpg'
import animals_doctor from '../images/animals_doctor.jpg'
import petshop from '../images/petshop.jpg'

function Medication() {
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
   <CardBody title='doctors' image={medication} message={"Leveraging wonderful medicational services nearby you.Click on the below button to access the services"}/>
   <CardBody title='clinics' image={clinics} message={"Leveraging wonderful clinical services nearby you.Click on the below button to access the services"}/>
   <CardBody title='hospital'  image={hospital} message={"Leveraging wonderful hospital services nearby you.Click on the below button to access the services"}/>
   <CardBody title='medical_shop'  image={medical_shop} message={"Leveraging wonderful medical shop services nearby you.Click on the below button to access the services"} />
   <CardBody title='animals_medical_shop'  image={petshop} message={"Leveraging wonderful animal medical shop services nearby you.Click on the below button to access the services"}/>
   <CardBody title='blood_bank'  image={blood_bank} message={"Leveraging wonderful blood bank services nearby you.Click on the below button to access the services"}/>
   <CardBody title='nurses'  image={nurse} message={"Leveraging wonderful nursing services nearby you.Click on the below button to access the services"}/>
   <CardBody title='animals_doctor'  image={animals_doctor} message={"Leveraging  wonderful animals doctor services nearby you.Click on the below button to access the services"}/>
  
  </div>
  )
}

export default Medication
