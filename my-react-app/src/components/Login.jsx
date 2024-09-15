import './styles/Login.css';
import React,{ useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
function Login(){
  const [logit, setLogit] = useState({Email_ID:"  ",password:""});
  const [invalidtext, setInvalidtext] = useState("");
  const [token, settoken] = useState("");
  const params=useLocation();
  let value=new URLSearchParams(params.search);
  let usertype=value.get('value');
  let invalid=false;
  const intake = usertype === "farmer" ? "phone number" : "email";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogit({ ...logit, [name]: value });
    if(name==="password"&& value.length<8)
      {
        setInvalidtext("Password must contain 8 letters");
      }
      else if(name==="password"&&value.length>=8){
        setInvalidtext("");
      }
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
      settoken(response.data.token);
      if(usertype==="startup")
      {
        const encodedEmail = btoa(logit.Email_ID); // Encode the email using Base64
        window.location.href = `/sdash?email=${encodedEmail}?token=${token}`;
      }
      else if(usertype==="drugInspector")
      {
        const encodedEmail = btoa(logit.Email_ID); // Encode the email using Base64
        window.location.href=`/ddash?email=${encodedEmail}?token=${token}`;
      }
      else if(usertype==="doctor")
      {
        const encodedEmail = btoa(logit.Email_ID); // Encode the email using Base64
        window.location.href=`/docdash?email=${encodedEmail}?token=${token}`;
        
        }
      else if(usertype==="farmer")
          {
           
            window.location.href=`/fardash?phno=${logit.phone_number}?token=${token}`;
          }
    } 
  } 
  catch (error) {
   
    console.error('Error occurred:', error);
    alert("invalid login details , please try again");
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