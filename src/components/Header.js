import React, { useState, useEffect } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white" // Changed background and added shadow
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center"> {/* Reduced padding */}
        {/* Logo */}
        <img
          className="h-8" // Adjusted height
          src="https://cdn.shopify.com/s/files/1/0572/9038/8470/files/MGI-PUZZLES_Logo_Green_400x.png?v=1678888469" // Replace with your actual logo URL
          alt="MGI-PUZZLES Logo"
        />

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700"> {/* Added text color */}
          <li><button className="hover:text-gray-900">Home</button></li>
          <li><button className="hover:text-gray-900">Shop by Age</button></li>
          <li><button className="hover:text-gray-900">Puzzles</button></li>
          <li><button className="hover:text-gray-900">Games</button></li>
          <li><button className="hover:text-gray-900">Learning Toys</button></li>
          <li><button className="hover:text-gray-900">About MGI-PUZZLES</button></li>
        </ul>

        {/* Icons and Currency */}
        <div className="flex items-center space-x-4 text-gray-700"> {/* Added spacing and color */}
        <div className="flex items-center border rounded-md px-2 py-1">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/1200px-Flag_of_Tanzania.svg.png"  // Tanzanian flag from Wikimedia
            alt="Tanzania Flag" 
            className="h-4 w-6 mr-1"
          /> 
          <select className="appearance-none outline-none bg-transparent">
            <option>TZS ཚ</option> 
          </select>
        </div>
          <button><FaSearch className="text-lg hover:text-gray-900" /></button>
          <button><FaUser className="text-lg hover:text-gray-900" /></button>
          <button><FaShoppingCart className="text-lg hover:text-gray-900" /></button>
        </div>
      </nav>
    </header>
  );
}

export default Header;