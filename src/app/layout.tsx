import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ministério Evangelismo sem Fronteiras | Levando esperança a todos os povos",
  description:
    "Levando a mensagem de Cristo e ações concretas de amor ao próximo, para além das fronteiras, no coração do sertão nordestino.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${caveat.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
