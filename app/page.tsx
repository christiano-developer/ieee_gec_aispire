"use client";
import AboutCard from "@/components/aboutCard";
import ButtonG from "@/components/button";
import Countdown from "@/components/countdown";
import SpeakerList from "@/components/speakerList";
import ContactCard from "@/components/contact";
import Image from "next/image";
import Link from "next/link";
import EventList from "@/components/eventOL";
import localFont from "next/font/local";
import { FiArrowRight } from "react-icons/fi";

const ugs = localFont({
  src: [
    { path: "../public/fonts/UltimateGearSlant.woff2" },
    { path: "../public/fonts/UltimateGearSlant.woff" },
    { path: "../public/fonts/UltimateGearSlant.ttf" },
  ],
});

const events = [
  {
    title: "Govind",
    linkLabel: "appapap",
    buttonLink: "/",
    img: "/events/LFR.png",
    imgAlt: "Line Follower Robot Event",
  },
  {
    title: "Govind",
    linkLabel: "appapap",
    buttonLink: "/",
    img: "/events/LFR.png",
    imgAlt: "Line Follower Robot Event",
  },
  {
    title: "Govind",
    linkLabel: "appapap",
    buttonLink: "/",
    img: "/events/LFR.png",
    imgAlt: "Line Follower Robot Event",
  },
  {
    title: "Govind",
    linkLabel: "appapap",
    buttonLink: "/",
    img: "/events/LFR.png",
    imgAlt: "Line Follower Robot Event",
  },
];

const speakers = [
  {
    title: "Govind",
    subTitle: "Line Follower Robot",
    description:
      "Test your robotics skills in this thrilling competition! Participants must build and program their Line Follower Robots (LFRs) to navigate tracks and overcome challenges while racing against time and opponents.",
    img: "/events/LFR.png",
    imgAlt: "Line Follower Robot Event",
  },
  {
    title: "Vidhi",
    subTitle: "Line Follower Robot",
    description:
      "Test your robotics skills in this thrilling competition! Participants must build and program their Line Follower Robots (LFRs) to navigate tracks and overcome challenges while racing against time and opponents.",
    img: "/events/WomenSummit.png",
    imgAlt: "Line Follower Robot Event",
  },
  {
    title: "Christiano",
    subTitle: "Line Follower Robot",
    description:
      "Test your robotics skills in this thrilling competition! Participants must build and program their Line Follower Robots (LFRs) to navigate tracks and overcome challenges while racing against time and opponents.",
    img: "/events/CTF.png",
    imgAlt: "Line Follower Robot Event",
  },
];

export default function Home() {
  const buttons = [
    { link: "events", label: "Partner Wiht us" },
    { link: "events", label: "REGISTER" },
    { link: "events", label: "Events" },
  ];
  return (
    <div className="bg-primary min-h-screen text-white mt-[74px] px-16 pb-10">
      <Image
        alt="Mountains"
        src={"/bghome.png"}
        quality={100}
        fill
        className="opacity-15 mt-[74px]"
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
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
              className={`text-center text-transparent bg-gradient-to-r from-white to-secondary inline-block bg-clip-text  text-4xl mt-4 tracking-wide ${ugs.className}`}
            >
              7-8 Feb, 2025
            </p>
          </div>
          <Countdown className="relative top-28 scale-90" />
        </div>
        <div className="flex space-x-10 text-xl">
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
      <AboutCard
        img="/about.png"
        className="relative z-40 m-5 mt-16 h-[550px] shadow-black shadow-md"
      />
      <p
        className={`text-center mt-16 text-6xl drop-shadow-xl text-white ${ugs.className}`}
      >
        Speakers
      </p>
      <SpeakerList speakers={speakers} />
      <p
        className={` text-center mt-16 text-6xl drop-shadow-xl text-white ${ugs.className}`}
      >
        Events Overview
      </p>
      <EventList events={events} />

      <Link
        href="/events"
        className={`flex items-center justify-center pb-10 space-x-2 text-center my-2 text-lg drop-shadow-xl text-white font-mono underline underline-offset-2 `}
      >
        <h2>View All Events</h2>
        <FiArrowRight size={25} strokeWidth={2} />
      </Link>
      <ContactCard className="relative z-40 shadow-md shadow-black" />
    </div>
  );
}
