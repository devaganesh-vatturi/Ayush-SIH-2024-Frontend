import './Home.css';
import startup from '../assets/startup.svg';
import drugins from '../assets/drugins.svg';
import Header from './Header';
function Home()
{
    let startupqr='startup';
    let druginspectorqr='druginspector';
    function startupLogin()
    {
        window.location.href = `/login?value=${startupqr}`;
    }
    function druginsLogin()
    {
        window.location.href = `/login?value=${druginspectorqr}`;
    }
    function goStartup()
    {
        window.location.href=`/signupstartup`;
    }
    function gohometwo()
    {
        window.location.href=`/hometwo`;
    }
    
    
    return(
        <>
       <Header/>
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
           </div>
           <center><button id="gohometwo" onClick={gohometwo}>Are you a Farmer/doctor Wanna collaborate?</button></center>
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
