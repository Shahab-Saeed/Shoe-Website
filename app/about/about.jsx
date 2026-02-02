"use client"; 
import React, { useState } from "react";
import styles from "./about.module.css";

const About = () => {
  // State to track hovered image
  const [hoveredImage, setHoveredImage] = useState("/Assets/image/red_shoes1.png");

  return (
    <div className={styles.about}>
      <div className={styles.heading}>
        WEB <span>ABOUT</span>
      </div>

      <div className={styles.secondchild}>
        <div className={styles.child1}>
          {/* Left Column: small images */}
          <div className={styles.childa}>
            {[
              "/Assets/image/red_shoes1.png",
              "/Assets/image/red_shoes2.png",
              "/Assets/image/red_shoes3.png",
              "/Assets/image/red_shoes4.png",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onMouseEnter={() => setHoveredImage(img)} // Change big image on hover
              />
            ))}
          </div>

          {/* Right Column: big preview */}
          <div className={styles.childb}>
            <img src={hoveredImage} alt="" className={styles.preview} />
          </div>
        </div>
        <div className={styles.child2}>
            <div className={styles.text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum architecto mollitia dolore modi consequatur, facere sed nobis officia quod, rerum totam. Nulla quo, est obcaecati ex, iure magnam sint quibusdam consectetur id placeat delectus. Nobis vel, ullam, ipsam facilis necessitatibus unde vero molestiae eum blanditiis neque omnis labore atque quod nemo aperiam fugiat ex saepe, eius velit quo amet? Quibusdam facere, corporis delectus assumenda id, velit cum odit facilis, provident harum nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum eni
            </div>
        </div>
      </div>

      <div className={styles.thirdchild}>
        <div className={styles.btun}>
            Shop Now
        </div>
      </div>
    </div>
  );
};

export default About;
