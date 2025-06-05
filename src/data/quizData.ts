import { QuizData } from '../types/quiz';

export const quizData: QuizData = {
  title: 'Você está perdendo vendas no WhatsApp e nem percebe!',
  subtitle: 'Responda 5 perguntas rápidas e descubra como mudar isso HOJE.',
  questions: [
    {
      id: 1,
      emoji: '🔥',
      text: 'Quantos clientes você já perdeu por demorar pra responder no WhatsApp?',
      options: [
        { id: '1a', text: 'Nenhum, sou super rápido' },
        { id: '1b', text: 'Uns poucos, mas acontece' },
        { id: '1c', text: 'Vários... é difícil dar conta' },
        { id: '1d', text: 'Perco MUITOS! Isso me dá desespero' }
      ]
    },
    {
      id: 2,
      emoji: '⏳',
      text: 'Se 50 pessoas chamassem você agora no WhatsApp, quantas você conseguiria atender bem?',
      options: [
        { id: '2a', text: 'Todas, sem problema' },
        { id: '2b', text: 'Umas 10, com muito esforço' },
        { id: '2c', text: 'Só as que der tempo…' },
        { id: '2d', text: 'Nenhuma, ia travar tudo!' }
      ]
    },
    {
      id: 3,
      emoji: '💸',
      text: 'Você sabia que tem gente vendendo no automático com o WhatsApp enquanto você ainda responde manualmente?',
      options: [
        { id: '3a', text: 'Sério?! Quero isso pra mim' },
        { id: '3b', text: 'Já ouvi falar, mas nunca testei' },
        { id: '3c', text: 'Nunca pensei nisso, interessante…' },
        { id: '3d', text: 'Não acredito muito nisso' }
      ]
    },
    {
      id: 4,
      emoji: '🚀',
      text: 'Se você pudesse ter uma ferramenta que responde seus clientes sozinha, envia catálogo, tira dúvidas e ainda VENDE por você… o que faria?',
      options: [
        { id: '4a', text: 'Começaria AGORA!' },
        { id: '4b', text: 'Testaria por curiosidade' },
        { id: '4c', text: 'Guardaria pra depois' },
        { id: '4d', text: 'Não me interessa no momento' }
      ]
    },
    {
      id: 5,
      emoji: '💥',
      text: 'Quanto tempo e dinheiro você ainda vai perder antes de automatizar seu atendimento?',
      options: [
        { id: '5a', text: 'Nenhum! Quero mudar isso HOJE' },
        { id: '5b', text: 'Ainda tô na dúvida…' },
        { id: '5c', text: 'Já perdi muito!' },
        { id: '5d', text: 'Prefiro continuar do jeito que tá (mesmo perdendo vendas)' }
      ]
    }
  ],
  finalText: '🎯 Você está a 1 passo de automatizar seu atendimento no WhatsApp e começar a vender mesmo enquanto dorme.',
  ctaText: '🔥 Veja como fazer isso AGORA com o ConvZap',
  ctaUrl: 'https://bit.ly/coonvzap'
};