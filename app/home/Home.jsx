import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        {/* Left Side */}
        <div className={styles.left}>
          {/* Heading */}
          <div className={styles.heading}>
            <h1>
              Nike <br /> Collection
            </h1>
          </div>

          {/* Paragraph */}
          <div className={styles.paragraph}>
            <p>
              Discover our wide range of shoes, designed for comfort and style.
              From sneakers to formal shoes, find the perfect pair for any
              occasion. Experience quality and fashion combined in one place.
            </p>
          </div>

          {/* Button */}
          <div className={styles.buttonWrapper}>
            <button className={styles.shopBtn}>
              SHOP NOW <span className={styles.arrow}>&rarr;</span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.right}>
          <div className={styles.productImage}>
            <img src="/Assets/image/shoes.png" alt="Product" />
          </div>
          <ul className={styles.socialIcons}>
            {/* Facebook */}
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="black"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.01 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17.01 22 12z" />
              </svg>
            </li>

            {/* Twitter */}
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="black"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9 12.15 12.15 0 01-8.82-4.47 4.27 4.27 0 001.32 5.71A4.27 4.27 0 012 9.71v.05a4.28 4.28 0 003.44 4.19 4.28 4.28 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.57 8.57 0 012 19.54a12.07 12.07 0 006.56 1.92c7.88 0 12.2-6.54 12.2-12.2l-.01-.56A8.72 8.72 0 0024 4.56a8.47 8.47 0 01-2.54.7z" />
              </svg>
            </li>

            {/* Instagram */}
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 448 512"
                fill="black"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 256 287.7 141 224.1 141zm0 189.6c-41.4 0-74.8-33.4-74.8-74.8S182.7 181 224.1 181s74.8 33.4 74.8 74.8-33.4 74.8-74.8 74.8zm146.4-194.3c0 14.9-12 27-27 27s-27-12.1-27-27 12-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.5S391.8 1.7 356.1 0C320.4-1.7 127.6-1.7 91.9 0 56.2 1.7 24.6 9.9-1.6 36.2S-1.7 120.4 0 156.1c1.7 35.7 9.9 67.3 36.2 93.5s57.8 34.5 93.5 36.2c35.7 1.7 228.5 1.7 264.2 0 35.7-1.7 67.3-9.9 93.5-36.2s34.5-57.8 36.2-93.5c1.7-35.7 1.7-228.5 0-264.2zM398.8 388c-7.8 19.5-22.9 34.6-42.4 42.4-29.4 11.7-99.2 9-132.4 9s-103 2.6-132.4-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.2-9-132.4s-2.6-103 9-132.4c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.2-9 132.4-9s103-2.6 132.4 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.4 9 99.2 9 132.4s2.7 103-9 132.4z" />
              </svg>
            </li>

            {/* LinkedIn */}
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="black"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.57 53.57 0 1153.57-53.57 53.57 53.57 0 01-53.57 53.57zm394.86 341h-92.68V302.4c0-34.7-12.4-58.3-43.46-58.3-23.71 0-37.82 15.93-44.02 31.31-2.27 5.53-2.83 13.2-2.83 20.93V448h-92.76s1.24-236.38 0-260.1h92.76v36.8c12.32-19 34.38-46 83.62-46 61.1 0 106.88 39.87 106.88 125.46V448z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
