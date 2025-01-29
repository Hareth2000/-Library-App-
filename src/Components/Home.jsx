import React from 'react';

import { Routes, Route } from 'react-router-dom';
import About from './AboutUs';
import Contact from './ContactUs';
import BookCatalog from './BookCatalog';

const Home = () => {
  return (
    <div>
      
      <h1>Welcome to Our Bookstore</h1>
      <Routes>
        <Route path="/AboutUs" element={<About />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/catalog" element={<BookCatalog />} />
      </Routes>
      
    </div>
  );
};

export default Home;