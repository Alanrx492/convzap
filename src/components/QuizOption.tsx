import React from 'react';
import { QuizOption as QuizOptionType } from '../types/quiz';

interface QuizOptionProps {
  option: QuizOptionType;
  selected: boolean;
  onSelect: (id: string) => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({ option, selected, onSelect }) => {
  return (
    <button
      className={`w-full p-4 mb-3 text-left rounded-lg border-2 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md
        ${selected 
          ? 'border-green-500 bg-green-50 text-green-800' 
          : 'border-gray-200 bg-white text-gray-700 hover:border-green-300'}`}
      onClick={() => onSelect(option.id)}
    >
      <span className="text-md md:text-lg">{option.text}</span>
    </button>
  );
};

export default QuizOption;