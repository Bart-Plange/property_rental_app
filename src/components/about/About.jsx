
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Welcome to [Your Company Name]! Our mission is to revolutionize the property rental experience by providing a seamless and user-friendly platform for finding and booking your next home. We are committed to offering the best service and tools to help you navigate the rental market with ease.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-700 mb-4">
            Our team is composed of experienced professionals dedicated to improving the property rental process. We combine industry expertise with innovative technology to deliver a top-notch user experience. Meet our team of experts who are passionate about making your rental journey as smooth as possible.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions or feedback? We're here to help! Reach out to us through our contact page, or drop us an email at support@[yourcompany].com.
          </p>
          <div className="text-center">
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
