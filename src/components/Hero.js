import React, { useState, useEffect } from "react";
import img1 from "./../images/hero/kidpuzzle.jpg";
import img2 from "./../images/hero/kidabc.jpg";

const HeroCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-6">
            <div className="text-center text-white max-w-4xl">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl leading-relaxed">
                {slide.description}
              </p>
              {slide.button && (
                <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-full font-semibold text-lg">
                  {slide.button.text}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-blue-500 scale-125" : "bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

// Example slides data
const slides = [
  {
    image: img2,
    title: "Unleash Your Inner Child",
    description:
      "Discover a world of captivating puzzles, engaging toys, and exciting games for kids of all ages. Spark creativity, foster learning, and create lasting memories.",
    button: { text: "Shop Now" },
  },
  {
    image: img1,
    title: "Puzzles for Every Mind",
    description:
      "From classic jigsaws to brain-teasing 3D puzzles, challenge yourself and unlock hours of entertainment. Perfect for solo relaxation or family fun.",
    button: { text: "Explore Puzzles" },
  },
  {
    image: img1,
    title: "Games That Bring People Together",
    description:
      "Gather your friends and family for unforgettable game nights. Explore our wide selection of board games, card games, and more!",
    button: { text: "See Our Games" },
  },
];

const MyComponent = () => {
  return (
    <div>
      <HeroCarousel slides={slides} />
    </div>
  );
};

export default MyComponent;
