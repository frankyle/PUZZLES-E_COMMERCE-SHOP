import React, { useState, useEffect } from "react";

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 flex items-center justify-center px-6">
            <div className="text-center text-white max-w-4xl">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl leading-relaxed drop-shadow-md">
                {slide.description}
              </p>
              {slide.button && (
                <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-full font-semibold text-lg shadow-md">
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
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-gray-500 hover:bg-white"
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
    image:
      "https://images.unsplash.com/photo-1589828557168-c923d606366b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Unleash Your Inner Child",
    description:
      "Discover a world of captivating puzzles, engaging toys, and exciting games for kids of all ages. Spark creativity, foster learning, and create lasting memories.",
    button: { text: "Shop Now" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1556817411-32ae58572ef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Puzzles for Every Mind",
    description:
      "From classic jigsaws to brain-teasing 3D puzzles, challenge yourself and unlock hours of entertainment. Perfect for solo relaxation or family fun.",
    button: { text: "Explore Puzzles" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1579200423851-789a69291991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
