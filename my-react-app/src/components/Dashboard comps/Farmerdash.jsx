import React from 'react'
import Filterstartup from './Filterstartup';
import '../styles/Farmerdash.css';
import Header from '../Header';
import { useLocation } from 'react-router-dom';
export default function Doctordash() {
  const params= useLocation();
  let values=new URLSearchParams(params.search);
  let email= values.get('email');
  return (
    <>
    <Header/>
    <p className='farmer-dash-head'>Farmer Dashboard</p>
    <Filterstartup name={farmer} email={email}/>
    </>
  )
}
