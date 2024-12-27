// components/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavbarProps {
  className?: string;
  links?: { href: string; label: string }[];
}

const Footer: React.FC<NavbarProps> = ({ className, links = [] }) => {
  const defaultLinks = [{ href: "ieee.org", label: "ieee" }];
  return (
    <footer
      className={`${className}  bg-black text-primary flex py-8 font-pixel`}
    >
      <Image
        className="ml-5 "
        src="/HIZE_nobg.png"
        width={300}
        height={40}
        alt="logo_ieee_hize"
      />
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="mt-4">
          {(links.length > 0 ? links : defaultLinks).map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="p-2 w-20 text-center hover:bg-secondary hover:text-primary transition-all duration-500 hover:scale-110"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
