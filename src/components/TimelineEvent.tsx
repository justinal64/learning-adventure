import React from 'react';

interface TimelineEventProps {
  event: {
    year: number;
    title: string;
    description: string;
  };
  isLast: boolean;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event, isLast }) => {
  return (
    <div className="relative flex items-start">
      <div className="flex flex-col items-center mr-4">
        <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
          {event.year}
        </div>
        {!isLast && (
          <div className="h-full w-0.5 bg-purple-200 absolute top-12"></div>
        )}
      </div>
      <div className="bg-white rounded-xl shadow-sm p-4 flex-grow transform hover:scale-[1.02] transition-transform">
        <h3 className="font-bold text-lg text-purple-700 mb-2">{event.title}</h3>
        <p className="text-gray-700">{event.description}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;