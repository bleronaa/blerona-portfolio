import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group p-3 bg-gray-800 hover:bg-indigo-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
          </button>

          {/* Logo/Name */}
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Blerona Tmava
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© 2024 Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>by Blerona</span>
          </div>

          {/* Additional Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;