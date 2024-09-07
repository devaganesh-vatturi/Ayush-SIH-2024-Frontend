import React, { useState } from 'react';
import '../styles/Startuptrackpad.css';

const Startuptrackpad = () => {
  const [currentStage, setCurrentStage] = useState(5); // Change this value to update the progress

  const stages = [
    { title: 'Stage 1: Application Submitted', description: 'Your application has been submitted.' },
    { title: 'Stage 2: Under Review', description: 'Your application is being reviewed.' },
    { title: 'Stage 3: Documentation', description: 'Submit the necessary documents.' },
    { title: 'Stage 4: Approval', description: 'Your application is approved.' },
    { title: 'Stage 5: Certification Issued', description: 'Your certification has been issued.' },
  ];  

  const isCancelled = currentStage === -1;

  return (
    <>
  
    <div className="trackpad">
      {stages.map((stage, index) => (
        <div
          key={index}
          className={`stage ${index < currentStage ? 'active' : ''} ${isCancelled && index === stages.length - 1 ? 'cancelled' : ''}`}
        >
          <h4>{stage.title}</h4>
          <p>{isCancelled && index === stages.length - 1 ? 'Your certification has been canceled.' : stage.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Startuptrackpad;
