import './styles/Authoritysignup.css';
import React,{ useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './Header';
function  Authoritysignup() {
  const [Licensedata, setLicensedata] = useState(
    {name:"",email:"" ,password:"",district:"",state:"",pdf:""});
    const [passerror, setPasserror] = useState("");
    let invalid=false;
    useEffect( 
      ()=>{
        fetchDistricts();
        return ()=>{
          // empty the district list
          setDistrictsList([]);
           }
      },[Licensedata.state]);
    const handleChange=(e)=>
    {
      e.preventDefault();
      const{name,value}=e.target;
      setLicensedata({...Licensedata,[name]:value});

      if(name==="password"&& value.length<8)
        {
         setPasserror("Password must contain 8 letters");
        }
        else if(name==="password"&&value.length>=8){
         setPasserror("");
        }

    }
    const handleSubmit= async(e)=>
    {
        e.preventDefault();
        if(Licensedata.password.length<8)
        {
          invalid=true;
          
        }
        invalid ? setPasserror("Password must contain 8 letters") : setPasserror("");
        try{
        const response= await axios.post("http://localhost:5002/api",Licensedata);
        if(response.data.success)
        {
          alert("Successfully Signed in!");
        }
        else{
          alert("Please Try again")
        }
      }
      catch(error)
      {
        console.log("the error is",error);
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
              body: JSON.stringify({ stateName : Licensedata.state}),
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
      <form onSubmit={handleSubmit}>
        <div className="authority-sign-container">
          <p className=" authority-sign-para">Licensing Authority Registration Form</p>
      <label className=" authority-sign-label">Enter the name:</label> 
      <input type="text" name="name" onChange={handleChange} className=" authority-sign-input" /><br />
      <label className="  authority-sign-label">Enter the Email:</label> 
      <input type="email" name="email" onChange={handleChange} className=" authority-sign-input" /><br />
      <label className=" authority-sign-label">Enter the password:</label> 
      <input type="password" name="password" onChange={handleChange} className=" authority-sign-input" /><br />
      {passerror&&<p className="authority-sign-error">{passerror}</p>}
      <label className=" authority-sign-label">Enter the state:</label> 
      <select value={Licensedata.state} name="state" onChange={handleChange} className=" authority-sign-input">
                <option value="" disabled>Select a state</option>
                {indian_states.map((state, index) => (
                    <option key={index} value={state}>
                        {state}
                    </option>
                ))}
            </select>
      <br />
      <label className="Drug-sign-label">Enter district name:</label> 
      <select value={Licensedata.district} name="district" onChange={handleChange} className=" authority-sign-input">
                <option value="" disabled>Select a district</option>
                {districtsList.map((district, index) => (
                    <option key={index} value={district}>
                        {district}
                    </option>
                ))}
            </select>
     <br />
     <label className=" authority-sign-label">Add pdf:</label> 
     <input type="file" name="file" onChange={handleChange} className=" authority-sign-input" /><br />
       
    <button className=" authority-sign-button">submit</button>
    </div>
   
    </form>
    </>
    );
}

export default  Authoritysignup;
