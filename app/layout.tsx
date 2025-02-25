import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navBar";

export const metadata: Metadata = {
  title: "GOA Ai&R",
  description: "IEEE",
};

const navLinks = [
  {
    nLabel: "Home",
    nLink: "/",
  },
  {
    nLabel: "Events",
    nLink: "/events/ra",
  },
  {
    nLabel: "Speakers",
    nLink: "/",
    classDis: true,
    hoverImg: "/speakers_coming_soon.png",
  },
  {
    nLabel: "Schedule",
    nLink: "/schedule",
  },
  {
    nLabel: "Contact Us",
    nLink: "/contact",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-primary`}>
        <Navbar
          navLinks={navLinks}
          className="fixed z-50 h-16 text-white bg-[#1b1b1a]/10  lg:backdrop-blur-md min-w-[100%] lg:space-x-20 space-x-5 "
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
