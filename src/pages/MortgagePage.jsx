import { MortgageCalculator } from '../components';
import { FaWifi, FaConciergeBell, FaShieldAlt, FaLeaf } from 'react-icons/fa';

const MortgagePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Mortgage Information</h1>
          <p className="mt-2 text-lg">Explore our mortgage options and use our calculator to estimate your payments.</p>
        </div>
      </header>

      <MortgageCalculator />

      {/* Additional Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose Our Mortgages?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <FaWifi className="text-red-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">High-Speed Internet</h3>
                <p className="text-gray-600">Stay connected with our high-speed internet included in the property.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <FaConciergeBell className="text-red-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">24/7 Support</h3>
                <p className="text-gray-600">Enjoy round-the-clock support for any property-related needs.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <FaShieldAlt className="text-red-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Enhanced Security</h3>
                <p className="text-gray-600">Feel safe with our top-notch security systems in place.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <FaLeaf className="text-red-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Serene Environment</h3>
                <p className="text-gray-600">Experience tranquility with our carefully selected locations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MortgagePage;
