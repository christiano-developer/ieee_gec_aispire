"use client";
import Image from "next/image";
import SidePanel from "./sidebar";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const logosLeft = [
    { src: "/HIZE_nobg.png", width: 90, height: 30 },
    { src: "/IEEE_black.png", width: 90, height: 30 },
  ];
  const logosRight = [
    { src: "/GEC_logo_nobg.png", width: 50, height: 50 },
    { src: "/GEC_logo_nobg.png", width: 50, height: 50 },
  ];

  return (
    <nav
      className={`fixed ${className} top-0 z-50 min-w-[100%] bg-[#1b1b1a] text-secondary px-4 py-1 flex justify-between items-center`}
    >
      <div className="flex items-center space-x-10">
        {logosLeft.map((logosLeft, index) => (
          <Image
            alt="logos"
            key={index}
            width={logosLeft.width}
            height={logosLeft.height}
            src={logosLeft.src}
          />
        ))}
      </div>
      <div className="flex justify-between items-center space-x-10">
        {logosRight.map((logosRight, index) => (
          <Image
            alt="logos"
            key={index}
            width={logosRight.width}
            height={logosRight.height}
            src={logosRight.src}
          />
        ))}
        <SidePanel />
      </div>
    </nav>
  );
};

export default Navbar;
