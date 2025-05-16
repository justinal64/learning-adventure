import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Award, User } from 'lucide-react';
import MascotAnimation from './MascotAnimation';
import { useUser } from '../context/UserContext';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { userProgress } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Math', path: '/math', color: 'bg-blue-600 hover:bg-blue-700' },
    { title: 'Science', path: '/science', color: 'bg-green-700 hover:bg-green-800' },
    { title: 'Reading', path: '/reading', color: 'bg-red-700 hover:bg-red-800' },
    { title: 'Social Studies', path: '/social-studies', color: 'bg-purple-700 hover:bg-purple-800' },
  ];

  const specialLinks = [
    { title: 'Science Corner', path: '/science-corner', color: 'bg-teal-600 hover:bg-teal-700' },
    { title: 'Coding Zone', path: '/coding-zone', color: 'bg-orange-600 hover:bg-orange-700' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <MascotAnimation size={40} />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              Learning Adventure
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${link.color} ${
                  location.pathname === link.path ? 'ring-4 ring-yellow-300' : ''
                } px-4 py-2 rounded-full text-white font-bold transition-all transform hover:scale-105`}
              >
                {link.title}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-4 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold transition-all transform hover:scale-105">
                Special Areas
              </button>
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">
                {specialLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-6 py-3 ${link.color} text-white rounded-lg mb-2 text-center font-bold whitespace-nowrap hover:scale-[1.02] transform transition-transform`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/progress"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all transform hover:scale-105"
            >
              <Award size={18} />
              <span>Progress</span>
              {userProgress.totalStars > 0 && (
                <span className="ml-1 bg-white text-amber-500 px-2 rounded-full text-sm font-bold">
                  {userProgress.totalStars}
                </span>
              )}
            </Link>
            <Link
              to="/resources"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-600 hover:bg-gray-700 text-white font-bold transition-all transform hover:scale-105"
            >
              <User size={18} />
              <span>Parents</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-indigo-600 text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-xl px-4 py-3 animate-slideDown">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${link.color} px-4 py-3 rounded-xl text-white font-bold text-center`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            {specialLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${link.color} px-4 py-3 rounded-xl text-white font-bold text-center`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Link
                to="/progress"
                className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Award size={18} />
                <span>Progress</span>
              </Link>
              <Link
                to="/resources"
                className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-gray-600 hover:bg-gray-700 text-white font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User size={18} />
                <span>Parents</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;