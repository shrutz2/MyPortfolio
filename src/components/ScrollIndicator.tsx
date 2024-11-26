import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToAbout}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-600 animate-bounce cursor-pointer"
      aria-label="Scroll to about section"
    >
      <ChevronDown size={32} />
    </button>
  );
};

export default ScrollIndicator;