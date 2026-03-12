//importação de tipo
import type { Metadata } from "next";
//importação de fonte 
import { Geist, Geist_Mono } from "next/font/google";
//importação do css que esta na mesma pasta deste arquivo
import "./globals.css";
import Sidebar from './components/Sidebar';

const nextConfig = {
  devIndicators: {
    appIsrStatus: false, // oculta o indicador
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Meu portfolio feito em next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen bg-black`}>
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </body>
    </html>
  );
}