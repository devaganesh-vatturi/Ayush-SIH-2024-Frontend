import React,{useState, useEffect} from 'react';

import PrintList from './PrintList.jsx';

import '../styles/Filterfarmer.css';

export default function Filterfarmer({farmerMatter}) {
  const [farmerDataList, setfarmerDataList] = useState([]); // initializing with empty list (expecting no farmers in the district)

  useEffect(()=>{  
    const fetchit =()=>{
      console.log("farmer data : ",farmerMatter.farmerData);
      setfarmerDataList(farmerMatter.farmerData);
    }
    fetchit();
  },[]);
const render=()=>{
  if(farmerMatter.farmersNOTFound || farmerDataList.length===0){
    return<>
    <h1 className='no-f-datafound'> There are no Ayush farmers in your District</h1>
    </>
  }else{
    return <>
    <h1>The Ayush farmers in your district</h1>
    {/* {farmerData.map((obj,index) => (
        
        <PrintList  key={index} name1={obj.name} Email1={obj.Email} phone1={obj.phone} district1= {obj.district} ></PrintList>
             ))} */}
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
