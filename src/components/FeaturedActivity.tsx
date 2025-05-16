import React, { useState } from 'react';
import { Star, Award, Download, CheckCircle } from 'lucide-react';
import { useUser } from '../context/UserContext';

const FeaturedActivity: React.FC = () => {
  const [completed, setCompleted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const { addStars } = useUser();
  
  const handleComplete = () => {
    if (!completed) {
      setCompleted(true);
      addStars(5);
    }
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-yellow-400">
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Star className="text-white mr-2" size={24} fill="white" />
          <h3 className="text-2xl font-bold text-white">Multiplication Challenge</h3>
        </div>
        <div className="bg-white text-yellow-500 px-3 py-1 rounded-full font-bold text-sm flex items-center">
          <Award size={16} className="mr-1" />
          5 stars
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <p className="text-lg mb-4">
            Complete this multiplication challenge! Look at the number patterns and figure out what comes next:
          </p>
          
          <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto">
            <div className="bg-blue-100 rounded-xl p-4 text-center">
              <p className="text-sm text-blue-800 mb-1">4 × 1</p>
              <p className="text-2xl font-bold text-blue-800">4</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-4 text-center">
              <p className="text-sm text-blue-800 mb-1">4 × 2</p>
              <p className="text-2xl font-bold text-blue-800">8</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-4 text-center">
              <p className="text-sm text-blue-800 mb-1">4 × 3</p>
              <p className="text-2xl font-bold text-blue-800">12</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-4 text-center">
              <p className="text-sm text-blue-800 mb-1">4 × 4</p>
              <p className="text-2xl font-bold text-blue-800">16</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-4 text-center">
              <p className="text-sm text-blue-800 mb-1">4 × 5</p>
              <p className="text-2xl font-bold text-blue-800">20</p>
            </div>
            <div className="bg-yellow-100 rounded-xl p-4 text-center border-2 border-dashed border-yellow-500">
              <p className="text-sm text-yellow-800 mb-1">4 × 6</p>
              <p className="text-2xl font-bold text-yellow-800">?</p>
            </div>
          </div>
          
          <div className="flex justify-center mb-4">
            <button 
              onClick={() => setShowAnswer(!showAnswer)} 
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold transition"
            >
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>
          </div>
          
          {showAnswer && (
            <div className="bg-green-100 border-2 border-green-500 rounded-xl p-4 text-center mb-6 animate-fadeIn">
              <p className="text-xl font-bold text-green-800">The answer is 24!</p>
              <p className="text-green-700">When we multiply 4 × 6, we get 24.</p>
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <a 
            href="#" 
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition"
          >
            <Download size={18} className="mr-2" />
            Download Worksheet
          </a>
          
          <button 
            onClick={handleComplete}
            disabled={completed}
            className={`flex items-center px-4 py-2 rounded-full font-bold transition ${
              completed 
                ? "bg-green-600 text-white cursor-default" 
                : "bg-yellow-500 hover:bg-yellow-600 text-white"
            }`}
          >
            {completed ? (
              <>
                <CheckCircle size={18} className="mr-2" />
                Completed!
              </>
            ) : (
              <>
                <Star size={18} className="mr-2" />
                Mark Complete
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedActivity;