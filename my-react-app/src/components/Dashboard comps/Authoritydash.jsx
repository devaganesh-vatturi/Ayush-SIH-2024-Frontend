import React,{useState,useEffect} from 'react';
import Authorityhome from './Authorityhome';
import Authoritynotification from './Authoritynotfication';
import Header from '../Header';
import { useLocation } from 'react-router-dom';
import '../styles/Authoritydash.css';
export default function Druginsdash() {
     const [drugtab, Setdrugtab] = useState(1);
     const params= useLocation();
     const [tokenvalidation, settokenvalidation] = useState();
   let values=new URLSearchParams(params.search);
   let decemail= values.get('email');
   let email= atob(decemail);
   let token= values.get('token');
   useEffect(()=>{
    const fecthit = async(e)=>{
        try{
        const response= await axios.post('',email,token);
        if(response.data.success)
        {

        }
        else{
            settokenvalidation(false);
        }
        }
        catch(error)
        {

        }
        fecthit();

    }
   },[]);
      if(tokenvalidation==false){
    return(<p>Error 404</p>)
   }
    function gohome()
    {
        Setdrugtab(1);
    }
    function gonotification()
    {
        Setdrugtab(2);
    }
  return (
    <>
    <Header/>
    <p className='drug-head'>Authority Desk!</p>
    <div className='drug-main'>
        <p className="drug-nav" onClick={gohome}>Home</p>
        <p className="drug-nav" onClick={gonotification}>Notifications</p>
    </div>
   {
     drugtab === 1 ? (<Authorityhome email={email}/>) : drugtab === 2 ? (<Authoritynotification email={email}/>) : (null)
   }
    </>
  )
}
