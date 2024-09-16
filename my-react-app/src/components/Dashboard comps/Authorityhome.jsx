import React, { useEffect } from 'react'
import PrintauthorList from './PrintauthorList';
export default function Authorityhome({email}) {
    const pendingfaqData = [
        {Email:"raj@gmail.com"},{Email:"giri@gmail.com" },{Email:"venu@gmail.com"},{Email:"venkat@gmail.com"},
      ];
      const assignedfaqData = [
        {Email:"raj@gmail.com"},{Email:"giri@gmail.com" },{Email:"venu@gmail.com"},{Email:"venkat@gmail.com"},
      ];
      const acceptedfaqData = [
        {Email:"raj@gmail.com"},{Email:"giri@gmail.com" },{Email:"venu@gmail.com"},{Email:"venkat@gmail.com"},
      ];
      const licensedfaqData = [
        {Email:"raj@gmail.com"},{Email:"giri@gmail.com" },{Email:"venu@gmail.com"},{Email:"venkat@gmail.com"},
      ];
      const rejectedfaqData = [
        {Email:"raj@gmail.com"},{Email:"giri@gmail.com" },{Email:"venu@gmail.com"},{Email:"venkat@gmail.com"},
      ];
      useEffect(()=>{
         const fetchit= async(e)=>{
           try
           {
                const pendingresponse= await axios.post('',email);
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
        < PrintauthorList faqData={pendingfaqData} type={'pending'}/>
        <p>Assigned</p>
        < PrintauthorList faqData={assignedfaqData}type={'assigned'} />
        <p>Accepted</p>
        < PrintauthorList faqData={acceptedfaqData}type={'accepted'} />
        <p>Licensed</p>
        < PrintauthorList faqData={licensedfaqData} type={'licensed'}/>
        <p>Rejected</p>
        < PrintauthorList faqData={rejectedfaqData} type={'rejected'}/>
          
  </>
  )
}
