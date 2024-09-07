import './styles/Home.css';
import doctor from '../assets/doctor.svg';
import farmer from '../assets/farmer.svg';
import Header from './Header';
import FAQ from './FAQs';
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
    
    const farmerFaqData = [
        {
          question: "What is the role of an AYUSH farmer?",
          answer: "An AYUSH farmer grows and cultivates medicinal and aromatic plants used in traditional AYUSH medicine. These plants are essential for AYUSH startups to produce their products."
        },
        {
          question: "What types of plants can I grow for AYUSH startups?",
          answer: "You can grow various medicinal and aromatic plants such as Ashwagandha, Brahmi, Tulsi, Aloe Vera, and more. The specific types depend on the requirements of the AYUSH startups and their product formulations."
        },
        {
          question: "How can I get in touch with AYUSH startups for supplying plants?",
          answer: "You can contact AYUSH startups through industry networks, trade fairs, or directly reach out to them via their official websites or contact information provided in startup directories."
        },
        {
          question: "Are there any certifications required to supply plants to AYUSH startups?",
          answer: "Yes, you may need certifications related to organic farming, quality standards, and good agricultural practices to ensure the plants meet the regulatory requirements for AYUSH products."
        },
        {
          question: "What kind of support can I expect from the Ministry of AYUSH as a farmer?",
          answer: "The Ministry of AYUSH may offer support in the form of training programs, financial incentives, and subsidies for improving cultivation practices and ensuring the quality of medicinal plants."
        }
      ];
      
      const doctorFaqData = [
        {
          question: "What are AYUSH tablets?",
          answer: "AYUSH tablets are medicinal tablets made from traditional herbs and formulations as per AYUSH guidelines. They are used to support health and treat various conditions based on Ayurveda, Yoga, Unani, Siddha, or Homeopathy."
        },
        {
          question: "How can I incorporate AYUSH tablets into my practice?",
          answer: "You can incorporate AYUSH tablets into your practice by evaluating their efficacy and safety for your patients, integrating them into treatment plans, and providing information on their benefits and proper usage."
        },
        {
          question: "Where can I source AYUSH tablets for my patients?",
          answer: "AYUSH tablets can be sourced from certified manufacturers and suppliers. It's important to ensure that these products meet the quality and regulatory standards set by the Ministry of AYUSH."
        },
        {
          question: "Are there any training programs available for using AYUSH tablets?",
          answer: "Yes, the Ministry of AYUSH and various professional organizations offer training programs and workshops for doctors to understand the benefits, usage, and integration of AYUSH tablets in patient care."
        },
        {
          question: "What support is available for promoting AYUSH tablets in my clinic?",
          answer: "You may receive support in the form of promotional materials, patient education resources, and possibly collaborations with AYUSH startups for distributing and advocating AYUSH tablets in your clinic."
        }
      ];
      
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
        <FAQ faqdata={farmerFaqData} who={"Ayush Farmer"} />
        <FAQ faqdata={doctorFaqData} who={"Ayush Doctor"} />
        </div>
        <div className="home-chatbot">
              <p>the chat bot button will appear here!</p>
        </div>
        </>
    );
}
export default Home;