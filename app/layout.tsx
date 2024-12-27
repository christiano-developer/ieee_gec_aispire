import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navBar";

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
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
