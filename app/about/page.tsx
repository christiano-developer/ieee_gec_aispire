"use client";
import localFont from "next/font/local";

import AboutCard from "@/components/aboutCard";

const ugs = localFont({
  src: [
    { path: "../../public/fonts/UltimateGearSlant.woff2" },
    { path: "../../public/fonts/UltimateGearSlant.woff" },
    { path: "../../public/fonts/UltimateGearSlant.ttf" },
  ],
});

export default function Events() {
  return (
    <div className="bg-[#092635] min-h-fit mt-[40px] py-10 px-10">
      <span
        className={` text-center text-8xl drop-shadow-xl py-6  tracking-wider text-white ${ugs.className}`}
      >
        About Us
      </span>
      <AboutCard
        vid="/about.mp4"
        className="relative z-1 lg:m-5 mx-1 shadow-black shadow-md "
      />
    </div>
  );
}
