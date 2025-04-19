import React from "react";
import { useParams } from "react-router-dom";
import causesData from "..//causesData";
import "./CauseDetailsPage.css";

const CauseDetailsPage = () => {
  const { causeId } = useParams();

  let selectedCause;
  for (const category in causesData) {
    const match = causesData[category].find((c) => c.id === causeId);
    if (match) {
      selectedCause = match;
      break;
    }
  }

  if (!selectedCause) {
    return <p>Cause not found.</p>;
  }

  return (
    <div className="cause-details-container">
      <img src={selectedCause.image} alt={selectedCause.title} className="details-image" />
      <h2>{selectedCause.title}</h2>
      <p>{selectedCause.description}</p>
      <h4>Donor Info</h4>
      <ul>
        <li>Name: [Logged-in User Name]</li>
        <li>Email: [Logged-in Email]</li>
      </ul>
      <h4>Payment Options</h4>
      <button className="payment-btn">Pay with Card</button>
      <button className="payment-btn">Pay with UPI</button>
    </div>
  );
};

export default CauseDetailsPage;
