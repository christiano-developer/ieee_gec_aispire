"use client";

import SpeakerList from "@/components/speakerList";
import localFont from "next/font/local";

const ugs = localFont({
  src: [
    { path: "../../public/fonts/UltimateGearSlant.woff2" },
    { path: "../../public/fonts/UltimateGearSlant.woff" },
    { path: "../../public/fonts/UltimateGearSlant.ttf" },
  ],
});

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
export default function Speakers() {
  return (
    <div className="bg-[#092635] min-h-fit mt-[74px] pb-10">
      <span
        className={`text-center text-8xl drop-shadow-xl py-6  tracking-wider text-white ${ugs.className}`}
      >
        Speakers
      </span>
      <SpeakerList speakers={speakers} className="mx-20 -my-32" />
    </div>
  );
}
