import React, { useState } from 'react';
import { CheckCircle, HelpCircle, Award } from 'lucide-react';

interface HistoryChallengeProps {
  leaderId: string;
  leaderName: string;
  isCompleted: boolean;
  onComplete: (leaderId: string) => void;
}

const HistoryChallenge: React.FC<HistoryChallengeProps> = ({
  leaderId,
  leaderName,
  isCompleted,
  onComplete
}) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = {
    'rosa-parks': [
      {
        question: "What did Rosa Parks refuse to do on the bus?",
        options: [
          "Give up her seat to a white passenger",
          "Pay the bus fare",
          "Talk to the bus driver",
          "Open a window"
        ],
        correct: 0
      },
      {
        question: "How long did the Montgomery Bus Boycott last?",
        options: [
          "One week",
          "One month",
          "381 days",
          "Two years"
        ],
        correct: 2
      },
      {
        question: "What year did Rosa Parks' bus incident happen?",
        options: [
          "1950",
          "1955",
          "1960",
          "1965"
        ],
        correct: 1
      }
    ],
    'mlk': [
      {
        question: "What famous speech did Dr. King give in Washington, D.C.?",
        options: [
          "I Have a Plan",
          "I Have a Dream",
          "I Have Hope",
          "I Have Faith"
        ],
        correct: 1
      },
      {
        question: "What prize did Dr. King win for his peaceful work?",
        options: [
          "Olympic Medal",
          "Pulitzer Prize",
          "Nobel Peace Prize",
          "Academy Award"
        ],
        correct: 2
      },
      {
        question: "In which city was Dr. King born?",
        options: [
          "Atlanta",
          "Montgomery",
          "Birmingham",
          "Memphis"
        ],
        correct: 0
      }
    ],
    'cesar-chavez': [
      {
        question: "What group of workers did César Chávez help?",
        options: [
          "Factory workers",
          "Farm workers",
          "Store workers",
          "Office workers"
        ],
        correct: 1
      },
      {
        question: "What does 'Sí, se puede' mean in English?",
        options: [
          "Good morning",
          "Thank you",
          "Yes, we can",
          "Goodbye"
        ],
        correct: 2
      },
      {
        question: "What organization did César Chávez help create?",
        options: [
          "United Farm Workers",
          "United Auto Workers",
          "Teachers Union",
          "Postal Workers Union"
        ],
        correct: 0
      }
    ]
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (newAnswers.length === 3) {
      const correctAnswers = questions[leaderId as keyof typeof questions].filter(
        (q, i) => newAnswers[i] === q.correct
      ).length;
      
      if (correctAnswers >= 2) {
        onComplete(leaderId);
      }
      
      setTimeout(() => {
        setShowQuiz(false);
        setCurrentQuestion(0);
        setAnswers([]);
      }, 2000);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const currentQuestionData = questions[leaderId as keyof typeof questions][currentQuestion];

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
      isCompleted ? 'ring-4 ring-green-500' : ''
    }`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">{leaderName}'s Challenge</h3>
          {isCompleted ? (
            <Award className="text-green-500" size={24} />
          ) : (
            <HelpCircle className="text-gray-400" size={24} />
          )}
        </div>

        {!showQuiz && (
          <div>
            <p className="text-gray-600 mb-4">
              Test your knowledge about {leaderName} and earn a special badge!
            </p>
            <button
              onClick={() => setShowQuiz(true)}
              disabled={isCompleted}
              className={`w-full px-4 py-2 rounded-lg font-bold transition ${
                isCompleted
                  ? 'bg-green-100 text-green-700 cursor-not-allowed'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {isCompleted ? (
                <span className="flex items-center justify-center">
                  <CheckCircle size={18} className="mr-2" />
                  Challenge Completed
                </span>
              ) : (
                'Start Challenge'
              )}
            </button>
          </div>
        )}

        {showQuiz && (
          <div className="animate-fadeIn">
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1} of 3</span>
                <span>{answers.length} answered</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-purple-600 rounded-full transition-all duration-300"
                  style={{ width: `${(answers.length / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <p className="font-bold text-gray-800 mb-4">{currentQuestionData.question}</p>

            <div className="space-y-2">
              {currentQuestionData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full p-3 text-left rounded-lg transition hover:bg-purple-50 border border-gray-200 hover:border-purple-300"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryChallenge;