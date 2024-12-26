"use client";
import Image from "next/image";
import SidePanel from "./sidebar";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const logos = [
    { src: "/HIZE_nobg.png" },
    { src: "/IEEE_black.png" },
    { src: "/GEC_logo_nobg.png" },
  ];
  return (
    <nav
      className={`fixed ${className} top-0 z-50 min-w-[100%] bg-[#1b1b1a] mt-0  text-secondary px-8 py-1 flex justify-between items-center`}
    >
      <div className="flex items-center space-x-10">
        {logos.map((logos, index) => (
          <Image
            alt="logos"
            key={index}
            width={90}
            height={30}
            src={logos.src}
          />
        ))}
      </div>
      <SidePanel />
    </nav>
  );
};

export default Navbar;
