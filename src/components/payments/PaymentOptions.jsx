import { useState } from 'react';

const PaymentOptions = ({ amount, onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handlePayment = () => {
    if (selectedOption === '') {
      alert('Please select a payment method.');
      return;
    }

    // Handle payment processing logic here
    alert(`Payment of $${amount} processed using ${selectedOption}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Select Payment Method</h1>
        <p className="text-xl text-center mb-6">Amount: ${amount}</p>

        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="mobileMoney"
              name="paymentMethod"
              value="Mobile Money"
              checked={selectedOption === 'Mobile Money'}
              onChange={() => handleOptionChange('Mobile Money')}
              className="mr-2"
            />
            <label htmlFor="mobileMoney" className="text-lg">Mobile Money</label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="cardPayment"
              name="paymentMethod"
              value="Card Payment"
              checked={selectedOption === 'Card Payment'}
              onChange={() => handleOptionChange('Card Payment')}
              className="mr-2"
            />
            <label htmlFor="cardPayment" className="text-lg">Card Payment</label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="bankTransfer"
              name="paymentMethod"
              value="Bank Transfer"
              checked={selectedOption === 'Bank Transfer'}
              onChange={() => handleOptionChange('Bank Transfer')}
              className="mr-2"
            />
            <label htmlFor="bankTransfer" className="text-lg">Bank Transfer</label>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
