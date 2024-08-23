// src/pages/TourPage.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tour, PaymentOptions } from '../components';
import propertyData from '../assets/property/property.json'; // Import the JSON data directly

const TourPage = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const navigate = useNavigate();

  // Find the property based on ID
  useEffect(() => {
    const foundProperty = propertyData.find(item => item.id === parseInt(propertyId));
    setProperty(foundProperty);
  }, [propertyId]);

  const handleBuy = () => {
    setPaymentAmount(property.price); // Set the payment amount
    setShowPaymentOptions(true); // Show payment options modal
  };

  const handleRent = () => {
    setPaymentAmount(property.price); // Set the payment amount
    setShowPaymentOptions(true); // Show payment options modal
  };

  const handleClosePaymentOptions = () => {
    setShowPaymentOptions(false); // Close payment options modal
  };

  const handleScheduleVisit = () => {
    navigate(`/contact#booking`, {
      state: {
        propertyId: property.id,
        propertyTitle: property.title,
        propertyLocation: property.location,
        propertyPrice: property.price,
      },
    });
  };

  if (!property) return <div className="text-center text-xl font-semibold mt-12">Loading...</div>;

  return (
    <div className="relative bg-gray-100 min-h-screen p-8">
      <Tour property={property} />

      {/* Fixed Buttons */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleBuy}
        >
          Buy
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          onClick={handleRent}
        >
          Rent
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          onClick={handleScheduleVisit}
        >
          Schedule a Visit
        </button>
      </div>

      {/* Map */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Property Location</h2>
        <div className="relative w-full h-64">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(property.location)}&key=YOUR_GOOGLE_MAPS_API_KEY`}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* PaymentOptions Modal */}
      {showPaymentOptions && (
        <PaymentOptions
          amount={paymentAmount}
          onClose={handleClosePaymentOptions}
        />
      )}
    </div>
  );
};

export default TourPage;
