import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../styles/Startuptrackpad.css';

const Startuptrackpad = ({email}) => {
  const [currentStage, setCurrentStage] = useState(-2); // Change this value to update the progress
  const [statusInfo, setStatusInfo] = useState({
    Email_ID: "",
    FilledApplication: false,
    FilledAplicationAccepted: false,
    isDrugInspectorAssigned: false,
    isDrugInspectorAccepted: false,
    isLicensed: false,
  });
  
  const stages = [
    { title: 'Stage 1: Application Submitted', description: 'Your application has been submitted.' },
    { title: 'Stage 2: Application Accepted', description: 'Your application has been Accepted' },
    { title: 'Stage 3: DrugInspector Assigned', description: 'Nearby Drug inspector is assigned' },
    { title: 'Stage 4: DrugInspector Accepted', description: 'Drug inspector verified and Accepted' },
    { title: 'Stage 5: License Approved', description: 'Your License has been issued.' },
  ];
  
  useEffect(() => {
    const fetch_status = async () => {
      try {
        const Startup_Email = email;
        const response = await axios.post('http://localhost:5002/api/status-trackpad', { Startup_Email });
        const isSuccess = response.data.success;
        if (isSuccess) {
          const recieved = response.data.statusInfo;
          console.log("Received data: ", recieved[0]);
          setStatusInfo(recieved[0]); // Asynchronous update
        }
      } catch (error) {
        if (error.response) {
          console.error("Error Response Data:", error.response.data);
          console.error("Error Response Status:", error.response.status);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Request error:", error.message);
        }
      }
    };
  
    fetch_status();
  }, []); // Run only once when the component mounts
  
  // Use another useEffect to handle updating the currentStage based on statusInfo
  useEffect(() => {
    const update_currentStage = () => {
      if (!statusInfo) return;
  
      if (statusInfo.FilledAplicationAccepted) {
        if (statusInfo.isDrugInspectorAssigned) {
          if (statusInfo.isDrugInspectorAccepted) {
            if (statusInfo.isLicensed) {
              setCurrentStage(5);
            } else {
              setCurrentStage(4);
            }
          } else {
            setCurrentStage(3);
          }
        } else {
          setCurrentStage(2);
        }
      } else if (statusInfo.FilledApplication) {
        setCurrentStage(1);
      } else {
        setCurrentStage(0);
      }
    };
  
    // Update the stage whenever statusInfo changes
    update_currentStage();
  }, [statusInfo]); // Re-run whenever statusInfo changes
  
  // Log the current stage whenever it changes
  useEffect(() => {
    console.log("Current Stage is: ", currentStage);
  }, [currentStage]); // Log currentStage whenever it changes
  

  const isCancelled = currentStage < 0;

  return (
  <>
  <div className='trck-container'>
    <div className="trackpad">
      {stages.map((stage, index) => {
        // If currentStage is negative, stages should be red except for stages greater than |currentStage|
        const isRed = isCancelled && index >= Math.abs(currentStage);
        const isGreen = index < Math.abs(currentStage);
        
        return (
          <div
            key={index}
            className={`stage ${isGreen ? 'active' : ''} ${isRed ? 'cancelled' : ''}`} 
          >
            <h4 className='status-title'>{stage.title}</h4>
            <p>{isRed ? 'Cancelled at this stage' : stage.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</>

  );
};

export default Startuptrackpad;
