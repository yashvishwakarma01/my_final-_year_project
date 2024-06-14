import React, { useState } from 'react';
import { Container, Form, Button,Table} from 'react-bootstrap';
import Select from "react-select";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {indianStates,upDistricts,mpDistricts,rajasthanDistricts,andhraPradeshDistricts,arunachalPradeshDistricts,assamDistricts,biharDistricts,
  chhattisgarhDistricts,goaDistricts,gujaratDistricts,haryanaDistricts,himachalPradeshDistricts,jharkhandDistricts,karnatakaDistricts,keralaDistricts,maharashtraDistricts,
  manipurDistricts,meghalayaDistricts,mizoramDistricts,nagalandDistricts,odishaDistricts,punjabDistricts,sikkimDistricts,tamilNaduDistricts,
  telanganaDistricts,tripuraDistricts,uttarakhandDistricts,westBengalDistricts,andamanNicobarDistricts,chandigarhDistricts,dadraNagarHaveliDamanDiuDistricts,
  lakshadweepDistricts,puducherryDistricts,ladakhDistricts,jammuKashmirDistricts
} from './PlaceData'



const db = getFirestore(auth);
const SearchService = () => {
  const loc=useLocation();
  let serviceRequest=loc.state?loc.state.charAt(0).toUpperCase()+loc.state.slice(1):null;

  const navigate=useNavigate();
  const [serviceProviders, setServiceProviders] = useState([]);
  // const [formData, setFormData] = useState({
  //   location: '',
  //   serviceNeeded: ''
  // });
  let books=[];
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

  const mapData={
    'School':"EDU",
    'Tution':"EDU",
    'College':"EDU",
    'Coaching':"EDU",
    'Stationary_shop':"EDU",
    'Training_center':"EDU",
    'Library':"EDU",
    'Cyber_cafe':"EDU",
    'Hostel':"EDU",
    'Doctors':'MEDI',
    'Clinics':'MEDI',
    'Medical_college':'MEDI',
    'Medical_shop':'MEDI',
    'Animals_medical_shop':'MEDI',
    'Blood_bank':'MEDI',
    'Nurses':'MEDI',
    'Animals_doctor':'MEDI',
    'Plumber':"WORK",
    'Labour':"WORK",
    'Electricien':"WORK",
    'House':"RENT",
    'Pg':"RENT",
    'Shop':"RENT",
    'Car':"RENT",
    'Bike':"RENT",
    'Restraunts':'FOOD',
    'Hotels':'FOOD',
    'Catering':'FOOD',
    'Sweet_shop':'FOOD',
    'Grocery_shop':'FOOD',
    'Chef':'FOOD',
    'Kitchen_shop':'FOOD',
    'Maid':'FOOD',
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataSearch=mapData[serviceRequest]
    const querySnapshot = await getDocs(collection(db,serviceRequest?dataSearch:service.value));
    let serviceSize=false;
  
    querySnapshot.forEach((doc) => {
       if(!serviceRequest && doc.data().verified===true && doc.data().city===city.value && doc.data().state===state.value  && doc.data().subService===subService.value ){
             books.push({...doc.data(),id:doc.id})
             serviceSize=true
      }else if(serviceRequest && doc.data().verified===true && doc.data().city===city.value && doc.data().state===state.value && doc.data().subService===serviceRequest){
              books.push({...doc.data(),id:doc.id})
              serviceSize=true 
      }      
      // else if(serviceSize===false){
      //         alert("No Service Provider available at this location")
      //         navigate('/home')
      // }
});
   if(!serviceSize){
      alert("No Service Provider available at this location")
      navigate('/home')
   }
     setServiceProviders(books);
    // You can perform search logic here
  };
  let cityoption=[]
  let subServiceOption=[]
  
  function chnageCity(state){
    let statename=state.value;
   if(statename==="UP")
      cityoption=upDistricts
    else if(statename==="MP")
       cityoption=mpDistricts
    else if(statename==="Andhra Pradesh")
       cityoption=andhraPradeshDistricts
    else if(statename==="Arunachal Pradesh")
       cityoption=arunachalPradeshDistricts
    else if(statename==="Assam")
       cityoption=assamDistricts
    else if(statename==="Bihar")
       cityoption=biharDistricts
    else if(statename==="Chhattisgarh")
       cityoption=chhattisgarhDistricts
    else if(statename==="Goa")
       cityoption=goaDistricts
    else if(statename==="Gujarat")
       cityoption=gujaratDistricts
    else if(statename==="Haryana")
       cityoption=haryanaDistricts
    else if(statename==="Himachal Pradesh")
       cityoption=himachalPradeshDistricts
    else if(statename==="Jharkhand")
       cityoption=jharkhandDistricts
    else if(statename==="Karnataka")
       cityoption=karnatakaDistricts
    else if(statename==="Kerala")
       cityoption=keralaDistricts
    else if(statename==="Maharashtra")
       cityoption=maharashtraDistricts
    else if(statename==="Manipur")
       cityoption=manipurDistricts
    else if(statename==="Meghalaya")
       cityoption=meghalayaDistricts
    else if(statename==="Mizoram")
       cityoption=mizoramDistricts
    else if(statename==="Nagaland")
       cityoption=nagalandDistricts
    else if(statename==="Odisha")
       cityoption=odishaDistricts
    else if(statename==="Punjab")
       cityoption=punjabDistricts
    else if(statename==="Rajasthan")
       cityoption=rajasthanDistricts
    else if(statename==="Sikkim")
       cityoption=sikkimDistricts
    else if(statename==="Tamil Nadu")
       cityoption=tamilNaduDistricts
    else if(statename==="Telangana")
       cityoption=telanganaDistricts
    else if(statename==="Tripura")
       cityoption=tripuraDistricts
    else if(statename==="Uttarakhand")
       cityoption=uttarakhandDistricts
    else if(statename==="West Bengal")
       cityoption=westBengalDistricts
    else if(statename==="Andaman and Nicobar Islands")
       cityoption=andamanNicobarDistricts
    else if(statename==="Chandigarh")
       cityoption=chandigarhDistricts
    else if(statename==="Dadra and Nagar Haveli and Daman and Diu")
       cityoption=dadraNagarHaveliDamanDiuDistricts
    else if(statename==="Lakshadweep")
       cityoption=lakshadweepDistricts
    else if(statename==="Puducherry")
       cityoption=puducherryDistricts
    else if(statename==="Ladakh")
       cityoption=ladakhDistricts
    else if(statename==="Jammu and Kashmir")
       cityoption=jammuKashmirDistricts
    else
       cityoption=[{value: "Delhi", label: "Delhi"}]
  }
  
 function chnageSubService(service){
    let servicename=service.value;
   if(servicename==="EDU")
      subServiceOption=ServiceOptionEdu
    else if(servicename==="MEDI")
       subServiceOption=ServiceOptionMedi
    else if(servicename==="WORK")
        subServiceOption=ServiceOptionWork
    else if(servicename==="Food")
        subServiceOption=ServiceOptionFood
    else
       subServiceOption=ServiceOptionRent
  }
  // const cityoptionUP=[
  //   {value: "Prayagraj", label: "Prayagraj"},
  //   {value: "Chitrakoot", label: "Chitrakoot"},
  //   {value: "Banaras", label: "Banaras"},
  // ]
  // const cityoptionUP=upDistricts
  // const cityoptionMP=mpDistricts
  
  // const cityoptionMP=[
  //   {value: "Rewa", label: "Rewa"},
  //   {value: "Satna", label: "Satna"},
  //   {value: "Rera", label: "Rera"},
  // ]
  // const stateoption=[
  //   {value: "UP", label: "UttarPradesh"},
  //   {value: "MP", label: "MadyaPradesh"},
  //   {value: "Delhi", label: "Delhi"},
  // ]
  const stateoption=indianStates;
  const ServiceOption=[
    {value: "EDU", label: "Education"},
    {value: "MEDI", label: "Medication"},
    {value: "WORK", label: "Work"},
    {value: "RENT", label: "Rent"},
    {value: "Food", label: "Food and Restraunt"},
  ]
  const ServiceOptionEdu=[
    {value: "School", label: "School"},
    {value: "Tution", label: "Tution"},
    {value: "Library", label: "Library"},
    {value: "College", label: "College"},
    {value: "Coaching", label: "Coaching"},
    {value: "Stationary_shop", label: "Stationary Shop"},
    {value: "Training_center", label: "Training Center"},
    {value: "Hostel", label: "Hostel"},
  ]
  const ServiceOptionMedi=[
    {value: "Doctors", label: "Doctors"},
    {value: "Clinics", label: "Clinics"},
    {value: "Hospital", label: "Hospital"},
    {value: "Medical_shop", label: "Medical Shop"},
    {value: "Blood", label: "Blood Bank"},
    {value: "Animal", label: "Animal doctor"},
    {value: "Nurse", label: "Home Nurse"},
    {value: "Animals_medical_shop", label: "Animals Medical Shop"},
  ]
  const ServiceOptionWork=[
    {value: "Plumber", label: "Plumber"},
    {value: "Electricien", label: "Electricien"},
    {value: "Labor", label: "Labor"},
  ]
  const ServiceOptionRent=[
    {value: "Pg", label: "Pg"},
    {value: "House", label: "House"},
    {value: "Bike", label: "Bike"},
    {value: "Car", label: "Car"},
    {value: "Shop", label: "Shop"},
  ]
  const ServiceOptionFood=[
    {value: "Restraunts", label: "Restraunts"},
    {value: "Hotels", label: "Hotels"},
    {value: "Catering", label: "Catering"},
    {value: "Sweet_shop", label: "Sweet Shop"},
    {value: "Grocery_shop", label: "Grocery Shop"},
    {value: "Chef", label: "Chef"},
    {value: "Kitchen_shop", label: "Kitchen Shop"},
    {value: "Maid", label: "Maid"},
  ]
  const [city,setCity]=useState(null);
  const [state,setState]=useState({value: "Select", label: "Select State"});
  const [service,setService]=useState({value: "Select", label: "Select Service"});
  const [subService,setSubService]=useState({value: "Select", label: "Select SubService"});
  let cnt=0;

  return (
    <Container>
       <h1 style={{textAlign:'center', color:'red',backgroundColor:'orange',marginTop:'10px'}}>Search {serviceRequest}</h1>
      <Form onSubmit={handleSubmit}> 
        <Form.Group controlId="formName">
          <Form.Label>State</Form.Label>
          <Select  
            placeholder="Enter State" 
            name="State"
            defaultValue={state}
            onChange={setState}
            required
            onInputChange={chnageCity(state)}
            options={stateoption} />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>City</Form.Label>
          <Select  
            placeholder="Enter City" 
            name="City"
            defaultValue={city}
            onChange={setCity}
            required
            options={cityoption} />
        </Form.Group>
        {!serviceRequest?<div><Form.Group controlId="formName">
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
        </Form.Group></div>:null}

        <Button variant="primary" type="submit" style={{width:'100%',margin:'10vh 0'}}>
          Search
        </Button>
      </Form>
      {serviceProviders.length > 0 ? <Table striped bordered hover>
            <thead>
              <tr>
              <th>S. no.</th>
                <th>Name</th>
                <th>Service</th>
                <th>Contact</th>
                <th>Address</th>
                <th>URL</th>
                <th>Img URL</th>
              </tr>
            </thead>
            <tbody>
                {serviceProviders.map(provider => (
                <tr key={provider.id}>
                   <td>{++cnt}</td>
                  <td>{provider.name}</td>
                  <td>{provider.subService}</td>
                  <td>{provider.contactNumber}</td>
                  <td>{provider.address}</td>
                  <td>{provider.URL}</td>
                  <td><a href={provider.imgURL}>{provider.imgURL?"image":"no Image"}</a></td>
                  {/* <td><Image src={`${provider.imgURL}`} fluid /></td> */}
                </tr>
              ))}
            </tbody>
          </Table>:null}
          {/* <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignContent: "space-between",
          margin: "10px 35px",
          gap: "20px",
        }}>
          {serviceProviders.map((provider,key)=>(
            <Card_Placeholder data={provider} key={key}/>
          ))} </div> */}
    </Container>
    
  );
};

export default SearchService;
