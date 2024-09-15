import './styles/Farmersignup.css';
import React,{ useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './Header';
function Druginsignup(){
  const indian_states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh (UT)", "Chhattisgarh", "Dadra and Nagar Haveli (UT)", "Daman and Diu (UT)", "Delhi (NCT)", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep (UT)", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry (UT)", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"];
  const [districtsList, setDistrictsList] = useState([]);
  const [drugindata, setDrugindata] = useState(
    {name:"",email:"",password:"",district:"",state:""});
    const [passerror, setPasserror] = useState("");
    let passvalid=false;
    
    useEffect( 
      ()=>{
       fetchDistricts();
        return ()=>{
          // empty the district list
          setDistrictsList([]);
           }
           
      },[drugindata.state]);
    const handleChange=(e)=>
    {
      e.preventDefault();
      const{name,value}=e.target;
      setDrugindata({...drugindata,[name]:value});
      if(name==="password"&& value.length<6)
        {
         setPasserror("Password must contain 6 letters");
        }
        else if(name==="password"&&value.length>=6){
         setPasserror("");
        }

    }
    const handleSubmit= async(e)=>
    {
        e.preventDefault();
        if(drugindata.password.length<6)
        {
          passvalid=true;
        }
        passvalid ? setPasserror("Password must contain 6 letters") : setPasserror("");
        try{
        const response= await axios.post("",drugindata);
        if(response.data.success)
        {
          alert("Successfully Signed in!");
        }
        else{
          alert("Please Try again")
        }
      }
      catch (error) {
        // Log detailed error information
        if (error.response) {
          // The request was made and the server responded with a status code outside of the range of 2xx
          console.error("Response error:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request
          console.error("Error setting up request:", error.message);
        }
    }
  }
   
   
    const fetchDistricts = async () => {
      try {
          const response = await fetch('http://localhost:5002/api/districts', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ stateName : drugindata.state}),
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
        <div className="container">
      <label className="label">Enter the name:</label><br />
      <input type="text" name="name" onChange={handleChange} className="input" /><br />
      <label className="label">Enter the state:</label><br />
      <select value={farmerdata.state} name="state" onChange={handleChange} className="input">
                <option value="" disabled>Select a state</option>
                {indian_states.map((state, index) => (
                    <option key={index} value={state}>
                        {state}
                    </option>
                ))}
            </select>
      <br />
      <label className="label">Enter district name:</label><br />
      <select value={farmerdata.district} name="district" onChange={handleChange} className="input">
                <option value="" disabled>Select a district</option>
                {districtsList.map((district, index) => (
                    <option key={index} value={district}>
                        {district}
                    </option>
                ))}
            </select>
     <br />
      <label className="label">Enter crop name:</label><br />
      <input type="text" name="crop_name" onChange={handleChange} className="input" /><br />
      <label className="label">Enter phone number:</label><br />
      <input type="number" name="email" onChange={handleChange} className="input" />
      <label className="label">Enter the password:</label>
      <input type="password" name="password" onChange={handleChange} className="input" /><br />
    {passerror&&<p>{passerror}</p>}
    <button className="button">submit</button>
    </div>
   
    </form>
    </>
    );
}

export default Druginsignup;