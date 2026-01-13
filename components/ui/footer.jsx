import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© 2023 Online Grocery Store. All rights reserved.</p>
        <p>Follow us on:
          <a href="#" className="mx-2">Facebook</a>
          <a href="#" className="mx-2">Twitter</a>
          <a href="#" className="mx-2">Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
