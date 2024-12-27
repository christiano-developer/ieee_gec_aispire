"use client";
import AboutCard from "@/components/aboutCard";
import ButtonG from "@/components/button";
import Countdown from "@/components/countdown";
import SpeakerList from "@/components/speakerList";

import localFont from "next/font/local";

const ugs = localFont({
  src: "../public/fonts/UltimateGearSlant.woff2",
});
const ug = localFont({
  src: "../public/fonts/UltimateGear.woff2",
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
    img: "",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 0,
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
          <p
            className={`text-center text-6xl tracking-wide text-white ${ugs.className}`}
          >
            IEEE CS SYP  High Impact Zonal Event -
            <p className={`text-7xl ${ug.className}`}>Aispire</p>
          </p>
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
