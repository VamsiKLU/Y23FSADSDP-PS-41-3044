import React, { useState } from "react";
import { Box, Avatar, Typography, TextField, Button, Divider, List, ListItem, ListItemText, LinearProgress, IconButton } from "@mui/material";
import { LinkedIn, GitHub, Twitter } from "@mui/icons-material"; // Icons for social media links

export default function ProfileAside({ user, onProfilePicChange }) {
  const [profileDetails, setProfileDetails] = useState({
    username: user.username,
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    jobTitle: user.jobTitle,
    location: user.location,
    about: user.about,
    skills: user.skills || ["JavaScript", "React", "Node.js"], // Default skills
    donationHistory: user.donationHistory || [
      { amount: 50, cause: "Clean Water Initiative", date: "2025-01-01" },
      { amount: 30, cause: "Animal Shelter", date: "2025-02-01" },
    ],
    favoriteCauses: user.favoriteCauses || ["Education for All", "Climate Change Awareness"],
    donationGoal: user.donationGoal || 500, // User's donation goal
    totalDonated: user.totalDonated || 100, // User's total donated so far
  });
  const [newProfilePicture, setNewProfilePicture] = useState(user.profilePicture);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfilePicture(reader.result);
        onProfilePicChange(reader.result); // Update profile picture in App state
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px", width: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", width: "100%", marginBottom: "40px" }}>
        {/* Profile Image Section */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "30px", marginBottom: { xs: "20px", sm: "0" }, flex: "1" }}>
          <Avatar
            src={newProfilePicture}
            sx={{
              width: 120,
              height: 120,
              marginBottom: "20px",
              border: "4px solid #e0e0e0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          />
          <input
            type="file"
            onChange={handleProfilePicChange}
            accept="image/*"
            style={{ marginBottom: "20px", display: "none" }}
            id="profile-pic-input"
          />
          <label htmlFor="profile-pic-input">
            <Button
              variant="outlined"
              component="span"
              sx={{ marginTop: "10px", textTransform: "none", borderRadius: "20px" }}
            >
              Change Picture
            </Button>
          </label>
        </Box>

        {/* User Details Section */}
        <Box sx={{ flex: "2", display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
          <Typography variant="h4" sx={{ marginBottom: "10px", fontWeight: "bold", color: "#333" }}>
            {profileDetails.fullName}
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: "10px", color: "gray", fontStyle: "italic" }}>
            {profileDetails.jobTitle}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "15px", color: "#0073b1", fontWeight: "500" }}>
            {profileDetails.location}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: "100%", maxWidth: "1200px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        {/* About Section */}
        <Typography variant="body1" sx={{ marginBottom: "20px", color: "#666", fontStyle: "italic" }}>
          {profileDetails.about || "Add a brief summary about yourself."}
        </Typography>

        {/* Social Media Links */}
        <Box sx={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
          <IconButton href="https://www.linkedin.com" target="_blank" sx={{ color: "#0073b1" }}>
            <LinkedIn />
          </IconButton>
          <IconButton href="https://github.com" target="_blank" sx={{ color: "#333" }}>
            <GitHub />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" sx={{ color: "#1DA1F2" }}>
            <Twitter />
          </IconButton>
        </Box>

        <Divider sx={{ width: "100%", marginBottom: "20px" }} />

        {/* Donation History Section */}
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
          Donation History
        </Typography>
        <List sx={{ width: "100%", marginBottom: "20px" }}>
          {profileDetails.donationHistory.map((donation, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${donation.cause} - $${donation.amount}`}
                secondary={`Date: ${donation.date}`}
              />
            </ListItem>
          ))}
        </List>

        {/* Favorite Causes Section */}
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
          Favorite Causes
        </Typography>
        <List sx={{ width: "100%", marginBottom: "20px" }}>
          {profileDetails.favoriteCauses.map((cause, index) => (
            <ListItem key={index}>
              <ListItemText primary={cause} />
            </ListItem>
          ))}
        </List>

        {/* Donation Progress Section */}
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
          Donation Progress
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "10px" }}>
          Total Donated: ${profileDetails.totalDonated} of ${profileDetails.donationGoal}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(profileDetails.totalDonated / profileDetails.donationGoal) * 100}
          sx={{ marginBottom: "20px", height: "10px", borderRadius: "5px" }}
        />

        <Divider sx={{ width: "100%", marginBottom: "20px" }} />

        {/* Editable Contact Form */}
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
          Contact Information
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={profileDetails.email}
          onChange={(e) => setProfileDetails({ ...profileDetails, email: e.target.value })}
          sx={{ marginBottom: "15px" }}
        />
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          value={profileDetails.phone}
          onChange={(e) => setProfileDetails({ ...profileDetails, phone: e.target.value })}
          sx={{ marginBottom: "15px" }}
        />

        {/* Save Changes Button */}
        <Button variant="contained" color="primary" sx={{ width: "100%", borderRadius: "20px" }}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}
