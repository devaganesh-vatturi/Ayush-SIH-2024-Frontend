import React, { useEffect, useState } from 'react'
import PrintauthorList from './PrintauthorList';
import axios from 'axios';

import '../styles/Authorityhomee.css';

export default function Authorityhome({email}) {


    const [pendingStartupEmails, setpendingStartupEmails ] = useState([]);
    const  [ assignedStartupEmails, setassignedStartupEmails  ] = useState([]);
    const [acceptedStartupEmails, setacceptedStartupEmails ] = useState([]);
    const [licensedStartupEmails,setlicensedStartupEmails ] = useState([]);
    const [rejectedStartupEmails,setrejectedStartupEmails ] = useState([]);

    useEffect(() => { // pending
      const fetchpendingEmails = async () => {
        try {
          const response = await axios.get('http://localhost:5002/api/isDrugInspectorAssigned-false');
          if(response.data.success && response.data.pendingList.length > 0) {
            setpendingStartupEmails(response.data.pendingList);
          } else {
            setpendingStartupEmails([]); // Set to empty if no emails found
          }
        } catch (error) {
          console.error('Error fetching emails:', error);
          setpendingStartupEmails([]);
        }
      };
  
      fetchpendingEmails();
    }, []); 

    useEffect(() => { // assigned
      const fetchassignedEmails = async () => {
        try {
          const response = await axios.get('http://localhost:5002/api/isDrugInspectorAssigned-ture');
          if(response.data.success && response.data.assignedList.length > 0) {
            setassignedStartupEmails(response.data.assignedList);
          } else {
            setassignedStartupEmails([]); // Set to empty if no emails found
          }
        } catch (error) {
          console.error('Error fetching emails:', error);
          setassignedStartupEmails([]);
        } 
      };
  
      fetchassignedEmails();
    }, []); 

    useEffect(() => { // accepted
      const fetchacceptedEmails = async () => {
        try {
          const response = await axios.get('http://localhost:5002/api/isDrugInspectorAccepted-true');
          if(response.data.success && response.data.acceptedList.length > 0) {
            setacceptedStartupEmails(response.data.acceptedList);
          } else {
            setacceptedStartupEmails([]); // Set to empty if no emails found
          }
        } catch (error) {
          console.error('Error fetching emails:', error);
          setacceptedStartupEmails([]);
        } 
      };
  
      fetchacceptedEmails();
    }, []); 

    useEffect(() => { // rejected
      const fetchrejectedEmails = async () => {
        try {
          const response = await axios.get('http://localhost:5002/api/isDrugInspectorAcce---------------------------ted-true');
          if(response.data.success && response.data.rejectedList.length > 0) {
            setrejectedStartupEmails(response.data.rejectedList);
          } else {
            setrejectedStartupEmails([]); // Set to empty if no emails found
          }
        } catch (error) {
          console.error('Error fetching emails:', error);
          setrejectedStartupEmails([]);
        } 
      };
  
      fetchrejectedEmails();
    }, []); 

    useEffect(() => { // licensed
      const fetchlicensedEmails = async () => {
        try {
          const response = await axios.get('http://localhost:5002/api/isDrugInspectorAcce---------------------------ted-true');
          if(response.data.success && response.data.licensedList.length > 0) {
            setlicensedStartupEmails(response.data.licensedList);
          } else {
            setlicensedStartupEmails([]); // Set to empty if no emails found
          }
        } catch (error) {
          console.error('Error fetching emails:', error);
          setlicensedStartupEmails([]);
        } 
      };
  
      fetchlicensedEmails();
    }, []); 

  return (
  <>  
  <h1>StartupInformation</h1>
       <p className='auth-hm'>Pending</p>
        <div>
     { pendingStartupEmails.length === 0 ? (
        <h1>No emails found</h1>
      ):(
        < PrintauthorList StartupEmails={pendingStartupEmails} 
        type={'pending'}/>
      )
      }
    </div>
        <p className='auth-hm'>Assigned</p>
        <div>
     { assignedStartupEmails.length === 0 ? (
        <h1>No emails found</h1>
      ):(
        < PrintauthorList StartupEmails={assignedStartupEmails} 
        type={'assigned'}/>
      )
      }
    </div>
        <p className='auth-hm'>Accepted</p>
        <div>
     { acceptedStartupEmails.length === 0 ? (
        <h1>No emails found</h1>
      ):(
        < PrintauthorList StartupEmails={acceptedStartupEmails} 
        type={'accepted'}/>
      )
      }
    </div>
        <p className='auth-hm'>Licensed</p>

        <div>
     { licensedStartupEmails.length === 0 ? (
        <h1>No emails found</h1>
      ):(
        < PrintauthorList StartupEmails={licensedStartupEmails} 
        type={'licensed'}/>
      )
      }
    </div>
        <p className='auth-hm'>Rejected</p>
        <div>
     { rejectedStartupEmails.length === 0 ? (
        <h1>No emails found</h1>
      ):(
        < PrintauthorList StartupEmails={rejectedStartupEmails} 
        type={'rejected'}/>
      )
      }
    </div>
  </>
  )
}
