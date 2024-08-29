function Doctorsignup() {
    return (
        <div>
            <label>Enter the name:</label>
            <input type="text" /><br />
            <label>Enter district:</label>
            <input type="text" /><br />
            <label>Enter state:</label>
            <input type="text" /><br />
            <label>Enter the phone number:</label>
            <input type="text" /><br />
            <label>Upload a PDF file:</label>
            <input type="file" accept=".pdf" /><br/>
            <label>Enter the emailid:</label>
            <input type="text" /><br />
            <label>Enter the passowrd:</label>
            <input type="text" /><br />

            <button>submit</button>
        </div>
    );
}

export default Doctorsignup;
