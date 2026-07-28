import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorge jr - Como eu arquiteto soluções com IA",
  description: "Hub de alta performance focado em ecossistemas de IA, automação de conteúdo e construção de autoridade real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="bg-background text-on-background font-body-lg min-h-screen selection:bg-primary-container selection:text-on-primary-container relative">
        {children}
      </body>
    </html>
  );
}
