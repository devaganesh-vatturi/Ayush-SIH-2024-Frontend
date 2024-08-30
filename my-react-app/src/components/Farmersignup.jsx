import './Farmersignup.css';
function Farmersignup() {
    return (
        <div className="container">
      <label className="label">Enter the name:</label><br />
      <input type="text" className="input" /><br />
      <label className="label">Enter district name:</label><br />
      <input type="text" className="input" /><br />
      <label className="label">Enter the state:</label><br />
      <input type="text" className="input" /><br />
      <label className="label">Enter crop name:</label><br />
      <input type="text" className="input" /><br />
      <label className="label">Enter phone number:</label><br />
      <input type="number" className="input" />
      <label className="label">Enter the emailid:</label>
      <input type="text" className="input" /><br />
      <label className="label">Enter the password:</label>
      <input type="text" className="input" /><br />
      <button className="button">submit</button>
    </div>

    );
}

export default Farmersignup;
