import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewsSlider = () => {
  const reviews = [
    {
      text: 'Inspire Learning Through Play',
      rating: 5,
      image: '/path/to/review1.jpg', // Replace with your image path
      alignment: 'left',
    },
    {
      text: '100K+ Positive Reviews',
      rating: 4,
      image: '/path/to/review2.jpg', // Replace with your image path
      alignment: 'right',
    },
    {
      text: 'Another great review!',
      rating: 5,
      image: '/path/to/review3.jpg', // Replace with your image path
      alignment: 'left',
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(intervalId);
  }, [reviews.length]);

  const currentReview = reviews[currentReviewIndex];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-2xl ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`flex flex-col-reverse md:flex-row items-center gap-10 transition-all duration-700 ease-in-out transform ${
            currentReview.alignment === 'right' ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Review Image */}
          <div
            className="md:w-1/2 relative group"
            style={{ perspective: 1000 }}
          >
            <div className="w-full rounded-xl overflow-hidden shadow-xl bg-white transform group-hover:scale-105 transition-all duration-500">
              <img
                src={currentReview.image}
                alt="Review"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Review Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <div className="flex justify-center md:justify-start">
              {renderStars(currentReview.rating)}
            </div>
            <p className="text-2xl font-semibold text-gray-800">
              {currentReview.text}
            </p>
            <p className="text-gray-600 leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              luctus urna sed urna ultricies ac tempor dui sagittis."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;
