import React from 'react';
import QuizContainer from './components/QuizContainer';
import { quizData } from './data/quizData';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl">
        <QuizContainer quizData={quizData} />
      </div>
    </div>
  );
}

export default App;