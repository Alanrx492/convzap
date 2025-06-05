export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: number;
  emoji: string;
  text: string;
  options: QuizOption[];
}

export interface QuizData {
  title: string;
  subtitle: string;
  questions: QuizQuestion[];
  finalText: string;
  ctaText: string;
  ctaUrl: string;
}