// components/SidePanel.tsx
import Link from "next/link";
import { useState } from "react";

interface sideProps {
  className?: string;
  links?: { href: string; label: string }[];
}

const SidePanel: React.FC<sideProps> = ({ links = [], className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsOpen(!isOpen);
  };
  const defaultLinks = [
    { href: "/", label: "Home" },
    { href: "/events/ra", label: "Events" },
    { href: "/schedule", label: "schedule" },

    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className={`${className}`}>
      {/* Hamburger Icon */}
      <button
        onClick={toggleSidePanel}
        className="absolute right-0 text-white text-2xl focus:outline-none bg-primary/40 p-6 pl-96 top-0 backdrop-blur-sm"
        aria-label="Toggle Menu"
      >
        <div className="relative flex flex-col gap-[5px] w-8 rotate-180">
          <span className="w-7 h-[2px] bg-white block"></span>
          <span className="w-6 h-[2px] bg-white block"></span>
          <span className="w-5 h-[2px] bg-white block"></span>
        </div>
      </button>

      {/* Side Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-48 h-auto flex flex-col pt-10 bg-gray-800 text-white transform ${
          isOpen ? "-translate-x-0" : "translate-x-full"
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
          className="fixed  inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidePanel}
        ></div>
      )}
    </div>
  );
};

export default SidePanel;
