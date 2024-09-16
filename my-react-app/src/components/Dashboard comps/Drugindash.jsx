import React,{useEffect,useState} from 'react';
import PrintdrugList from './PrintdrugList';
import '../styles/Drugindash.css';
import Header from '../Header';
import { useLocation } from 'react-router-dom';
export default function Drugindash() {
  const params= useLocation();
  let values=new URLSearchParams(params.search);
  let decemail= values.get('email');
  let email= atob(decemail);
  let token= values.get('token');
  const [tokenvalidation, settokenvalidation] = useState();
  const Data = [
    {Email:"raj@gmail.com"},{Email:"giri@gmail.com" },{Email:"venu@gmail.com"},{Email:"venkat@gmail.com"},
  ];
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
  return (
    <>
    <Header/>
    <p className='drug-dash-head'>DrugInspector Dashboard</p>
    <PrintdrugList startupmails={Data}/>
    </>
  )
}
