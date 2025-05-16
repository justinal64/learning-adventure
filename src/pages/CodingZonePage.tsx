import React from 'react';
import { Code, PlayCircle, Youtube, Github } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const CodingZonePage: React.FC = () => {
  const scratchProjects = [
    {
      title: "Make a Dancing Cat",
      image: "https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600",
      difficulty: "Beginner",
      description: "Learn to make a cat dance to music using simple Scratch blocks."
    },
    {
      title: "Space Adventure Game",
      image: "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=600",
      difficulty: "Intermediate",
      description: "Create a game where you pilot a spaceship and collect stars."
    },
    {
      title: "Animated Story",
      image: "https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=600",
      difficulty: "Beginner",
      description: "Build an interactive story with characters that talk and move."
    }
  ];

  const codingConcepts = [
    {
      title: "Sequences",
      description: "Learn how to put commands in order, just like making a recipe!",
      icon: "1️⃣2️⃣3️⃣"
    },
    {
      title: "Loops",
      description: "Make things repeat over and over without writing the same code multiple times.",
      icon: "🔄"
    },
    {
      title: "Conditionals",
      description: "Learn about 'if' statements - making decisions in your code.",
      icon: "🔀"
    },
    {
      title: "Variables",
      description: "Store information like scores or names in your programs.",
      icon: "📦"
    }
  ];

  const codingVideos = [
    {
      title: "Introduction to Scratch",
      thumbnail: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "5:12",
      description: "Learn the basics of Scratch programming for beginners."
    },
    {
      title: "Create Your First Game",
      thumbnail: "https://images.pexels.com/photos/4709286/pexels-photo-4709286.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "8:45",
      description: "Make a simple but fun maze game with Scratch."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Junior Coder Zone"
        description="Learn to code with fun projects, games, and easy-to-follow tutorials!"
        icon={<Code size={40} />}
        color="bg-orange-600"
      />
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">What is Coding?</h2>
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-lg mb-4">
            Coding is like giving instructions to a computer to make it do what you want.
            It's similar to teaching a robot how to perform tasks!
          </p>
          <p className="mb-6">
            In this section, you'll learn the basics of coding using Scratch - a fun
            programming language designed for kids that uses colorful blocks instead of
            complicated text.
          </p>
          <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <p className="font-bold text-orange-800">Why Learn to Code?</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Develop problem-solving skills</li>
              <li>Boost creativity and logical thinking</li>
              <li>Create your own games and animations</li>
              <li>Prepare for future technology skills</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Scratch Projects for Beginners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scratchProjects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg text-orange-600">{project.title}</h3>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <button className="flex items-center px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-bold transition">
                  <PlayCircle size={16} className="mr-1" />
                  Start Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <section className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
          <h2 className="text-2xl font-bold mb-4 text-yellow-800">Basic Coding Concepts</h2>
          <div className="space-y-4">
            {codingConcepts.map((concept) => (
              <div 
                key={concept.title} 
                className="bg-white p-4 rounded-lg shadow-sm flex items-start hover:shadow-md transition"
              >
                <div className="text-2xl mr-4">{concept.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{concept.title}</h3>
                  <p className="text-gray-700">{concept.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
            <Youtube size={24} className="mr-2 text-red-600" />
            Coding Tutorial Videos
          </h2>
          <div className="space-y-4">
            {codingVideos.map((video) => (
              <div 
                key={video.title} 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col sm:flex-row"
              >
                <div className="relative sm:w-1/3">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-40 sm:h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded-md">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4 sm:w-2/3">
                  <h3 className="font-bold text-lg text-blue-700 mb-1">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{video.description}</p>
                  <button className="flex items-center px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-bold transition">
                    <Youtube size={16} className="mr-1" />
                    Watch Video
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Join Our Monthly Coding Challenge!</h2>
            <p className="mb-6">
              Each month, we post a new coding challenge for kids. Complete the challenge 
              and share your project with us! Winners get special badges and their projects 
              featured on our site.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition">
                See This Month's Challenge
              </button>
              <button className="px-4 py-2 bg-purple-500 text-white font-bold rounded-lg border border-white hover:bg-purple-400 transition flex items-center">
                <Github size={18} className="mr-1" />
                View Past Projects
              </button>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white rounded-full p-6 w-40 h-40 flex items-center justify-center">
              <Code size={80} className="text-purple-600" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodingZonePage;