import './styles/Home.css';
import doctor from '../assets/doctor.svg';
import farmer from '../assets/farmer.svg';
import Header from './Header';
function Home()
{
    
    let farmerqr='farmer';
    let doctorqr='doctor';
    function farmerLogin()
    {
        window.location.href = `/login?value=${farmerqr}`;
    }
     function doctorLogin()
    {
        window.location.href = `/login?value=${doctorqr}`;
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
    <Header/>
        <div className="home-main">
        
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
