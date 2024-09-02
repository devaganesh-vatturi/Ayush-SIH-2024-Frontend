import './Farmersignup.css';
import React,{ useState } from 'react';
import axios from 'axios';
function Farmersignup() {
  const [farmerdata, setFarmerdata] = useState({name:"",district:"",state:"",cropname:"",
    phno:"",email:"",password:""});
    const [passerror, setPasserror] = useState("");
    let invalid=false;
    const handleChange=(e)=>
    {
      e.preventDefault();
      const{name,value}=e.target;
      setFarmerdata({...farmerdata,[name]:value});

    }
    const handleSubmit= async(e)=>
    {
        e.preventDefault();
        if(farmerdata.password.length<6)
        {
          invalid=true;
          
        }
        invalid ? setPasserror("Password must contain 6 letters") : setPasserror("");
        try{
        const response= await axios.post("",farmerdata);
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
    return (
      <form onSubmit={handleSubmit}>
        <div className="container">
      <label className="label">Enter the name:</label><br />
      <input type="text" name="name" onChange={handleChange} className="input" /><br />
      <label className="label">Enter district name:</label><br />
      <input type="text" name="district" onChange={handleChange}  className="input" /><br />
      <label className="label">Enter the state:</label><br />
      <input type="text" name="state" onChange={handleChange}  className="input" /><br />
      <label className="label">Enter crop name:</label><br />
      <input type="text" name="cropname" onChange={handleChange} className="input" /><br />
      <label className="label">Enter phone number:</label><br />
      <input type="number" name="phno" onChange={handleChange} className="input" />
      <label className="label">Enter the emailid:</label>
      <input type="text"name="email" onChange={handleChange} className="input" /><br />
      <label className="label">Enter the password:</label>
      <input type="text" name="password" onChange={handleChange} className="input" /><br />
    {passerror&&<p>{passerror}</p>}
    </div>
    <button className="button">submit</button>
    </form>

    );
}

export default Farmersignup;
