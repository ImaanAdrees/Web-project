"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "/chocolate cake.avif", alt: "Biryani" },
    { src: "/AiKarahi.jpg", alt: "Pakistani Food" },
    { src: "/AiBiryani.jpg", alt: "Naan Karahi" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <section>
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="intrinsic"
              width={800}
              height={500}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
