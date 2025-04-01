"use client";

import Image from "next/image";

import deskSch from "../../public/schedule_desktop.svg";
import mobSch from "../../public/schedule_mobile.svg";

export default function Events() {
  return (
    <>
      <Image
        src={mobSch}
        width={1440}
        height={500}
        alt="shc"
        className="lg:hidden mt-8 pt-5 object-contain"
      />

      {/*breaker */}
      <Image
        src={deskSch}
        width={2640}
        height={500}
        alt="shc"
        className="lg:flex hidden object-contain"
      />
    </>
  );
}
