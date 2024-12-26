import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navBar";

const ugs = localFont({
  src: [
    {
      path: "../public/fonts/UltimateGearSlant.otf", // Path relative to the "public" folder
      weight: "400", // Normal weight
      style: "italic", // Normal style
    },
  ],
  variable: "--font-ugs", // CSS variable for the font
});

export const metadata: Metadata = {
  title: "GOA Ai&R",
  description: "IEEE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ugs.variable}  antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
