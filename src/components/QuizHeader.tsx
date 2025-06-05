import React from 'react';

interface QuizHeaderProps {
  title: string;
  subtitle: string;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        {title}
      </h1>
      <p className="text-md md:text-lg text-gray-600">{subtitle}</p>
    </div>
  );
};

export default QuizHeader;