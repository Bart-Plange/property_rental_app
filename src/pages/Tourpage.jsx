// src/pages/TourPage.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tour, PaymentOptions } from '../components';
import { useNavigate } from 'react-router-dom'; // For navigation


const TourPage = () => {
  const { propertyId } = useParams(); 
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        // Fetch property data from the JSON file
        const response = await fetch('../assets/property/property.json');
        const data = await response.json();
        const fetchedProperty = data.find(p => p.id === propertyId);
        if (fetchedProperty) {
          setProperty(fetchedProperty);
        }
      } catch (error) {
        console.error('Error fetching property data:', error);
      }
    };

    fetchProperty();
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

  if (!property) return <div>Loading...</div>; // Show loading state or spinner

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Tour property={property} />
      <div className="flex justify-center space-x-4 mt-6">
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
