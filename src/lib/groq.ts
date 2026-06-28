import Groq from 'groq-sdk';

const apiKey = import.meta.env.VITE_GROQ_API_KEY?.trim();

export const groq = apiKey 
  ? new Groq({ apiKey, dangerouslyAllowBrowser: true }) 
  : null;
