import './Doctorsignup.css';
function Doctorsignup() {
    return ( 
        <div className="container">
      <label className="label">Enter the name:</label>
      <input type="text" className="input" /><br />
      <label className="label">Enter district:</label>
      <input type="text" className="input" /><br />
      <label className="label">Enter state:</label>
      <input type="text" className="input" /><br />
      <label className="label">Enter the phone number:</label>
      <input type="text" className="input" /><br />
      <label className="label">Upload a PDF file:</label>
      <input type="file" accept=".pdf" className="input" /><br/>
      <label className="label">Enter the emailid:</label>
      <input type="text" className="input" /><br />
      <label className="label">Enter the password:</label>
      <input type="text" className="input" /><br />
      <button className="button">submit</button>
    </div>

    );
}

export default Doctorsignup;
