import React from 'react';
import { FaHome, FaVideo, FaClipboardList } from 'react-icons/fa';
import '../index.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="icon">
        <FaHome />
        <p><a href="/"> Home </a></p>
      </div>
      <div className="icon">
        <FaClipboardList />
        <p><a href="/quiz"> Quiz </a></p>
      </div>
      <div className="icon">
        <FaVideo />
        <p> <a href="/video"> Video </a></p>
      </div>
    </div>
  );
};

export default Footer;