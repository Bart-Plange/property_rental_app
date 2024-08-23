import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import carouselData from '../../assets/property/property.json'; // Adjust the path as needed

const Carousel = () => {
  // Limit the number of items to 6
  const limitedData = carouselData.slice(0, 6);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? limitedData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === limitedData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="container w-full h-80 relative">
        {limitedData.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-6">
              <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
              <p className="text-lg mb-6 text-center">{item.description}</p>
              <div className="flex space-x-4">
                <a
                  href={`/properties/${item.id}`}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
                >
                  Buy
                </a>
                <a
                  href={`/properties/${item.id}`}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
                >
                  Rent
                </a>
                <a
                  href={`/schedule-tour/${item.id}`}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
                >
                  Schedule Tour
                </a>
                <a
                  href={`/details/${item.id}`}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-700 z-20"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-700 z-20"
      >
        <FaArrowRight />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {limitedData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-red-500' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
