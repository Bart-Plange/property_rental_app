import { Contact, Appointment } from '../components';
import backgroundImage from '../assets/homeImages/h13.jpg';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`}}
      ><div className="absolute inset-0 bg-black opacity-40 backdrop-blur-lg z-0" />
        <h1 className=" inset-0 text-6xl font-bold text-white z-10 relative">Get in Touch</h1>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-2">Phone: (123) 456-7890</p>
          <p className="text-lg mb-2">Email: contact@yourwebsite.com</p>
          <p className="text-lg mb-2">Address: 123 Main Street, City, State, ZIP</p>
        </div>

        {/* Forms Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            <Contact />
          </div>

          {/* Appointment Form */}
          <div id='booking' className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
            <Appointment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
