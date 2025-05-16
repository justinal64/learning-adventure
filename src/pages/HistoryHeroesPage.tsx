import React, { useState } from 'react';
import { BookOpen, Star, Award, Map, Clock, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import TimelineEvent from '../components/TimelineEvent';
import LeaderProfile from '../components/LeaderProfile';
import HistoryMap from '../components/HistoryMap';
import HistoryChallenge from '../components/HistoryChallenge';

const HistoryHeroesPage: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<string | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

  const leaders = [
    {
      id: 'rosa-parks',
      name: 'Rosa Parks',
      title: 'Mother of the Civil Rights Movement',
      years: '1913-2005',
      photo: 'https://images.pexels.com/photos/6146931/pexels-photo-6146931.jpeg',
      quote: "You must never be fearful about what you are doing when it is right.",
      biography: `Rosa Parks was a brave woman who helped change America. On December 1, 1955, she refused to give up her bus seat to a white passenger in Montgomery, Alabama. This simple but powerful act of peaceful protest helped start the Montgomery Bus Boycott. African Americans stopped riding buses for 381 days! Her courage inspired many people to stand up for equal rights. Rosa Parks showed that one person can make a big difference by standing up (or in her case, sitting down) for what's right.`,
      quickFacts: [
        'Born on February 4, 1913, in Tuskegee, Alabama',
        'Worked as a seamstress',
        'Helped start the Montgomery Bus Boycott',
        'Received the Presidential Medal of Freedom'
      ]
    },
    {
      id: 'mlk',
      name: 'Martin Luther King Jr.',
      title: 'Leader of the Civil Rights Movement',
      years: '1929-1968',
      photo: 'https://images.pexels.com/photos/6146938/pexels-photo-6146938.jpeg',
      quote: "I have a dream that one day little black boys and girls will join hands with little white boys and girls as sisters and brothers.",
      biography: `Dr. Martin Luther King Jr. was a minister and civil rights leader who worked to make America fair for everyone. He led peaceful protests and gave powerful speeches about treating all people equally. His most famous speech was the "I Have a Dream" speech in Washington, D.C., where he shared his hope for a future where all children would be treated fairly. Dr. King believed in solving problems without violence. He won the Nobel Peace Prize for his work and helped pass important laws that made discrimination illegal.`,
      quickFacts: [
        'Born on January 15, 1929, in Atlanta, Georgia',
        'Led the March on Washington in 1963',
        'Won the Nobel Peace Prize in 1964',
        'National holiday celebrates his life and work'
      ]
    },
    {
      id: 'cesar-chavez',
      name: 'César Chávez',
      title: 'Champion of Farm Workers' Rights',
      years: '1927-1993',
      photo: 'https://images.pexels.com/photos/6146944/pexels-photo-6146944.jpeg',
      quote: "We cannot seek achievement for ourselves and forget about progress and prosperity for our community.",
      biography: `César Chávez was a Mexican American civil rights leader who helped farm workers get better treatment. As a child, he and his family worked hard picking crops on farms. He saw how unfairly farm workers were treated, with low pay and unsafe working conditions. César organized peaceful protests and boycotts to help workers get better pay and safer jobs. He co-founded the United Farm Workers union with Dolores Huerta. His famous words "Sí, se puede" (Yes, we can!) still inspire people today.`,
      quickFacts: [
        'Born on March 31, 1927, in Arizona',
        'Led the Delano Grape Strike',
        'Co-founded United Farm Workers union',
        'Practiced peaceful protest through fasting'
      ]
    }
  ];

  const timelineEvents = [
    {
      year: 1954,
      title: 'Brown v. Board of Education',
      description: 'The Supreme Court rules that separate schools for black and white children are not fair or equal.'
    },
    {
      year: 1955,
      title: 'Montgomery Bus Boycott',
      description: 'After Rosa Parks is arrested, African Americans stop riding buses in Montgomery for over a year.'
    },
    {
      year: 1963,
      title: 'March on Washington',
      description: 'Dr. King gives his famous "I Have a Dream" speech to over 250,000 people.'
    },
    {
      year: 1964,
      title: 'Civil Rights Act',
      description: 'This important law makes it illegal to treat people differently because of their race.'
    },
    {
      year: 1965,
      title: 'Voting Rights Act',
      description: 'This law helps make sure everyone has the right to vote.'
    }
  ];

  const significantLocations = [
    {
      id: 'montgomery',
      name: 'Montgomery, Alabama',
      description: 'Where Rosa Parks refused to give up her bus seat and the bus boycott began.',
      coordinates: { lat: 32.3792, lng: -86.3077 }
    },
    {
      id: 'atlanta',
      name: 'Atlanta, Georgia',
      description: 'Birthplace of Dr. Martin Luther King Jr. and home to many civil rights activities.',
      coordinates: { lat: 33.7490, lng: -84.3880 }
    },
    {
      id: 'washington',
      name: 'Washington, D.C.',
      description: 'Location of the March on Washington and Dr. King\'s "I Have a Dream" speech.',
      coordinates: { lat: 38.8977, lng: -77.0365 }
    },
    {
      id: 'delano',
      name: 'Delano, California',
      description: 'Where César Chávez led the famous grape strike for farm workers\' rights.',
      coordinates: { lat: 35.7688, lng: -119.2471 }
    },
    {
      id: 'selma',
      name: 'Selma, Alabama',
      description: 'Starting point of the historic voting rights march to Montgomery.',
      coordinates: { lat: 32.4074, lng: -87.0211 }
    }
  ];

  const handleChallengeComplete = (challengeId: string) => {
    if (!completedChallenges.includes(challengeId)) {
      setCompletedChallenges([...completedChallenges, challengeId]);
    }

    if (completedChallenges.length + 1 === 3) {
      setShowCertificate(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="History Heroes: Champions of Civil Rights"
        description="Discover the brave leaders who fought for equality and justice"
        icon={<BookOpen size={40} />}
        color="bg-purple-700"
      />

      {/* Welcome Section */}
      <section className="mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome, History Detective!</h2>
          <p className="text-lg mb-6">
            Get ready to uncover the inspiring stories of civil rights heroes who changed America.
            Your mission is to learn about their brave actions and the important changes they helped create.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white bg-opacity-20 rounded-xl p-4">
              <Clock className="w-8 h-8 mb-2 mx-auto" />
              <p className="font-bold">30 Minutes</p>
              <p className="text-sm">Activity Time</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4">
              <Star className="w-8 h-8 mb-2 mx-auto" />
              <p className="font-bold">Grades 3-5</p>
              <p className="text-sm">Reading Level</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4">
              <Award className="w-8 h-8 mb-2 mx-auto" />
              <p className="font-bold">3 Badges</p>
              <p className="text-sm">To Collect</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leader Profiles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Civil Rights Leaders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map(leader => (
            <LeaderProfile
              key={leader.id}
              leader={leader}
              onSelect={() => setSelectedLeader(leader.id)}
              isSelected={selectedLeader === leader.id}
            />
          ))}
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="mb-12 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <Clock className="mr-2" /> Civil Rights Timeline
        </h2>
        <div className="space-y-6">
          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              isLast={index === timelineEvents.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Interactive Map */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <Map className="mr-2" /> Important Places
        </h2>
        <HistoryMap locations={significantLocations} />
      </section>

      {/* History Detective Challenges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <Star className="mr-2" /> History Detective Challenges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map(leader => (
            <HistoryChallenge
              key={leader.id}
              leaderId={leader.id}
              leaderName={leader.name}
              isCompleted={completedChallenges.includes(leader.id)}
              onComplete={handleChallengeComplete}
            />
          ))}
        </div>
      </section>

      {/* Certificate Section */}
      {showCertificate && (
        <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Congratulations!</h2>
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
            <div className="border-4 border-yellow-500 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Certificate of Achievement</h3>
              <p className="mb-4">This certifies that</p>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter your name"
                className="text-center text-2xl font-bold mb-4 border-b-2 border-yellow-500 focus:outline-none"
              />
              <p className="mb-4">has successfully completed</p>
              <p className="text-xl font-bold mb-6">History Heroes: Champions of Civil Rights</p>
              <div className="flex justify-center gap-4">
                {completedChallenges.map(challenge => (
                  <div key={challenge} className="bg-yellow-100 rounded-full p-2">
                    <Award className="text-yellow-600" />
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-full font-bold hover:bg-yellow-600 transition flex items-center mx-auto">
              <FileText className="mr-2" /> Print Certificate
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default HistoryHeroesPage;