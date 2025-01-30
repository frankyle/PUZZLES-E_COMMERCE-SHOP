import React, { useRef, useEffect } from "react";
import img1 from '../../images/products/TrainWooden.jpg';

import './ProductSlider.css';
const ToysSlider = () => {
  const productData = [
    {
      image: img1,
      title: "8 Pack Rack Wooden Puzzles for Toddlers",
      subtitle: "ABC, Numbers & Animals",
      price: "$44.99",
      rating: 4.8,
    },
    {
      image: img1,
      title: "100 Pcs Search & Find Puzzles for Kids",
      subtitle: "Maps & Space",
      price: "$29.99",
      rating: 4.6,
    },
    {
      image: img1,
      title: "Magnetic Book 3x36 Pcs",
      subtitle: "Princess, Unicorns & Me",
      price: "From $12.98",
      rating: 4.7,
    },
    {
      image: img1,
      title: "Colorful Building Blocks Set",
      subtitle: "Imaginative Play & Creativity",
      price: "$39.99",
      rating: 4.9,
    },
    {
      image: img1,
      title: "Interactive Musical Toy Piano",
      subtitle: "Lights & Sounds",
      price: "$24.99",
      rating: 4.5,
    },
    {
      image: img1,
      title: "DIY Craft Kit for Kids",
      subtitle: "Creative & Fun",
      price: "$19.99",
      rating: 4.8,
    },
    {
      image: img1,
      title: "Flash Learning Cards Pack",
      subtitle: "Colors, Shapes & Words",
      price: "$9.99",
      rating: 4.6,
    },
    {
      image: img1,
      title: "Brain Teaser Puzzle Game",
      subtitle: "Fun & Educational",
      price: "$15.99",
      rating: 4.7,
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (sliderRef.current) {
        const maxScrollLeft =
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

        // If we've reached the end of the slider, reset to the beginning
        if (sliderRef.current.scrollLeft >= maxScrollLeft) {
          sliderRef.current.scrollLeft = 0;
        } else {
          // Scroll by a fixed amount
          sliderRef.current.scrollLeft += 300;
        }
      }
    }, 4000); // Slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Most Popular Toys!
          </h2>
          <a href="#" className="text-blue-600 hover:underline text-lg">
            View All →
          </a>
        </div>
        {/* Grayish background for the slider */}
        <div className="bg-gray-200 p-6 rounded-lg">
          <div
            className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar"
            ref={sliderRef}
          >
            {productData.map((product, index) => (
              <div
                key={index}
                className="w-80 shrink-0 bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.subtitle}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl font-bold text-gray-800">{product.price}</p>
                  {product.rating && (
                    <p className="text-yellow-500 text-sm font-medium">
                      {product.rating} ★
                    </p>
                  )}
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-full font-medium hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysSlider;
