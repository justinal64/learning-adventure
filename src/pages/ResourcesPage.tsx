import React, { useState } from 'react';
import { User, FileText, Book, Calendar, Download } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import HandwritingWorksheet from '../components/HandwritingWorksheet';

const ResourcesPage: React.FC = () => {
  const [activeWorksheet, setActiveWorksheet] = useState<'alphabet' | 'words' | 'sentences'>('alphabet');
  
  const worksheets = [
    {
      title: "Multiplication Tables (1-10)",
      subject: "Math",
      grade: "3rd Grade",
      pages: 4,
      description: "Practice multiplication tables from 1 to 10 with these worksheets."
    },
    {
      title: "Plant Life Cycle",
      subject: "Science",
      grade: "3rd Grade",
      pages: 3,
      description: "Learn about how plants grow from seeds with diagrams and activities."
    },
    {
      title: "Reading Comprehension Stories",
      subject: "Reading",
      grade: "3rd Grade",
      pages: 5,
      description: "Short stories with comprehension questions to practice reading skills."
    },
    {
      title: "U.S. States and Capitals",
      subject: "Social Studies",
      grade: "3rd Grade",
      pages: 6,
      description: "Maps and activities to learn about states and their capitals."
    }
  ];

  const teachingTips = [
    {
      tip: "Use concrete objects like blocks or counters when teaching multiplication concepts.",
      subject: "Math"
    },
    {
      tip: "Encourage children to keep a reading journal where they can write about books they've read.",
      subject: "Reading"
    },
    {
      tip: "Connect science concepts to everyday life, such as observing weather patterns or plant growth.",
      subject: "Science"
    },
    {
      tip: "Use maps and globes regularly to help children develop spatial awareness and geographic knowledge.",
      subject: "Social Studies"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Parent & Teacher Resources"
        description="Access printable worksheets, teaching guides, and additional learning materials."
        icon={<User size={40} />}
        color="bg-gray-700"
      />
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <FileText className="mr-2" /> Printable Worksheets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {worksheets.map((worksheet) => (
            <div 
              key={worksheet.title} 
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition flex flex-col"
            >
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-lg text-gray-800">{worksheet.title}</h3>
                <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${
                  worksheet.subject === "Math" 
                    ? "bg-blue-600" 
                    : worksheet.subject === "Science" 
                    ? "bg-green-600"
                    : worksheet.subject === "Reading"
                    ? "bg-red-600"
                    : "bg-purple-600"
                }`}>
                  {worksheet.subject}
                </span>
              </div>
              <div className="p-4 flex-grow">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>{worksheet.grade}</span>
                  <span>{worksheet.pages} pages</span>
                </div>
                <p className="text-gray-700 mb-4">{worksheet.description}</p>
              </div>
              <div className="bg-gray-50 p-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition w-full"
                >
                  <Download size={18} className="mr-2" />
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Cursive Writing Practice</h2>
        <div className="bg-gray-100 rounded-xl p-6">
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setActiveWorksheet('alphabet')}
              className={`px-4 py-2 rounded-lg font-bold transition ${
                activeWorksheet === 'alphabet' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Alphabet Practice
            </button>
            <button 
              onClick={() => setActiveWorksheet('words')}
              className={`px-4 py-2 rounded-lg font-bold transition ${
                activeWorksheet === 'words' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Word Practice
            </button>
            <button 
              onClick={() => setActiveWorksheet('sentences')}
              className={`px-4 py-2 rounded-lg font-bold transition ${
                activeWorksheet === 'sentences' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Sentence Practice
            </button>
          </div>
          
          <HandwritingWorksheet 
            title={
              activeWorksheet === 'alphabet' 
                ? 'Cursive Alphabet Practice' 
                : activeWorksheet === 'words'
                ? 'Common Words Practice'
                : 'Sentence Writing Practice'
            }
            instructions={
              activeWorksheet === 'alphabet'
                ? 'Practice writing uppercase and lowercase letters in cursive. Start at the dot and follow the arrows.'
                : activeWorksheet === 'words'
                ? 'Practice writing common words in cursive. Trace the dotted letters, then write on your own.'
                : 'Practice writing complete sentences in cursive. Start with tracing, then write independently.'
            }
            type={activeWorksheet}
          />
        </div>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <section className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 flex items-center">
            <Book className="mr-2" /> Teaching Tips
          </h2>
          <div className="space-y-4">
            {teachingTips.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
              >
                <div className="flex justify-between items-start">
                  <p className="text-gray-800">{item.tip}</p>
                  <span className={`ml-3 px-2 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                    item.subject === "Math" 
                      ? "bg-blue-100 text-blue-800" 
                      : item.subject === "Science" 
                      ? "bg-green-100 text-green-800"
                      : item.subject === "Reading"
                      ? "bg-red-100 text-red-800"
                      : "bg-purple-100 text-purple-800"
                  }`}>
                    {item.subject}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h2 className="text-2xl font-bold mb-4 text-green-800 flex items-center">
            <Calendar className="mr-2" /> Learning Schedule
          </h2>
          <p className="mb-4 text-gray-700">
            A balanced weekly schedule can help children develop consistent learning habits.
            Here's a sample schedule for a 3rd grader:
          </p>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="grid grid-cols-7 gap-2 text-center font-bold border-b pb-2 mb-2">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              <div className="bg-blue-100 p-2 rounded text-sm">Math</div>
              <div className="bg-red-100 p-2 rounded text-sm">Reading</div>
              <div className="bg-green-100 p-2 rounded text-sm">Science</div>
              <div className="bg-purple-100 p-2 rounded text-sm">Social</div>
              <div className="bg-yellow-100 p-2 rounded text-sm">Review</div>
              <div className="bg-gray-100 p-2 rounded text-sm">Free</div>
              <div className="bg-gray-100 p-2 rounded text-sm">Free</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Recommended: 20-30 minutes per subject for 3rd graders, with breaks in between.
          </p>
        </section>
      </div>
      
      <section className="bg-gray-100 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Tracking Your Child's Progress</h2>
        <p className="mb-6">
          Monitor your child's learning journey and encourage their achievements. Our platform allows
          you to see completed activities, earned stars, and areas that might need more attention.
        </p>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-bold text-lg text-gray-800 mb-3">How to Support Learning at Home:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Ask questions about what they're learning and encourage them to explain concepts</li>
            <li>Set aside a quiet, comfortable space for learning activities</li>
            <li>Use everyday situations as learning opportunities (counting money, reading signs)</li>
            <li>Celebrate achievements and progress, no matter how small</li>
            <li>Be patient and positive, especially when facing challenges</li>
          </ul>
          <div className="flex justify-center">
            <a 
              href="#" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition"
            >
              View Progress Dashboard
            </a>
          </div>
        </div>
      </section>
      
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Need Additional Help?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Our education experts are available to answer questions and provide personalized
            guidance for your child's learning journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="px-6 py-3 bg-white text-indigo-600 rounded-full font-bold hover:bg-gray-100 transition"
            >
              Contact Support
            </a>
            <a 
              href="#" 
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-indigo-600 transition"
            >
              Join Parent Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;