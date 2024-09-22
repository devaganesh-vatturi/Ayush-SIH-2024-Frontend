import React, { useState, useEffect } from 'react';
import '../styles/StartupApplication.css';
import axios from 'axios';

function StartupSingup({ email }) {

  

  const [startupdata, setStartupdata] = useState({
    Email:"", PANno:"", GSTno:"",
    websiteAddress:"",certificateNo:"",CompanyDOI:"",
    IssuuingAuthority:"",IE_code:"",IE_DOI:"" });

  const [originalData, setOriginalData] = useState({});
  const [editing, setEditing] = useState(false);
  const [userExists, setUserExists] = useState(false); // Flag to track if the user data exists

  // Captcha handling
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const [panError, setPanError] = useState('');
  const [gstError, setGstError] = useState('');
  const [pincodeError, setPincodeError] = useState('');

  useEffect(() => { // load user data
    generateCaptcha();
    // Fetch user data on mount if it exists
    const fetchUserData = async () => {
      try {
        const Email_ID = email;
        console.log("here i ammmmm, ", Email_ID);
        const response = await axios.post('http://localhost:5002/api/startup-dash-retrieval', { Email_ID });
        if (response.data.success) {
              setStartupdata(response.data.data); // Fill the form with user data
              setOriginalData(response.data.data); // Store original data to compare later
              setUserExists(true); // Set flag to indicate that user data exists
                setEditing(true);
          }
          if(response.data.success === false){
            setUserExists(false);
            setEditing(false);
            alert("you havent submitted the form yet");
          }
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  // Form change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStartupdata({ ...startupdata, [name]: value });
  };

  // Captcha and validation methods
  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const captchaLength = 6;
    let randomCaptcha = '';
    for (let i = 0; i < captchaLength; i++) {
      randomCaptcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptcha(randomCaptcha);
  };

  const handleCaptchaChange = (event) => setUserCaptcha(event.target.value);
  const validateCaptcha = () => userCaptcha === captcha ? true : setCaptchaError('Invalid captcha');
  const validatePAN = (PANno) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(PANno);
  const validateGST = (GSTno) => /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(GSTno);
  const validatePincode = (pincode) => /^[0-9]{6}$/.test(pincode);

  // Edit mode toggle
  // const editit = () => setEditing(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;

    if (!validatePAN(startupdata.PANno)) {
      setPanError('Invalid PAN format.');
      isValid = false;
    } else {
      setPanError('');
    }

    if (!validateGST(startupdata.GSTno)) {
      setGstError('Invalid GST format.');
      isValid = false;
    } else {
      setGstError('');
    }

    if (!validatePincode(startupdata.pincode)) {
      setPincodeError('Invalid pin code.');
      isValid = false;
    } else {
      setPincodeError('');
    }
    if (!validateCaptcha()) {
      isValid = false;
    }

    if (isValid) {
      try {
        if (userExists) {
              // Update method: Send only changed fields using PATCH
                const updatedFields = {};
                Object.keys(startupdata).forEach((key) => {
                  if (startupdata[key] !== originalData[key]) {
                    updatedFields[key] = startupdata[key];
                  }
                });
                if (Object.keys(updatedFields).length > 0) {
                  const response = await axios.patch('/api/user/update', updatedFields);
                  if (response.data.success) {
                      alert('Data updated successfully!');
                    }
                } else {
                  alert('No changes detected.');
                }

        } else {
          // Create method: POST for new user data
          const response = await axios.post('http://localhost:5002/api/startup-dash-post-fillapplication', startupdata);
          if (response.data.success) {
            alert('Successfully Signed Up');
          } else {
            alert('Error in submission. Please try again.');
          }
        }
      } catch (error) {
        console.log('Error in form submission:', error);
      }
    } else {
      console.log('Form is not valid');
    }
  };

    return (
        <>
             <div className="container-application">
            <div className="header">
                <p style={{color : 'rgb(6, 6, 87)', fontSize:'2rem'}}>Applicantion Form</p>
            </div>
           
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label style={{fontSize:'1.5rem'}}>Details of Manufacturer</label>
                </div>
                
               
                <div className="form-group">
                    <label>(a) PAN No. of the company/Firm</label>
                    <input 
                        type="text" 
                        placeholder="PAN No. of the company/Firm"  
                        name="PANno"
                        readOnly={!editing}
                        value={startupdata.PANno}
                        onChange={handleChange} 
                    />
                    {panError && <p className="error">{panError}</p>}
                </div>
                <div className="form-group">
                <label>(b) GST No. of the company/Firm</label>
                    <input 
                        type="text" 
                        placeholder="GST No. of the company/Firm" 
                        name="GSTno"
                        readOnly={!editing}
                        value={startupdata.GSTno}
                        onChange={handleChange} 
                    />
                    {gstError && <p className="error">{gstError}</p>}
                </div>
                <div className="form-group">
                    <label>(c) Website Address</label>
                    <input type="text"name="websiteAddress"readOnly={!editing} value={startupdata.websiteAddress} onChange={handleChange} placeholder="Website Address.." />
                </div>
                <div className="form-group">
                    <label style={{fontSize:'1.5rem'}}>2. Company Certification Details (If Any)</label><br />
                    <label> Company Incorporation Certification Details</label>
                </div>
                <div className="form-group">
                    <label>(a) Certificate No.</label>
                    <input type="text"readOnly={!editing} name="certificateNo" value={startupdata.certificateNo} onChange={handleChange} placeholder="Enter company certificate no"/>
                </div>
                <div className="form-group">
                    <label>(b) Date of Issue</label>
                    <input type="date"readOnly={!editing} name="CompanyDOI" value={startupdata.CompanyDOI} onChange={handleChange}/>
                </div>
                <div  className="form-group">
                    <label>(c) Issuing Authority</label>
                    <input type="text" readOnly={!editing}name="IssuuingAuthority" value={startupdata.IssuuingAuthority}onChange={handleChange} placeholder="Enter name of issuing authority" />
                    </div>
                <div className="form-group">
                    <label style={{fontSize:'1.5rem'}} >3. Details of IE Code by DGFT</label>
                </div>
                <div className="form-group">
                    <label>(a) IE Code</label>
                    <input type="text" readOnly={!editing} name="IE_code" value={startupdata.IE_code} onChange={handleChange} placeholder='Enter IE Code' />
                </div>
                <div className="form-group">
                    <label>(b) IE code Date of Issue</label>
                    <input type="date" name="issuedate" readOnly={!editing} value={startupdata.issuedate} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label style={{fontSize:'1.5rem'}} >4. Purpose of Applying*</label>
                    <label > {userExists ? "EXISTING" : "NEW"} {"   (automatic detection)"} </label>
                </div>
                <div>
                    <label id="ll32">Captcha</label><br/>
    <span id="captcha">{captcha}</span><br/>
    <button id="captcha-regenerate" onClick={generateCaptcha}>Regenerate</button>
    <input id="li20" type="text" placeholder="Enter captcha" value={userCaptcha} onChange={handleCaptchaChange} />
    {captchaError && <p className="error">{captchaError}</p>}
                      
                      
                </div>
                <br/>
                <button className={`edit-button ${editing ? "editable" : ""}`} 
            disabled={!startupdata.companyname}
            >Edit</button><br/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}

export default StartupSingup;