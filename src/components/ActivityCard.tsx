import React, { useState } from 'react';
import { Star, Award, Play, FileText, CheckCircle } from 'lucide-react';
import { useUser } from '../context/UserContext';

interface ActivityProps {
  activity: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    stars: number;
    level: string;
    color: string;
    type: 'interactive' | 'practice' | 'challenge' | 'video';
  };
}

const ActivityCard: React.FC<ActivityProps> = ({ activity }) => {
  const { userProgress, addCompletedActivity, addStars } = useUser();
  const isCompleted = userProgress.completedActivities.includes(activity.id);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleComplete = () => {
    if (!isCompleted) {
      addCompletedActivity(activity.id);
      addStars(activity.stars);
    }
  };

  const getActivityTypeIcon = () => {
    switch (activity.type) {
      case 'interactive':
        return <Play size={16} />;
      case 'practice':
        return <FileText size={16} />;
      case 'challenge':
        return <Award size={16} />;
      case 'video':
        return <Play size={16} />;
      default:
        return <Play size={16} />;
    }
  };

  return (
    <div className={`rounded-xl overflow-hidden shadow-md border-2 ${isCompleted ? 'border-green-500' : 'border-gray-200'} hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]`}>
      <div className={`${activity.color} px-4 py-3 flex justify-between items-center`}>
        <div className="flex items-center">
          <div className="bg-white p-2 rounded-full mr-3 text-blue-600">
            {activity.icon}
          </div>
          <h3 className="font-bold text-white text-lg">{activity.title}</h3>
        </div>
        <div className="bg-white text-blue-600 rounded-full px-2 py-1 text-xs font-bold flex items-center">
          <Star size={12} className="mr-1" fill="currentColor" />
          {activity.stars}
        </div>
      </div>
      
      <div className="p-4 bg-white">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
            {activity.level}
          </span>
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-semibold flex items-center">
            {getActivityTypeIcon()}
            <span className="ml-1">{activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}</span>
          </span>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-2">{activity.description}</p>
        
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 text-sm font-semibold hover:underline"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
          
          <button
            onClick={handleComplete}
            disabled={isCompleted}
            className={`flex items-center px-3 py-1 rounded-full text-sm font-bold ${
              isCompleted 
                ? "bg-green-600 text-white cursor-default" 
                : "bg-yellow-500 hover:bg-yellow-600 text-white"
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle size={14} className="mr-1" />
                Completed
              </>
            ) : (
              <>
                <Star size={14} className="mr-1" />
                Complete
              </>
            )}
          </button>
        </div>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
            <h4 className="font-bold text-gray-800 mb-2">What You'll Learn:</h4>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
              <li>Key concept 1 related to {activity.title}</li>
              <li>Important skill that you'll practice</li>
              <li>How this connects to other math topics</li>
            </ul>
            
            <div className="flex justify-between">
              <a 
                href="#" 
                className={`flex items-center px-3 py-2 ${activity.color} text-white rounded-lg font-bold text-sm transition hover:opacity-90`}
              >
                <Play size={16} className="mr-1" /> 
                Start Activity
              </a>
              
              <a 
                href="#" 
                className="flex items-center px-3 py-2 bg-gray-200 text-gray-700 rounded-lg font-bold text-sm transition hover:bg-gray-300"
              >
                <FileText size={16} className="mr-1" /> 
                Worksheet
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;