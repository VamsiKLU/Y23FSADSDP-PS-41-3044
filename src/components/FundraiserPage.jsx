import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg"; // Adjust the path according to where your logo is stored
import "./FundraiserPage.css";

const categories = [
  "Animals", "Business", "Community", "Competitions", "Creative", "Education",
  "Emergencies", "Environment", "Events", "Faith", "Family",
  "Funerals & Memorials", "Medical", "Monthly Bills", "Newlyweds", "Other",
  "Sports", "Travel", "Ukraine Relief", "Volunteer", "Wishes"
];

const FundraiserPage = () => {
  const [zipCode, setZipCode] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isValidZip, setIsValidZip] = useState(true);
  const [isStepTwoVisible, setIsStepTwoVisible] = useState(false);
  const [isStepThreeVisible, setIsStepThreeVisible] = useState(false);
  const [isStepFourVisible, setIsStepFourVisible] = useState(false);
  const [isStepFiveVisible, setIsStepFiveVisible] = useState(false);  // New Step 5
  const [fundraisingGoal, setFundraisingGoal] = useState("");
  const [selection, setSelection] = useState(null);
  const [media, setMedia] = useState([]);
  const [story, setStory] = useState("");  // For Step 5 Story
  const [showBackButton, setShowBackButton] = useState(false);
  const [isReviewVisible, setIsReviewVisible] = useState(false);  // Step for review
  const navigate = useNavigate();

  const handleZipChange = (e) => {
    const value = e.target.value;
    setZipCode(value);
    setIsValidZip(/^[0-9]{5}$/.test(value));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleContinueStepOne = () => {
    if (isValidZip && zipCode && selectedCategory) {
      setIsStepTwoVisible(true);
      setIsStepThreeVisible(false);
      setShowBackButton(true);
    }
  };

  const handleContinueStepTwo = () => {
    if (selection) {
      setIsStepThreeVisible(true);
      setIsStepTwoVisible(false);
    }
  };

  const handleStepThreeContinue = () => {
    if (fundraisingGoal) {
      setIsStepFourVisible(true);
      setIsStepThreeVisible(false);
    }
  };

  const handleStepFourContinue = () => {
    setIsStepFiveVisible(true);
    setIsStepFourVisible(false);
  };

  const handleStepFiveContinue = () => {
    setIsReviewVisible(true); // Display Review Step
  };

  const handleMediaUpload = (e) => {
    const files = e.target.files;
    if (files) {
      const newMedia = Array.from(files).map(file => ({
        url: URL.createObjectURL(file),
        type: file.type.startsWith("image") ? "image" : "video"
      }));
      setMedia(prevMedia => [...prevMedia, ...newMedia]);
    }
  };

  const handleBack = () => {
    if (isStepFiveVisible) {
      setIsStepFiveVisible(false);
      setIsStepFourVisible(true);
    } else if (isStepFourVisible) {
      setIsStepFourVisible(false);
      setIsStepThreeVisible(true);
    } else if (isStepThreeVisible) {
      setIsStepThreeVisible(false);
      setIsStepTwoVisible(true);
    } else if (isStepTwoVisible) {
      setIsStepTwoVisible(false);
      setShowBackButton(false);
    }
  };

  return (
    <div className="fundraiser-page">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="GiveHope Logo" style={{ cursor: 'pointer', height: '50px' }} />
      </div>

      {/* Sign In Button */}
      <div className="signin-container">
        <button className="signin-button" onClick={() => navigate("/signin")}>
          Sign In
        </button>
      </div>

      <div className="left-section">
        <h1>Let's begin your fundraising journey</h1>
        <p>We're here to guide you every step of the way.</p>
      </div>

      <div className="right-section">
        <div className="form-container">
          {/* Step One - Zip Code and Category */}
          {!isStepTwoVisible && !isStepThreeVisible && !isStepFourVisible && !isStepFiveVisible && !isReviewVisible ? (
            <>
              <label className="form-label">Where will the funds go?</label>
              <p className="form-description">
                Choose the location where you plan to withdraw your funds. 
                <a href="#" className="link"> Countries we support fundraisers in.</a>
              </p>

              <select className="dropdown">
                <option>India</option>
                <option>UK</option>
                <option>Russia</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>United Kingdom</option>
              </select>

              <input 
                type="text" 
                placeholder="Zip code" 
                value={zipCode} 
                onChange={handleZipChange} 
                className={`zip-input ${isValidZip ? "" : "error"}`} 
              />
              {!isValidZip && <p className="error-text">⚠ Please enter a valid ZIP code</p>}

              <h3 className="category-title">What best describes why you're fundraising?</h3>
              <div className="categories">
                {categories.map((category) => (
                  <button 
                    key={category} 
                    className={`category-button ${selectedCategory === category ? "selected" : ""}`} 
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <button 
                className={`continue-button ${isValidZip && zipCode && selectedCategory ? "active" : ""}`} 
                onClick={handleContinueStepOne} 
                disabled={!isValidZip || !zipCode || !selectedCategory}
              >
                Continue
              </button>
            </>
          ) : (
            // Step Two - Select "Yourself", "Someone Else", or "Charity"
            isStepTwoVisible && (
              <div className="step-three visible">
                <h2>Who are you raising funds for?</h2>
                <div className="options">
                  <button className="option-button" onClick={() => setSelection("Yourself")}>
                    Yourself
                  </button>
                  <button className="option-button" onClick={() => setSelection("SomeoneElse")}>
                    Someone Else
                  </button>
                  <button className="option-button" onClick={() => setSelection("Charity")}>
                    Charity
                  </button>
                </div>
                <button 
                  className="continue-button"
                  onClick={handleContinueStepTwo}
                  disabled={!selection}
                >
                  Continue
                </button>
              </div>
            )
          )}

          {/* Step Three - Fundraising Goal */}
          {isStepThreeVisible && (
            <div className="step-three visible">
              <h2>What's your fundraising goal?</h2>
              <input
                type="number"
                placeholder="Enter goal amount"
                value={fundraisingGoal}
                onChange={(e) => setFundraisingGoal(e.target.value)}
                className="goal-input"
              />
              <button
                className="continue-button"
                onClick={handleStepThreeContinue}
                disabled={!fundraisingGoal}
              >
                Continue
              </button>
            </div>
          )}

          {/* Step Four - Add Media */}
          {isStepFourVisible && (
            <div className="step-four visible">
              
              <h3>Add Media</h3>
              <p>Using a bright and clear photo helps people connect to your fundraiser right away.</p>
              <p>Add a cover photo or video. If you find a better photo later, you can always change it.</p>

              {/* Media Upload Section */}
              <div className="upload-container" onClick={() => document.getElementById('fileInput').click()}>
                <div className="upload-area">
                  <p>Click here to upload a cover photo or video</p>
                </div>
                <input 
                  type="file" 
                  id="fileInput" 
                  accept="image/*,video/*" 
                  onChange={handleMediaUpload} 
                  className="upload-input" 
                  style={{ display: 'none' }} // Hide the actual input
                  multiple
                />
              </div>

              {/* Media Preview */}
              {media.length > 0 && (
                <div className="media-preview">
                  {media.map((item, index) => (
                    <div key={index} className="media-item">
                      {item.type === "image" ? (
                        <img src={item.url} alt={`Cover media ${index}`} className="media-preview-image" />
                      ) : (
                        <video controls className="media-preview-video">
                          <source src={item.url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Upload More Button */}
              {media.length > 0 && (
                <div className="upload-more-container">
                  <button className="upload-more-button" onClick={() => document.getElementById('fileInput').click()}>
                    Upload More Images
                  </button>
                </div>
              )}

              {/* Back and Continue Buttons */}
              <div className="buttons">
                <button className="continue-button" onClick={handleStepFourContinue} disabled={media.length === 0}>Continue</button>
              </div>
            </div>
          )}

          {/* Step Five - Tell Your Story */}
          {isStepFiveVisible && (
            <div className="step-five visible">
              <h3>Tell donors your story</h3>
              <div className="story-container">
                <div className="left-box">
                  <p>Share your story with your potential donors. Explain why you're fundraising and how the funds will be used.</p>
                </div>
                <div className="right-box">
                  <textarea
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    placeholder="Write your story here..."
                    className="story-textarea"
                  />
                </div>
              </div>

              <div className="buttons">
                <button className="continue-button" onClick={handleStepFiveContinue} disabled={!story}>Continue</button>
              </div>
            </div>
          )}

          {/* Review Step - Summary */}
          {isReviewVisible && (
            <div className="review-step visible">
              <h2>Review Your Fundraiser</h2>
              <div className="review-details">
                <h3>Location</h3>
                <p>{zipCode}</p>

                <h3>Category</h3>
                <p>{selectedCategory}</p>

                <h3>Fundraising Goal</h3>
                <p>${fundraisingGoal}</p>

                <h3>Raising Funds For</h3>
                <p>{selection}</p>

                <h3>Media</h3>
                {media.length > 0 ? (
                  media.map((item, index) => (
                    <div key={index}>
                      {item.type === "image" ? (
                        <img src={item.url} alt={`Preview ${index}`} className="media-preview-image" />
                      ) : (
                        <video controls className="media-preview-video">
                          <source src={item.url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No media uploaded</p>
                )}

                <h3>Your Story</h3>
                <p>{story}</p>
              </div>

              <button className="continue-button">Submit Fundraiser</button>
            </div>
          )}
        </div>
      </div>

      {/* Back Arrow Button at the Right Bottom */}
      {showBackButton && (
        <div className="back-arrow-container">
          <button className="back-arrow" onClick={handleBack}>
            &#8592; Back
          </button>
        </div>
      )}
    </div>
  );
};

export default FundraiserPage;
