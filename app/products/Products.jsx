"use client";
import React from "react";
import Image from "next/image";
import styles from "./Products.module.css";

const Products = () => {
  const products = [
    {
      image: "/Assets/image/shoes1.png",
      title: "Sports Shoes",
      desc: "Comfortable & stylish",
      price: "$150",
      rating: "★★★★★",
    },
    {
      image: "/Assets/image/shoes2.png",
      title: "Running Shoes",
      desc: "Lightweight performance",
      price: "$180",
      rating: "★★★★★",
    },
    {
      image: "/Assets/image/shoes3.png",
      title: "Casual Shoes",
      desc: "Daily wear comfort",
      price: "$130",
      rating: "★★★★☆",
    },
    {
      image: "/Assets/image/shoes4.png",
      title: "Gym Shoes",
      desc: "Strong grip & support",
      price: "$170",
      rating: "★★★★★",
    },
    {
      image: "/Assets/image/shoes5.png",
      title: "Gym Shoes",
      desc: "Strong grip & support",
      price: "$170",
      rating: "★★★★★",
    },
    {
      image: "/Assets/image/shoes6.png",
      title: "Gym Shoes",
      desc: "Strong grip & support",
      price: "$170",
      rating: "★★★★★",
    },
    {
      image: "/Assets/image/shoes7.png",
      title: "Gym Shoes",
      desc: "Strong grip & support",
      price: "$170",
      rating: "★★★★★",
    },
    {
      image: "/Assets/image/shoes8.png",
      title: "Gym Shoes",
      desc: "Strong grip & support",
      price: "$170",
      rating: "★★★★★",
    },
  ];

  return (
    <section className={styles.products}>
      <h2 className={styles.heading}>PRODUCTS</h2>

      <div className={styles.cards}>
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={product.image}
              alt={product.title}
              width={90}
              height={90}
              className={styles.image}
            />

            <h3>{product.title}</h3>
            <p>{product.desc}</p>
            <span className={styles.price}>{product.price}</span>
            <div className={styles.stars}>{product.rating}</div>
            <button className={styles.btn}>Add to Cart →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
