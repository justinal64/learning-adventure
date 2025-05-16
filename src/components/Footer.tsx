import React from 'react';
import { Heart, BookOpen, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <BookOpen className="mr-2" /> Learning Adventure
            </h3>
            <p className="text-gray-300">
              Making learning fun and engaging for 3rd graders with interactive content
              across all subject areas.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition">
                  Parent Resources
                </Link>
              </li>
              <li>
                <Link to="/progress" className="text-gray-300 hover:text-white transition">
                  Track Progress
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <Mail className="mr-2" /> Stay Connected
            </h3>
            <p className="text-gray-300 mb-3">
              Join our newsletter for updates and new learning materials.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Parent's email"
                className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p className="flex items-center justify-center">
            Made with <Heart className="mx-1 text-red-500" size={16} /> for young learners &copy; {new Date().getFullYear()} Learning Adventure
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;