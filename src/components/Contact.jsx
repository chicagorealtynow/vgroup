import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_your_service_id';
    const templateId = 'template_your_template_id';
    const publicKey = 'your_public_key';

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setStatusMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatusMessage('Failed to send message. Please try again.');
      });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Contact Us</h2>
      <motion.div
        variants={formVariants}
        className="bg-gray-800 p-8 rounded-md shadow-md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
          {statusMessage && <p className="text-gray-300 mt-2">{statusMessage}</p>}
        </form>
        <div className="mt-8">
          <p className="text-gray-300 mb-2">
            Phone: <a href="tel:+14123905847" className="text-blue-400 hover:text-blue-300">(412) 390-5847</a>
          </p>
          <p className="text-gray-300">
            Email: <a href="mailto:info@vgroup.com" className="text-blue-400 hover:text-blue-300">info@vgroup.com</a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
