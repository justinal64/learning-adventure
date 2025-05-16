import React from 'react';
import { Award, Star, Trophy, BarChart3, Activity } from 'lucide-react';
import { useUser } from '../context/UserContext';
import PageHeader from '../components/PageHeader';

const ProgressPage: React.FC = () => {
  const { userProgress } = useUser();
  
  // Mock data for the progress page
  const subjectProgress = [
    { subject: 'Math', completed: 4, total: 6, percentage: 66 },
    { subject: 'Science', completed: 3, total: 5, percentage: 60 },
    { subject: 'Reading', completed: 2, total: 4, percentage: 50 },
    { subject: 'Social Studies', completed: 1, total: 4, percentage: 25 },
  ];
  
  const achievements = [
    { 
      id: 'math-star',
      title: 'Math Star', 
      description: 'Complete 3 math activities', 
      icon: <Calculator size={20} />,
      unlocked: subjectProgress[0].completed >= 3,
      progress: `${subjectProgress[0].completed}/3`
    },
    { 
      id: 'science-explorer',
      title: 'Science Explorer', 
      description: 'Complete 3 science activities', 
      icon: <Microscope size={20} />,
      unlocked: subjectProgress[1].completed >= 3,
      progress: `${subjectProgress[1].completed}/3`
    },
    { 
      id: 'bookworm',
      title: 'Bookworm', 
      description: 'Complete 3 reading activities', 
      icon: <BookOpen size={20} />,
      unlocked: subjectProgress[2].completed >= 3,
      progress: `${subjectProgress[2].completed}/3`
    },
    { 
      id: 'world-traveler',
      title: 'World Traveler', 
      description: 'Complete 3 social studies activities', 
      icon: <Globe size={20} />,
      unlocked: subjectProgress[3].completed >= 3,
      progress: `${subjectProgress[3].completed}/3`
    },
    { 
      id: 'super-learner',
      title: 'Super Learner', 
      description: 'Earn 20 stars total', 
      icon: <Star size={20} fill="currentColor" />,
      unlocked: userProgress.totalStars >= 20,
      progress: `${userProgress.totalStars}/20`
    }
  ];
  
  const completedActivities = [
    { id: 'math-multiplication', title: 'Multiplication Tables', subject: 'Math', stars: 3, date: '2023-09-15' },
    { id: 'science-earth', title: 'Earth and Space', subject: 'Science', stars: 3, date: '2023-09-14' },
    { id: 'reading-vocabulary', title: 'Vocabulary Builder', subject: 'Reading', stars: 3, date: '2023-09-13' },
  ];
  
  // Dynamically set which achievements the user has based on the mock data
  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const lockedAchievements = achievements.filter(a => !a.unlocked);
  
  // Components for the icons used in achievements
  function Calculator(props: any) {
    return <span className="text-blue-600" {...props}>🔢</span>;
  }
  
  function Microscope(props: any) {
    return <span className="text-green-600" {...props}>🔬</span>;
  }
  
  function BookOpen(props: any) {
    return <span className="text-red-600" {...props}>📚</span>;
  }
  
  function Globe(props: any) {
    return <span className="text-purple-600" {...props}>🌎</span>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="My Learning Progress"
        description="Track your achievements, earned stars, and completed activities!"
        icon={<Award size={40} />}
        color="bg-amber-500"
      />
      
      <section className="mb-8">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-3xl">
                  {userProgress.level}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                  <Trophy className="w-8 h-8 text-amber-500" fill="currentColor" />
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-800">Learning Level {userProgress.level}</h2>
                <p className="text-gray-600">
                  You've earned {userProgress.totalStars} stars so far!
                </p>
                <p className="text-sm text-gray-500">
                  {20 - (userProgress.totalStars % 20)} more stars until Level {userProgress.level + 1}
                </p>
              </div>
            </div>
            
            <div className="bg-amber-50 px-6 py-3 rounded-xl border border-amber-200">
              <div className="flex items-center">
                <Award className="text-amber-500 mr-2" size={24} />
                <div>
                  <p className="font-bold text-amber-800">Achievements Unlocked</p>
                  <p className="text-amber-700">{unlockedAchievements.length} of {achievements.length}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-gray-700 flex items-center">
                <Activity size={18} className="mr-1" /> Progress to Next Level
              </h3>
              <span className="text-sm text-gray-600">
                {userProgress.totalStars % 20}/20 Stars
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-amber-400 to-amber-600 h-4 rounded-full"
                style={{ width: `${(userProgress.totalStars % 20) * 5}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <section className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
            <BarChart3 className="mr-2" /> Subject Progress
          </h2>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="space-y-6">
              {subjectProgress.map((subject) => (
                <div key={subject.subject}>
                  <div className="flex justify-between mb-1">
                    <span className={`font-bold ${
                      subject.subject === 'Math' 
                        ? 'text-blue-600' 
                        : subject.subject === 'Science' 
                        ? 'text-green-600' 
                        : subject.subject === 'Reading' 
                        ? 'text-red-600' 
                        : 'text-purple-600'
                    }`}>
                      {subject.subject}
                    </span>
                    <span className="text-gray-600">
                      {subject.completed} of {subject.total} activities
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className={`h-4 rounded-full ${
                        subject.subject === 'Math' 
                          ? 'bg-blue-600' 
                          : subject.subject === 'Science' 
                          ? 'bg-green-600' 
                          : subject.subject === 'Reading' 
                          ? 'bg-red-600' 
                          : 'bg-purple-600'
                      }`}
                      style={{ width: `${subject.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-bold text-gray-800 mb-3">Recently Completed Activities</h3>
              <div className="space-y-3">
                {completedActivities.map((activity) => (
                  <div 
                    key={activity.id} 
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-800">{activity.title}</h4>
                      <p className="text-sm text-gray-600">{activity.subject} • Completed on {activity.date}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="text-amber-500 mr-1" size={16} fill="currentColor" />
                      <span className="font-bold">{activity.stars}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
            <Trophy className="mr-2" /> Achievements
          </h2>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="mb-4">
              <h3 className="font-bold text-green-600 mb-2 flex items-center">
                <Award className="mr-1" size={16} /> Unlocked
              </h3>
              {unlockedAchievements.length > 0 ? (
                <div className="space-y-3">
                  {unlockedAchievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center"
                    >
                      <div className="bg-white p-2 rounded-full mr-3">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{achievement.title}</h4>
                        <p className="text-xs text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 italic">Complete activities to unlock achievements!</p>
              )}
            </div>
            
            <div>
              <h3 className="font-bold text-gray-600 mb-2 flex items-center">
                <Award className="mr-1" size={16} /> Locked
              </h3>
              <div className="space-y-3">
                {lockedAchievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center opacity-75"
                  >
                    <div className="bg-white p-2 rounded-full mr-3">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">{achievement.title}</h4>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-amber-400 h-2 rounded-full"
                          style={{ 
                            width: `${
                              achievement.progress.split('/')[0] / achievement.progress.split('/')[1] * 100
                            }%` 
                          }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{achievement.progress}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <section className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl p-8 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">Your Learning Certificate</h2>
          <p className="text-lg mb-6">
            Earn 50 stars to unlock a special certificate you can print and display!
          </p>
          <div className="bg-white bg-opacity-20 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="border-4 border-white border-dashed rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-2">Certificate of Achievement</h3>
              <p className="text-lg mb-4">This certifies that</p>
              <p className="text-2xl font-bold mb-4 italic">Your Name</p>
              <p className="mb-4">has successfully completed activities in</p>
              <p className="text-xl mb-6">Math, Science, Reading, and Social Studies</p>
              <div className="flex justify-center">
                <div className="bg-white text-amber-600 rounded-full px-4 py-2 font-bold">
                  {userProgress.totalStars}/50 Stars Earned
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgressPage;