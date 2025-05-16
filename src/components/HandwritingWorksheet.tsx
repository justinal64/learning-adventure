import React from 'react';
import { Download } from 'lucide-react';

interface WorksheetProps {
  title: string;
  instructions: string;
  type: 'alphabet' | 'words' | 'sentences';
}

const HandwritingWorksheet: React.FC<WorksheetProps> = ({ title, instructions, type }) => {
  const getContent = () => {
    switch (type) {
      case 'alphabet':
        return (
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="font-bold text-gray-700 mb-2">Uppercase Letters</h3>
              <div className="grid grid-cols-13 gap-4">
                {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
                  <div key={letter} className="text-center">
                    <div className="text-2xl font-bold text-gray-600">{letter}</div>
                    <div className="h-8 border-b-2 border-dashed border-gray-300"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-700 mb-2">Lowercase Letters</h3>
              <div className="grid grid-cols-13 gap-4">
                {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
                  <div key={letter} className="text-center">
                    <div className="text-2xl font-bold text-gray-600">{letter}</div>
                    <div className="h-8 border-b-2 border-dashed border-gray-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'words':
        const practiceWords = [
          'the', 'and', 'that', 'have', 'for',
          'not', 'with', 'you', 'this', 'but'
        ];
        
        return (
          <div className="space-y-6">
            {practiceWords.map((word) => (
              <div key={word} className="border-b pb-4">
                <div className="text-xl font-bold text-gray-600 mb-2">{word}</div>
                <div className="h-8 border-b-2 border-dashed border-gray-300"></div>
                <div className="h-8 border-b-2 border-gray-300"></div>
              </div>
            ))}
          </div>
        );
      
      case 'sentences':
        const sentences = [
          'The quick brown fox jumps.',
          'I can write my name.',
          'Today is a sunny day.',
          'She likes to read books.',
          'We play in the park.'
        ];
        
        return (
          <div className="space-y-8">
            {sentences.map((sentence) => (
              <div key={sentence} className="border-b pb-6">
                <div className="text-lg font-bold text-gray-600 mb-2">{sentence}</div>
                <div className="h-8 border-b-2 border-dashed border-gray-300"></div>
                <div className="h-8 border-b-2 border-gray-300"></div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600">{instructions}</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
          <Download size={18} className="mr-2" />
          Download PDF
        </button>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <div className="h-8 border-b-2 border-gray-300"></div>
          </div>
          <div className="flex-1 ml-4">
            <label className="block text-sm font-medium text-gray-700">Date:</label>
            <div className="h-8 border-b-2 border-gray-300"></div>
          </div>
        </div>
      </div>
      
      {getContent()}
    </div>
  );
};

export default HandwritingWorksheet;