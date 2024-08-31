import React, { useState } from 'react';
import './StartupSingup.css';

function StartupSingup() {
  const [pan, setPan] = useState('');
  const [gst, setGst] = useState('');
  const [pincode, setPincode] = useState('');
  const [panError, setPanError] = useState('');
  const [gstError, setGstError] = useState('');
  const [pincodeError, setPincodeError] = useState('');

  const validatePAN = (pan) => {
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panPattern.test(pan);
  };

  const validateGST = (gst) => {
    const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/;
    return gstPattern.test(gst);
  };

  const validatePincode = (pincode) => {
    const pin = /^[0-9]{6}$/;
    return pin.test(pincode);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!validatePAN(pan)) {
      setPanError('Invalid PAN format.');
      isValid = false;
    } else {
      setPanError('');

        }

        // Validate GST
        if (!validateGST(gst)) {
            setGstError('Invalid GST format.');
            isValid = false;
          } else {
            setGstError('');
          }
      
          if (!validatePincode(pincode)) {
            setPincodeError('Invalid pin code.');
            isValid = false;
          } else {
            setPincodeError('');
          }
      
          if (isValid) {
            console.log('Form is valid and ready for submission');
          } else {
            console.log('Form is not valid');
          }
        };
      

    return (
        <>
             <div className="container">
            <div className="header">
                <p>Applicant Registration Form</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <button type="button">State</button>
                    <button type="button">ANDHRA PRADESH</button>
                </div>
                <div>
                    <label>1. Details of Manufacturer</label>
                    <label>(All fields Marked* are Mandatory)</label>
                </div>
                <div>
                    <label>(i) Name of the Company/Firm*</label>
                    <input type="text" placeholder="Name of the company/Firm.." />
                </div>
                <div>
                    <label>(ii) Address of Corporate Office</label>
                    <label>Address Line 1</label>
                    <input type="text" placeholder="Address Line 1.." />
                    <label>Address Line 2</label>
                    <input type="text" placeholder="Address Line 2.." />
                    <label>Address Line 3</label>
                    <input type="text" placeholder="Address Line 3.." />
                    <label>Village/Town/City</label>
                    <input type="text" />
                    <label>Pin Code</label>
                    <input 
                        type="text" 
                        placeholder="Pin code of place" 
                        value={pincode}  
                        onChange={(e) => setPincode(e.target.value)} 
                    />
 {pincodeError && <p className="error">{pincodeError}</p>}
                    <label>State</label>
                    <select>
                        <option>-select-</option>
                        <option value="ANDAMAN AND NICOBAR ISLAND">ANDAMAN AND NICOBAR ISLAND</option>
                        <option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
                    </select>
                    <label>District</label>
                    <select>
                        <option>- please-select-</option>
                        <option value="NICOBARS">NICOBARS</option>
                        <option value="we change">we change</option>
                    </select>
                </div>
                <div>
                    <label>(iii) Address of Premises</label>
                    <label>Address Line 1</label>
                    <input type="text" placeholder="Address Line 1.." />
                    <label>Address Line 2</label>
                    <input type="text" placeholder="Address Line 2.." />
                    <label>Address Line 3</label>
                    <input type="text" placeholder="Address Line 3.." />
                    <label>Village/Town/City</label>
                    <input type="text" />
                    <label>Pin Code</label>
                    <input 
                        type="text"  
                        placeholder="Pin code of place" 
                        value={pincode}  
                        onChange={(e) => setPincode(e.target.value)} 
                    />
{pincodeError && <p className="error">{pincodeError}</p>}
                    <label>State</label>
                    <select>
                        <option>-select-</option>
                        <option value="ANDAMAN AND NICOBAR ISLAND">ANDAMAN AND NICOBAR ISLAND</option>
                        <option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
                    </select>
                    <label>District</label>
                    <select>
                        <option>- please-select-</option>
                        <option value="NICOBARS">NICOBARS</option>
                        <option value="we change">we change</option>
                    </select>
                </div>
                <div>
                    <label className="note">Note: The verification mail and all communications will be sent to the Primary Authorized Signatory</label>
                </div>
                <div>
                    <label>(v) PAN No. of the company/Firm</label>
                    <input 
                        type="text" 
                        placeholder="PAN No. of the company/Firm"  
                        value={pan} 
                        onChange={(e) => setPan(e.target.value)} 
                    />
                    {panError && <p className="error">{panError}</p>}
                </div>
                <div>
                <label>(vi) GST No. of the company/Firm</label>
                    <input 
                        type="text" 
                        placeholder="GST No. of the company/Firm" 
                        value={gst} 
                        onChange={(e) => setGst(e.target.value)} 
                    />
                    {gstError && <p className="error">{gstError}</p>}
                </div>
                <div>
                    <label>(vii) Website Address</label>
                    <input type="text" placeholder="Website Address.." />
                </div>
                <div>
                    <label>2. Company Certification Details (If Any)</label><br />
                    <label>(i) Company Incorporation Certification Details</label>
                </div>
                <div>
                    <label>(a) Certificate No.</label>
                    <input type="text" />
                </div>
                <div>
                    <label>(b) Date of Issue</label>
                    <input type="date" />
                </div>
                <div>
                    <label>(c) Issuing Authority</label>
                    <input type="text" />
                    </div>
                <div>
                    <label>(ii) Details of IE Code by DGFT</label>
                </div>
                <div>
                    <label>(a) IE Code</label>
                    <input type="text" />
                </div>
                <div>
                    <label>(b) Date of Issue</label>
                    <input type="date" />
                </div>
                <div>
                    <label>3. Purpose of Applying*</label>
                    <select>
                        <option>please select..</option>
                        <option value="NEW">NEW</option>
                        <option value="EXISTING">EXISTING</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="Enter Captcha" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

        </>
    );
}

export default StartupSingup;
