import React from 'react';
import { MessageCircle } from 'lucide-react';

interface QuizResultProps {
  finalText: string;
  ctaText: string;
  ctaUrl: string;
}

const QuizResult: React.FC<QuizResultProps> = ({ finalText, ctaText, ctaUrl }) => {
  return (
    <div className="animate-fadeIn text-center">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
          <MessageCircle size={40} className="text-white" />
        </div>
      </div>
      
      <h2 className="text-xl md:text-2xl font-bold mb-4">{finalText}</h2>
      
      <a 
        href={ctaUrl}
        className="block w-full py-4 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center mt-6"
      >
        {ctaText}
      </a>
      
      <div className="mt-8 text-sm text-gray-500">
        <p>ConvZap © 2024 - Automação de WhatsApp</p>
      </div>
    </div>
  );
};

export default QuizResult;