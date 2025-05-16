import React from 'react';
import { BookOpen, BookMarked, PenTool, MessageCircle } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
import PageHeader from '../components/PageHeader';

const ReadingPage: React.FC = () => {
  const activities = [
    {
      id: 'reading-vocabulary',
      title: 'Vocabulary Builder',
      description: 'Expand your word knowledge with interactive vocabulary games',
      icon: <BookOpen />,
      stars: 3,
      level: 'Basic',
      color: 'bg-red-700',
      type: 'interactive'
    },
    {
      id: 'reading-comprehension',
      title: 'Reading Adventures',
      description: 'Read exciting stories and answer comprehension questions',
      icon: <BookMarked />,
      stars: 4,
      level: 'Intermediate',
      color: 'bg-red-600',
      type: 'practice'
    },
    {
      id: 'reading-writing',
      title: 'Creative Writing',
      description: 'Create your own stories with guided prompts and templates',
      icon: <PenTool />,
      stars: 4,
      level: 'Intermediate',
      color: 'bg-orange-600',
      type: 'challenge'
    },
    {
      id: 'reading-grammar',
      title: 'Grammar Games',
      description: 'Learn about parts of speech and sentence structure through fun activities',
      icon: <MessageCircle />,
      stars: 3,
      level: 'Basic',
      color: 'bg-pink-600',
      type: 'interactive'
    }
  ];

  const bookRecommendations = [
    {
      title: "Charlotte's Web",
      author: "E.B. White",
      description: "A classic story about friendship between a pig named Wilbur and a spider named Charlotte.",
      cover: "https://images.pexels.com/photos/3747141/pexels-photo-3747141.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      title: "The One and Only Ivan",
      author: "Katherine Applegate",
      description: "The story of a gorilla named Ivan who lives in a shopping mall.",
      cover: "https://images.pexels.com/photos/7034216/pexels-photo-7034216.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      title: "The Magic Tree House Series",
      author: "Mary Pope Osborne",
      description: "Join Jack and Annie on their adventures through time and space.",
      cover: "https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Reading & Language Arts"
        description="Build your vocabulary, improve comprehension, and explore exciting stories!"
        icon={<BookOpen size={40} />}
        color="bg-red-700"
      />
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          What You'll Learn in Reading & Language Arts
        </h2>
        <div className="bg-white rounded-xl shadow p-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <div className="bg-red-100 rounded-full p-2 mr-3 text-red-600">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Vocabulary Building</h3>
                <p className="text-gray-600">Expand your word knowledge and understanding</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 rounded-full p-2 mr-3 text-red-600">
                <BookMarked size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Reading Comprehension</h3>
                <p className="text-gray-600">Understand stories and answer questions about what you read</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 rounded-full p-2 mr-3 text-red-600">
                <PenTool size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Creative Writing</h3>
                <p className="text-gray-600">Write your own stories and express your ideas</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 rounded-full p-2 mr-3 text-red-600">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Grammar & Punctuation</h3>
                <p className="text-gray-600">Learn about sentence structure and proper punctuation</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Reading & Language Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>
      
      <section className="bg-red-50 rounded-xl p-6 border border-red-200">
        <h2 className="text-2xl font-bold mb-6 text-red-800">
          Recommended Books for 3rd Graders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bookRecommendations.map((book) => (
            <div key={book.title} className="bg-white rounded-lg overflow-hidden shadow-md border border-red-100">
              <img 
                src={book.cover} 
                alt={book.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-red-700">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                <p className="text-gray-700">{book.description}</p>
                <button className="mt-3 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-bold transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReadingPage;