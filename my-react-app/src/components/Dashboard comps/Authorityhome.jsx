import React, { useEffect, useState } from 'react'
import PrintauthorList from './PrintauthorList';

export default function Authorityhome({email}) {

    const [pendingStartupData, setpendingStartupData ] = useState([]);
    const  [ assignedStartupData, setassignedStartupData  ] = useState([]);
    const [acceptedStartupData, setacceptedStartupData ] = useState([]);
    const [licensedStartupData,setlicensedStartupData ] = useState([]);
    const [rejectedStartupData,setrejectedStartupData ] = useState([]);


      useEffect(()=>{   // retrieve those datas
         const fetchit= async(e)=>{
           try
           {
            const pendingresponse = await axios.get('http://localhost:5002/api/isDrugInspectorAssigned-false'); // get isDrugInspectorAssigned or not
                  const pendingretrieved  = response.data.success;       
                  if (pendingretrieved) {
                  console.log("pending startups exists ");
                  setpendingStartupData(response.data.pendingList);
                  }
                const assignresponse= await axios.post('',email);
                const acceptresponse= await axios.post('',email);
                const licenseresponse= await axios.post('',email);
                const rejectresponse= await axios.post('',email);
           }
           catch(error)
           {

           }
         }
         fetchit();
      },)
  return (
  <>  <h1>StartupInformation</h1>
       <p>Pending</p>
        < PrintauthorList StartupData={pendingStartupData} type={'pending'}/>
        <p>Assigned</p>
        < PrintauthorList StartupData={assignedStartupData}type={'assigned'} />
        <p>Accepted</p>
        < PrintauthorList StartupData={acceptedStartupData}type={'accepted'} />
        <p>Licensed</p>
        < PrintauthorList StartupData={licensedStartupData} type={'licensed'}/>
        <p>Rejected</p>
        < PrintauthorList StartupData={rejectedStartupData} type={'rejected'}/>
          
  </>
  )
}
