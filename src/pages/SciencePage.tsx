import React from 'react';
import { Microscope, Globe, Leaf, Cog, Droplets } from 'lucide-react';
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
        <h2 className="text-2xl font-bold mb-4 text-green-800 flex items-center">
          <Droplets className="mr-2" /> Earth Science Activity: Erosion in Action
        </h2>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-3">Water Erosion Explorer</h3>
              <p className="mb-4 text-gray-700">
                Discover how water shapes our Earth by creating your own erosion model!
              </p>
              
              <div className="mb-4">
                <h4 className="font-bold text-gray-800 mb-2">You'll Need:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Aluminum foil pan or plastic container</li>
                  <li>Soil or sand</li>
                  <li>Small rocks and pebbles</li>
                  <li>Water</li>
                  <li>Watering can or cup with holes</li>
                  <li>Paper and pencil for observations</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-gray-800 mb-2">Safety First:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Wear old clothes or an apron</li>
                  <li>Keep water away from electrical outlets</li>
                  <li>Clean up spills right away</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-2">Steps:</h4>
                <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                  <li>Create a landscape in your container using soil and rocks</li>
                  <li>Make some hills and valleys</li>
                  <li>Predict what will happen when it "rains"</li>
                  <li>Slowly pour water from your watering can</li>
                  <li>Observe how the water moves the soil</li>
                  <li>Draw pictures of before and after</li>
                </ol>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-2">Think About It:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Where did the soil move to?</li>
                  <li>How did the rocks affect water flow?</li>
                  <li>How is this like real erosion in nature?</li>
                  <li>What could prevent erosion?</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-800 mb-2">Extension Activities:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Try different types of soil</li>
                  <li>Add small plants or grass</li>
                  <li>Create different slope angles</li>
                  <li>Test erosion prevention methods</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <a 
              href="#" 
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition flex items-center"
            >
              Download Activity Worksheet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SciencePage;