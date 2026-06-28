import Groq from 'groq-sdk';

const rawApiKey = import.meta.env.VITE_GROQ_API_KEY || '';
const apiKey = rawApiKey.replace(/[^a-zA-Z0-9-._~+/=]/g, "");

export const groq = apiKey 
  ? new Groq({ apiKey, dangerouslyAllowBrowser: true }) 
  : null;
