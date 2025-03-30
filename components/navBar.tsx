"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SidePanel from "./sidebar";

import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

// Glitter animation: applies a shimmering text-shadow effect
const glitter = keyframes`
  0% {
    text-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  25% {
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.5), 0 0 8px rgba(255, 255, 255, 0.3);
  }
  50% {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.6);
  }
  75% {
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.5), 0 0 8px rgba(255, 255, 255, 0.3);
  }
  100% {
    text-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const PulseGlitterText = styled.h1`
  display: inline-block;
  animation:
    ${pulse} 3s infinite,
    ${glitter} 3s infinite;
  &:hover {
    animation: none;
  }
`;

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
      className={`flex font-mono justify-center shadow-md shadow-black lg:px-5 lg:py-1 px-1 py-1 items-center ${className}`}
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
            {navLink.nLabel === "Women Summit" ? (
              <PulseGlitterText>{navLink.nLabel}</PulseGlitterText>
            ) : (
              navLink.nLabel
            )}
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
