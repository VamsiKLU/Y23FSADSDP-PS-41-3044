import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const titleAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1.2, transition: { duration: 1.5, ease: "easeOut" } },
};

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const subheadingVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function OurStory() {
  return (
    <Container maxWidth={false} sx={{ marginTop: 10, paddingBottom: 5, textAlign: "center", width: "100%" }}>
      {/* Main Tagline with Animation */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={titleAnimation}>
        <Typography 
          variant="h2" 
          fontWeight="bold" 
          align="center" 
          gutterBottom 
          sx={{ color: "#2E7D32", fontSize: "4rem", letterSpacing: 1 }}
        >
          🌟 Hope Rises with Every Donation 🌟
        </Typography>
      </motion.div>

      {/* First Section - Text Left, Image Right */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn}>
        <Grid container spacing={5} alignItems="center" sx={{ width: "100%" }}>
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={subheadingVariant}>
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ borderBottom: "2px solid #388E3C", display: "inline-block", paddingBottom: "10px" }}>
                How It All Started 🚀
              </Typography>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={textVariant}>
              <Typography variant="h6" paragraph>
                In 2020, a group of passionate individuals saw the need to connect those who want to give 
                with those who need help. GiveHope was born to bridge this gap and empower people 
                worldwide to create meaningful change.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="img" src="https://lirp.cdn-website.com/3f82f4e9/dms3rep/multi/opt/112649510_presentation-640w.jpg" alt="Journey" width="100%" borderRadius={3} boxShadow={5} />
          </Grid>
        </Grid>
      </motion.div>

      {/* Second Section - Image Left, Text Right */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn}>
        <Grid container spacing={5} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }} sx={{ width: "100%" }}>
          <Grid item xs={12} md={6}>
            <Box component="img" src="https://images.pexels.com/photos/6646916/pexels-photo-6646916.jpeg" alt="Impact" width="100%" borderRadius={3} boxShadow={5} />
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={subheadingVariant}>
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ borderBottom: "2px solid #1976D2", display: "inline-block", paddingBottom: "10px" }}>
                Real Impact, Real Stories ✨
              </Typography>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={textVariant}>
              <Typography variant="h6" paragraph>
                - <strong>Education:</strong> Scholarships for underprivileged students.  <br />
                - <strong>Healthcare:</strong> Life-saving treatments funded.  <br />
                - <strong>Disaster Relief:</strong> Aid provided for flood and earthquake victims.  
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>

      {/* Third Section - Text Left, Image Right */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn}>
        <Grid container spacing={5} alignItems="center" sx={{ width: "100%" }}>
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={subheadingVariant}>
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ borderBottom: "2px solid #D32F2F", display: "inline-block", paddingBottom: "10px" }}>
                Hope for a Better Tomorrow 💖
              </Typography>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={textVariant}>
              <Typography variant="h6" paragraph>
                Every small act of kindness adds up. GiveHope is here to ensure that every donation, 
                no matter how small, makes a difference. Together, we are building a brighter future.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="img" src="https://images.pexels.com/photos/6646915/pexels-photo-6646915.jpeg" alt="Hope" width="100%" borderRadius={3} boxShadow={5} />
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}
