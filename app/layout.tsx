import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navBar";

export const metadata: Metadata = {
  title: "Aispire",
  description: "IEEE @ GEC",
  icons: {
    icon: "/baricon/favicon.svg",
    shortcut: "/baricon/favicon.svg",
    apple: "/baricon/apple-touch-icon.png",
  },
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-primary flex flex-col min-h-screen">
        <Navbar
          navLinks={navLinks}
          className="fixed z-50 h-16 text-white bg-[#1b1b1a]/10 lg:backdrop-blur-md min-w-full lg:space-x-20 space-x-5"
        />
        <main className="flex-grow lg:pt-16">{children}</main>
        <Footer className="w-full z-40" />
      </body>
    </html>
  );
}
