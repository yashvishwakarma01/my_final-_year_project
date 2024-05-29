import React from "react";
import { useParams } from "react-router-dom";
const Info=()=>{
    const params=useParams();
    const {id, pin}=params
    console.log(params)
   return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',margin:'20vh'}}>
    <p style={{padding:'30px',borderRadius:'10px',color:'white',backgroundColor:'rgb(37, 150, 190)',fontSize:'18px'}}>
        <div>Service ID:<span >{id}</span></div>
        <div>Pin:<span >{pin}</span></div>
        <div>Note down the Credentials for further use such as in delisting yourself from your services...</div>
        </p>
    </div>
     
     
   );
};
export default Info;