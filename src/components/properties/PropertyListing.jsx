import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaBath, FaBed, FaRulerCombined } from 'react-icons/fa';
import PropertyModal from './PropertyModal';
import propertyData from '../../assets/property/property.json';

const PropertyListing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [compareProperties, setCompareProperties] = useState([]);

  const filteredProperties = propertyData.filter(property =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCompareClick = (property) => {
    if (compareProperties.length === 0) {
      setCompareProperties([property]);
    } else if (compareProperties.length === 1) {
      setCompareProperties([...compareProperties, property]);
    } else {
      // Optionally show a message or handle the case where more than two properties are selected
    }
  };

  const handleRemoveComparison = (property) => {
    setCompareProperties(compareProperties.filter(p => p.id !== property.id));
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Property Listing</h2>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for properties"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {filteredProperties.map(property => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer relative"
            onClick={() => handlePropertyClick(property)}
          >
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-green-500 text-xs font-bold">{property.status || 'For Sale'}</span>
                <AiOutlineHeart className="text-red-500" />
              </div>
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="text-sm text-gray-500">{property.location}</p>
              <div className="flex items-center text-gray-500 mt-2">
                <FaBed className="mr-1" /> {property.beds}bedroom 
                <span className="ml-4"><FaBath className="mr-1" /> {property.baths} Baths</span>
                <span className="ml-4"><FaRulerCombined className="mr-1" /> {property.size} sqft</span>
              </div>
              <p className="text-red-500 mt-4">{property.amount}</p>
              <button
                className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={(e) => { e.stopPropagation(); handleCompareClick(property); }}
              >
                Compare
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={closeModal}
        />
      )}
      {compareProperties.length === 2 && (
        <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center z-50 p-6">
          <h2 className="text-2xl font-bold mb-4">Compare Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {compareProperties.map(property => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg p-4">
                <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <div className="flex items-center text-gray-500 mb-2">
                  <FaBed className="mr-1" /> {property.rooms} Rooms
                  <span className="ml-4"><FaBath className="mr-1" /> {property.baths} Baths</span>
                  <span className="ml-4"><FaRulerCombined className="mr-1" /> {property.size} sqft</span>
                </div>
                <p className="text-red-500 text-xl font-bold">{property.amount}</p>
                <button
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                  onClick={() => handleRemoveComparison(property)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyListing;
