"use client";

import EventsList from "../_components/eventsList";

const eventsData = [
  {
    title: "Placement Bootcamp",
    subTitle: "",
    imgdet: [" ", " "],
    description:
      "Connect with top companies from across India, meet recruiters, and showcase your skills. This is your chance to network, impress, and secure your dream job. Are you ready to take the next step?",
    buttonlink: "/",
    className: "text-sm",
    eventdet: "",
    img: "placement",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "Women Summit",
    subTitle: "",
    imgdet: [" ", " "],
    description:
      "Join an inspiring summit dedicated to empowering women in STEM! Engage in dynamic discussions, explore new opportunities, and gain insights to boost your leadership potential. Connect with industry leaders, share ideas, and be part of the movement driving change in tech and innovation!",

    buttonlink: "/",
    eventdet: "",
    img: "women_summit",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "Expert Talks",
    subTitle: "",

    description:
      "Gain insights from industry leaders, expand your horizons, and ignite your potential. Learn from the best as they share expertise, ideas, and innovations that shape the future. Don’t miss this opportunity to grow and get inspired!",

    buttonlink: "/",
    eventdet: "",
    img: "expert_talks",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 0,
  },
];

export default function Events() {
  return (
    <div className="flex flex-col justify-center items-center">
      <EventsList events={eventsData} />
    </div>
  );
}
