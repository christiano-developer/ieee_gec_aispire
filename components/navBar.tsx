"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SidePanel from "./sidebar";

interface NavbarProps {
  className?: string;
  navLinks: navLink[];
}

interface navLink {
  nLabel: string;
  nLink: string;
  classDis?: boolean;
  classImg?: string;
  hoverImg?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className, navLinks }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav
      className={`flex justify-center shadow-md shadow-black lg:px-5 lg:py-1 px-1 py-1 items-center ${className}`}
    >
      {navLinks.map((navLink, index) => (
        <div
          key={index}
          className="relative lg:flex flex-col items-center transition-all duration-500 hidden"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link
            href={navLink.nLink}
            className={`hover:underline underline-offset-4 hover:scale-110 transition-all duration-500 ${
              navLink.classDis ? "pointer-events-none" : ""
            }`}
          >
            {navLink.nLabel}
          </Link>
          {/* Image on hover */}
          {hoveredIndex === index && navLink.hoverImg && (
            <Image
              src={navLink.hoverImg}
              alt={`${navLink.nLabel} hover image`}
              width={100}
              height={100}
              className="absolute top-8 scale-150"
            />
          )}
        </div>
      ))}
      <SidePanel className="lg:hidden flex" />
    </nav>
  );
};

export default Navbar;
