import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600">Email us at</p>
        <a href="mailto:bookstore@example.com" className="text-blue-500 font-medium hover:underline">
          bookstore@example.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
