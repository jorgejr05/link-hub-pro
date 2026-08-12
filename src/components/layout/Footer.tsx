export function Footer() {
  return (
    <footer
      className="w-full relative mt-16 bg-surface-container-lowest border-t border-white/5"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[9px] md:text-[11px] font-medium tracking-widest text-on-surface-variant text-center opacity-50">
          © 2026 Jorge Jr. - Todos os Direitos Reservados.
        </p>
        <div className="hidden md:flex items-center gap-6">
          <a href="https://www.instagram.com/ojorge.jr?igsh=MWdvejY1YXZ6aWpiag==" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-[#E1306C] transition-colors" title="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://wa.me/5518988183746" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-[#25D366] transition-colors" title="WhatsApp">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
