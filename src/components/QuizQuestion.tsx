import React from 'react';
import { QuizQuestion as QuizQuestionType } from '../types/quiz';
import QuizOption from './QuizOption';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedOptionId: string | null;
  onSelectOption: (id: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  selectedOptionId, 
  onSelectOption 
}) => {
  return (
    <div className="w-full animate-fadeIn">
      <h2 className="text-xl md:text-2xl font-semibold mb-5 flex items-center">
        <span className="text-3xl mr-2">{question.emoji}</span>
        <span>{question.text}</span>
      </h2>
      <div className="space-y-2">
        {question.options.map((option) => (
          <QuizOption
            key={option.id}
            option={option}
            selected={selectedOptionId === option.id}
            onSelect={onSelectOption}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;