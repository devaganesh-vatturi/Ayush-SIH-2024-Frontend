import React, { useEffect , useState} from 'react'
import '../styles/Authoritynotification.css';
export default function Authoritynotification({email}) {
  
  const [notifications, setnotifications] = useState([]);
  const items=["notifications","the notifications"];
  useEffect(()=>{

    const fetchit= async(e)=>
    {
      try{
         const response= await axios.post('',email);
         setnotifications(response.data.notifications);
      }
      catch(error)
      {

      }
    }
    fetchit();
  },[]);
  return (
    <div className='drug-noti-head'>
<center>
    <div>
      <ul>
        {items.map((item,index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
       </div>
       </center>
    </div>
  )
}
