import React, { useEffect, useState } from 'react'
import PrintauthorList from './PrintauthorList';
import axios from 'axios';

import '../styles/Authorityhomee.css';

export default function Authorityhome({email}) {


    // const [pendingStartupData, setpendingStartupData ] = useState([]);
    // const  [ assignedStartupData, setassignedStartupData  ] = useState([]);
    // const [acceptedStartupData, setacceptedStartupData ] = useState([]);
    // const [licensedStartupData,setlicensedStartupData ] = useState([]);
    // const [rejectedStartupData,setrejectedStartupData ] = useState([]);
    const pendingfaqData = [
      {Email:"raj@gmail.com"},{Email:"giri@gmail.com" }
    ];
    const assignedfaqData = [
    {Email:"venu@gmail.com"},{Email:"venkat@gmail.com"},
    ];
    const acceptedfaqData = [
      {Email:"raj@gmail.com"},{Email:"giri@gmail.com" }
    ];
    const licensedfaqData = [
     {Email:"giri@gmail.com" },{Email:"venu@gmail.com"},
    ];
    const rejectedfaqData = [
      {Email:"giri@gmail.com" },{Email:"venu@gmail.com"},{Email:"venkat@gmail.com"},
    ];

    useEffect(()=>{   // retrieve those datas
         const fetchit= async(e)=>{
           try{
                const pendingresponse = await axios.get('http://localhost:5002/api/isDrugInspectorAssigned-false'); // get isDrugInspectorAssigned or not
                    const pendingretrieved  = pendingresponse.data.success;       
                    if (pendingretrieved) {
                    console.log("pending startups exists ");
                    setpendingStartupData(pendingresponse.data.pendingList);
                    }

                const assignedresponse = await axios.get('http://localhost:5002/api/isDrugInspectorAssigned-true'); // get isDrugInspectorAssigned or not
                    const assignretrieved  = assignedresponse.data.success;       
                    if (assignretrieved) {
                    console.log("pending startups exists ");
                    setassignedStartupData(assignedresponse.data.assignedList);
                    }    
                
                const acceptedresponse= await axios.get('http://localhost:5002/api/isDrugInspectorAccepted-true'); // get isDrugInspectorAccepted or not
                    const acceptedretrieved  = acceptedresponse.data.success;       
                    if (acceptedretrieved) {
                    console.log("pending startups exists ");
                    setacceptedStartupData(acceptedresponse.data.acceptedList);
                    }    
  
                const rejectedresponse= await axios.get('http://localhost:5002/api/isDrugInspectorAccepted-false'); // get isDrugInspectorAccepted or not
                const rejectedretrieved  = rejectedresponse.data.success;       
                if (rejectedretrieved) {
                console.log("pending startups exists ");
                setrejectedStartupData(rejectedresponse.data.rejectedList);
                }    

                const licensedresponse= await axios.get('http://localhost:5002/api/isLicensed-true'); // get isDrugInspectorAccepted or not
                const licensedretrieved  = licensedresponse.data.success;       
                if (licensedretrieved) {
                console.log("pending startups exists ");
                setlicensedStartupData(licensedresponse.data.licensedList);
                }    
           
       }catch (resp) {
            if (resp.response && resp.response.data) { // Logging the actual error message from the response
              alert("Message: " + resp.response.data.message);
            } else { // Fallback if the response doesn't contain the expected data
              alert("An error occurred at backend. Server might be down.");
            }
            console.log("Error is", resp); // Log the full error object for debugging
          }

    }
  fetchit();
  },[]);


  return (
  <>  
  <h1>StartupInformation</h1>
       <p className='auth-hm'>Pending</p>
        < PrintauthorList StartupData={pendingfaqData} type={'pending'}/>
        <p className='auth-hm'>Assigned</p>
        < PrintauthorList StartupData={assignedfaqData}type={'assigned'} />
        <p className='auth-hm'>Accepted</p>
        < PrintauthorList StartupData={acceptedfaqData}type={'accepted'} />
        <p className='auth-hm'>Licensed</p>
        < PrintauthorList StartupData={licensedfaqData} type={'licensed'}/>
        <p className='auth-hm'>Rejected</p>
        < PrintauthorList StartupData={rejectedfaqData} type={'rejected'}/>
          
  </>
  )
}
