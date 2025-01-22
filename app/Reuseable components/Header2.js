"use client";
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">TasteTreasure</h1>
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/all-recipes" className="text-white hover:text-gray-300">All Recipes</Link>
          <Link href="/about-me" className="text-white hover:text-gray-300">About Me</Link>
          <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaTwitter />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;