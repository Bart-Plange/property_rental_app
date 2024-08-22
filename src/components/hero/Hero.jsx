import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import backgroundImage from '../../assets/homeImages/hhh.jpg';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/properties?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-lg z-0" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Experience Your New Home
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Find your perfect place with ease and comfort.
        </p>

        <div className="w-full max-w-lg flex items-center bg-white rounded-full overflow-hidden shadow-lg mb-8 mx-auto">
          <input
            type="text"
            placeholder="Search for properties"
            className="flex-grow p-4 text-gray-700 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            className="p-4 bg-red-500 text-white flex items-center justify-center"
            onClick={handleSearch}
          >
            <FiSearch />
          </button>
        </div>

        <div className="flex space-x-4 justify-center">
          <Link
            to="/properties"
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full"
          >
            Buy
          </Link>
          <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full">
            Book
          </button>
          <Link
            to="/mortgage"
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full"
          >
            Mortgage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
