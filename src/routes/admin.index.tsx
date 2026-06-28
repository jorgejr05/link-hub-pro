import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export const Route = createFileRoute("/admin/")({
  component: AdminLogin,
});

function AdminLogin() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError("Erro de Autenticação: " + authError.message);
        setLoading(false);
      } else if (data.session) {
        navigate({ to: "/admin/dashboard" });
      } else {
        setError("Erro desconhecido. Verifique suas credenciais.");
        setLoading(false);
      }
    } catch (err: any) {
      setError("Erro fatal: " + err.message);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-on-background">
      <div className="w-full max-w-sm bg-surface-container border border-white/10 rounded-2xl p-8 shadow-2xl">
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">Supabase Auth</h1>
          <p className="text-sm text-on-surface-variant">Painel Administrativo</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-primary-container font-bold">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="admin@exemplo.com"
              className="bg-background border border-white/20 rounded-lg p-3 text-white outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-primary-container font-bold">
              Senha
            </label>
            <input
              name="password"
              type="password"
              placeholder="Sua senha secreta"
              className="bg-background border border-white/20 rounded-lg p-3 text-white outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
              <p className="text-red-400 text-sm text-center font-semibold">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-primary text-on-primary font-bold py-3 rounded-lg hover:brightness-110 transition-all disabled:opacity-50"
          >
            {loading ? "Conectando ao Supabase..." : "Entrar Seguramente"}
          </button>
        </form>

      </div>
    </main>
  );
}
