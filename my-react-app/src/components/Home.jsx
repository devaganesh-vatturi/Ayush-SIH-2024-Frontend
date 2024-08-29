import './Home.css';
import startup from '../assets/startup.svg';
import doctor from '../assets/doctor.svg';
import drugins from '../assets/drugins.svg';
import farmer from '../assets/farmer.svg';
function Home()
{
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
               <button id="home-main-signin">Sign In</button>
               <button id="home-main-login">Login</button>
           </div>
           <div className="home-main-drug">
               <img id="home-main-img" src={drugins}/>
               <p>Start up</p>
               <button id="home-main-signin">Sign In</button>
               <button id="home-main-login">Login</button>
           </div>
           <div className="home-main-farmer">
           <img id="home-main-img" src={farmer}/>
               <p>Start up</p>
               <button id="home-main-signin">Sign In</button>
               <button id="home-main-login">Login</button>
           </div>
           <div className="home-main-doctor">
           <img id="home-main-img" src={doctor}/>
               <p>Start up</p>
               <button id="home-main-signin">Sign In</button>
               <button id="home-main-login">Login</button>
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
