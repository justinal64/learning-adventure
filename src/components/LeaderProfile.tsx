import React from 'react';
import { ChevronDown, ChevronUp, Volume2 } from 'lucide-react';

interface Leader {
  id: string;
  name: string;
  title: string;
  years: string;
  photo: string;
  quote: string;
  biography: string;
  quickFacts: string[];
}

interface LeaderProfileProps {
  leader: Leader;
  onSelect: () => void;
  isSelected: boolean;
}

const LeaderProfile: React.FC<LeaderProfileProps> = ({ leader, onSelect, isSelected }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
        isSelected ? 'ring-4 ring-purple-500' : 'hover:shadow-lg'
      }`}
    >
      <div className="relative">
        <img 
          src={leader.photo} 
          alt={leader.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold">{leader.name}</h3>
          <p className="text-sm opacity-90">{leader.years}</p>
        </div>
      </div>

      <div className="p-4">
        <p className="text-purple-700 font-bold mb-2">{leader.title}</p>
        <blockquote className="italic text-gray-600 mb-4 border-l-4 border-purple-200 pl-4">
          "{leader.quote}"
        </blockquote>

        <button
          onClick={onSelect}
          className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition flex items-center justify-center"
        >
          {isSelected ? (
            <>
              <ChevronUp className="mr-1" /> Show Less
            </>
          ) : (
            <>
              <ChevronDown className="mr-1" /> Learn More
            </>
          )}
        </button>

        {isSelected && (
          <div className="mt-4 animate-fadeIn">
            <div className="mb-4">
              <h4 className="font-bold text-gray-800 mb-2">Biography</h4>
              <p className="text-gray-700">{leader.biography}</p>
              <button className="mt-2 flex items-center text-purple-600 hover:text-purple-700">
                <Volume2 size={16} className="mr-1" /> Listen to Biography
              </button>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-bold text-purple-800 mb-2">Quick Facts</h4>
              <ul className="space-y-2">
                {leader.quickFacts.map((fact, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderProfile;