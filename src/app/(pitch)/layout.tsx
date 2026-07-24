export default function PitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Um contêiner de tela inteira que força as cores claras, sobrepondo o tema escuro do site principal
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      {children}
    </div>
  );
}
