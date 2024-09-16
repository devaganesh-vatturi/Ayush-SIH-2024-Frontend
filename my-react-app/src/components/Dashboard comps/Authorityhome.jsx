import React from 'react'
import PrintauthorList from './PrintauthorList';
export default function Authorityhome() {
    const faqData = [
        {Email:"raj@gmail.com"},
        {Email:"giri@gmail.com" },
        {Email:"venu@gmail.com"},
        {Email:"venkat@gmail.com"},
      ];
  return (
  <>  <h1>StartupInformation</h1>
       <p>Pending</p>
        < PrintauthorList faqData={faqData} type={'pending'}/>
        <p>Assigned</p>
        < PrintauthorList faqData={faqData}type={'assigned'} />
        <p>Accepted</p>
        < PrintauthorList faqData={faqData}type={'accepted'} />
        <p>Licensed</p>
        < PrintauthorList faqData={faqData} type={'licensed'}/>
        <p>Rejected</p>
        < PrintauthorList faqData={faqData} type={'rejected'}/>
          
  </>
  )
}
