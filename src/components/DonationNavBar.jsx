// src/components/DonationNavbar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg"; // Adjust the path if needed

export default function DonationNavbar({ isAuthenticated, onLogout }) {
  const [donateAnchor, setDonateAnchor] = React.useState(null);
  const [fundraiseAnchor, setFundraiseAnchor] = React.useState(null);
  const [aboutAnchor, setAboutAnchor] = React.useState(null);
  const [profileAnchor, setProfileAnchor] = React.useState(null);

  const navigate = useNavigate();

  const handleMenuOpen = (event, setAnchor) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = (setAnchor) => {
    setAnchor(null);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/signin"); // Redirect to sign-in page after logging out
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: "1px solid #ddd" }}
    >
      <Toolbar
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section - Home, Search, Donate, Fundraise, About */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>

          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>

          {/* Conditional render of Donate button based on authentication */}
          {isAuthenticated && (
            <Button
              color="inherit"
              endIcon={<ExpandMoreIcon />}
              onClick={(event) => handleMenuOpen(event, setDonateAnchor)}
            >
              Donate
            </Button>
          )}
          <Menu
            anchorEl={donateAnchor}
            open={Boolean(donateAnchor)}
            onClose={() => handleMenuClose(setDonateAnchor)}
          >
            <MenuItem onClick={() => navigate("/donate/social-impact-funds")}>
              Social Impact Funds
            </MenuItem>
            <MenuItem onClick={() => navigate("/donate/medical")}>
              Medical
            </MenuItem>
            <MenuItem onClick={() => navigate("/donate/education")}>
              Education
            </MenuItem>
            <MenuItem onClick={() => navigate("/donate/emergency")}>
              Emergency
            </MenuItem>
          </Menu>

          <Button
            color="inherit"
            endIcon={<ExpandMoreIcon />}
            onClick={(event) => handleMenuOpen(event, setFundraiseAnchor)}
          >
            Fundraise
          </Button>
          <Menu
            anchorEl={fundraiseAnchor}
            open={Boolean(fundraiseAnchor)}
            onClose={() => handleMenuClose(setFundraiseAnchor)}
          >
            <MenuItem onClick={() => navigate("/fundraise/how-it-works")}>
              How it Works
            </MenuItem>
          </Menu>

          <Button
            color="inherit"
            endIcon={<ExpandMoreIcon />}
            onClick={(event) => handleMenuOpen(event, setAboutAnchor)}
          >
            About
          </Button>
          <Menu
            anchorEl={aboutAnchor}
            open={Boolean(aboutAnchor)}
            onClose={() => handleMenuClose(setAboutAnchor)}
          >
            <MenuItem onClick={() => navigate("/about/our-story")}>
              Our Story
            </MenuItem>
            <MenuItem onClick={() => navigate("/about/mission-vision")}>
              Mission & Vision
            </MenuItem>
          </Menu>
        </Box>

        {/* Center Section - Logo and GiveHope Text */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={Logo}
            alt="GiveHope Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "green" }}>
            GiveHope
          </Typography>
        </Box>

        {/* Right Section - Conditional Buttons (Sign In/Profile/Logout) */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {!isAuthenticated ? (
            <>
              <Button color="inherit" onClick={() => navigate("/signin")}>
                Sign in
              </Button>
             
            </>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={() => navigate("/profile")}
              >
                <IconButton>
                  <AccountCircle />
                </IconButton>
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
