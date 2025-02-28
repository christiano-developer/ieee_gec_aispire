"use client";

import EventsList from "../_components/eventsList";

const eventsData = [
  {
    title: "Placement Bootcamp",
    subTitle: "Details Will Be Out Soon",
    imgdet: [" ", " "],

    description:
      "Connect with top companies from across India, meet recruiters, and showcase your skills. This is your chance to network, impress, and secure your dream job. Stay tuned for updates—don't miss this opportunity to take the next step in your career!",

    eventdet: "",
    img: "placement",
    imgAlt: "placement",

    imgW: 0,
    imgH: 0,
  },
  {
    title: "Women Summit",
    subTitle: "",
    imgdet: [" ", " "],
    description:
      "Join an inspiring summit dedicated to empowering women in STEM! Engage in dynamic discussions, explore new opportunities, and gain insights to boost your leadership potential. Connect with industry leaders, share ideas, and be part of the movement driving change in tech and innovation!",

    eventdet: "",
    img: "women_summit",
    imgAlt: "women_summit",
    imgW: 0,
    imgH: 0,
    joinNow: "JOIN NOW",
    buttonlink: "https://chat.whatsapp.com/Dd7N09mPOsM5YNLEDwRs6a",
  },
  {
    title: "Expert Talks",
    subTitle: "",

    description:
      "Gain insights from industry leaders, expand your horizons, and ignite your potential. Learn from the best as they share expertise, ideas, and innovations that shape the future. Don’t miss this opportunity to grow and get inspired!",

    eventdet: "",
    img: "expert_talks",
    imgAlt: "expert_talks",
    imgW: 0,
    imgH: 0,
    joinNow: "JOIN NOW",
    buttonlink: "https://chat.whatsapp.com/Dd7N09mPOsM5YNLEDwRs6a",
  },
];

export default function Events() {
  return (
    <div className="flex flex-col justify-center items-center">
      <EventsList events={eventsData} />
    </div>
  );
}
