import { AiOutlineClose } from 'react-icons/ai';
import { FaBath, FaBed, FaRulerCombined } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // For navigation

const PropertyModal = ({ property, onClose }) => {
  const navigate = useNavigate();

  const handleVisit = () => {
    // Navigate to the contact page with a delay to ensure the fragment is processed
    navigate('/contact');
    setTimeout(() => {
      const element = document.getElementById('booking');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleTour = () => {
    // Navigate to the Tour page with the property ID
    navigate(`/tour/${property.id}`);
  };

  if (!property) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3 relative p-6">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
        <p className="text-gray-600 mb-4">{property.location}</p>
        <div className="flex items-center text-gray-500 mb-4">
          <FaBed className="mr-1" /> {property.beds} Beds
          <span className="ml-4"><FaBath className="mr-1" /> {property.baths} Baths</span>
          <span className="ml-4"><FaRulerCombined className="mr-1" /> {property.area} sqft</span>
        </div>
        <p className="text-gray-700 mb-4">{property.description}</p>
        <div className="flex space-x-6">
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
            onClick={handleVisit} // Navigate to booking section
          >
            Visit
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={handleTour} // Navigate to Tour page
          >
            Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
