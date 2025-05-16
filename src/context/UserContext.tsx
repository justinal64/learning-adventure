import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserProgress {
  completedActivities: string[];
  totalStars: number;
  achievements: string[];
  level: number;
}

interface UserContextType {
  userProgress: UserProgress;
  addCompletedActivity: (activityId: string) => void;
  addStars: (stars: number) => void;
  addAchievement: (achievement: string) => void;
}

const defaultUserProgress: UserProgress = {
  completedActivities: [],
  totalStars: 0,
  achievements: [],
  level: 1,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    // Try to load from localStorage
    const savedProgress = localStorage.getItem('userProgress');
    return savedProgress ? JSON.parse(savedProgress) : defaultUserProgress;
  });

  // Save to localStorage whenever progress changes
  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  const addCompletedActivity = (activityId: string) => {
    if (!userProgress.completedActivities.includes(activityId)) {
      setUserProgress(prev => ({
        ...prev,
        completedActivities: [...prev.completedActivities, activityId]
      }));
    }
  };

  const addStars = (stars: number) => {
    setUserProgress(prev => {
      const newTotal = prev.totalStars + stars;
      // Calculate level based on stars (every 20 stars = 1 level)
      const newLevel = Math.floor(newTotal / 20) + 1;
      
      return {
        ...prev,
        totalStars: newTotal,
        level: newLevel
      };
    });
  };

  const addAchievement = (achievement: string) => {
    if (!userProgress.achievements.includes(achievement)) {
      setUserProgress(prev => ({
        ...prev,
        achievements: [...prev.achievements, achievement]
      }));
    }
  };

  return (
    <UserContext.Provider value={{ 
      userProgress, 
      addCompletedActivity, 
      addStars, 
      addAchievement 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};