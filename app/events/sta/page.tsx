"use client";

import EventsList from "../_components/eventsList";

const eventsData = [
  {
    title: "Pitch It Up",
    subTitle: "Idea Pitching",
    imgdet: ["pitch_it_up_1", "pitch_it_up_2"],
    description:
      "Got a game-changing idea? Craft a powerful pitch deck showcasing your Problem, Solution, and Business Model. Work solo or in a team and stand out with creativity and market potential. Ready to impress? Let’s pitch!",
    linkLabel: "Event Details",
    buttonlink: "https://forms.gle/eqf1bLn4pBqzVf7H9",
    eventdet: "",
    img: "pitch_it_up",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 0,
    fee: ["IEEE Fees: Rs.150/-", "Non-IEEE Fees: Rs.300/-"],
    brshLink: "PitchItUp",
  },
  {
    title: "TechXplore",
    subTitle: "Project Exposition",
    imgdet: ["techx_1", "techx_2", "techx_3", "techx_4"],
    description:
      "Present your groundbreaking projects, cutting-edge tech, and creative solutions to impress judges and peers. Whether it's Robotics, AI, IoT, or beyond, this is your chance to shine. Ready to inspire the future?",
    linkLabel: "Event Details",
    buttonlink: "https://forms.gle/9Qf7XaJFqZBPpry36",
    eventdet: "",
    img: "project_expo",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 0,
    fee: [
      "Individual Fees: Rs.100/-",
      " 2 in a Group: Rs.150/-",
      " 4 in a Group: Rs.300/-",
    ],
    brshLink: "TechExplore",
  },
];

export default function Events() {
  return (
    <div className="flex flex-col justify-center items-center">
      <EventsList events={eventsData} />
    </div>
  );
}
