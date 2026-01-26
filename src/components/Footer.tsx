import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Grandmasters</h3>
            <p className="text-gray-300 mb-4">
              Excellence in Training & Development since 2008. Over 14,000 students trained successfully.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Senior Courses</h4>
            <ul className="space-y-2 text-gray-300">
              <li>IELTS Preparation</li>
              <li>PTE Training</li>
              <li>Spoken English</li>
              <li>Personality Development</li>
              <li>French Classes</li>
              <li>Student Visa</li>
              <li>Interview Preparation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Junior Courses</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Abacus</li>
              <li>Public Speaking</li>
              <li>Handwriting</li>
              <li>French for Kids</li>
              <li>Vedic Maths</li>
              <li>Reasoning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9888700083</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>rahul.lee@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>SCF 26,27 First Floor, GTB Market Khanna</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Grandmasters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;