
import { FaCalculator, FaMoneyBillWave, FaHome, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/homeImages/mortgageintro.jpg'; // Replace with your image path

const MortgageIntroduction = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="Container absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <div className="text-center text-white mb-8 px-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Calculate Your Mortgage Easily
          </h1>
          <p className="text-lg lg:text-xl">
            Our mortgage calculator helps you understand your financial commitments and plan your home purchase more effectively. Get accurate calculations with just a few clicks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-4">
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
            <FaCalculator className="text-red-500 text-3xl mb-2" />
            <h2 className="text-xl font-semibold mb-2">Easy Calculation</h2>
            <p className="text-gray-600">
              Quickly calculate your mortgage payments with our intuitive tool.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
            <FaMoneyBillWave className="text-red-500 text-3xl mb-2" />
            <h2 className="text-xl font-semibold mb-2">Affordable Payments</h2>
            <p className="text-gray-600">
              Find the best payment plans that fit your budget.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
            <FaHome className="text-red-500 text-3xl mb-2" />
            <h2 className="text-xl font-semibold mb-2">Home Ownership</h2>
            <p className="text-gray-600">
              Plan for owning your dream home with ease.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
            <FaChartLine className="text-red-500 text-3xl mb-2" />
            <h2 className="text-xl font-semibold mb-2">Financial Insights</h2>
            <p className="text-gray-600">
              Get insights into your financial future and planning.
            </p>
          </div>
        </div>

        <div className="text-center px-4">
          <Link
            to="/mortgage" 
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full text-lg"
          >
            Calculate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MortgageIntroduction;
