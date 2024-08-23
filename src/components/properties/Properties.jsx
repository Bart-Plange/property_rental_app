
import { Link } from 'react-router-dom';
import propertiesData from '../../assets/property/property.json'; // Adjust the path as necessary

const Properties = () => {
  // Limit the properties to display only the first three
  const propertiesToShow = propertiesData.slice(0, 3);

  return (
    <div className="p-4">
      <div className="Container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {propertiesToShow.map((property) => (
          <div key={property.id} className="relative bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-40 object-cover"
            />
            {property.discount && (
              <div className="absolute top-0 right-0 m-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                {property.discount}
              </div>
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{property.title}</h2>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <p className="text-gray-500 mb-2">Rooms: {property.beds}</p>
              <p className="text-gray-500">Size: {property.area} sqr</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          to="/properties" // Navigate to the main properties page
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full"
        >
          View All Properties
        </Link>
      </div>
    </div>
  );
};

export default Properties;
