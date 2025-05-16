import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface SubjectCardProps {
  subject: {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    path: string;
    activities?: string[];
  };
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  return (
    <div className={`${subject.color} rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl`}>
      <div className="p-6">
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
          {subject.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{subject.title}</h3>
        <p className="text-white text-opacity-90 mb-4">{subject.description}</p>
        
        {subject.activities && (
          <div className="bg-white bg-opacity-20 rounded-xl p-3 mb-4">
            <p className="font-semibold text-white mb-2">Popular Activities:</p>
            <ul className="space-y-1">
              {subject.activities.map((activity) => (
                <li key={activity} className="text-white flex items-center">
                  <span className="mr-1">•</span> {activity}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <Link 
          to={subject.path} 
          className="inline-flex items-center px-4 py-2 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition"
        >
          Explore {subject.title} <ChevronRight size={18} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default SubjectCard;