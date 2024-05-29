import React,{useState} from 'react';
import { MDBInput, MDBCheckbox, MDBBtn,MDBTextArea } from 'mdb-react-ui-kit';
import { getDatabase, ref, set  } from "firebase/database";
import {auth} from "./firebase";
import { useNavigate } from 'react-router-dom';

// https://mdbootstrap.com/docs/react/extended/contact/

export default function Contact() {
  const [name, setName] =useState("");
  const [subject, setSubject] =useState("");
  const [massage, setMassage] =useState("");
  const db = getDatabase(auth);
  const navigate = useNavigate()
  const putdata =()=>{
    if(name==="" || massage===""){
      alert("missing data");
      return false;
    }
    set(ref(db, 'contactUs/' + name), {
      Subject: subject,
      Massage: massage,
    });
    console.log(name,subject,massage)
    alert("We will soon contact you");
    navigate("/");
  };
  return (
    <>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
  
    <div id='form' className='text-center' style={{ width: '50%',paddingTop:'10vh' }}>
      <h2>Contact us</h2>

      <MDBInput onChange={e=>setName(e.target.value)} value={name} label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput onChange={e=>setSubject(e.target.value)} value={subject} label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea onChange={e=>setMassage(e.target.value)} value={massage} wrapperClass='mb-4' label='Mention the issues and your credentiels details' />

      {/* <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' /> */}

      <MDBBtn onClick={putdata} color='primary' block className='my-4' style={{padding:'10px 30px', width:"100%"}}>
        Send
      </MDBBtn>
    </div>
   
    </div>
 
    </>
  );
}
