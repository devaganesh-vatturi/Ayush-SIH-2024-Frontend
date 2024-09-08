import React from 'react'
import Filterstartup from './Filterstartup';
import '../styles/Doctordash.css'
import Header from '../Header';
import { useLocation } from 'react-router-dom';
export default function Doctordash() {
  const params= useLocation();
  let values=new URLSearchParams(params.search);
  let email= values.get('email');
  return (
    <>
    <Header/>
    <p className='doctor-dash-head'>Doctor Dashboard</p>
    <Filterstartup/>
    </>
  )
}
