import React, { useState, useEffect } from 'react';
import '../styles/StartupApplication.css';
import axios from 'axios';
function StartupSingup({email}) {
  //declaration of basic functions
  const [startupdata, setStartupdata] = useState({
    companyname:"new",address:"new",city:"new",pincode:"789",state:"andhrapradesh",district:"east godavari",pan:"533212",gst:"bdrbf",
     website:"bdher",cerno:"fbdfx",cdate:"dbdf",issueauthority:"fxt",iecode:"ssfnr",issuedate:"grbf",purpose:"vrehe"
  });
  console.log("the mail",email);//email from props
  function handleChange(e)
  {
    e.preventDefault();
    const {name,value}=e.target;
    setStartupdata({...startupdata,[name]:value});
    
  }
  useEffect(()=>{
     const fetchit = async(e)=>{
      try{
        const response = await axios.post('',email);
      }
      catch(error)
      {
        console.log(error);
      }
      if(response.data.success)
      {
        setFormData(() => ({
          ...response.data.data,  // Spread the incoming data
        }));

      }
      
     }
     fetchit();
  },[])
  //declaration of features
  let isValid = true;
  const [panError, setPanError] = useState('');
  const [gstError, setGstError] = useState('');
  const [pincodeError, setPincodeError] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    generateCaptcha();
  }, []);
  
  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const captchaLength = 6;
    let randomCaptcha = '';
    for (let i = 0; i < captchaLength; i++) {
      randomCaptcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptcha(randomCaptcha);
  };
  
  const handleCaptchaChange = (event) => {
    setUserCaptcha(event.target.value);
  };
  function editit()
  {
    setEditing(true);
  }
  const validateCaptcha = () => {
    if (userCaptcha !== captcha) {
      setCaptchaError('Invalid captcha. Please try again.');
      return false;
    } else {
      setCaptchaError('');
      return true;
    }
  };
  
  const validatePAN = (pan) => {
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panPattern.test(pan);
  };

  const validateGST = (gst) => {
    const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/;
    return gstPattern.test(gst);
  };

  const validatePincode=(pincode)=>{
    const pin = /^[0-9]{6}$/;
    return pin.test(pincode);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (!validatePAN(startupdata.pan)) {
      setPanError('Invalid PAN format.');
      isValid = false;
    } else {
      setPanError('');

        }

        // Validate GST
        if (!validateGST(startupdata.gst)) {
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
            console.log('Form is valid and ready for submission');
            try{
            let response= await axios.post("",startupdata);
            if(response.data.success)
              alert("Successfully Signed Up")
            else
            alert("please try again");
            }
            catch(error){
              console.log("the error is",error);
            }
          } else {
            console.log('Form is not valid');
          }
         
        };
      

    return (
        <>
             <div className="container-application">
            <div className="header">
                <p>Applicant Registration Form</p>
            </div>
            <button className={`edit-button ${editing ? "editable" : ""}`} 
            onClick={editit}
            disabled={!startupdata.companyname}
            >Edit</button>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>1. Details of Manufacturer</label>
                    <label>(All fields Marked* are Mandatory)</label>
                </div>
                
               
                <div className="form-group">
                    <label>(v) PAN No. of the company/Firm</label>
                    <input 
                        type="text" 
                        placeholder="PAN No. of the company/Firm"  
                        name="pan"
                        readOnly={!editing}
                        value={startupdata.pan}
                        onChange={handleChange} 
                    />
                    {panError && <p className="error">{panError}</p>}
                </div>
                <div className="form-group">
                <label>(vi) GST No. of the company/Firm</label>
                    <input 
                        type="text" 
                        placeholder="GST No. of the company/Firm" 
                        name="gst"
                        readOnly={!editing}
                        value={startupdata.gst}
                        onChange={handleChange} 
                    />
                    {gstError && <p className="error">{gstError}</p>}
                </div>
                <div className="form-group">
                    <label>(vii) Website Address</label>
                    <input type="text"name="website"readOnly={!editing} value={startupdata.website} onChange={handleChange} placeholder="Website Address.." />
                </div>
                <div className="form-group">
                    <label>2. Company Certification Details (If Any)</label><br />
                    <label>(i) Company Incorporation Certification Details</label>
                </div>
                <div className="form-group">
                    <label>(a) Certificate No.</label>
                    <input type="text"readOnly={!editing} name="cerno" value={startupdata.cerno} onChange={handleChange} placeholder="Enter company certificate no"/>
                </div>
                <div className="form-group">
                    <label>(b) Date of Issue</label>
                    <input type="date"readOnly={!editing} name="cdate" value={startupdata.cdate} onChange={handleChange}/>
                </div>
                <div  className="form-group">
                    <label>(c) Issuing Authority</label>
                    <input type="text" readOnly={!editing}name="issueauthority" value={startupdata.issueauthority}onChange={handleChange} placeholder="Enter name of issuing authority" />
                    </div>
                <div className="form-group">
                    <label>(ii) Details of IE Code by DGFT</label>
                </div>
                <div className="form-group">
                    <label>(a) IE Code</label>
                    <input type="text" readOnly={!editing} name="iecode" value={startupdata.iecode} onChange={handleChange} placeholder='Enter IE Code' />
                </div>
                <div className="form-group">
                    <label>(b) Date of Issue</label>
                    <input type="date" name="issuedate" readOnly={!editing} value={startupdata.issuedate} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>3. Purpose of Applying*</label>
                    <select name="purpose" readOnly={!editing} value={startupdata.purpose} onChange={handleChange}>
                        <option>please select..</option>
                        <option value="NEW">NEW</option>
                        <option value="EXISTING">EXISTING</option>
                    </select>
                </div>
                <div>
                    <label id="ll32">Captcha</label>
    <span id="captcha">{captcha}</span>
    <button id="captcha-regenerate" onClick={generateCaptcha}>Regenerate</button>
    <input id="li20" type="text" placeholder="Enter captcha" value={userCaptcha} onChange={handleCaptchaChange} />
    {captchaError && <p className="error">{captchaError}</p>}
                      
                      
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}

export default StartupSingup;
