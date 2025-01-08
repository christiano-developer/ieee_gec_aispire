"use client";

import AboutCard from "@/components/aboutCard";
import localFont from "next/font/local";

const ugs = localFont({
  src: "../../public/fonts/UltimateGearSlant.woff2",
});

export default function Events() {
  return (
    <div className="bg-[#092635] min-h-screen mt-[74px] pb-10 pt-4">
      <span
        className={`text-center text-8xl drop-shadow-xl text-white ${ugs.className}`}
      >
        About Us
      </span>
      <AboutCard img="/about.png" className="mx-20 mt-10" />
    </div>
  );
}
