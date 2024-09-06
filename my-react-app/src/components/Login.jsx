import './Login.css';
import React,{ useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
function Login(){
  const [logit, setLogit] = useState({username:"  ",password:""});
  const [invalidtext, setInvalidtext] = useState("");
  const params=useLocation();
  let value=new URLSearchParams(params.search);
  let usertype=value.get('value');
  let invalid=false;
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
  try{
    const response = await axios.post('', logit);
    if (response.data.success) {
      alert("Logged in successfully!");
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
        <p>Hey {usertype} </p>
        <div className="container">
        <label className="label">Enter the email</label>
        <input type="text" className="input" name="username" required onChange={handleChange}/><br />
        <label className="login-label">Enter the password</label>
        <input type="password" className="input" name="password" onChange={handleChange}/><br />
       { invalidtext && <p>{invalidtext}</p>}
        <button className="button">Submit</button>
       
      </div>
      </form>
      </>
    );
}
export default Login;