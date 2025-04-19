import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

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

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease: "easeOut" } },
};

const staggeredTextVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, duration: 1.5, ease: "easeOut" } },
};

export default function MissionVision() {
  return (
    <Container maxWidth={false} sx={{ marginTop: 10, paddingBottom: 5, textAlign: "center", width: "100%" }}>
 
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={titleAnimation}>
        <Typography
          variant="h2"
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{
            color: "Black",
            fontSize: "4rem",
            letterSpacing: 1,
            textTransform: "uppercase",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
           Our Mission & Vision 🌟
        </Typography>
        
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn}>
        <Grid container spacing={5} alignItems="center" sx={{ width: "100%", marginBottom: 5 }}>
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={subheadingVariant}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: "#388E3C",
                  fontSize: "2.5rem",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  borderBottom: "2px solid #388E3C",
                }}
              >
                Our Mission 🚀
              </Typography>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggeredTextVariant}>
              <Typography
                variant="h6"
                paragraph
                sx={{
                  fontSize: "1.2rem",
                  color: "#424242",
                  lineHeight: "1.8",
                  fontWeight: 400,
                  textAlign: "justify",
                  marginTop: 2,
                }}
              >
                At <strong>GiveHope</strong>, our mission is to provide a platform where generosity meets impact.
                We aim to connect donors with causes that truly make a difference, ensuring that every contribution
                leads to meaningful change in people's lives. Together, we can build a better world for everyone.
              </Typography>
              <Typography
                variant="h6"
                paragraph
                sx={{
                  fontSize: "1.1rem",
                  color: "#388E3C",
                  fontStyle: "italic",
                  marginTop: 2,
                }}
              >
                "Small acts, when multiplied by millions of people, can transform the world." – Howard Zinn
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={imageVariant}>
              <Box
                component="img"
                src="https://images.gofundme.com/Hhn9oZ_Lfk5bnuKcyhZ43zV03sc=/720x405/https://d2g8igdw686xgo.cloudfront.net/84657987_1733588686478102_r.jpeg"
                alt="Mission"
                width="100%"
                borderRadius={3}
                boxShadow={5}
              />
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>

      {/* Vision Section - Image Left, Text Right */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn}>
        <Grid container spacing={5} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }} sx={{ width: "100%" }}>
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={imageVariant}>
              <Box
                component="img"
                src="https://t3.ftcdn.net/jpg/08/83/05/40/360_F_883054073_SzWx5yLr7CgquNncsrrLZkt599t5Mgk4.jpg"
                alt="Vision"
                width="100%"
                borderRadius={3}
                boxShadow={5}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={subheadingVariant}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: "#1976D2",
                  fontSize: "2.5rem",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  borderBottom: "2px solid #1976D2",
                }}
              >
                Our Vision 🔍
              </Typography>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggeredTextVariant}>
              <Typography
                variant="h6"
                paragraph
                sx={{
                  fontSize: "1.2rem",
                  color: "#424242",
                  lineHeight: "1.8",
                  fontWeight: 400,
                  textAlign: "justify",
                  marginTop: 2,
                }}
              >
                We envision a world where no one is left behind due to financial constraints.
                Through technology, transparency, and compassion, we strive to build a future
                where kindness is accessible to all and every small act of giving creates a ripple effect of hope.
              </Typography>
              <Typography
                variant="h6"
                paragraph
                sx={{
                  fontSize: "1.1rem",
                  color: "#1976D2",
                  fontStyle: "italic",
                  marginTop: 2,
                }}
              >
                "Vision without action is a daydream. Action without vision is a nightmare." – Japanese Proverb
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}
