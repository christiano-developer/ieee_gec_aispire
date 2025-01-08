"use client";

import localFont from "next/font/local";

import ContactCard from "@/components/contact";

const ugs = localFont({
  src: [
    { path: "../../public/fonts/UltimateGearSlant.woff2" },
    { path: "../../public/fonts/UltimateGearSlant.woff" },
    { path: "../../public/fonts/UltimateGearSlant.ttf" },
  ],
});

export default function Events() {
  return (
    <div className="bg-[#092635] min-h-fit mt-[40px] p-10 ">
      <span
        className={` text-center text-8xl drop-shadow-xl py-6  tracking-wider text-white ${ugs.className}`}
      >
        Speakers
      </span>
      <ContactCard className="mt-5" />
    </div>
  );
}
