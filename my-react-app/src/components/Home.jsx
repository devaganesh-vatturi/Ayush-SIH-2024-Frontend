import './Home.css';
import startup from '../assets/startup.svg';
import doctor from '../assets/doctor.svg';
import drugins from '../assets/drugins.svg';
import farmer from '../assets/farmer.svg';
function Home()
{
    let startupqr='startup';
    let druginspectorqr='druginspector';
    let farmerqr='farmer';
    let doctorqr='doctor';
    function startupLogin()
    {
        window.location.href = `/login?value=${startupqr}`;
    }
    function druginsLogin()
    {
        window.location.href = `/login?value=${druginspectorqr}`;
    }
    function farmerLogin()
    {
        window.location.href = `/login?value=${farmerqr}`;
    }
     function doctorLogin()
    {
        window.location.href = `/login?value=${doctorqr}`;
    }
    function goStartup()
    {
        window.location.href=`/signupstartup`;
    }
    function gofarmer()
    {
        window.location.href=`/signupfarmer`;
    }
    function godoctor()
    {
        window.location.href=`/signupdoctor`;
    }
    
    return(
        <>
       <div className="home-head">
        <p>Aayush 2.0</p>
        <button>Chat Bot</button>
       </div>
        <div className="home-main">
           <div className="home-main-startup">
               <img id="home-main-img" src={startup}/>
               <p>Start up</p>
               <button id="home-main-signin" onClick={goStartup} >Sign Up</button>
               <button id="home-main-login" onClick={startupLogin}>Login</button>
           </div>
           <div className="home-main-drug">
               <img id="home-main-img" src={drugins}/>
               <p>Drug Inspector</p>
               <button id="home-main-login" onClick={druginsLogin}>Login</button>
           </div>
           <div className="home-main-farmer">
           <img id="home-main-img" src={farmer}/>
               <p>Farmer</p>
               <button id="home-main-signin" onClick={gofarmer}>Sign Up</button>
               <button id="home-main-login" onClick={farmerLogin}>Login</button>
           </div>
           <div className="home-main-doctor">
           <img id="home-main-img" src={doctor}/>
               <p>Doctor</p>
               <button id="home-main-signin" onClick={godoctor}>Sign Up</button>
               <button id="home-main-login" onClick={doctorLogin}>Login</button>
           </div>
        </div>
        <div className="home-faq">
             <p>the FAQ's will be written here!</p>
        </div>
        <div className="home-chatbot">
              <p>the chat bot button will appear here!</p>
        </div>
        </>
    );
}
export default Home;
