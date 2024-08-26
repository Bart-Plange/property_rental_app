import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaClock, FaPen } from 'react-icons/fa';
import axios from 'axios';
import emailjs from 'emailjs-com';

const Appointment = () => {
  const location = useLocation();
  const property = location.state?.property || null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState(property ? `Booking for ${property.title} at ${property.location}` : '');
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the current date and time
    const currentDate = new Date();
    const selectedDate = new Date(date);
    const selectedTime = parseInt(time.split(':')[0]); // Get the hour part of the selected time

    // Date validation: Check if the selected date is not in the past
    if (selectedDate < currentDate.setHours(0, 0, 0, 0)) {
      setConfirmation('You cannot book an appointment for a past date.');
      return;
    }

    // Time validation: Check if the selected time is between 6 AM and 7 PM
    if (selectedTime < 6 || selectedTime >= 19) {
      setConfirmation('Appointments can only be booked between 6 AM and 7 PM.');
      return;
    }

    try {
      // Save appointment data to the database
      const response = await axios.post('http://localhost:5000/book-appointment', {
        name,
        email,
        phone,
        date,
        time,
        message,
        propertyTitle: property?.title || '',
        propertyLocation: property?.location || '',
        propertyPrice: property?.price || '',
        propertyDescription: property?.description || '',
      });

      console.log('SUCCESS!', response.status, response.data);

      // Send confirmation email using EmailJS
      const templateParams = {
        name,
        email,
        phone,
        date,
        time,
        message,
        propertyTitle: property?.title || '',
        propertyLocation: property?.location || '',
        propertyPrice: property?.price || '',
        propertyDescription: property?.description || '',
      };

      await emailjs.send(
        'service_tkj66s4', // Replace with your EmailJS Service ID
        'template_u39m90u', // Replace with your EmailJS Booking Template ID
        templateParams,
        'lMFkvtlJS_dXGHzb4' // Replace with your EmailJS User ID
      );

      setConfirmation('Your appointment has been booked successfully. A confirmation email has been sent.');

    } catch (error) {
      console.error('FAILED...', error);
      setConfirmation('Failed to book the appointment. Please try again.');
    }

    // Clear form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
    setMessage('');
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Book an Appointment</h1>
        {confirmation && (
          <p className="mb-4 text-center text-green-500 font-semibold">{confirmation}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-4 mb-4">
            <FaUser className="text-red-500 text-2xl" />
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 rounded-md border text-blue-500 font-bold border-gray-300"
            />
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <FaEnvelope className="text-red-500 text-2xl" />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 rounded-md border border-gray-300 text-blue-500 font-bold"
            />
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <FaPhone className="text-red-500 text-2xl" />
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-2 rounded-md border border-gray-300 text-blue-500 font-bold"
            />
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <FaCalendar className="text-red-500 text-2xl" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full p-2 rounded-md border border-gray-300 text-blue-500 font-bold"
            />
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <FaClock className="text-red-500 text-2xl" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full p-2 rounded-md border border-gray-300 text-blue-500 font-bold"
            />
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <FaPen className="text-red-500 text-2xl" />
            <textarea
              placeholder="Additional Details "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 text-blue-500 font-bold h-32"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
