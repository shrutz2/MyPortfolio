import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a 
        href="https://github.com/shrutz2" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-purple-600 transition"
        aria-label="GitHub"
      >
        <Github size={24} />
      </a>
      <a 
        href="https://www.linkedin.com/in/shruti-v-193146271/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-purple-600 transition"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
      <a 
        href="mailto:shruti.vishwa14@gmail.com"
        className="text-gray-600 hover:text-purple-600 transition"
        aria-label="Email"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;