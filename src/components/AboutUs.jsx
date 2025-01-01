import './styles/AboutUs.css'; 

function AboutUs (){
    return (
        <div className="meditation-timer-page">
            <header className="hero-section">
                <h1>🌿 Ayush Ecosystem</h1>
                <p>A Huge Ecosystem with Advanced features  </p>
            </header>
            
            

            <section className="developers-section">
                <h2>The Code Commandos</h2>
                <p id="meet-the">Meet the team that made this project possible:</p>
                <div className="developer-cards">
                    <div className="developer-card">
                        <h3> Chaitanya Kadali </h3>
                        <h3 id='role-abt' > (Team Lead , Full stack) </h3>
                        <p> 
                            <ul id="listo"> 
                                <li> 🌍 Made complete System design </li>
                                <li>🤖 Developed the AI chatbot </li>
                                <li>📊 Integrated the email API </li>
                                <li>📝 Implemented editable forms, status tracker.</li>
                                <li>Connected frontend-backend components. </li>
                                <li>Hosted this platform on Vercel. </li>
                                <li>🎯 Developed the Prediction feature and loading animation </li>
                            </ul>
                        </p>
                    </div>

                    <div className="developer-card">
                        <h3>Deva Ganesh Vatturi </h3>
                        <h3 id='role-abt' > (Frontend) </h3>
                        <p> 
                            <ul id="listo">
                                <li> Led the frontend team to build appealing interface </li>
                                <li> Contributed to token sessions </li>
                                <li> ✅ implemented hashing-based frontend validation for login </li>
                                <li> Styled all components for a seamless UI. </li> 
                            </ul>
                        </p>
                    </div>
                    <div className="developer-card">
                        <h3>Sai Venkat Kallepalli  </h3>
                        <h3 id='role-abt' > (Backend) </h3>
                        <p>  
                            <ul id="listo"> 
                                <li> 🔐 Secure authentication system with password hashing. </li>
                                <li> 📄 PDF validation system for quality and compliance.</li>   
                                <li> Optimized data storage with MongoDB Atlas </li>    
                                <li> Developed secured Token sessions by express js </li> 
                            </ul>
                        </p>
                    </div>
                    <div className="developer-card">
                        <h3>Ram Sai Kolli</h3>
                        <h3 id='role-abt' > (Frontend) </h3>
                        <p>
                            <ul id="listo"> 
                                <li> Built sign-up forms and  Dashboard for doctor</li>   
                                <li> Implemented phone no validations, pin validations </li>    
                                <li> Implemented FAQs </li> 
                            </ul>
                        </p>
                    </div>
                    <div className="developer-card">
                        <h3>Sai Nagendra Thota </h3>
                        <h3 id='role-abt' > (Frontend) </h3>
                        <p>
                            <ul id="listo"> 
                                <li> Built farmer dashboard</li>   
                                <li> implemented password validations </li>    
                                <li> Provided valuable insights during the feature development process  </li> 
                            </ul>
                        </p>
                    </div>
                    <div className="developer-card">
                        <h3>Prasanna kada</h3>
                        <h3 id='role-abt' > (Frontend) </h3>
                        <p> 
                            <ul id="listo"> 
                                <li> contributed to FAQs</li>   
                                <li> styled login and signup pages </li>    
                                <li> Helped with documentation  </li> 
                            </ul>
                        </p>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <h2>What's Special About Our Application?</h2>
                <div className="feature-cards"> 
                    <div className="feature-card">
                        <h3>🤖 AI Chatbot Support</h3>
                        <p>Real-time user assistance to address their queries.   </p>
                    </div>
                    <div className="feature-card">
                        <h3>📊 Real-Time Email Alerts</h3>
                        <p>Transparent status tracking and automated email notifications.</p>
                    </div>
                    <div className="feature-card">
                        <h3>📄 Automated PDF Verification</h3>
                        <p>Ensures document quality and compliance using OpenCV4Node. </p>
                    </div>
                    <div className="feature-card">
                        <h3>🌍 Self-Sustainable Ecosystem</h3>
                        <p>Dashboards that connect Ayurvedic startups with nearby farmers and doctors for raw materials and product distribution. </p>
                    </div>
                    <div className="feature-card">
                        <h3>🔐 Encrypted Data Handling </h3>
                        <p>Secure data submission with automated compliance checks.</p>
                    </div>
                   
                    
                    <div className="feature-card">
                        <h3> ✅ Authorized communication</h3>
                        <p>Controlled communication, allowing startups to send messages once every three days to the Licensing Authority.</p>
                    </div>
                    <div className="feature-card">
                        <h3>🎯 Prediction &📍 Recommendations </h3>
                        <p>Predicts whether a startup project will be selected . Suggests doctors and farmers based on state and district locations.</p>
                    </div>
                    <div className="feature-card">
                        <h3>📝 Editable Application Forms </h3>
                        <p> Allow users to modify and update their submissions based on the feedback.</p>
                    </div>
                
                </div>
            </section>

            <footer className="footer-abt">
                <p>🚀 Join us in embracing the Ecosystem of ayush to embrace the ayush startups</p>
            </footer>
        </div>
    );
};

export default AboutUs;
