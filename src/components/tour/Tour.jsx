import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const Tour = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Fetch the property details from your data source
    fetch('../../assets/property/property.json')
      .then(response => response.json())
      .then(data => {
        const foundProperty = data.find(item => item.id === parseInt(propertyId));
        setProperty(foundProperty);
      });
  }, [propertyId]);

  if (!property) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <p className="text-gray-600 mb-4">{property.location}</p>
      <p className="text-gray-700 mb-4">{property.description}</p>
      <p className="text-red-500 text-xl font-bold mb-4">{property.price}</p>
      <div className="flex items-center text-gray-500 mb-4">
          <FaBed className="mr-1" /> {property.beds} Beds
          <span className="ml-4"><FaBath className="mr-1" /> {property.baths} Baths</span>
          <span className="ml-4"><FaRulerCombined className="mr-1" /> {property.area} sqft</span>
        </div>
       {/* Property Images */}
       <div className="mb-4">
          {property.images.map((img, index) => (
            <img key={index} src={img} alt={`Property Image ${index + 1}`} className="w-full h-64 object-cover rounded-md mb-4" />
          ))}
        </div>

      <div className="mb-8">
        {property.videos.map((video, index) => (
          <div key={index} className="mb-4">
            <video controls className="w-full">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tour;
