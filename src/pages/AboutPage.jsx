import { Link } from 'react-router-dom';
import backgroundImage from '../assets/homeImages/about.jpg';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, filter: 'brightness(50%)' }}
      />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <section className="text-center text-white pt-64  mx-auto max-w-4xl">
          <div className='py-12'>
          <h2 className="text-7xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We are a dedicated team of real estate professionals and technology enthusiasts
            committed to revolutionizing the property rental experience. Our mission is to 
            provide a seamless, user-friendly platform that simplifies finding and renting properties.
          </p>
          </div>

        <div className='bg-gray-500 bg-opacity-80 p-6 rounded-lg shadow-lg'>
        <h3 className="text-3xl font-semibold mb-4">Our Features</h3>
          <ul className="list-disc list-inside mb-8 mx-auto max-w-3xl space-y-4 text-left">
            <li className="flex items-start space-x-2">
              <span className="text-xl font-semibold text-blue-600">•</span>
              <p><strong>Comprehensive Listings:</strong> Browse through a wide range of property listings with detailed information.</p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-xl font-semibold text-blue-600">•</span>
              <p><strong>Advanced Search Filters:</strong> Easily find the perfect property with our intuitive search filters.</p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-xl font-semibold text-blue-600">•</span>
              <p><strong>Virtual Tours:</strong> Explore properties with interactive virtual tours from the comfort of your home.</p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-xl font-semibold text-blue-600">•</span>
              <p><strong>Secure Booking:</strong> Make secure bookings and manage your rental process efficiently.</p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-xl font-semibold text-blue-600">•</span>
              <p><strong>Personalized Experience:</strong> Enjoy personalized recommendations and tailored property suggestions.</p>
            </li>
          </ul> 

          <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our goal is to bridge the gap between property seekers and property owners, making
            the rental process as smooth and efficient as possible. We leverage cutting-edge
            technology to ensure that you have the best tools at your disposal for finding and
            managing rental properties.
          </p>
        </div>
          <div className="text-center">
            <Link
              to="/properties"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Explore Properties
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
