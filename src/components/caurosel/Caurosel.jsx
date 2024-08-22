import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const carouselItems = [
  {
    id: 1,
    image: "https://via.placeholder.com/800x400", // Replace with actual images
    title: "Luxury Villa",
    description: "A beautiful villa with a stunning sea view.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/800x400", // Replace with actual images
    title: "Modern Apartment",
    description: "A sleek apartment in the heart of the city.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/800x400", // Replace with actual images
    title: "Cozy Cottage",
    description: "A quaint cottage perfect for a relaxing getaway.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="Container w-full h-80">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-lg mb-4">{item.description}</p>
              <div className="hidden group-hover:block flex space-x-4">
                <a href="#" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full">
                  Buy
                </a>
                <a href="#" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full">
                  Rent
                </a>
                <a href="#" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full">
                  Schedule Tour
                </a>
                <a href="#" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-700"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-700"
      >
        <FaArrowRight />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
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
