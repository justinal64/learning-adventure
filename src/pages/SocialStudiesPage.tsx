import React from 'react';
import { Globe, Clock, Users, BookOpen } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
import PageHeader from '../components/PageHeader';

const SocialStudiesPage: React.FC = () => {
  const activities = [
    {
      id: 'social-geography',
      title: 'Map Explorer',
      description: 'Navigate interactive maps to learn about continents, countries, and landforms',
      icon: <Globe />,
      stars: 3,
      level: 'Basic',
      color: 'bg-purple-600',
      type: 'interactive'
    },
    {
      id: 'social-history',
      title: 'History Heroes',
      description: 'Discover important people and events from American history',
      icon: <Clock />,
      stars: 4,
      level: 'Intermediate',
      color: 'bg-purple-700',
      type: 'practice'
    },
    {
      id: 'social-cultures',
      title: 'World Cultures',
      description: 'Learn about traditions, foods, and celebrations from around the world',
      icon: <Users />,
      stars: 3,
      level: 'Basic',
      color: 'bg-indigo-600',
      type: 'interactive'
    },
    {
      id: 'social-civics',
      title: 'Civic Heroes',
      description: 'Understand government, community helpers, and how to be a good citizen',
      icon: <BookOpen />,
      stars: 3,
      level: 'Basic',
      color: 'bg-blue-700',
      type: 'practice'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Social Studies"
        description="Explore geography, history, diverse cultures, and civic concepts!"
        icon={<Globe size={40} />}
        color="bg-purple-700"
      />
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          What You'll Learn in Social Studies
        </h2>
        <div className="bg-white rounded-xl shadow p-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <div className="bg-purple-100 rounded-full p-2 mr-3 text-purple-600">
                <Globe size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Geography Basics</h3>
                <p className="text-gray-600">Continents, countries, oceans, and landforms</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 rounded-full p-2 mr-3 text-purple-600">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">American History</h3>
                <p className="text-gray-600">Important events and people from our nation's past</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 rounded-full p-2 mr-3 text-purple-600">
                <Users size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Cultural Diversity</h3>
                <p className="text-gray-600">Different cultures, traditions, and celebrations</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 rounded-full p-2 mr-3 text-purple-600">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Civic Concepts</h3>
                <p className="text-gray-600">Government, community, and citizenship</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Social Studies Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>
      
      <section className="mt-12 bg-purple-50 rounded-xl p-6 border border-purple-200">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Virtual Field Trips
        </h2>
        <p className="mb-4">
          Explore amazing places around the world without leaving your home!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Washington DC" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-purple-700">Washington D.C.</h3>
              <p className="text-gray-700 mb-3">
                Tour our nation's capital and see famous monuments and museums.
              </p>
              <button className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-bold transition">
                Start Virtual Tour
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.pexels.com/photos/2260827/pexels-photo-2260827.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Grand Canyon" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-purple-700">Grand Canyon</h3>
              <p className="text-gray-700 mb-3">
                Explore one of America's most amazing natural wonders.
              </p>
              <button className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-bold transition">
                Start Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialStudiesPage;