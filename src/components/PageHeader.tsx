import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description, 
  icon, 
  color 
}) => {
  return (
    <div className={`${color} rounded-2xl mb-8 p-6 text-white`}>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        <div className="bg-white rounded-full p-4 text-blue-600">
          {icon}
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">{title}</h1>
          <p className="text-lg md:text-xl text-white text-opacity-90 text-center md:text-left">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;