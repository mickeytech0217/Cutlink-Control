import React from "react";
import TextBox from "./TextBox";
import "./LandingPage.css";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="main-container">
      <div className="showcase-area">
        <div className="left">
          <h1 className="hero-title">
            Here you have full control over your links.
          </h1>
          <h2 className="hero-subtitle">
            Link Management Platform with all features you need in one place.
            Shorten, brand, manage and track your links the easy way.
          </h2>
        </div>
        <div className="right">
          <div className="hero-img"></div>
        </div>
      </div>
      <div className="link-area">
        <TextBox />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
