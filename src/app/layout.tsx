import type { Metadata } from "next";
import { Alkalami, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Toaster } from "sonner";

const alkalamiFont = Alkalami({
    variable: "--font-alkalmi",
    weight: "400"
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playbits",
  description: "We turn traditional content into interactive, bite-sized flashcards, games, and quizzes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alkalamiFont.variable} ${interFont.variable} antialiased`}
      >
       <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
        {children}
    </main>
    <Toaster />
    <Footer />
  </div>
      </body>
    </html>
  );
}
