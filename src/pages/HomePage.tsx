import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Microscope, BookOpen, Globe, Rocket, Code } from 'lucide-react';
import MascotAnimation from '../components/MascotAnimation';
import SubjectCard from '../components/SubjectCard';
import FeaturedActivity from '../components/FeaturedActivity';

const HomePage: React.FC = () => {
  const subjects = [
    {
      title: 'Mathematics',
      description: 'Learn multiplication, division, fractions, and more through fun games and activities!',
      icon: <Calculator size={40} />,
      color: 'bg-blue-600',
      path: '/math',
      activities: ['Multiplication Tables', 'Fraction Fun', 'Money Math']
    },
    {
      title: 'Science',
      description: 'Explore earth, space, life cycles, and simple machines with cool experiments!',
      icon: <Microscope size={40} />,
      color: 'bg-green-700',
      path: '/science',
      activities: ['Weather Watcher', 'Life Cycles', 'Simple Machines']
    },
    {
      title: 'Reading',
      description: 'Build vocabulary, improve comprehension, and enjoy exciting stories!',
      icon: <BookOpen size={40} />,
      color: 'bg-red-700',
      path: '/reading',
      activities: ['Vocabulary Builder', 'Reading Adventures', 'Story Creation']
    },
    {
      title: 'Social Studies',
      description: 'Discover geography, history, cultures, and civics in an engaging way!',
      icon: <Globe size={40} />,
      color: 'bg-purple-700', 
      path: '/social-studies',
      activities: ['Map Explorer', 'History Heroes', 'World Cultures']
    }
  ];

  const specialAreas = [
    {
      title: 'Cool Science Corner',
      description: 'Watch educational videos, try virtual experiments, and discover amazing science facts!',
      icon: <Rocket size={40} />,
      color: 'bg-teal-600',
      path: '/science-corner'
    },
    {
      title: 'Junior Coder Zone',
      description: 'Learn basic coding concepts through fun games and activities designed for kids!',
      icon: <Code size={40} />,
      color: 'bg-orange-600',
      path: '/coding-zone'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-3xl p-8 mb-12 text-white">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Learning Adventure!</h1>
            <p className="text-xl mb-6">
              Join Professor Pixel on an exciting journey through Math, Science, Reading, and Social Studies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link 
                to="/progress" 
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full transition transform hover:scale-105 shadow-lg"
              >
                Track Your Progress
              </Link>
              <Link 
                to="/resources" 
                className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-full transition transform hover:scale-105 shadow-lg"
              >
                Parent Resources
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
            <div className="transform hover:rotate-6 transition duration-300">
              <MascotAnimation size={200} action="teaching" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activity */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Today's Featured Activity</h2>
        <FeaturedActivity />
      </section>

      {/* Core Subjects */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Core Learning Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <SubjectCard key={subject.title} subject={subject} />
          ))}
        </div>
      </section>

      {/* Special Areas */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Special Learning Zones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialAreas.map((area) => (
            <div 
              key={area.title}
              className={`${area.color} rounded-2xl p-6 text-white shadow-lg transform transition hover:scale-[1.02] hover:shadow-xl`}
            >
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full text-blue-600 mr-4">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                  <p className="mb-4">{area.description}</p>
                  <Link 
                    to={area.path}
                    className="inline-block px-4 py-2 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-gray-100 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Getting Started</h2>
        <ol className="list-decimal pl-6 space-y-3 mb-6">
          <li className="text-lg">Choose a subject you want to explore</li>
          <li className="text-lg">Complete activities and earn stars</li>
          <li className="text-lg">Track your progress and collect achievements</li>
          <li className="text-lg">Print worksheets to practice offline</li>
        </ol>
        <div className="bg-white p-4 rounded-xl border-2 border-blue-500">
          <p className="text-lg font-bold text-blue-600 mb-2">Parents and Teachers</p>
          <p>
            Visit the <Link to="/resources" className="text-blue-600 underline">Resources Section</Link> for 
            printable worksheets, progress reports, and additional learning materials.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;