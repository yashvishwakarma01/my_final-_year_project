import React, {useState} from 'react';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase";
import {useNavigate} from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import islogin from "./App.js"
const app =getAuth(auth);
function Login() {
  const navigate=useNavigate();
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const login = ()=>{
    if(email=="" || password==""){
      alert("email or password field is empty");
      return false;
    }
    signInWithEmailAndPassword(app, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert(user);
    navigate('/');
    // ...
  })
  .catch((error) => {
    alert(error);
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  };

  return (
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>
               <div style={{display:'flex', alignItems:'center',justifyContent:'center',fontSize:'5vw', paddingBottom:'10vh'}}>Login</div>
              <MDBInput onChange={e=>setEmail(e.target.value)} value={email} wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
              <MDBInput onChange={e=>setPassword(e.target.value)} value={password} wrapperClass='mb-4' label='Password' id='form2' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn onClick={login} className="mb-4 w-100">Sign in</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>

  )}
  export default Login; 