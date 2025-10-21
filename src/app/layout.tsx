import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "TECNOVITA",
  description: "Servicios técnicos en informática, telefonía y electricidad. Soluciones confiables para tu hogar o empresa."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-50 text-gray-900`}>
        <Header />
        <main className="flex-grow mt-[14rem]">{children}</main>
        <div className="fixed bottom-4 right-4 z-50 md:hidden">
          <Link
            href="https://wa.me/542954294429"
            target="_blank"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-4xl text-green-500 hover:text-green-400 transition-transform duration-300 hover:scale-110" />
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
}