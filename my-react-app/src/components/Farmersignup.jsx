import './styles/Farmersignup.css';
import React,{ useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './Header';
function Farmersignup(){
  const indian_states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh (UT)", "Chhattisgarh", "Dadra and Nagar Haveli (UT)", "Daman and Diu (UT)", "Delhi (NCT)", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep (UT)", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry (UT)", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"];
  const [districtsList, setDistrictsList] = useState([]);
  const [farmerdata, setFarmerdata] = useState(
    {name:"",phone_number:"",password:"",district:"",state:"",crop_name:"",language:"en"});
    const [passerror, setPasserror] = useState("");
    const [phnerror,setPhnerror]=useState("");
    let passvalid=false;
    let phnvalid=false;
    
    useEffect( 
      ()=>{
       fetchDistricts();
        return ()=>{
          // empty the district list
          setDistrictsList([]);
           }
            
      },[farmerdata.state]);
    const handleChange=(e)=>
    {
      e.preventDefault();
      const{name,value}=e.target;
      setFarmerdata({...farmerdata,[name]:value});
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
    const handleSubmit= async(e)=>
    {
        e.preventDefault();
        if(farmerdata.password.length<8)
        {
          passvalid=true;
        }
        passvalid ? setPasserror("Password must contain 8 letters") : setPasserror("");
          if(farmerdata.phone_number.length!=10)
            {
               phnvalid=true;
            }
       
            phnvalid ? setPhnerror("Phone number  must contain 10 Numbers") : setPhnerror("");
        try{
        const response= await axios.post("http://localhost:5002/api/farmer-reg",farmerdata);
        if(response.data.success)
        {
          alert("Successfully Signed in!");
        }
        else{
          alert("Please Try again")
        }
      }
      catch (error) {
       console.log(error);
    }
  }
   
   
    const fetchDistricts = async () => {
      try {
          const response = await fetch('http://localhost:5002/api/districts', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ stateName : farmerdata.state}),
          });

          if (!response.ok) {
              throw new Error('State not found or other error');
          }

          const data = await response.json();
          setDistrictsList(data.districts);
      } catch (error) {
          console.error('Error fetching districts:', error);
      }
    }
  

    return (
      <>
      <Header/>
      <form onSubmit={handleSubmit}>
        <div className="farmer-sign-container">
          <p className="farmer-sign-para">Farmersignup Details</p>
      <label className="farmer-sign-label">Enter the name:</label><br />
      <input type="text" name="name" onChange={handleChange} className="farmer-sign-input" /><br />
      <label className="farmer-sign-label">Enter the state:</label> 
      <select value={farmerdata.state} name="state" onChange={handleChange} className=" farmer-sign-input">
                <option value="" disabled>Select a state</option>
                {indian_states.map((state, index) => (
                    <option key={index} value={state}>
                        {state}
                    </option>
                ))}
            </select>
      <br />
      <label className=" farmer-sign-label">Enter district name:</label> 
      <select value={farmerdata.district} name="district" onChange={handleChange} className=" farmer-sign-input">
                <option value="" disabled>Select a district</option>
                {districtsList.map((district, index) => (
                    <option key={index} value={district}>
                        {district}
                    </option>
                ))}
            </select>
     <br />
      <label className=" farmer-sign-label">Enter crop name:</label> 
      <input type="text" name="crop_name" onChange={handleChange} className=" farmer-sign-input" /><br />
      <label className=" farmer-sign-label">Enter phone number:</label> 
      <input type="number" name="phone_number" onChange={handleChange} className=" farmer-sign-input" />
      {phnerror&&<p>{phnerror}</p>}
    
      <label className=" farmer-sign-label">Enter the password:</label>
      <input type="password" name="password" onChange={handleChange} className=" farmer-sign-input" /><br />
    {passerror&&<p>{passerror}</p>}
    <button className="farmer-sign-button">submit</button>
    </div>
   
    </form>
    </>
    );
}

export default Farmersignup;
