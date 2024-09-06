import React, { useState } from 'react';
import './styles/NewStartUpDashboard.css';

const NewStartUpDashboard = () => {
    const tabs = ['Status Tracking', 'Fill Aplication', 'Ayush 3.0'];
  const [activeTab, setActiveTab] = useState('Status Tracking');
  const ayushtabs = ['Near by farmer', 'Near by doctor', 'Drug inspector communication'];
  const [activeAyushTab, setActiveAyushTab] = useState('Near by farmer');

  const renderContentAyush30 = () => {
    switch (activeAyushTab) {
        case 'Near by farmer':
          return <div>Near by farmer jsx component here</div>;
          case 'Near by doctor':
              return <div>Near by doctor jsx component here</div>;
          case 'Drug inspector communication':
                  return <div>Drug inspector communication jsx component here</div>;
        default:
          return null;
      }
}
  const ayush3point0=()=>{
  return(<>
        <div className="ayushtabs">
        {ayushtabs.map((tab) => (
        <div 
            key={tab}
            className={`tab ${activeAyushTab === tab ? 'active' : ''}`}
            onClick={() => setActiveAyushTab(tab)}
        >
            {tab}
        </div>
        ))}
        <div className="indicator" style={{ left: `${ayushtabs.indexOf(activeAyushTab) * 33}%` }} /> {/* this "33" needs to be changed in according to number of elements for the orange line*/}
        </div>
        <div className="content">
        {renderContentAyush30()}
        </div>
        </>
    )};

  const renderContent = () => {
    switch (activeTab) {
      case 'Status Tracking':
        return <div>Status Tracking here</div>;
        case 'Fill Aplication':
            return <div>Fill Aplication here</div>;
        case 'Ayush 3.0':
                return <div className='ayush30tab'>{ayush3point0()}</div>;
      default:
        return null;
    }
  };
  

  return (
    <div className='total'>
      <div className="tabs">
        {tabs.map((tab) => (
          <div 
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
        <div className="indicator" style={{ left: `${tabs.indexOf(activeTab) * 33}%` }} /> {/* this "33" needs to be changed in according to number of elements for the orange line*/}
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default NewStartUpDashboard;