import React from 'react';
import { Microscope, Rocket, Youtube, Lightbulb } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const ScienceCornerPage: React.FC = () => {
  const videos = [
    {
      title: "How Do Plants Grow?",
      thumbnail: "https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "4:32",
      description: "Learn about photosynthesis and watch a seed grow into a plant!"
    },
    {
      title: "Exploring Space",
      thumbnail: "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "5:17",
      description: "Take a journey through our solar system and beyond!"
    },
    {
      title: "Animal Adaptations",
      thumbnail: "https://images.pexels.com/photos/982021/pexels-photo-982021.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "6:05",
      description: "Discover how animals adapt to survive in different environments."
    },
    {
      title: "Weather Science",
      thumbnail: "https://images.pexels.com/photos/2775548/pexels-photo-2775548.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "3:49",
      description: "Learn how clouds form and what causes different types of weather."
    }
  ];

  const funFacts = [
    "A year on Neptune lasts 165 Earth years!",
    "Your nose can remember 50,000 different scents.",
    "A bolt of lightning is 5 times hotter than the surface of the sun!",
    "Octopuses have three hearts and blue blood.",
    "Sharks have existed for over 450 million years - even before dinosaurs!"
  ];

  const experiments = [
    {
      title: "Tornado in a Bottle",
      materials: ["Two plastic bottles", "Water", "Food coloring", "Duct tape"],
      description: "Create a mini water tornado and learn about vortexes and water movement."
    },
    {
      title: "Balloon Rocket",
      materials: ["Balloon", "String", "Straw", "Tape"],
      description: "Make a balloon rocket that demonstrates Newton's Third Law of Motion."
    },
    {
      title: "Magic Milk",
      materials: ["Milk", "Food coloring", "Dish soap", "Cotton swab"],
      description: "Watch colors dance in milk when you add dish soap to learn about surface tension."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Cool Science Corner"
        description="Explore amazing videos, fun experiments, and fascinating science facts!"
        icon={<Rocket size={40} />}
        color="bg-teal-600"
      />
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <Youtube size={24} className="mr-2 text-red-600" />
          Educational Science Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div 
              key={video.title} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-[1.02]"
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-40 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded-md">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <div className="bg-red-600 text-white rounded-full p-3 transform hover:scale-110 transition">
                    <Youtube size={24} />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-teal-700 mb-1">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <section className="bg-teal-50 rounded-xl p-6 border border-teal-200">
          <h2 className="text-2xl font-bold mb-4 text-teal-800 flex items-center">
            <Lightbulb size={24} className="mr-2 text-yellow-500" fill="currentColor" />
            Fun Science Facts
          </h2>
          <ul className="space-y-4">
            {funFacts.map((fact, index) => (
              <li 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500 hover:shadow-md transition"
              >
                <p className="text-gray-800">{fact}</p>
              </li>
            ))}
          </ul>
        </section>
        
        <section className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 flex items-center">
            <Microscope size={24} className="mr-2 text-blue-600" />
            At-Home Experiments
          </h2>
          <div className="space-y-4">
            {experiments.map((experiment) => (
              <div 
                key={experiment.title} 
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-bold text-lg text-blue-700 mb-2">{experiment.title}</h3>
                <div className="mb-2">
                  <p className="font-semibold text-gray-700">Materials needed:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {experiment.materials.map((material, idx) => (
                      <li key={idx}>{material}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700 text-sm">{experiment.description}</p>
                <button className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition">
                  View Instructions
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Science Documentary of the Week</h2>
            <p className="text-lg mb-4">
              "The Secret Life of Pets: Animal Behavior"
            </p>
            <p className="mb-6">
              Discover how animals communicate, play, and interact with their families and friends.
              This kid-friendly documentary reveals amazing animal behaviors!
            </p>
            <button className="px-6 py-3 bg-white text-teal-600 rounded-full font-bold hover:bg-gray-100 transition">
              Watch Documentary
            </button>
          </div>
          <div className="md:w-1/3">
            <img 
              src="https://images.pexels.com/photos/3741780/pexels-photo-3741780.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Documentary thumbnail" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScienceCornerPage;