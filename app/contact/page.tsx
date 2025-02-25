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
    <div className=" bg-[#092635]  py-20 px-10">
      <span
        className={`relative text-center text-7xl drop-shadow-xl py-6  tracking-wider text-white ${ugs.className}`}
      >
        Contact
      </span>
      <ContactCard className="mt-5" />
    </div>
  );
}
