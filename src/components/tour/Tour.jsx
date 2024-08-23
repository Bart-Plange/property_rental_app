import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import propertyData from '../../assets/property/property.json'; // Import the JSON data directly

const Tour = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const foundProperty = propertyData.find(item => item.id === parseInt(propertyId));
    if (foundProperty) {
      setProperty(foundProperty);
      setDescription(foundProperty.description); // Initialize description
    }
  }, [propertyId]);

  const handleDescriptionChange = () => {
    const newDescription = prompt('Enter new description:', description);
    if (newDescription) {
      setDescription(newDescription); // Update state with new description
    }
  };

  if (!property) return <div className="text-center text-xl font-semibold mt-12">Loading...</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Back Arrow */}
      <button
        className="mb-4 text-blue-500 hover:text-blue-600"
        onClick={() => navigate('/properties')}
      >
        &larr; Back to Properties
      </button>
      
      {/* Main Hero Image */}
      <img
        src={property.image}
        alt={`${property.title} Hero`}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />

      {/* Property Details */}
      <h1 className="text-4xl font-bold mb-6">{property.title}</h1>
      <p className="text-gray-600 text-2xl mb-4">{property.location}</p>
      <p className="text-gray-800 text-lg mb-6">{description}</p>
      <p className="text-red-600 text-2xl font-bold mb-4">${property.price}</p>
      <div className="flex items-center text-gray-500 mb-6">
        <FaBed className="mr-2" /> {property.beds} Beds
        <span className="ml-4"><FaBath className="mr-2" /> {property.baths} Baths</span>
        <span className="ml-4"><FaRulerCombined className="mr-2" /> {property.area} sqft</span>
      </div>

      {/* Property Additional Images */}
      <div className="mb-8">
        {property.additionalImages.map((img, index) => (
          <img key={index} src={img} alt={`Property Image ${index + 1}`} className="w-full h-80 object-cover rounded-lg mb-4" />
        ))}
      </div>

      {/* Videos */}
      <div className="mb-8">
        {property.videos.map((video, index) => (
          <div key={index} className="mb-4">
            <video controls className="w-full rounded-lg">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      {/* Update Description Button */}
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
        onClick={handleDescriptionChange}
      >
        Update Description
      </button>
    </div>
  );
};

export default Tour;
