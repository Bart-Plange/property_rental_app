import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <img className='w-12 mb-4' src="/logo1.png" alt="" />
            <h1 className="text-2xl font-bold mb-2">HomeFinder</h1>
            <p className="text-gray-400 w-1/2">Your trusted partner for finding the perfect home. Discover a wide range of properties and enjoy a seamless experience.</p>
          </div>
          
          {/* Links */}
          <div className="flex flex-col md:flex-row mb-6 md:mb-0">
            <div className="flex flex-col mr-10">
              <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
              <a href="/" className="text-gray-400 hover:text-white mb-1">Home</a>
              <a href="/properties" className="text-gray-400 hover:text-white mb-1">Properties</a>
              <a href="/about" className="text-gray-400 hover:text-white mb-1">About</a>
              <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">© 2024 HomeFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
