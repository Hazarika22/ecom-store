import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Online Grocery Store. All rights reserved.</p>
        <p>
          <a href="/about" className="text-gray-400 hover:text-white">About Us</a> | 
          <a href="/contact" className="text-gray-400 hover:text-white">Contact</a> | 
          <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
