import React from 'react';
import img1 from '../images/products/SeaPuzzle.jpg';

const TopCategories = () => {
  const categories = [
    {
      title: 'SHOP PUZZLES',
      image: img1,
      bgColor: 'bg-blue-200',
    },
    {
      title: 'SHOP GAMES',
      image: img1,
      bgColor: 'bg-green-200',
    },
    {
      title: 'SHOP FLASH CARDS',
      image: img1,
      bgColor: 'bg-yellow-200',
    },
    {
      title: 'SHOP LEARNING TOYS',
      image: img1,
      bgColor: 'bg-red-200',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Find Top Categories Here!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className={`rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 ${category.bgColor} relative`}
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 hover:bg-opacity-50">
              <h3 className="text-lg font-semibold text-white text-center">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;