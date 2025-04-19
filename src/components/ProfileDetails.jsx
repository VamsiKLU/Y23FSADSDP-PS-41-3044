import React, { useState } from "react";
import ProfileAside from "./components/ProfileAside"; // Adjust the path accordingly

export default function UserProfile() {
  const user = {
    username: "Vams_i", // Replace with your username
    fullName: "VAMSI NAIDU", // Replace with your full name
    email: "jakkulavamsi7@gmail.com", // Replace with your email
    phone: "9392764479", // Replace with your phone number
    jobTitle: "Software Engineer", // Replace with your job title
    location: "New York, USA", // Replace with your location
    about: "A passionate developer focused on building impactful solutions.", // Replace with your about section
    skills: ["JavaScript", "React", "Node.js"], // Replace with your skills
    donationHistory: [
      { amount: 50, cause: "Clean Water Initiative", date: "2025-01-01" },
      { amount: 30, cause: "Animal Shelter", date: "2025-02-01" },
    ], // Replace with your donation history
    favoriteCauses: ["Education for All", "Climate Change Awareness"], // Replace with your favorite causes
    donationGoal: 500, // Replace with your donation goal
    totalDonated: 100, // Replace with your total donations
    profilePicture: "path_to_profile_picture.jpg", // Replace with your profile picture path
  };

  const handleProfilePicChange = (newProfilePic) => {
    console.log("Profile Picture Changed:", newProfilePic);
  };

  return (
    <div>
      <ProfileAside user={user} onProfilePicChange={handleProfilePicChange} />
    </div>
  );
}
