import './styles/Doctorsignup.css';
import React,{useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './Header';

function Doctorsignup() {
  const [doctordata, setDoctordata] = useState(
    {name:"",Email_ID:"",password:"",district:"",state:"",phone_number:"" });
    const [passerror, setPasserror] = useState("");
    const [pinerror,setPinerror]=useState("");
    const [phnerror,setPhnerror]=useState("");
    let passvalid=false;
    let phnvalid=false;
    let pinvalid=false;
  useEffect( 
    ()=>{
      fetchDistricts();
      return ()=>{
        // empty the district list
        setDistrictsList([]);
         }
    },[doctordata.state]);
  const handelChange=(e)=>{
     e.preventDefault();
     const {name,value}=e.target;
     setDoctordata({...doctordata,[name]:value});
     if(name==="password"&& value.length<8)
      {
       setPasserror("Password must contain 8 letters");
      }
      else if(name==="password"&&value.length>=8){
       setPasserror("");
      }
      if (name === "phone_number" && value.length !== 10) {
        setPhnerror("Phone number must contain exactly 10 digits");
    } else if (name === "phone_number" && value.length === 10) {
        setPhnerror("");
    }
  }

  const onSubmit =async(e)=>{
     e.preventDefault();
     if(doctordata.password.length<8)
     {
        passvalid=true;
     }
     passvalid ? setPasserror("Password must contain 8 letters") : setPasserror("");
      if(doctordata.phone_number.length!=10)
        {
           phnvalid=true;
        }
   
        phnvalid ? setPhnerror("Phone number  must contain 10 Numbers") : setPhnerror("");
     try{
     const response = await axios.post("http://localhost:5002/api/doctor-reg",doctordata);
     if(response.data.success)
     {
      alert("Successfully Signed Up");
     }
     else{
      alert("please try again!");
     }
     }
     catch(error)
     {
      console.log("error is",error);
     }


  }

  const indian_states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh (UT)", "Chhattisgarh", "Dadra and Nagar Haveli (UT)", "Daman and Diu (UT)", "Delhi (NCT)", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep (UT)", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry (UT)", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"];
    const [districtsList, setDistrictsList] = useState([]);
    
  const fetchDistricts = async () => {
      try {
          const response = await fetch('http://localhost:5002/api/districts', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ stateName : doctordata.state}),
          });

          if (!response.ok) {
              throw new Error('State not found or other error');
          }

          const data = await response.json();
          setDistrictsList(data.districts);
      } catch (error) {
          console.error('Error fetching districts:', error);
      }
  };
 
    return ( 
      <>
      <Header/>
      <form onSubmit={onSubmit} className="doctor-sign-container">
         <p className="doctor-sign-para">Doctorsignup Details</p>
      <label className="doctor-sign-label">Enter the name:</label>
      <input type="text" className="doctor-sign-input" name="name" onChange={handelChange}/><br />
      
      <label className=" doctor-sign-label">Enter the state:</label> 
      <select value={doctordata.state} name="state" onChange={handelChange} className=" doctor-sign-input">
                <option value="" disabled>Select a state</option>
                {indian_states.map((state, index) => (
                    <option key={index} value={state}>
                        {state}
                    </option>
                ))}
            </select>
      <br />
      <label className="doctor-sign-label">Enter district name:</label> 
      <select value={doctordata.district} name="district" onChange={handelChange} className=" doctor-sign-input">
                <option value="" disabled>Select a district</option>
                {districtsList.map((district, index) => (
                    <option key={index} value={district}>
                        {district}
                    </option>
                ))}
            </select>
     <br />
      
      <label className="doctor-sign-label" >Enter the phone number:</label>
      <input type="text" className=" doctor-sign-input" name="phone_number" onChange={handelChange}/><br />
      {phnerror&&<p>{phnerror}</p>}
      <label className="doctor-sign-label">Upload a PDF file:</label>
      <input type="file" accept=".pdf" className=" doctor-sign-input" onChange={handelChange}/><br/>
      <label className="doctor-sign-label">Enter the emailid:</label>
      <input type="email" className="doctor-sign-input" name="Email_ID" onChange={handelChange}/><br />
      <label className="doctor-sign-label">Enter the password:</label>
      <input type="password" className="doctor-sign-input" name="password" onChange={handelChange}/><br />
      {passerror&&<p>{passerror}</p>}
      <button className="doctor-sign-button">submit</button>
    </form>
    </>
    );
}

export default Doctorsignup;
