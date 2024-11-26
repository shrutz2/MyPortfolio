import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-4xl font-bold font-mono tracking-tighter hover:opacity-80 transition-opacity">
            <span className="text-black">Shrutz</span>
            <span className="text-blue-500">_</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-purple-600 transition">About</a>
            <a href="#projects" className="text-gray-600 hover:text-purple-600 transition">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;