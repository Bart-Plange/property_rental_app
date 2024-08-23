import { FaWifi, FaHeadset, FaShieldAlt, FaTree } from 'react-icons/fa';

const ImportanceSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row">
        {/* Left Side - Large Text */}
        <div className="lg:w-1/2 flex items-center justify-center lg:justify-start text-center lg:text-left">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Renting With Us?
            </h1>
            <p className="text-lg lg:text-xl text-gray-700">
              Renting with us provides you with a unique experience, where comfort and convenience meet. Our rooms are designed to offer you the best living experience possible.
            </p>
          </div>
        </div>
        {/* Right Side - List of Importance */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <ul className="list-disc pl-5 space-y-4 text-lg lg:text-xl text-gray-700">
            <li>Well-maintained and clean facilities.</li>
            <li>Proximity to essential services and amenities.</li>
            <li>Flexible rental terms and competitive pricing.</li>
            <li>Community events and support services.</li>
            <li>Easy access to transportation and local attractions.</li>
          </ul>
        </div>
      </div>
      {/* Bottom Section - Home Features */}
      <div className="bg-white py-6 mt-12">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-around items-center">
          <div className="flex items-center space-x-2">
            <FaWifi className="text-red-500 text-2xl" />
            <span className="text-lg">High-Speed WiFi</span>
          </div>
          <div className="flex items-center space-x-2 mt-4 lg:mt-0">
            <FaHeadset className="text-red-500 text-2xl" />
            <span className="text-lg">24/7 Support</span>
          </div>
          <div className="flex items-center space-x-2 mt-4 lg:mt-0">
            <FaShieldAlt className="text-red-500 text-2xl" />
            <span className="text-lg">Enhanced Security</span>
          </div>
          <div className="flex items-center space-x-2 mt-4 lg:mt-0">
            <FaTree className="text-red-500 text-2xl" />
            <span className="text-lg">Serene Environment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportanceSection;
