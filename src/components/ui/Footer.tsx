import React from 'react';
import { 
  Dribbble, 
  Linkedin, 
  Mail,  
  Globe2
} from 'lucide-react';

import EndofPage from './EndofPage.svg'

const Footer: React.FC = () => {
  return (
    <footer className="bg-herobg text-black py-12">
        <div className='flex justify-center py-10'>
        <img src={EndofPage} alt="" />
        </div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 fraunces">Bigyan Adhikari</h3>
          <p className="text-gray-700 mb-4">
            Creative graphic designer transforming ideas into visual stories. 
            Passionate about design, branding, and bringing concepts to life.
          </p>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold mb-4">Connect</h4>
          
          <div className="space-y-3">
            {/* Email */}
            <div className="flex items-center space-x-3">
              <Mail className="text-gray-700" />
              <a 
                href="mailto:bigyanadk07@gmail.com" 
                className="hover:text-gray-500 transition-colors"
              >
                bigyanadk07@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-3">
              <Linkedin className="text-gray-700" />
              <a 
                href="https://www.linkedin.com/in/bigyanadhikari07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* Dribbble */}
            <div className="flex items-center space-x-3">
              <Dribbble className="text-gray-700" />
              <a 
                href="https://dribbble.com/bigyanadk07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-colors"
              >
                Dribbble Portfolio
              </a>
            </div>
            {/* Web Portfolio */}
            <div className="flex items-center space-x-3">
              <Globe2 className="text-gray-700" />
              <a 
                href="https://bigyanadhikari.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-colors"
              >
                My Web Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Bigyan Adhikari. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;