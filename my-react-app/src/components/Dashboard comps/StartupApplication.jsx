import React, { useState, useEffect } from 'react';
import '../styles/StartupApplication.css';
import axios from 'axios';
function StartupSingup() {
  //declaration of basic functions
  const [startupdata, setStartupdata] = useState({
    companyname:"",address:"",city:"",pincode:"",state:"",district:"",pan:"",gst:"",
     website:"",cerno:"",cdate:"",issueauthority:"",iecode:"",issuedate:"",purpose:""
  });
  function handleChange(e)
  {
    e.preventDefault();
    const {name,value}=e.target;
    setStartupdata({...startupdata,[name]:value});
  }
  //declaration of features
  let isValid = true;
  const [panError, setPanError] = useState('');
  const [gstError, setGstError] = useState('');
  const [pincodeError, setPincodeError] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState('');
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
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>1. Details of Manufacturer</label>
                    <label>(All fields Marked* are Mandatory)</label>
                </div>
                <div className="form-group">
                    <label>(i) Name of the Company/Firm*</label>
                    <input type="text" name="companyname" onChange={handleChange} placeholder="Name of the company/Firm.." />
                </div>
                <div className="form-group">
                    <label>(ii) Address of Corporate Office</label>
                    <label>Address Line</label>
                    <input type="text" name="address" onChange={handleChange} placeholder="Enter Address Line" />
                    <label>Village/Town/City</label>
                    <input type="text" name="city" onChange={handleChange} placeholder="Enter name of village/town/city"/>
                    <label>Pin Code</label>
                    <input 
                        type="text" 
                        placeholder="Pin code of place" 
                        name="pincode" 
                        onChange={handleChange} 
                    />
 {pincodeError && <p className="error">{pincodeError}</p>}
                    <label>State</label>
                    <select name="state" onChange={handleChange}>
                        <option>-select-</option>
                        <option value="ANDAMAN AND NICOBAR ISLAND">ANDAMAN AND NICOBAR ISLAND</option>
                        <option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
                    </select>
                    <label>District</label>
                    <select name="district" onChange={handleChange}>
                        <option>- please-select-</option>
                        <option value="NICOBARS">NICOBARS</option>
                        <option value="we change">we change</option>
                    </select>
                </div>
               
                <div className="form-group">
                    <label>(v) PAN No. of the company/Firm</label>
                    <input 
                        type="text" 
                        placeholder="PAN No. of the company/Firm"  
                        name="pan"
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
                        onChange={handleChange} 
                    />
                    {gstError && <p className="error">{gstError}</p>}
                </div>
                <div className="form-group">
                    <label>(vii) Website Address</label>
                    <input type="text"name="website" onChange={handleChange} placeholder="Website Address.." />
                </div>
                <div className="form-group">
                    <label>2. Company Certification Details (If Any)</label><br />
                    <label>(i) Company Incorporation Certification Details</label>
                </div>
                <div className="form-group">
                    <label>(a) Certificate No.</label>
                    <input type="text" name="cerno" onChange={handleChange} placeholder="Enter company certificate no"/>
                </div>
                <div className="form-group">
                    <label>(b) Date of Issue</label>
                    <input type="date" name="cdate" onChange={handleChange}/>
                </div>
                <div  className="form-group">
                    <label>(c) Issuing Authority</label>
                    <input type="text" name="issueauthority" onChange={handleChange} placeholder="Enter name of issuing authority" />
                    </div>
                <div className="form-group">
                    <label>(ii) Details of IE Code by DGFT</label>
                </div>
                <div className="form-group">
                    <label>(a) IE Code</label>
                    <input type="text" name="iecode" onChange={handleChange} placeholder='Enter IE Code' />
                </div>
                <div className="form-group">
                    <label>(b) Date of Issue</label>
                    <input type="date" name="issuedate" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>3. Purpose of Applying*</label>
                    <select name="purpose" onChange={handleChange}>
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
