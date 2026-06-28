import { createClient } from '@supabase/supabase-js';

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

const supabaseUrl = rawUrl.replace(/[^a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]/g, "");
const supabaseAnonKey = rawKey.replace(/[^a-zA-Z0-9-._~+/=]/g, "");

if (supabaseUrl === 'httpsplaceholder.supabase.co' || supabaseUrl.includes('placeholder')) {
  console.error('Supabase URL ou Anon Key não configuradas no .env! Verifique as variáveis de ambiente.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
