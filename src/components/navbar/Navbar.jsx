import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold flex">
          <Link className='flex' to="/">
            <img className='w-10 h-10 bg-cover' src="/logo1.png" alt="logo" />
          </Link>
        </div>

        {/* Menu Button for Mobile */}
        <button 
          className="text-white block lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div 
          className={`lg:flex flex-grow items-center justify-center lg:justify-end ${isOpen ? 'block bg-gray-800 bg-opacity-90 backdrop-blur-md' : 'hidden'}`}
          style={{ position: 'absolute', top: '100%', left: 0, right: 0 }}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
            <li>
              <Link
                to="/"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/properties"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
