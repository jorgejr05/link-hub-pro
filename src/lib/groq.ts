import Groq from 'groq-sdk';

const rawApiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY || process.env.VITE_GROQ_API_KEY || '';
const apiKey = rawApiKey.replace(/[^a-zA-Z0-9-._~+/=]/g, "");

export const groq = apiKey 
  ? new Groq({ apiKey, dangerouslyAllowBrowser: true }) 
  : null;
