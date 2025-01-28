import React, { useRef, useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonialsData = [
    {
      title: 'Beautiful, unique and educational puzzle',
      text: 'This puzzle was exactly what my family needed. The holes are the perfect size to easily remove the pieces. The value of getting 3 of these beautifully made puzzles is amazing. I especially love the interesting themes they have as you match the puzzle to its place.',
      author: 'A Crandell',
      verified: true,
    },
    {
      title: 'Fun quiz game for the whole family!',
      text: 'Very happy with this game. Simple to play and hours and hours of fun. My kids are 8 and 11 and really enjoyed it. Was great to get them off their screens and around the table. Comes with hundreds of questions, Would recommend!',
      author: 'Laura Edwards',
      verified: true,
    },
    {
      title: 'So cute puzzle',
      text: '', // Add text if available
      author: 'nota',
      verified: true,
    },
    {
      title: '3 year old approved',
      text: 'My three year old loves his puzzles! I like that they are wood and won\'t bend easily like regular puzzle pieces. Good details and info. The carrying bag is awesome so he can easily carry them and so he doesn\'t lose the pieces.',
      author: 'Cassandra G',
      verified: true,
    },
     {
      title: 'Best purchase',
      text: 'This mat is so soft and child was very happy by looking at the pictures. I recommend this mat.',
      author: 'Shilpy Madaka',
      verified: true,
    },
    {
      title: 'Kids Flash Cards',
      text: '', // Add text if available
      author: 'four',
      verified: true,
    },
    {
      title: 'TikTok Review',
      text: '', // Add text if available
      author: '',
      verified: false,
    },
     {
      title: 'Chat',
      text: '', // Add text if available
      author: '',
      verified: false,
    },
  ];

  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (scrollAmount) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollAmount;
      setScrollPosition(sliderRef.current.scrollLeft);
    }
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Testimonials</h2> {/* Add a heading */}
        <div className="hidden md:grid grid-cols-4 gap-4"> {/* Grid for desktop */}
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h3 className="text-lg font-medium mb-2">{testimonial.title}</h3>
              {testimonial.verified && (
                <p className="text-xs text-gray-500 mb-2">Verified Purchase</p>
              )}
              <p className="text-gray-700 text-sm mb-4">{testimonial.text}</p>
              <p className="text-gray-600 font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
        <div className="md:hidden relative overflow-x-auto whitespace-nowrap scroll-smooth" ref={sliderRef}>
            <div className="inline-flex space-x-4">
                {testimonialsData.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg p-6 shadow-md w-80 shrink-0"
                    >
                        <h3 className="text-lg font-medium mb-2">{testimonial.title}</h3>
                        {testimonial.verified && (
                            <p className="text-xs text-gray-500 mb-2">Verified Purchase</p>
                        )}
                        <p className="text-gray-700 text-sm mb-4">{testimonial.text}</p>
                        <p className="text-gray-600 font-medium">{testimonial.author}</p>
                    </div>
                ))}
            </div>
             <button
            onClick={() => handleScroll(-300)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100"
            style={{ display: scrollPosition > 0 ? 'block' : 'none' }} // Conditionally show the button
          >
            &lt;
          </button>
          <button
            onClick={() => handleScroll(300)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100"
            style={{ display: sliderRef.current && sliderRef.current.scrollWidth > sliderRef.current.clientWidth ? 'block' : 'none' }} // Conditionally show the button
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;