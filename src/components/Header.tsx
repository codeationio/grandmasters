import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-gray-900">Grandmasters</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link to="/senior-courses" className="text-gray-700 hover:text-red-600 transition-colors">
              Senior Courses
            </Link>
            <Link to="/junior-courses" className="text-gray-700 hover:text-red-600 transition-colors">
              Junior Courses
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-red-600 transition-colors">
              Gallery
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-red-600 transition-colors">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">
                Home
              </Link>
              <Link to="/senior-courses" className="text-gray-700 hover:text-red-600 transition-colors">
                Senior Courses
              </Link>
              <Link to="/junior-courses" className="text-gray-700 hover:text-red-600 transition-colors">
                Junior Courses
              </Link>
              <Link to="/gallery" className="text-gray-700 hover:text-red-600 transition-colors">
                Gallery
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-red-600 transition-colors">
                Blog
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;