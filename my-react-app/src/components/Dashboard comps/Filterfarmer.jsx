import PrintList from './PrintList.jsx';
import React, {useEffect } from 'react'
import axios from 'axios';
import '../styles/Filterfarmer.css';
export default function Filterfarmer({farmerMatter}) {
  const [farmerData, setfarmerData] = useState();

  useEffect(()=>{  
    const fetchit =()=>{
      setfarmerData(farmerMatter.farmerData);
    }
    fetchit();
  },[]);
const render=()=>{
  if(farmerMatter.farmersNOTFound){
    return<>
    <h1 className='no-f-datafound'> There are no Ayush farmers in your District</h1>
    </>
  }else{
    return <>
    {farmerData.map((obj,index) => (
        
        <PrintList  key={index} name1={obj.name} Email1={obj.Email} phone1={obj.phone} district1= {obj.district} ></PrintList>
             ))}
    </>
  }
}
  return (
    <> 
    <p className='farmer-info'>Farmers Info</p>
    {render()}
    </>
  );
}
