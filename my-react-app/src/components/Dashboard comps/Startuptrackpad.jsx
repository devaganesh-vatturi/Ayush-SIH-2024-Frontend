import React, { useState } from 'react';
import '../styles/Startuptrackpad.css';

const Startuptrackpad = ({email}) => {
  const [currentStage, setCurrentStage] = useState(-4); // Change this value to update the progress

  const stages = [
    { title: 'Stage 1: Application Submitted', description: 'Your application has been submitted.' },
    { title: 'Stage 2: Application Accepted', description: 'Your application has been Accepted' },
    { title: 'Stage 3: DrugInspector Assigned', description: 'Near by Drug inspector is assigned' },
    { title: 'Stage 4: DrugInspector Accepted', description: 'Drug inspector verified and Accepted' },
    { title: 'Stage 5: License Approved', description: 'Your License has been issued.' },
  ];  

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
