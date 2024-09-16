import './styles/Druginsignup.css';
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
        if (name === "phone_number" && value.length !== 10) {
          setPhnerror("Phone number must contain exactly 10 digits");
      } else if (name === "phone_number" && value.length === 10) {
          setPhnerror("");
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
        <div className="Drug-sign-container">
          <p className="Drug-sign-para">DrugInspector-signup Details</p>
      <label className="Drug-sign-label">Enter the name:</label> 
      <input type="text" name="name" onChange={handleChange} className="Drug-sign-input" /><br />
      <label className=" Drug-sign-label">Enter Email:</label> 
      <input type="email" name="email" onChange={handleChange} className=" Drug-sign-input" />
      <label className=" Drug-sign-label">Enter the password:</label>
      <input type="password" name="password" onChange={handleChange} className=" Drug-sign-input" /><br />
    {passerror&&<p className="Drug-sign-error">{passerror}</p>}
      <label className=" Drug-sign-label">Enter the state:</label> 
      <select value={drugindata.state} name="state" onChange={handleChange} className=" Drug-sign-input">
                <option value="" disabled>Select a state</option>
                {indian_states.map((state, index) => (
                    <option key={index} value={state}>
                        {state}
                    </option>
                ))}
            </select>
      <br />
      <label className=" Drug-sign-label">Enter district name:</label> 
      <select value={drugindata.district} name="district" onChange={handleChange} className=" Drug-sign-input">
                <option value="" disabled>Select a district</option>
                {districtsList.map((district, index) => (
                    <option key={index} value={district}>
                        {district}
                    </option>
                ))}
            </select>
     <br />
<<<<<<< HEAD
      <label className="label">Enter Email:</label><br />
      <input type="email" name="email" onChange={handleChange} className="input" />
      <label className="label">Enter the password:</label>
      <input type="password" name="password" onChange={handleChange} className="input" /><br />
    {passerror&&<p>{passerror}</p>}
    <button className="button">submit</button>
=======
       
       
    <button className="Drug-sign-button">submit</button>
>>>>>>> 48fd3cd85be3a9a356531eac04808b1060fac926
    </div>
   
    </form>
    </>
    );
}

export default Druginsignup;