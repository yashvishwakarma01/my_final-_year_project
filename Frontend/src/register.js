import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "./firebase";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import {useNavigate} from "react-router-dom"
const app= getAuth(auth);
function SignUp() {
  const navigate=useNavigate();

  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const [firstname, setFirstName] =useState("");
  const [lastname, setLastName] =useState("");
  
  const signup =()=>{
    if(email=="" || password==""){
      alert("email or password field is empty");
      return false;
    }
    createUserWithEmailAndPassword(app, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user,{
      displayName: firstname+" "+lastname,
    });
    // ...
    console.log(user);
    alert("You are registered");
    navigate("/");
  })
  .catch((error) => {
    alert(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  };

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3 text-info" >
            The best Services <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>for you..</span>
          </h1>

          <p className='px-3 text-success' style={{fontSize:20}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput onChange={e=>setFirstName(e.target.value)} value={firstname} wrapperClass='mb-4' label='First name'  id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput onChange={e=>setLastName(e.target.value)} value={lastname} wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput onChange={e=>setEmail(e.target.value)} value={email} wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput onChange={e=>setPassword(e.target.value)} value={password} wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn onClick={signup} className='w-100 mb-4' size='md'>sign up</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}



export default SignUp;
