import React, { useEffect, useState } from "react";
import "../styles/YourProfile.css";

const YourProfile = ({ email }) => {
  const [startupData, setStartupData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchStartupData = () => {
    fetch("https://ayush-sih-backend.vercel.app/api/startup-basic", {
      method: "POST", // Using POST to send email in the body
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email_ID: email }), // Send email as body data
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setStartupData(data.basicdata); // Make sure to use the correct property
        } else {
          setErrorMessage(data.message); // Handle error messages returned from backend
        }
      })
      .catch((error) => {
        setErrorMessage("Error fetching data: " + error.message);
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchStartupData(); // Fetch startup data when the component mounts
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="container">
      <div className="profilecircle">{email[0]}</div>{" "}
      {/* Add the container class */}
      {errorMessage && <p className="error">{errorMessage}</p>}{" "}
      {/* Error styling */}
      {startupData ? (
        <div className="startupdata">
          <p className="companyname">{startupData.companyName}</p>
          <p id="yrprofile"> {startupData.Email_ID}</p>
          <p id="yrprofile">Address: {startupData.address}</p>
          <p id="yrprofile">City: {startupData.city}</p>
          <p id="yrprofile">State: {startupData.state}</p>
          <p id="yrprofile">District: {startupData.district}</p>
          <p id="yrprofile">Pin Code: {startupData.pinCode}</p>
          <p id="yrprofile">Phone Number: {startupData.phone_number}</p>
        </div>
      ) : (
        <p id="yrprofile" >No data available.</p>
      )}
    </div>
  );
};

export default YourProfile;
