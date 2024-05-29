import React from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs,updateDoc,doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { auth } from './firebase';
const viewUSer= async ()=>{
    const params=useParams;
    const par=params()
    const db = getFirestore(auth);
    const {id,service}=par
    const querySnapshot = await getDocs(collection(db, service, id));
    console.log(id)
    console.log(querySnapshot[0]);
   return (
    <div>
      <h1>{id}</h1>
      <h1>{service}</h1>
    </div>
     
     
   );
};
export default viewUSer;