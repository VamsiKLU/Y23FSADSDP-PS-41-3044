import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import DonationNavbar from "./components/DonationNavBar";
import SlotsSignIn from "./components/SlotsSignIn";
import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/HomePage";
import FundraiserPage from "./components/FundraiserPage";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import OurStory from "./components/OurStory";
import MissionVision from "./components/MissionVision"; 
import ProfileAside from "./components/ProfileAside"; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    username: "JohnDoe",
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    profilePicture: "/default-avatar.png",
  });

  return (
    <Router>
      <CssBaseline />
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Navbar */}
        <DonationNavbar
          isAuthenticated={isAuthenticated}
          onLogout={() => setIsAuthenticated(false)}
          user={user} 
        />
        
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fundraiser" element={<FundraiserPage />} />
            <Route path="/fundraise/how-it-works" element={<HowItWorks isAuthenticated={isAuthenticated} />} />
            <Route path="/about/our-story" element={<OurStory />} />
            <Route path="/about/mission-vision" element={<MissionVision />} />
            <Route
              path="/signin"
              element={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", width: "100%" }}>
                  <SlotsSignIn onSignIn={setIsAuthenticated} />
                </div>
              }
            />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/profile" element={<ProfileAside user={user} />} /> 
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
