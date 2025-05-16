import React from 'react';
import { Microscope, Globe, Leaf, Cog } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
import PageHeader from '../components/PageHeader';

const SciencePage: React.FC = () => {
  const activities = [
    {
      id: 'science-earth',
      title: 'Earth and Space',
      description: 'Explore planets, stars, and our Earth\'s features with interactive models',
      icon: <Globe />,
      stars: 3,
      level: 'Basic',
      color: 'bg-green-600',
      type: 'interactive'
    },
    {
      id: 'science-life-cycles',
      title: 'Life Cycles',
      description: 'Learn about plant and animal life cycles through animated guides',
      icon: <Leaf />,
      stars: 3,
      level: 'Basic',
      color: 'bg-green-700',
      type: 'interactive'
    },
    {
      id: 'science-machines',
      title: 'Simple Machines',
      description: 'Discover how levers, pulleys, and other simple machines work',
      icon: <Cog />,
      stars: 4,
      level: 'Intermediate',
      color: 'bg-green-800',
      type: 'interactive'
    },
    {
      id: 'science-weather',
      title: 'Weather Patterns',
      description: 'Understand different weather phenomena and how to predict weather',
      icon: <Globe />,
      stars: 3,
      level: 'Basic',
      color: 'bg-blue-600',
      type: 'practice'
    },
    {
      id: 'science-experiments',
      title: 'Home Experiments',
      description: 'Easy and safe science experiments you can do at home with parents',
      icon: <Microscope />,
      stars: 5,
      level: 'All Levels',
      color: 'bg-purple-600',
      type: 'challenge'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Science"
        description="Explore earth, space, life cycles, simple machines, and conduct fun experiments!"
        icon={<Microscope size={40} />}
        color="bg-green-700"
      />
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          What You'll Learn in Science
        </h2>
        <div className="bg-white rounded-xl shadow p-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-3 text-green-600">
                <Globe size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Earth and Space Sciences</h3>
                <p className="text-gray-600">Planets, stars, Earth's features, and space exploration</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-3 text-green-600">
                <Leaf size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Life Cycles</h3>
                <p className="text-gray-600">How plants and animals grow and change over time</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-3 text-green-600">
                <Cog size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Simple Machines</h3>
                <p className="text-gray-600">Understanding levers, pulleys, inclined planes, and more</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-3 text-green-600">
                <Globe size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Weather Patterns</h3>
                <p className="text-gray-600">Learn about clouds, precipitation, and climate</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Science Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>
      
      <section className="mt-12 bg-green-50 rounded-xl p-6 border border-green-200">
        <h2 className="text-2xl font-bold mb-4 text-green-800">
          Science Experiment of the Week
        </h2>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold text-green-700 mb-3">Rainbow in a Jar</h3>
          <p className="mb-4">
            Create a colorful density column using household ingredients!
          </p>
          
          <div className="mb-4">
            <h4 className="font-bold text-gray-800 mb-2">You'll Need:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Clear jar or tall glass</li>
              <li>Honey or corn syrup</li>
              <li>Dish soap</li>
              <li>Water</li>
              <li>Food coloring</li>
              <li>Vegetable oil</li>
              <li>Rubbing alcohol</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-bold text-gray-800 mb-2">The Science Behind It:</h4>
            <p className="text-gray-700">
              This experiment demonstrates density - how some liquids are heavier than others and will sink 
              below lighter liquids. Each layer stays separate because of their different densities!
            </p>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="#" 
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition"
            >
              See Full Instructions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SciencePage;