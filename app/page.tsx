"use client";
import AboutCard from "@/components/aboutCard";
import ButtonG from "@/components/button";
import Countdown from "@/components/countdown";
import SpeakerList from "@/components/speakerList";
import Image from "next/image";

import localFont from "next/font/local";

const ugs = localFont({
  src: "../public/fonts/UltimateGearSlant.woff2",
});

const speakers = [
  {
    title: "Robo Rivals",
    subTitle: "Line Follower Robot",
    description:
      "Test your robotics skills in this thrilling competition! Participants must build and program their Line Follower Robots (LFRs) to navigate tracks and overcome challenges while racing against time and opponents.",
    buttonLabel: "Register Now!",
    linkLabel: "Event Details",
    buttonlink: "",
    eventdet: "",
    img: "/events/WomenSummit.png",
    imgAlt: "Line Follower Robot Event",
    imgW: 100,
    imgH: 100,
  },
];

export default function Home() {
  const buttons = [
    { link: "events", label: "Partner Wiht us" },
    { link: "events", label: "REGISTER" },
    { link: "events", label: "Events" },
  ];
  return (
    <div className="bg-[#092635] min-h-screen text-white mt-[74px] px-16">
      <div className="container p-10 pt-20 content-center">
        <div className="flex  space-x-5">
          <div
            className={`text-center text-6xl tracking-wide text-white ${ugs.className}`}
          >
            IEEE CS SYP  High Impact Zonal Event -
            <Image
              src={"/AiSPIRE_logo_white.png"}
              alt="about"
              width={450}
              height={50}
              className="pl-28 mt-4"
            />
            <p
              className={`text-center text-4xl mt-4 tracking-wide text-white ${ugs.className}`}
            >
              7-8 Feb, 2025
            </p>
          </div>
          <Countdown className="relative top-32 scale-75" />
        </div>
        <div className="flex space-x-4 text-xl">
          {buttons.map((buttons, index) => (
            <ButtonG
              key={index}
              link={buttons.link}
              label={buttons.label}
              className="mt-10"
            />
          ))}
        </div>
      </div>
      <AboutCard />
      <p
        className={`text-center text-6xl drop-shadow-xl text-white ${ugs.className}`}
      >
        Speakers
      </p>

      <SpeakerList speakers={speakers} />
    </div>
  );
}
