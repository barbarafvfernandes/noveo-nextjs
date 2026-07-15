import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Noveo - Filmes e Séries",
  description: "No Noveo você encontra os títulos dos filmes mais populares, em alta e melhores avaliados em um só lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer /> 
      </body>
    </html>
  );
}

