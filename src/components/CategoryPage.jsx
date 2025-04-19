import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import causesData from "../data/causesData";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const causes = causesData[categoryName] || [];

  return (
    <div className="category-page">
      <h2>{categoryName} Causes</h2>
      <div className="causes-list">
        {causes.map((cause) => (
          <div key={cause.id} className="cause-card">
            <img src={cause.image} alt={cause.title} className="cause-image" />
            <h3>{cause.title}</h3>
            <p>{cause.description}</p>
            <button
              className="donate-btn"
              onClick={() => navigate(`/cause/${cause.id}`)}
            >
              Donate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
