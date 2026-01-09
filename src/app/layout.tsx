import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components ko import karein (Ensure karein ki path sahi ho)
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Website ki SEO details yahan update karein
export const metadata: Metadata = {
  title: "Punsari Gram Panchayat | Official Strategic Portal",
  description: "Official portal of India's No.1 Model Smart Village - Punsari, Gujarat. Led by Aryan Patel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fcfcfc]`}
      >
        {/* 1. Sabse upar Header (Utility Bar) */}
        <Header />  
        {/* Note: Agar aapne Header alag banaya hai toh ise uncomment karein */}

        {/* 2. Sticky Navbar jo har page par rahega */}
        <Navbar />

        {/* 3. Page ka main content yahan load hoga */}
        {children}

        {/* 4. Sabse niche Footer jo har page par dikhega */}
        <Footer />
      </body>
    </html>
  );
}