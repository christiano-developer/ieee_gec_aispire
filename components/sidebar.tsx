// components/SidePanel.tsx
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

interface sideProps {
  className?: string;
  links?: { href: string; label: string }[];
}

const SidePanel: React.FC<sideProps> = ({ links = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsOpen(!isOpen);
  };
  const defaultLinks = [
    { href: "/events", label: "Events" },
    { href: "#speakers", label: "Speakers" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Hamburger Icon */}
      <button
        onClick={toggleSidePanel}
        className="text-white text-2xl p-2 focus:outline-none "
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <FiX />
        ) : (
          <FiMenu size={50} strokeLinecap="square" strokeWidth={1.5} />
        )}
      </button>

      {/* Side Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-48 flex flex-col pt-10 bg-gray-800 text-white transform ${
          isOpen ? "-translate-x-100" : "translate-x-full"
        } transition-transform duration-300 ease-in-out items-center`}
      >
        <div className="">
          {(links.length > 0 ? links : defaultLinks).map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block w-30 p-4 text-center text-white hover:bg-secondary hover:text-primary transition-all duration-500 hover:scale-110"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay (closes sidebar when clicking outside) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidePanel}
        ></div>
      )}
    </>
  );
};

export default SidePanel;
