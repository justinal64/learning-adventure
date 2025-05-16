import React from 'react';
import { Calculator, Clock, Coins, PieChart } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
import PageHeader from '../components/PageHeader';

const MathPage: React.FC = () => {
  const activities = [
    {
      id: 'math-multiplication',
      title: 'Multiplication Tables',
      description: 'Learn multiplication tables from 1-10 with fun interactive games',
      icon: <Calculator />,
      stars: 3,
      level: 'Basic',
      color: 'bg-blue-600',
      type: 'interactive'
    },
    {
      id: 'math-division',
      title: 'Division Practice',
      description: 'Master division with step-by-step examples and practice problems',
      icon: <Calculator />,
      stars: 4,
      level: 'Intermediate',
      color: 'bg-blue-700',
      type: 'practice'
    },
    {
      id: 'math-fractions',
      title: 'Fraction Fun',
      description: 'Understand fractions through visual examples and games',
      icon: <PieChart />,
      stars: 3,
      level: 'Basic',
      color: 'bg-blue-800',
      type: 'interactive'
    },
    {
      id: 'math-money',
      title: 'Money Math',
      description: 'Learn to count money and make change with interactive activities',
      icon: <Coins />,
      stars: 3,
      level: 'Basic',
      color: 'bg-green-600',
      type: 'interactive'
    },
    {
      id: 'math-time',
      title: 'Time Telling',
      description: 'Practice reading clocks and calculating elapsed time',
      icon: <Clock />,
      stars: 3,
      level: 'Basic',
      color: 'bg-indigo-600',
      type: 'practice'
    },
    {
      id: 'math-word-problems',
      title: 'Word Problems',
      description: 'Solve real-world math problems using multiple operations',
      icon: <Calculator />,
      stars: 5,
      level: 'Advanced',
      color: 'bg-purple-600',
      type: 'challenge'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Mathematics"
        description="Learn multiplication, division, fractions, and more through fun activities!"
        icon={<Calculator size={40} />}
        color="bg-blue-600"
      />
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          What You'll Learn in Mathematics
        </h2>
        <div className="bg-white rounded-xl shadow p-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-3 text-blue-600">
                <Calculator size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Multiplication & Division</h3>
                <p className="text-gray-600">Master times tables and learn how to divide numbers</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-3 text-blue-600">
                <PieChart size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Fractions</h3>
                <p className="text-gray-600">Understand parts of a whole and comparing fractions</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-3 text-blue-600">
                <Coins size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Money Concepts</h3>
                <p className="text-gray-600">Learn to count money, make change, and solve money problems</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-3 text-blue-600">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Time Concepts</h3>
                <p className="text-gray-600">Practice telling time and calculating elapsed time</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Mathematics Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>
      
      <section className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Printable Math Worksheets
        </h2>
        <p className="mb-4">
          Download these worksheets for extra practice on your math skills!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <a 
            href="#" 
            className="block bg-white p-4 rounded-lg border border-blue-200 hover:shadow-md transition"
          >
            <h3 className="font-bold text-blue-600">Multiplication Tables</h3>
            <p className="text-sm text-gray-600">Practice sheets for times tables 1-10</p>
          </a>
          <a 
            href="#" 
            className="block bg-white p-4 rounded-lg border border-blue-200 hover:shadow-md transition"
          >
            <h3 className="font-bold text-blue-600">Division Practice</h3>
            <p className="text-sm text-gray-600">Division problems with and without remainders</p>
          </a>
          <a 
            href="#" 
            className="block bg-white p-4 rounded-lg border border-blue-200 hover:shadow-md transition"
          >
            <h3 className="font-bold text-blue-600">Fractions Worksheet</h3>
            <p className="text-sm text-gray-600">Comparing and identifying fractions</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default MathPage;