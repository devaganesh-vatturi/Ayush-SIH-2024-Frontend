import './styles/Startupsignup.css';
import React,{useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './Header';

function Startupsignup() {
  const [doctordata, setDoctordata] = useState(
    {name:"",Email_ID:"",password:"",district:"",state:"",phone_number:"" });
  const [passerror, setPasserror] = useState("");
  let invalid=false;
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
  }

  const onSubmit =async(e)=>{
     e.preventDefault();
     if(doctordata.password.length<6)
     {
        invalid=true;
     }
     invalid ? setPasserror("Password must contain 6 letters") : setPasserror("");
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
      <form onSubmit={onSubmit}>
        <div className="container">
      <label className="label">Enter the name:</label>
      <input type="text" className="input" name="name" onChange={handelChange}/><br />
      
      <label className="label">Enter the state:</label><br />
      <select value={doctordata.state} name="state" onChange={handelChange} className="input">
                <option value="" disabled>Select a state</option>
                {indian_states.map((state, index) => (
                    <option key={index} value={state}>
                        {state}
                    </option>
                ))}
            </select>
      <br />
      <label className="label">Enter district name:</label><br />
      <select value={doctordata.district} name="district" onChange={handelChange} className="input">
                <option value="" disabled>Select a district</option>
                {districtsList.map((district, index) => (
                    <option key={index} value={district}>
                        {district}
                    </option>
                ))}
            </select>
     <br />
      
      <label className="label" >Enter the phone number:</label>
      <input type="text" className="input" name="phone_number" onChange={handelChange}/><br />
      <label className="label">Enter the emailid:</label>
      <input type="email" className="input" name="Email_ID" onChange={handelChange}/><br />
      <label className="label">Enter the password:</label>
      <input type="text" className="input" name="password" onChange={handelChange}/><br />
      {passerror&&<p>{passerror}</p>}
      <button className="button">submit</button>
    </div>
   
    </form>
    </>
    );
}

export default Startupsignup;
