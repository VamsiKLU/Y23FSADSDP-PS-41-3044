import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const HowItWorks = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      title: " Step 1: Choose a Cause",
      content:
        "Find a cause that you’re passionate about—whether it’s helping families in need, supporting medical research, or promoting education. Consider causes that are close to your heart and that you believe will make a lasting impact in your community or beyond. Doing so will give your campaign a personal and genuine touch.",
    },
    {
      title: " Step 2: Create Your Fundraiser",
      content:
        "Set up a compelling fundraiser page that includes high-quality images and a heartfelt story. Make sure to explain why the cause matters and what impact the donations will have. Choose a clear fundraising goal to keep the supporters motivated and understand how their contributions will help.",
    },
    {
      title: " Step 3: Share Your Campaign",
      content:
        "Once your campaign is live, share it far and wide! Use social media platforms like Facebook, Instagram, and Twitter, as well as email newsletters and word-of-mouth to encourage your network to donate. Engaging with your supporters and reminding them of the campaign’s importance is key to its success.",
    },
    {
      title: " Step 4: Collect Donations",
      content:
        "Watch the donations come in as your network rallies behind your cause. Make sure to send personal thank-yous to each donor to show appreciation. Keep the momentum going by providing regular updates on how the funds are being used and how the campaign is progressing.",
    },
    {
      title: " Step 5: Make an Impact",
      content:
        "After the fundraiser ends, you can withdraw the funds and start using them to support the cause. Whether it’s purchasing supplies, funding a project, or helping those in need directly, your impact will make a real difference in the lives of those who are counting on your generosity.",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: "60px 20px",
      }}
    >
      {/* Image Animation Section */}
      <Box sx={{ marginTop: "30px", width: "100%", textAlign: "center" }}>
        <motion.img
          src="https://www.charitydynamics.com/wp-content/uploads/2016/01/HiRes-1.jpg" // Replace with actual image
          alt="Step 2"
          style={{
            width: "60%",
            borderRadius: "10px",
            marginTop: "30px",
          }}
          initial={{ opacity: 0, y: "50%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, ease: "easeOut" }} // Faster and smoother transition
        />
      </Box>

      {/* Main Heading Animation on Scroll */}
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#2e7d32",
            marginTop: "100px",
            marginBottom: "100px", // Reduced margin for better spacing
            textAlign: "center",
            fontSize: "2.5rem",
          }}
        >
          How Fundraising Works
        </Typography>
      </motion.div>

      {/* Full-Width FAQ Section */}
      <Box sx={{ width: "90%", maxWidth: "1200px" }}>
        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, x: "-50%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              width: "100%",
              padding: "25px 30px",
              marginBottom: "30px", // Added more space between sections
              borderRadius: "8px",
              boxShadow:
                hoveredSection === index
                  ? "0px 4px 10px rgba(0,0,0,0.2)"
                  : "0px 2px 5px rgba(0,0,0,0.1)",
              backgroundColor: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={() => setHoveredSection(index)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#333",
                  fontSize: "1.5rem",
                  lineHeight: 1.4,
                }}
              >
                {section.title}
              </Typography>
              <FaChevronDown color="#2e7d32" />
            </Box>

            {/* Description (Visible only on hover) */}
            {hoveredSection === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                style={{ marginTop: "15px" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    fontSize: "1.2rem",
                    lineHeight: 1.8,
                  }}
                >
                  {section.content}
                </Typography>
              </motion.div>
            )}
          </motion.section>
        ))}
      </Box>
    </Box>
  );
};

export default HowItWorks;
