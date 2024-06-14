import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { auth } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  indianStates,
  upDistricts,
  mpDistricts,
  rajasthanDistricts,
  andhraPradeshDistricts,
  arunachalPradeshDistricts,
  assamDistricts,
  biharDistricts,
  chhattisgarhDistricts,
  goaDistricts,
  gujaratDistricts,
  haryanaDistricts,
  himachalPradeshDistricts,
  jharkhandDistricts,
  karnatakaDistricts,
  keralaDistricts,
  maharashtraDistricts,
  manipurDistricts,
  meghalayaDistricts,
  mizoramDistricts,
  nagalandDistricts,
  odishaDistricts,
  punjabDistricts,
  sikkimDistricts,
  tamilNaduDistricts,
  telanganaDistricts,
  tripuraDistricts,
  uttarakhandDistricts,
  westBengalDistricts,
  andamanNicobarDistricts,
  chandigarhDistricts,
  dadraNagarHaveliDamanDiuDistricts,
  lakshadweepDistricts,
  puducherryDistricts,
  ladakhDistricts,
  jammuKashmirDistricts,
} from "./PlaceData";

const ServiceProviderRegistration = () => {
  // const [amount, setAmount] = useState("");
  let amount="";
  // const [orderId, setOrderId] = useState("");
  // const [paymentId, setPaymentId] = useState("");
  // const [signature, setSignature] = useState("");
  const [successful, setSuccessful] = useState(400);
  const [response, setResponse] = useState({
    razorpay_order_id: "",
    razorpay_payment_id: "",
    status_code: "",
  });

  const initiatePayment = async () => {
    try {
      // Call your backend to create a payment order
      const response = await axios.post("https://click-eazzy.onrender.com/createPayment", {
        amount: 100,
        currency: "INR", // Change this according to your currency
      });

      // Extract order details from the response
      const {
        id,
        currency,
      } = response.data;

      // // Set the order details in the state
      // setOrderId(razorpay_order_id);
      // setPaymentId(razorpay_payment_id);
      // setSignature(razorpay_signature);

      // Call Razorpay checkout function to open the payment modal
      const options = {
        key: "rzp_test_7vNaaR9LpOveds", // Your Razorpay API key
        amount: amount,
        currency: currency,
        name: "Click Eazzy",
        description: "Payment for your service",
        order_id: id,
        handler: function (response) {
          // Handle success
          alert("Payment successful!");
          setSuccessful(200);
          setResponse(response);
          console.log(response);
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Error initiating payment. Please try again later.");
    }
  };

  const navigate = useNavigate();
  const db = getFirestore(auth);
  const [formData, setFormData] = useState({
    URL: "",
    name: "",
    age: "",
    address: "",
    contactNumber: "",
    profession: "",
    adharNumber: "",
    mail: "",
    trans: "",
  });
  const [image, setImage] = useState(null);

  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Max file size is 1mb");
    } else {
      setImage(file);
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  async function uploadImage() {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "nnlvtpdp");
    try {
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dz1rpswe8/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      return urlData.url;
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgURL = await uploadImage();
    let pin = Math.floor(Math.random() * 2000) - 100;
    try {
      const docRef = await addDoc(collection(db, service.value), {
        ...formData,
        city: city.value,
        imgURL: imgURL,
        state: state.value,
        service: service.value,
        subService: subService.value,
        response,
        verified: false,
        pin: String(pin),
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Successfully Registered!!!");
      navigate("/info/" + docRef.id + "/" + pin);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // You can perform form validation here
    // and submit the form data to your backend
  };
  let cityoption = [];
  let subServiceOption = [];

  function chnageCity(state) {
    let statename = state.value;
    if (statename === "UP") cityoption = upDistricts;
    else if (statename === "MP") cityoption = mpDistricts;
    else if (statename === "Andhra Pradesh")
      cityoption = andhraPradeshDistricts;
    else if (statename === "Arunachal Pradesh")
      cityoption = arunachalPradeshDistricts;
    else if (statename === "Assam") cityoption = assamDistricts;
    else if (statename === "Bihar") cityoption = biharDistricts;
    else if (statename === "Chhattisgarh") cityoption = chhattisgarhDistricts;
    else if (statename === "Goa") cityoption = goaDistricts;
    else if (statename === "Gujarat") cityoption = gujaratDistricts;
    else if (statename === "Haryana") cityoption = haryanaDistricts;
    else if (statename === "Himachal Pradesh")
      cityoption = himachalPradeshDistricts;
    else if (statename === "Jharkhand") cityoption = jharkhandDistricts;
    else if (statename === "Karnataka") cityoption = karnatakaDistricts;
    else if (statename === "Kerala") cityoption = keralaDistricts;
    else if (statename === "Maharashtra") cityoption = maharashtraDistricts;
    else if (statename === "Manipur") cityoption = manipurDistricts;
    else if (statename === "Meghalaya") cityoption = meghalayaDistricts;
    else if (statename === "Mizoram") cityoption = mizoramDistricts;
    else if (statename === "Nagaland") cityoption = nagalandDistricts;
    else if (statename === "Odisha") cityoption = odishaDistricts;
    else if (statename === "Punjab") cityoption = punjabDistricts;
    else if (statename === "Rajasthan") cityoption = rajasthanDistricts;
    else if (statename === "Sikkim") cityoption = sikkimDistricts;
    else if (statename === "Tamil Nadu") cityoption = tamilNaduDistricts;
    else if (statename === "Telangana") cityoption = telanganaDistricts;
    else if (statename === "Tripura") cityoption = tripuraDistricts;
    else if (statename === "Uttarakhand") cityoption = uttarakhandDistricts;
    else if (statename === "West Bengal") cityoption = westBengalDistricts;
    else if (statename === "Andaman and Nicobar Islands")
      cityoption = andamanNicobarDistricts;
    else if (statename === "Chandigarh") cityoption = chandigarhDistricts;
    else if (statename === "Dadra and Nagar Haveli and Daman and Diu")
      cityoption = dadraNagarHaveliDamanDiuDistricts;
    else if (statename === "Lakshadweep") cityoption = lakshadweepDistricts;
    else if (statename === "Puducherry") cityoption = puducherryDistricts;
    else if (statename === "Ladakh") cityoption = ladakhDistricts;
    else if (statename === "Jammu and Kashmir")
      cityoption = jammuKashmirDistricts;
    else cityoption = [{ value: "Delhi", label: "Delhi" }];
  }

  function chnageSubService(service) {
    let servicename = service.value;
    if (servicename === "EDU") subServiceOption = ServiceOptionEdu;
    else if (servicename === "MEDI") subServiceOption = ServiceOptionMedi;
    else if (servicename === "WORK") subServiceOption = ServiceOptionWork;
    else if (servicename === "Food") subServiceOption = ServiceOptionFood;
    else subServiceOption = ServiceOptionRent;
  }

  const stateoption = indianStates;
  const ServiceOption = [
    { value: "EDU", label: "Education" },
    { value: "MEDI", label: "Medication" },
    { value: "WORK", label: "Work" },
    { value: "RENT", label: "Rent" },
    { value: "Food", label: "Food and Restraunt" },
  ];
  const ServiceOptionEdu = [
    { value: "School", label: "School" },
    { value: "Tution", label: "Tution" },
    { value: "Library", label: "Library" },
    { value: "College", label: "College" },
    { value: "Coaching", label: "Coaching" },
    { value: "Stationary_shop", label: "Stationary Shop" },
    { value: "Training_center", label: "Training Center" },
    { value: "Hostel", label: "Hostel" },
  ];
  const ServiceOptionMedi = [
    { value: "Doctors", label: "Doctors" },
    { value: "Clinics", label: "Clinics" },
    { value: "Hospital", label: "Hospital" },
    { value: "Medical_shop", label: "Medical Shop" },
    { value: "Blood", label: "Blood Bank" },
    { value: "Animal", label: "Animal doctor" },
    { value: "Nurse", label: "Home Nurse" },
    { value: "Animals_medical_shop", label: "Animals Medical Shop" },
  ];
  const ServiceOptionWork = [
    { value: "Plumber", label: "Plumber" },
    { value: "Electricien", label: "Electricien" },
    { value: "Labor", label: "Labor" },
  ];
  const ServiceOptionRent = [
    { value: "Room", label: "Room" },
    { value: "House", label: "House" },
    { value: "Bike", label: "Bike" },
    { value: "Car", label: "Car" },
    { value: "Shop", label: "Shop" },
  ];

  const ServiceOptionFood = [
    { value: "Restraunts", label: "Restraunts" },
    { value: "Hotels", label: "Hotels" },
    { value: "Catering", label: "Catering" },
    { value: "Sweet_shop", label: "Sweet Shop" },
    { value: "Grocery_shop", label: "Grocery Shop" },
    { value: "Chef", label: "Chef" },
    { value: "Kitchen_shop", label: "Kitchen Shop" },
    { value: "Maid", label: "Maid" },
  ];

  const [city, setCity] = useState(null);
  const [state, setState] = useState({
    value: "Select",
    label: "Select State",
  });
  const [service, setService] = useState({
    value: "Select",
    label: "Select Service",
  });
  const [subService, setSubService] = useState(null);

  return (
    <Container>
      <h1 style={{ textAlign: "center", fontSize: "5vh" }}>
        Service Provider Registration
      </h1>
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
        <Form.Group controlId="formAddress">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>State</Form.Label>
          <Select
            placeholder="Enter name"
            name="State"
            defaultValue={state}
            onChange={setState}
            onInputChange={chnageCity(state)}
            required
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
            placeholder="Enter the Service name"
            name="Service"
            defaultValue={service}
            onChange={setService}
            onInputChange={chnageSubService(service)}
            required
            options={ServiceOption}
          />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Sub Service</Form.Label>
          <Select
            placeholder="Enter Sub Service"
            name="Sub Service"
            defaultValue={subService}
            onChange={setSubService}
            required
            options={subServiceOption}
          />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formContactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter contact number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formContactNumber">
          <Form.Label>Profession</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formContactNumber">
          <Form.Label>URL of your service (if any)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter URL to your Service"
            name="URL"
            value={formData.URL}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="signup-profile-pic__container">
          <Form.Label>Upload an img</Form.Label>
          <br />
          <label htmlFor="image-upload" className="image-upload-label">
            <i className="fas fa-plus-circle add-picture-icon"></i>
          </label>
          <input
            type="file"
            id="image-upload"
            hidden
            accept="image/png, image/jpeg"
            onChange={validateImg}
          />
        </div>
        <div style={{ marginBottom: "30px" }}>
          <b>Pay now Rs 100 as the one time registration fee: </b>
          <Button
            variant="primary"
            style={{ textAlign: "center" }}
            onClick={initiatePayment}
          >
            Pay Now...
          </Button>
          <br />
          <b>
            Note:After successful payment registered button will be appear below
            !!!
          </b>
        </div>
        {/* <Form.Group controlId="formAddress">
          <Form.Label>Transtion ID</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Transtion ID" 
            name="trans"
            value={formData.trans}
            onChange={handleChange}
             
          />
        </Form.Group> */}

        {successful === 200 ? (
          <Button
            variant="primary"
            type="submit"
            style={{ width: "100%", margin: "5vh 0" }}
          >
            Register
          </Button>
        ) : null}
      </Form>
    </Container>
  );
};

export default ServiceProviderRegistration;
