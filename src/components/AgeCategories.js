import React from 'react';

const AgeCategories = () => {
  const categories = [
    { age: '0-2', color: 'bg-red-500' },
    { age: '3-4', color: 'bg-green-500' },
    { age: '5-6', color: 'bg-blue-500' },
    { age: '6-12', color: 'bg-teal-500' },
    { age: 'Teens', color: 'bg-purple-500' },
    { age: 'Adults', color: 'bg-orange-500' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8 leading-tight">
        Play, Learn and Grow - Age by Age!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.age}
            className={`flex flex-col items-center justify-center rounded-xl shadow-lg p-8 ${category.color} text-white text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl`}
          >
            <div className="text-4xl font-bold mb-3">{category.age}</div>
            <div className="text-xl font-medium opacity-80">years</div>
            <button className="mt-6 bg-white text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-200">
              Choose
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeCategories;
