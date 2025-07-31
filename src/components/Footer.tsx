import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/michael-panashe-mudimbu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors duration-200 hover:scale-105 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/micpana/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200 hover:scale-105 transform"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://x.com/mudimbumichael"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-800 hover:bg-blue-400 transition-colors duration-200 hover:scale-105 transform"
              aria-label="X (Twitter)"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Michael Panashe Mudimbu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;