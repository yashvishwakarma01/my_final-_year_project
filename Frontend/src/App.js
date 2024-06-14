import './App.css';
import Home from './Home';
import { Route,Routes} from 'react-router-dom';
import Food from './Categories/Food'
import Medication from './Categories/Medication';
import Contact from './Contact';
import Profile from './Profile';
import About from './About';
import SignUp from './register';
import Login from './Login';
import Footer from './Footer'
import ServiceProviderRegistration from './ServiceProviderRegistration';
import SearchService from './SearchService';
import Education from './Categories/Education'
import Rent from './Categories/Rent';
// import { authApp } from './firebase';
// import {useNavigate} from "react-router-dom";
import DislistService from "./dislistService";
import Admin from './admin';
// import Info from './info';
// import viewUSer from './viewuser';
import Navbar from './Navbar'


function App() {
 
  return (
    <div className="App">
    
     <Navbar/>
     <Routes>
    {/* <Route path='/info/:id/:pin' element={<Info/>}/>
    <Route path='/ViewUser/:id/:service' element={<viewUSer/>}/> */}
    <Route path='/' element={<Home/>}/>
    <Route path='/education' element={<Education/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/dislist' element={<DislistService/>}/>
    <Route path='/rent' element={<Rent/>}/>
    <Route path='/find' element={<SearchService/>}/>
    <Route path='/food' element={<Food/>}/>
    <Route path='/medication' element={<Medication/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/profile' element={<Profile/>}/> 
    <Route path='/login' element={<Login/>}/> 
    <Route path='/signup' element={<SignUp/>}/> 
    <Route path='/setprofile' element={<Profile/>}/> 
    <Route path='/school' element={<SearchService/>}/> 
    <Route path='/coaching' element={<SearchService/>}/> 
    <Route path='/tution' element={<SearchService/>}/> 
    <Route path='/library' element={<SearchService/>}/> 
    <Route path='/stationary_shop' element={<SearchService/>}/> 
    <Route path='/hostel' element={<SearchService/>}/> 
    <Route path='/doctors' element={<SearchService/>}/> 
    <Route path='/clinics' element={<SearchService/>}/> 
    <Route path='/medical_shop' element={<SearchService/>}/> 
    <Route path='/hospital' element={<SearchService/>}/> 
    <Route path='/animals_medical_shop' element={<SearchService/>}/> 
    <Route path='/blood_bank' element={<SearchService/>}/> 
    <Route path='/nurses' element={<SearchService/>}/> 
    <Route path='/animals_doctor' element={<SearchService/>}/> 
    <Route path='/labour' element={<SearchService/>}/> 
    <Route path='/electricien' element={<SearchService/>}/> 
    <Route path='/plumber' element={<SearchService/>}/> 
    <Route path='/beauty' element={<SearchService/>}/> 
    <Route path='/pg' element={<SearchService/>}/> 
    <Route path='/room' element={<SearchService/>}/> 
    <Route path='/car' element={<SearchService/>}/> 
    <Route path='/bike' element={<SearchService/>}/> 
    <Route path='/shop' element={<SearchService/>}/> 
    <Route path='/restraunts' element={<SearchService/>}/> 
    <Route path='/kitchen_shop' element={<SearchService/>}/> 
    <Route path='/hotels' element={<SearchService/>}/> 
    <Route path='/catering' element={<SearchService/>}/> 
    <Route path='/sweet_shop' element={<SearchService/>}/> 
    <Route path='/maid' element={<SearchService/>}/> 
    <Route path='/chef' element={<SearchService/>}/> 
    <Route path='/grocery_shop' element={<SearchService/>}/> 
   
    <Route path='/college' element={<SearchService/>}/> 
    <Route path='/training_center' element={<SearchService/>}/> 
    {/* <Route path='/educations/categories' element={<Educationcategories/>}/> */}
    <Route path='/serviceproviderregistration' element={<ServiceProviderRegistration/>}/> 
     </Routes>
    <Footer/>
    </div>
  );
}

export default App;
