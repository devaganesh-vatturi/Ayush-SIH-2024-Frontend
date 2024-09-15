import './styles/Startupsignup.css';

import React,{useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './Header';

function Startupsignup() {
  const [startUpdata, setStartUpdata] = useState(
    {Email_ID:"",password:"",companyName : "",address : "",city:"",pinCode:null,
      state:"",district:"",phone_number:null });
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
    },[startUpdata.state]);
  
    const handelChange=(e)=>{
     e.preventDefault();
     const {name,value}=e.target;
     setStartUpdata({...startUpdata,[name]:value});
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
      if(name==="pinCode"&& value.length<6)
      {
        setPinerror("pin number must contains 6 number ");
      }
      else if(name==="pinCode"&& value.length>=6)
        {
          setPinerror("");
        }
      

  }

  const onSubmit =async(e)=>{
     e.preventDefault();
     if(startUpdata.password.length<8)
     {
        passvalid=true;
     }

     passvalid ? setPasserror("Password must contain 8 letters") : setPasserror("");
     if(startUpdata.pinCode.length<=6)
      {
         pinvalid=true;
      }
 
      pinvalid ? setPinerror("Pincode  must contain 6 letters") : setPinerror("");
      if(startUpdata.phone_number.length!=10)
        {
           phnvalid=true;
        }
   
        phnvalid ? setPhnerror("Phone number  must contain 10 Numbers") : setPhnerror("");
     try{
     const response = await axios.post("http://localhost:5002/api/startup-reg",startUpdata);
     if(response.data.success)
     {
      alert("Successfully Signed Up");
      window.location.href = `/login?value=${startupqr}`;
     }
     else{
      alert("Invalid Details.Please try again!");
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
              body: JSON.stringify({ stateName : startUpdata.state}),
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
        <div className="start-up-container">
          <p className="start-up-para">Startupsignup Details</p>
      <label className="start-up-label">Name of the Company/Firm :</label>
      <input type="text" className="start-up-input" name="companyName" onChange={handelChange}/><br />
      
      <label className=" start-up-label">State :</label> 
      <select value={startUpdata.state} name="state" onChange={handelChange} className=" start-up-input">
                <option value="" disabled>Select a state</option>
                {indian_states.map((state, index) => (
                    <option key={index} value={state}>
                        {state}
                    </option>
                ))}
            </select>
      <br />
      <label className=" start-up-label">District :</label> 
      <select value={startUpdata.district} name="district" onChange={handelChange} className="start-up-input">
                <option value="" disabled>Select a district</option>
                {districtsList.map((district, index) => (
                    <option key={index} value={district}>
                        {district}
                    </option>
                ))}
            </select>
     <br />
     <label className=" start-up-label">Address :</label>
     <input type="text" className=" start-up-input" name="address" onChange={handelChange}/><br />
     <label className=" start-up-label">City :</label>
      <input type="text" className=" start-up-input" name="city" onChange={handelChange}/><br />
      <label className=" start-up-label">PinCode :</label>
      <input type="number" className=" start-up-input" name="pinCode" onChange={handelChange}/><br />
      {pinerror&&<p>{pinerror}</p>}
      <label className=" start-up-label" >Contact number:</label>
      <input type="number" className=" start-up-input" name="phone_number" onChange={handelChange}/><br />
      {phnerror&&<p>{phnerror}</p>}
      <label className=" start-up-label">Email Address :</label>
      <input type="email" className=" start-up-input" name="Email_ID" onChange={handelChange}/><br />
      <label className=" start-up-label">Password:</label>
      <input type="password" className=" start-up-input" name="password" onChange={handelChange}/><br />
      {passerror&&<p>{passerror}</p>}
      <button className="start-up-button">submit</button>
    </div>
   
    </form>
    </>
    );
}

export default Startupsignup;
