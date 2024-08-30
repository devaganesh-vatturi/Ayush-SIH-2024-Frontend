import React, { useState } from 'react';
import './StartupSingup.css';

function StartupSingup() {
    // State to manage input values and error messages
    const [pan, setPan] = useState('');
    const [gst, setGst] = useState('');
    const [pincode,setpincode]=useState('');
    const [panError, setPanError] = useState('');
    const [gstError, setGstError] = useState('');
    const[pincodeerror,setpincodeerror]=useState('');
    // PAN validation function
    const validatePAN = (pan) => {
        const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panPattern.test(pan);
    };

    // GST validation function
    const validateGST = (gst) => {
        const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/;
        return gstPattern.test(gst);
    };
    //Pincode validation function
   const validatepincode=(pincode)=>{
    const pin=/^[0-9]{6}$/;
    return pin.test(pincode);
   }
    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;

        // Validate PAN
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
        //validate pincode
        if (!validatepincode(pincode)) {
            setpincode('Invalid pin code.');
            isValid = false;
        } else {
            setpincodeerror('');
        }

        // If form is valid, you can proceed with form submission logic here
        if (isValid) {
            console.log('Form is valid and ready for submission');
        }
        else{
            console.log("form in not valid");
        }
    };

    return (
        <>
            <div className="lmain">
                <div className="ld1">
                    <p id="lp1">Licencensee / Applicant Registration Form</p>
                </div>
                <div className="ld2">
                    <form className="Lfrom" onSubmit={handleSubmit}>
                        <div className="ld3">
                            <button id="lb1">State</button>
                            <button id="lb2">ANDHRA PRADESH</button>
                        </div>
                        <div className="ld4">
                            <label id="ll1">1. Details of Manufacturer</label>
                            <label id="ll2">(All fields Marked* are Mandatory)</label>
                        </div>
                        <div className="ld5">
                            <label id="ll3">(i) Name of the Company/Firm*</label>
                            <input id="li1" type="text" placeholder="Name of the company/Firm.." />
                        </div>
                        <div className="ld6">
                            <div className="ld7">
                                <label id="ll4">(ii) Address of Corporate Office</label>
                            </div>
                            <div className="ld8">
                                <label id="ll5">Address Line 1</label>
                                <input id="li2" type="text" placeholder="Address Line 1.." />
                            </div>
                            <div className="ld9">
                                <label id="ll6">Address Line 2</label>
                                <input id="li3" type="text" placeholder="Address Line 2.." />
                            </div>
                            <div className="ld10">
                                <label id="ll7">Address Line 3</label>
                                <input id="li4" type="text" placeholder="Address Line 3.." />
                            </div>
                            <div className="ld11">
                                <label id="ll8">Village/Town/City</label>
                                <input id="li5" type="text" />
                            </div>
                            <div className="ld12">
                                <label id="ll9">Pin Code</label>
                                <input id="li6" type="text" />
                            </div>
                            <div className="ld13">
                                <label id="ll10">State</label>
                                <select id="ls1">
                                    <option>-select-</option>
                                    <option value="ANDAMAN AND NICOBAR ISLAND">ANDAMAN AND NICOBAR ISLAND</option>
                                    <option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
                                </select>
                            </div>
                            <div className="ld14">
                                <label id="ll11">District</label>
                                <select id="ls2">
                                    <option>- please-select-</option>
                                    <option value="NICOBARS">NICOBARS</option>
                                    <option value="we change">we change</option>
                                </select>
                            </div>
                        </div>
                        <div className="ld15">
                            <div className="ld16">
                                <label id="ll12">(iii) Address of Premises</label>
                            </div>
                            <div className="ld16">
                                <label id="ll13">Address Line 1</label>
                                <input id="li7" type="text" placeholder="Address Line 1.." />
                            </div>
                            <div className="ld17">
                                <label id="ll14">Address Line 2</label>
                                <input id="li8" type="text" placeholder="Address Line 2.." />
                            </div>
                            <div className="ld18">
                                <label id="ll15">Address Line 3</label>
                                <input id="li9" type="text" placeholder="Address Line 3.." />
                            </div>
                            <div className="ld19">
                                <label id="ll16">Village/Town/City</label>
                                <input id="li10" type="text" />
                            </div>
                            <div className="ld20">
                                <label id="ll17">Pin Code</label>
                                <input
                                id="li11" 
                                type="text" 
                                placeholder="Pin code of place" 
                                value={pincode} 
                                onChange={(e) => setpincode(e.target.value)}
                                 />
                               
                            </div>
                         {pincodeerror && <p className="error">{pincodeerror}</p>}
                            <div className="ld21">
                                <label id="ll18">State</label>
                                <select id="ls3">
                                    <option>-select-</option>
                                    <option value="ANDAMAN AND NICOBAR ISLAND">ANDAMAN AND NICOBAR ISLAND</option>
                                    <option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
                                </select>
                            </div>
                            <div className="ld22">
                                <label id="ll19">District</label>
                                <select id="ls4">
                                    <option>- please-select-</option>
                                    <option value="NICOBARS">NICOBARS</option>
                                    <option value="we change">we change</option>
                                </select>
                            </div>
                        </div>
                        <div className="ld23">
                            <label id="ll20">Note : The verification mail and all communications will be sent to the Primary Authorized Signatory</label>
                        </div>
                        <div className="ld24">
                            <label id="ll21">(v) PAN No. of the company/ Firm</label>
                            <input 
                                id="li12" 
                                type="text" 
                                placeholder="PAN No. of the company/Firm" 
                                value={pan} 
                                onChange={(e) => setPan(e.target.value)} 
                            />
                            {panError && <p className="error">{panError}</p>}
                        </div>
                        <div className="ld25">
                            <label id="ll22">(vi) GST No. of the company/ Firm</label>
                            <input 
                                id="li13" 
                                type="text" 
                                placeholder="GST No. of the company/Firm" 
                                value={gst} 
                                onChange={(e) => setGst(e.target.value)} 
                            />
                            {gstError && <p className="error">{gstError}</p>}
                        </div>
                        <div className="ld26">
                            <label id="ll23">(vii) Website Address</label>
                            <input id="li14" type="text" placeholder="Website Address.." />
                        </div>
                        <div className="ld27">
                            <label id="ll24">2. Company Certification Details (If Any)</label><br />
                            <label id="ll25">(i) Company Incorporation Certification Details</label>
                        </div>
                        <div className="ld28">
                            <label id="ll26">(a) Certificate No.</label>
                            <input id="li15" type="text" />
                        </div>
                        <div className="ld29">
                            <label id="ll27">(b) Date of Issue</label>
                            <input id="li16" type="date" />
                        </div>
                        <div className="ld30">
                            <label id="ll28">(c) Issuing Authority</label>
                            <input id="li17" type="text" />
                        </div>
                        <div className="ld31">
                            <label id="ll29">(ii) Details of IE Code by DGFT</label>
                        </div>
                        <div className="ld32">
                            <label id="ll30">(a) IE Code</label>
                            <input id="li18" type="text" />
                        </div>
                        <div className="ld33">
                            <label id="ll31">(b) Date of Issue</label>
                            <input id="li19" type="date" />
                        </div>
                        <div className="ld34">
                            <label id="ll32">3. Purpose of Applying*</label>
                            <select id="ls5">
                                <option>please select..</option>
                                <option value="NEW">NEW</option>
                                <option value="EXISTING">EXISTING</option>
                            </select>
                        </div>
                        <div className="ld35">
                            <input id="li20" type="text" placeholder="Enter Captcha" />
                        </div>
                        <button className="lbl" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default StartupSingup;
