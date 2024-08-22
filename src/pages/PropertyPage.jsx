import { useLocation } from 'react-router-dom';
import { Map, PropertyListing } from '../components';
import backgroundImage from '../assets/homeImages/hhh.jpg';

const PropertyPage = () => {
  const location = useLocation();
  
  // Extract the search query from the URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  return (
    <div className="bg-gray-100 relative">
      {/* Hero Section */}
      <div
        className="h-96 bg-cover h-80 bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }} 
      >
        <h1 className="text-5xl font-bold text-white">Find Your Dream Property</h1>
      </div>

      {/* Search and Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between mb-8">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
            Filters
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
            Sort by: Price
          </button>
        </div>

        {/* Property Listing and Map Section */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Properties</h2>
              <PropertyListing searchQuery={searchQuery} />
            </div>

            {/* Sticky Map Section */}
            <div className="lg:col-span-1 fixed top-32 right-0 w-1/3 h-screen overflow-y-auto p-4">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
