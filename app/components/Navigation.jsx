"use client";

import React, { useState } from "react";
import "@/app/components/Navigation.css";

const Navigation = () => {

  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Scroll to section by ID
  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false); // close mobile menu
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav className="nav">
        {/* Logo */}
        <div className="firstchild">
          <a href="" className="mainh">Shoe<span className="editablecharacter">s</span></a>
        </div>

        {/* Desktop Links */}
        <div className="secondchild">
          <ul>
            <li><button onClick={() => handleLinkClick("#home")}>Home</button></li>
            <li><button onClick={() => handleLinkClick("#about")}>About</button></li>
            <li><button onClick={() => handleLinkClick("#products")}>Products</button></li>
            <li><button onClick={() => handleLinkClick("#review")}>Reviews</button></li>
            <li><button onClick={() => handleLinkClick("#services")}>Services</button></li>
            <li><button onClick={() => handleLinkClick("#contact")}>Contact</button></li>
          </ul>
        </div>

        {/* Icons */}
        <div className="thirdchild">
          {/* your SVG icons here */}
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <ul>
            <li><button onClick={() => handleLinkClick("#home")}>Home</button></li>
            <li><button onClick={() => handleLinkClick("#about")}>About</button></li>
            <li><button onClick={() => handleLinkClick("#products")}>Products</button></li>
            <li><button onClick={() => handleLinkClick("#review")}>Reviews</button></li>
            <li><button onClick={() => handleLinkClick("#services")}>Services</button></li>
          </ul>
        </div>
      )}

      <div className="header-bottom-line"></div>
    </header>
  );
};

export default Navigation;
