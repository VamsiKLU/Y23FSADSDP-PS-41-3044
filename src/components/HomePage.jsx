import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RecipeReviewCard from "../components/RecipeReviewCard";
import h1 from "../assets/h1.png";
import i1 from "../assets/i1.jpg";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import "./HomePage.css";

const categories = [
  { title: "Your Cause", img: image1, route: "/category/your-cause" },
  { title: "Medical", img: image2, route: "/category/medical" },
  { title: "Emergency", img: image3, route: "/category/emergency" },
  { title: "Education", img: image4, route: "/category/education" },
  { title: "Animal", img: image5, route: "/category/animal" },
  { title: "Business", img: image6, route: "/category/business" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const radius = 220;

  const handleSignIn = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <div className="homepage-container">
      <div className="content-container">
        <div className="circle-container">
          {categories.map((category, index) => {
            const angle = (index * (360 / categories.length)) * (Math.PI / 180);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={index}
                className="category-card"
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{ opacity: 1, x, y, scale: 1 }}
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: "easeInOut" }}
              >
                <motion.img
                  src={category.img}
                  alt={category.title}
                  className="category-img"
                  whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => navigate(category.route)} // 👈 Navigate to route
                  style={{ cursor: "pointer" }}
                />
                <p className="category-title">{category.title}</p>
              </motion.div>
            );
          })}

          {/* Start Button */}
          <motion.button
            className="start-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate("/fundraiser")}
          >
            Start GiveHope
          </motion.button>
        </div>

        {/* Right Side - Animated Image */}
        <motion.div
          className="right-image-container"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 1.2, ease: "easeOut" },
          }}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.3 },
          }}
        >
          <motion.img
            src={i1}
            alt="Side Display"
            className="right-image"
            animate={{
              y: [0, -5, 0],
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </motion.div>
      </div>

      {/* Conditionally Render RecipeReviewCard */}
      {isAuthenticated && (
        <div className="recipe-review-container">
          <RecipeReviewCard
            title="Support Cancer Treatment for John Doe"
            subheader="Fundraiser started on January 20, 2024"
            image="YOUR_CANCER_IMAGE_URL_HERE"
            description="John Doe is battling stage 3 cancer and needs urgent medical treatment."
          />
          <RecipeReviewCard
            title="Help Educate Underprivileged Children"
            subheader="Fundraiser started on February 5, 2024"
            image="YOUR_EDUCATION_IMAGE_URL_HERE"
            description="Support children's education by providing school supplies, tuition fees, and a brighter future."
          />
        </div>
      )}

      {/* Bottom Banner */}
      <div className="bottom-image-container">
        <img src={h1} alt="Bottom Banner" className="bottom-image" />
      </div>
    </div>
  );
};

export default HomePage;
