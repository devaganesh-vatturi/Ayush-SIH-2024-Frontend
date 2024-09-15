import React,{useEffect} from 'react'
import Filterstartup from './Filterstartup';
import '../styles/Drugindash.css';
import Header from '../Header';
import { useLocation } from 'react-router-dom';
export default function Drugindash() {
  const params= useLocation();
  let values=new URLSearchParams(params.search);
  let email= values.get('email');
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
      //    if(tokenvalidation==false){
//     return(<p>Error 404</p>)
//    }
  return (
    <>
    <Header/>
    <p className='drug-dash-head'>DrugInspector Dashboard</p>
    <Filterstartup name={'drug inspector'} email={email}/>
    </>
  )
}
