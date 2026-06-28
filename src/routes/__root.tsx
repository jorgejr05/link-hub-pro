import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNavBar } from "@/components/layout/BottomNavBar";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-on-surface">Página não encontrada</h2>
        <p className="mt-2 text-sm text-on-surface-variant">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jorge Jr. - Hub de Autoridade" },
      { name: "description", content: "Hub de alta performance focado em ecossistemas de IA, automação de conteúdo e construção de autoridade real." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-on-background font-body-lg min-h-screen selection:bg-primary-container selection:text-on-primary-container relative">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isNoLayoutRoute = pathname.startsWith("/admin") || pathname.startsWith("/curriculo");

  return (
    <>
      {!isNoLayoutRoute && <Header />}
      <Outlet />
      {!isNoLayoutRoute && <Footer />}
      {!isNoLayoutRoute && <BottomNavBar />}
    </>
  );
}
