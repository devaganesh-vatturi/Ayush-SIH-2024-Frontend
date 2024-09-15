import './styles/Login.css';
import React,{ useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
function Login(){
  const [logit, setLogit] = useState({Email_ID:"  ",password:""});
  const [invalidtext, setInvalidtext] = useState("");
  const params=useLocation();
  let value=new URLSearchParams(params.search);
  let usertype=value.get('value');
  let invalid=false;
  const intake = usertype === "farmer" ? "phone number" : "email";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogit({ ...logit, [name]: value });
    
};

const handelSubmit =async(e)=>{
  e.preventDefault();
  if(logit.password.length<6)
  {
      invalid=true;
  }
  invalid ? setInvalidtext("password must contain 6 letters") : setInvalidtext("");
  if(usertype ==="farmer")
    setLogit({phone_number:logit.Email_ID, password:logit.password}); // changing the req.body backend recievers feild name in-according to the farmer
  try{
    const response = await axios.post(`http://localhost:5002/api/${usertype}-login`, logit);
    if (response.data.success) {
      alert("Logged in successfully!");
      if(usertype==="startup"){
        const encodedEmail = btoa(logit.Email_ID); // Encode the email using Base64
        window.location.href = `/sdash?email=${encodedEmail}`;
      }
      else if(usertype==="drugInspector"){
        window.location.href=`/ddash?email=${logit.Email_ID}`;
      }
      else if(usertype==="doctor"){

        window.location.href=`/docdash?email=${logit.Email_ID}`;
        }
      else if(usertype==="farmer"){
            window.location.href=`/fardash?email=${logit.phone_number}`;
          }
    } 
  } 
  catch (error) {
    if(usertype!=="drugInspector")
    {
    console.error('Error occurred:', error);
    alert("invalid login details , please try again");
    }
  }
 
}
 
  return(
      <>
      <Header/>
      <form onSubmit={handelSubmit}>
        <p id='hey-tag'>Hey {usertype} </p>
        <div className="Login-container">
        <p className="login-headin">{usertype.replace(/^./, str => str.toUpperCase())} Login</p>
        <label className="Login-label">Enter the {intake} </label>
        <input type="text" className="Login-input" name="Email_ID" required onChange={handleChange}/><br />
        <label className="Login-label">Enter the password</label>
        <input type="password" className="Login-input" name="password" onChange={handleChange}/><br />
       { invalidtext && <p>{invalidtext}</p>}
        <button className="Login-button">Submit</button>
       
      </div>
      </form>
      </>
    );
}
export default Login;