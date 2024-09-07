import './styles/Home.css';
import startup from '../assets/startup.svg';
import drugins from '../assets/drugins.svg';
import Header from './Header';
import FAQ from './FAQs';
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
    
    const StartupFaqData = [
        { question: "What is AYUSH?", answer: "AYUSH stands for Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy. It refers to traditional Indian systems of medicine." },
        { question: "How can I register my AYUSH startup?", answer: "You can register your AYUSH startup through the AYUSH Startup Registration Portal provided by the Ministry of AYUSH." },
        { question: "What are the eligibility criteria for AYUSH startup funding?", answer: "To be eligible for AYUSH funding, your startup must focus on traditional systems of medicine and wellness, and meet other guidelines specified by the Ministry of AYUSH." },
        { question: "Are there any grants available for AYUSH startups?", answer: "Yes, there are several grants and funding opportunities available for AYUSH startups, including seed funding and innovation grants from the government." },
        { question: "What certifications are required for AYUSH products?", answer: "AYUSH products typically require certifications from the AYUSH Ministry and the Food Safety and Standards Authority of India (FSSAI), depending on the product." },
        { question: "How can I obtain a license for manufacturing AYUSH products?", answer: "You can apply for a manufacturing license through the State Licensing Authority under the Ministry of AYUSH, following the guidelines specific to your system of medicine (e.g., Ayurveda or Homeopathy)." },
        { question: "What is the AYUSH Export Promotion Council?", answer: "The AYUSH Export Promotion Council helps promote and regulate the export of AYUSH products and services internationally." },
        { question: "Can AYUSH startups apply for international funding?", answer: "Yes, AYUSH startups can apply for international funding through various global initiatives and funding programs that support traditional and alternative medicine." },
        { question: "What are the tax benefits for AYUSH startups?", answer: "AYUSH startups may be eligible for tax benefits under the Startup India initiative and specific tax exemptions related to health and wellness sectors." },
        { question: "What support is provided by the Ministry of AYUSH to startups?", answer: "The Ministry of AYUSH provides a variety of support mechanisms, including mentorship, incubation support, and financial assistance for startups focusing on traditional medicine and wellness." },
      ];
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
            <FAQ faqdata={StartupFaqData} who={"Ayush StartUps"} />
        </div>
        <div className="home-chatbot">
              <p>the chat bot button will appear here!</p>
        </div>
        </>
    );
}
export default Home;
