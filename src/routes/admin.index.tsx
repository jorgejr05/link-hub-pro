import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export const Route = createFileRoute("/admin/")({
  beforeLoad: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      throw redirect({ to: "/admin/dashboard" });
    }
  },
  component: AdminLogin,
});

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate({ to: "/admin/dashboard" });
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-surface-container/50 backdrop-blur-2xl border border-white/10 rounded-3xl p-8">
        <div className="text-center mb-8">
          <span className="material-symbols-outlined text-primary-container text-4xl mb-4" data-icon="admin_panel_settings">
            admin_panel_settings
          </span>
          <h1 className="font-headline-md text-2xl text-primary">Acesso Restrito</h1>
          <p className="text-on-surface-variant text-sm mt-2">Hub de Autoridade - Dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-label-caps uppercase text-primary-container mb-2 tracking-widest">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-label-caps uppercase text-primary-container mb-2 tracking-widest">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
              required
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-primary-container text-on-primary-container font-bold py-3 rounded-xl hover:neon-glow transition-all disabled:opacity-50"
          >
            {loading ? "Autenticando..." : "Entrar no Dashboard"}
          </button>
        </form>
      </div>
    </main>
  );
}
