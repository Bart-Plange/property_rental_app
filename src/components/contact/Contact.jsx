import { useState } from 'react';
import { FaEnvelope, FaUser, FaPen } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!name) {
      newErrors.name = "Name is required.";
    } else if (/[^a-zA-Z\s]/.test(name)) {
      newErrors.name = "Name cannot contain numbers or special characters.";
    }

    // Email validation
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
    }

    // Subject validation
    if (!subject) {
      newErrors.subject = "Subject is required.";
    }

    // Message validation
    if (!message) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSending(true);

    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    // Send the initial email
    emailjs
      .send(
        'service_tkj66s4', // Replace with your EmailJS Service ID
        'template_6y0nkxe', // Replace with your EmailJS Template ID
        templateParams,
        'lMFkvtlJS_dXGHzb4' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          
          // Send a confirmation email to the user
          emailjs.send(
            'service_tkj66s4', // Same EmailJS Service ID
            'template_u39m90u', // Replace with your EmailJS Template ID for confirmation
            templateParams,
            'lMFkvtlJS_dXGHzb4' // Same EmailJS User ID
          ).then(
            (response) => {
              console.log('Confirmation email sent!', response.status, response.text);
            },
            (error) => {
              console.error('Failed to send confirmation email...', error);
            }
          );
          
          // Clear form fields after submission
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          console.error('FAILED...', error);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Contact Us</h1>
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
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

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
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <div className="flex items-center space-x-4 mb-4">
            <FaPen className="text-red-500 text-2xl" />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 text-blue-500 font-bold"
            />
          </div>
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}

          <div className="flex items-center space-x-4 mb-4">
            <FaPen className="text-red-500 text-2xl" />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-2 rounded-md border border-gray-300 text-blue-500 font-bold h-32"
            />
          </div>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
