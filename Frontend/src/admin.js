import React, { useState } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import Select from "react-select";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { auth } from "./firebase";
import {indianStates,upDistricts,mpDistricts,rajasthanDistricts,andhraPradeshDistricts,arunachalPradeshDistricts,assamDistricts,biharDistricts,
  chhattisgarhDistricts,goaDistricts,gujaratDistricts,haryanaDistricts,himachalPradeshDistricts,jharkhandDistricts,karnatakaDistricts,keralaDistricts,maharashtraDistricts,
  manipurDistricts,meghalayaDistricts,mizoramDistricts,nagalandDistricts,odishaDistricts,punjabDistricts,sikkimDistricts,tamilNaduDistricts,
  telanganaDistricts,tripuraDistricts,uttarakhandDistricts,westBengalDistricts,andamanNicobarDistricts,chandigarhDistricts,dadraNagarHaveliDamanDiuDistricts,
  lakshadweepDistricts,puducherryDistricts,ladakhDistricts,jammuKashmirDistricts
} from './PlaceData'



const db = getFirestore(auth);

const SearchService = () => {


  async function handleUpdate(id) {
    await updateDoc(doc(db, service.value, id), {
      verified: true,
    });
    
    alert("verification done");
  
    // You can perform search logic here
  }
  async function unVerify(id) {
    await updateDoc(doc(db, service.value, id), {
      verified: false,
    });
   
    alert("Unverified done");
   
    // You can perform search logic here
  }

  const [serviceProviders, setServiceProviders] = useState([]);
  // const [formData, setFormData] = useState({
  //   location: "",
  //   serviceNeeded: "",
  // });
  let books = [];
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async (e) => {
    if(pin!=="1234"){
      alert("enter Valid Pin");
      return;
    }
    e.preventDefault();
    const querySnapshot = await getDocs(collection(db, service.value));
    querySnapshot.forEach((doc) => {
      if (
        // doc.data().pin === pin &&
        doc.data().state === state.value &&
        doc.data().subService === subService.value
      ) {
        books.push({ ...doc.data(), id: doc.id });
      }
    });
    console.log(books);
    setServiceProviders(books);
    // You can perform search logic here
  };
  let cityoption = [];
  let subServiceOption = [];

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
  const ServiceOptionWork = [
    { value: "Plumber", label: "Plumber" },
    { value: "Electricien", label: "Electricien" },
    { value: "Labor", label: "Labor" },
  ];
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

  const [city, setCity] = useState(null);
  const [pin, setPin] = useState("");
  const [state, setState] = useState({
    value: "Select",
    label: "Select State",
  });
  const [service, setService] = useState({
    value: "Select",
    label: "Select Service",
  });
  const [subService, setSubService] = useState({
    value: "Select",
    label: "Select SubService",
  });

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Admin</h2>
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
            options={stateoption}
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label>City</Form.Label>
          <Select
            placeholder="Enter City"
            name="City"
            defaultValue={city}
            onChange={setCity}
            required
            options={cityoption}
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
            options={ServiceOption}
          />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Service</Form.Label>
          <Select
            placeholder="Enter Service Name"
            name="sub_service"
            defaultValue={subService}
            onChange={setSubService}
            required
            options={subServiceOption}
          />
        </Form.Group>
        <Form.Group controlId="formpin">
          <Form.Label>Admin Pin</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Admin Pin"
            onChange={(e) => setPin(e.target.value)}
            value={pin}
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ width: "100%", margin: "10vh 0" }}
        >
          Search
        </Button>
      </Form>
      {serviceProviders.length > 0 && (
        <div className="mt-4">
          <h2>Service Providers</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Service</th>
                <th>Contact</th>
                <th>Address</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {serviceProviders.map((provider) => (
                <tr key={provider.id}>
                  <td>{provider.name}</td>
                  <td>{provider.subService}</td>
                  <td>{provider.contactNumber}</td>
                  <td>{provider.address}</td>
                  <td>{provider.URL}</td>
                  <td>
                    {provider.verified === false ? (
                      <Button
                        onClick={() => {handleUpdate(provider.id)
                        }}
                        variant="primary">
                        Verify it
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {unVerify(provider.id)
                        }}
                        variant="primary"
                      >
                        Unverify it
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default SearchService;
