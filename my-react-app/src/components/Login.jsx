import './Login.css';
function Login(){
    return(
        <div className="container">
        <label className="label">Enter the email</label>
        <input type="text" className="input" /><br />
        <label className="login-label">Enter the password</label>
        <input type="password" className="input" /><br />
        <button className="button">Submit</button>
      </div>
  
    );
}
export default Login;