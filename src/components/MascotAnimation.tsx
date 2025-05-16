import React, { useState, useEffect } from 'react';
import { BookOpen, Lightbulb, Calculator, Globe } from 'lucide-react';

interface MascotAnimationProps {
  size?: number;
  action?: 'idle' | 'teaching' | 'celebrating';
}

const MascotAnimation: React.FC<MascotAnimationProps> = ({ 
  size = 100, 
  action = 'idle' 
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [icon, setIcon] = useState<React.ReactNode>(<Lightbulb size={size * 0.3} />);
  
  // Cycle through different subjects as icons
  useEffect(() => {
    const icons = [
      <Lightbulb key="lightbulb" size={size * 0.3} className="text-yellow-400" />,
      <BookOpen key="book" size={size * 0.3} className="text-red-600" />,
      <Calculator key="calculator" size={size * 0.3} className="text-blue-600" />,
      <Globe key="globe" size={size * 0.3} className="text-green-600" />
    ];
    
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % 4);
      setIcon(icons[currentFrame]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentFrame, size]);

  const getFaceExpression = () => {
    switch (action) {
      case 'teaching':
        return "😀";
      case 'celebrating':
        return "🎉";
      case 'idle':
      default:
        return hovered ? "😃" : "🙂";
    }
  };

  // Animation frames and styles
  const mascotStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div 
      className="mascot-container relative inline-block"
      style={mascotStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Professor Pixel's body */}
      <div 
        className={`relative rounded-full bg-gradient-to-b from-blue-500 to-purple-600 transition-all duration-300 ${
          hovered ? 'transform scale-110' : ''
        }`} 
        style={mascotStyle}
      >
        {/* Face */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-2xl" 
             style={{ fontSize: `${size * 0.4}px` }}>
          {getFaceExpression()}
        </div>
        
        {/* Thought bubble with rotating subjects */}
        <div className={`absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md ${
          hovered ? 'animate-bounce' : ''
        }`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default MascotAnimation;