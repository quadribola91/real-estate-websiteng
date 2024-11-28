import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-blue-500 p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <a href="/">RENTWITEASE NG</a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white"
        >
          {/* Display "hamburger" icon when the menu is closed, and "X" when it's open */}
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-8 text-white">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/book-inspection">Book Inspection</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      {/* Mobile menu - Render only if menu is open */}
      {isMenuOpen && (
        <div
          className={`lg:hidden mt-4 space-y-4 text-white grid grid-cols-1 text-center absolute top-16 right-0 w-full bg-blue-500 shadow-lg`}
          style={{ maxHeight: 'calc(100vh - 4rem)' }} // Prevent vertical overflow
        >
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/book-inspection">Book Inspection</a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
