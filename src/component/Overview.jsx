import React from "react";
import '../styles/Overview.css';
import { Link } from "react-router-dom";

const OverviewPage = ({ title, author, publishDate, image, description,url, onClose }) => {
  return (
    <div className="overlay">
      <div className="overview-container">
       
        <div className="overview-header">
          <span className="publish-date">{publishDate}</span>
          <span className="author">{author}</span>
        </div>

        
        <div className="overview-image">
          <Link to={url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="Overview" />
          </Link>
        </div>

        
        <div className="overview-description">
          <p>{description}</p>
          <a href={url} target="_blank">Learn More</a>
        </div>

        
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default OverviewPage;
