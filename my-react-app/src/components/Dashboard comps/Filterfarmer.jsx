import PrintList from './PrintList.jsx';
import React, {useEffect } from 'react'
import axios from 'axios';
import '../styles/Filterfarmer.css';
export default function Filterfarmer({email}) {
  const [farmerData, setfarmerData] = useState();

  useEffect(()=>{  
    const fetchit = async(e)=>{
      try{
        const response= await axios.post('http://localhost:5002/api/startupf-dashboard'.email);
        if(response.data.success)
        {
          console.log(response.data);
          setfarmerData(response.data.items);
        }
      }
      catch(error)
     {

     }
    }
    fetchit();
  },[]);

  return (
    <> 
    <p className='farmer-info'>Farmers Info</p>
    {farmerData.map((obj,index) => (
        
        <PrintList  key={index} name1={obj.name} Email1={obj.Email} phone1={obj.phone} district1= {obj.district} ></PrintList>
             ))}
    </>
  );
}
