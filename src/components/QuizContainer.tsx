import React, { useState } from 'react';
import { QuizData } from '../types/quiz';
import QuizHeader from './QuizHeader';
import ProgressBar from './ProgressBar';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

interface QuizContainerProps {
  quizData: QuizData;
}

const QuizContainer: React.FC<QuizContainerProps> = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleSelectOption = (optionId: string) => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion.id]: optionId
    });
    
    // Use setTimeout to create a small delay for a better UX
    setTimeout(() => {
      if (currentQuestionIndex < quizData.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
      <QuizHeader title={quizData.title} subtitle={quizData.subtitle} />
      
      {!quizCompleted ? (
        <>
          <ProgressBar 
            currentStep={currentQuestionIndex + 1} 
            totalSteps={quizData.questions.length} 
          />
          
          <QuizQuestion
            question={quizData.questions[currentQuestionIndex]}
            selectedOptionId={selectedOptions[quizData.questions[currentQuestionIndex].id] || null}
            onSelectOption={handleSelectOption}
          />
        </>
      ) : (
        <QuizResult 
          finalText={quizData.finalText}
          ctaText={quizData.ctaText}
          ctaUrl={quizData.ctaUrl}
        />
      )}
    </div>
  );
};

export default QuizContainer;