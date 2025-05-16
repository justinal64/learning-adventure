import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface HistoryMapProps {
  locations: Location[];
}

const HistoryMap: React.FC<HistoryMapProps> = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="relative w-full h-[400px] bg-blue-50 rounded-lg mb-4">
        <img
          src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg"
          alt="USA Map"
          className="w-full h-full object-cover rounded-lg"
        />
        {locations.map(location => (
          <button
            key={location.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
              selectedLocation === location.id
                ? 'text-purple-600 scale-125'
                : 'text-gray-600 hover:text-purple-600'
            } transition-all duration-300`}
            style={{
              left: `${((location.coordinates.lng + 125) / 65) * 100}%`,
              top: `${((location.coordinates.lat - 25) / 25) * 100}%`
            }}
            onClick={() => setSelectedLocation(location.id)}
          >
            <MapPin size={24} fill="currentColor" />
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map(location => (
          <div
            key={location.id}
            className={`p-4 rounded-lg transition-all duration-300 ${
              selectedLocation === location.id
                ? 'bg-purple-100 ring-2 ring-purple-500'
                : 'bg-gray-50 hover:bg-purple-50'
            }`}
            onClick={() => setSelectedLocation(location.id)}
          >
            <h3 className="font-bold text-gray-800 mb-1">{location.name}</h3>
            <p className="text-sm text-gray-600">{location.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryMap;