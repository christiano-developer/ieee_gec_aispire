"use client";

import EventsList from "../_components/eventsList";

const eventsData = [
  {
    title: "Pitch It Up",
    subTitle: "Idea Pitching",
    imgdet: "",
    description:
      "Got a game-changing idea? Craft a powerful pitch deck showcasing your Problem, Solution, and Business Model. Work solo or in a team and stand out with creativity and market potential. Ready to impress? Let’s pitch!",
    linkLabel: "Event Details",
    buttonlink: "https://forms.gle/eqf1bLn4pBqzVf7H9",
    eventdet: "",
    img: "pitch_it_up",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "TechXplore",
    subTitle: "Project Exposition",
    imgdet: "",
    description:
      "Present your groundbreaking projects, cutting-edge tech, and creative solutions to impress judges and peers. Whether it's Robotics, AI, IoT, or beyond, this is your chance to shine. Ready to inspire the future?",
    linkLabel: "Event Details",
    buttonlink: "https://forms.gle/9Qf7XaJFqZBPpry36",
    eventdet: "",
    img: "project_expo",
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
