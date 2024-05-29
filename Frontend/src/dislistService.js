import React, { useState } from 'react';
import { Container, Form, Button} from 'react-bootstrap';
import {auth} from "./firebase";
import { updateDoc,doc,getDoc} from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
const DislistService = () => {
  const db = getFirestore(auth);
  const [formData, setFormData] = useState({
    URL:'',
    name: '',
    id:'',
    adharNumber: '',
    pin:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const ServiceOption=[
    {value: "EDU", label: "Education"},
    {value: "MEDI", label: "Medication"},
    {value: "WORK", label: "Work"},
    {value: "RENT", label: "Rent"},
  ]
  const ServiceOptionEdu=[
    {value: "School", label: "School"},
    {value: "Tution", label: "Tution"},
    {value: "Library", label: "Library"},
    {value: "College", label: "College"},
  ]
  const ServiceOptionMedi=[
    {value: "Blood", label: "Blood Bank"},
    {value: "Animal", label: "Animal doctor"},
    {value: "Nurse", label: "Home Nurse"},
  ]
  const ServiceOptionWork=[
    {value: "Plumber", label: "Plumber"},
    {value: "Electricien", label: "Electricien"},
    {value: "Labor", label: "Labor"},
  ]
  const ServiceOptionRent=[
    {value: "Room", label: "Room"},
    {value: "House", label: "House"},
    {value: "Bike", label: "Bike"},
    {value: "Car", label: "Car"},
  ]

  let subServiceOption=[]
  function chnageSubService(service){
    let servicename=service.value;
   if(servicename==="EDU")
      subServiceOption=ServiceOptionEdu
    else if(servicename==="MEDI")
       subServiceOption=ServiceOptionMedi
    else if(servicename==="WORK")
        subServiceOption=ServiceOptionWork
    else
       subServiceOption=ServiceOptionRent
  }

const [service,setService]=useState({value: "Select", label: "Select Service"});
const [subService,setSubService]=useState({value: "Select", label: "Select SubService"});


  const navigate=useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const docSnap = await getDoc(doc(db, service.value, formData.id));
    
    if (docSnap.exists() && docSnap.data().verified===true && docSnap.data().pin===formData.pin && docSnap.data().adharNumber===formData.adharNumber && docSnap.data().name===formData.name) {
        try {
            await updateDoc(doc(db, service.value, formData.id), {
            verified:false
                  });
        alert("Your Service is delisted!!!");
        navigate('/')
          } catch (e) {
            console.error("Error adding document: ", e);
          }
      } else {
        // docSnap.data() will be undefined in this case

        alert("No such Service exist");
      }
    /*try {
      const docRef =  await deleteDoc(doc(db, "serivce",id))
      
      alert("Your Service is delisted");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // You can perform form validation here
    // and submit the form data to your backend
    */
  };
  return (
    <Container>
      <h1 style={{textAlign:'center',fontSize:'5vh'}}>Delist Your Service</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>ID</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter ID" 
            name="id"
            value={formData.id}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formAdharNumber">
          <Form.Label>Adhar Number</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Adhar number" 
            name="adharNumber"
            value={formData.adharNumber}
            onChange={handleChange}
            required 
          />
        </Form.Group>
        
        <Form.Group controlId="formAdharNumber">
          <Form.Label>Secuty Pin</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Your Secruty Pin" 
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            required 
          />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Service</Form.Label>
          <Select  
            placeholder="Enter Service Name" 
            name="Service Name"
            defaultValue={service}
            onChange={setService}
            required
            onInputChange={chnageSubService(service)}
            options={ServiceOption} />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label> Sub Service</Form.Label>
          <Select  
            placeholder="Enter Sub Service Name" 
            name="sub_service"
            defaultValue={subService}
            onChange={setSubService}
            required
            options={subServiceOption} />
        </Form.Group>
        

        <Button  variant="primary" type="submit" style={{width:'100%',margin:'5vh 0'}}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default DislistService;
