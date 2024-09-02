import './Doctorsignup.css';
import React,{useState} from 'react';
import axios from 'axios';
function Doctorsignup() {
  const [doctordata, setDoctordata] = useState({name:"",district:"",state:"",phno:"",email:"",
    password:""
  });
  const [passerror, setPasserror] = useState("");
  let invalid=false;
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
     const response = await axios.post("",doctordata);
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
    return ( 
      <form onSubmit={onSubmit}>
        <div className="container">
      <label className="label">Enter the name:</label>
      <input type="text" className="input" name="name" onChange={handelChange}/><br />
      <label className="label">Enter district:</label>
      <input type="text" className="input" name="district" onChange={handelChange}/><br />
      <label className="label" >Enter state:</label>
      <input type="text" className="input" name="state" onChange={handelChange}/><br />
      <label className="label" >Enter the phone number:</label>
      <input type="text" className="input" name="phno" onChange={handelChange}/><br />
      <label className="label">Upload a PDF file:</label>
      <input type="file" accept=".pdf" className="input" onChange={handelChange}/><br/>
      <label className="label">Enter the emailid:</label>
      <input type="text" className="input" name="email" onChange={handelChange}/><br />
      <label className="label">Enter the password:</label>
      <input type="text" className="input" name="password" onChange={handelChange}/><br />
      {passerror&&<p>{passerror}</p>}
    </div>
    <button className="button">submit</button>
    </form>

    );
}

export default Doctorsignup;
