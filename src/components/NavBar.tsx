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
      isScrolled 
        ? 'bg-purple-500/30 backdrop-blur-md shadow-lg py-4 border border-purple-300/50' 
        : 'bg-purple-500/20 backdrop-blur-sm py-6 border border-purple-300/30'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-4xl font-bold font-mono tracking-tighter hover:opacity-80 transition-opacity">
            <span className="text-purple-900">Shrutz</span>
            <span className="text-gray-600">_</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-purple-400 hover:text-purple-900 transition">About</a>
            <a href="#projects" className="text-purple-400 hover:text-purple-900 transition">Projects</a>
            <a href="#contact" className="text-purple-400 hover:text-purple-900 transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;