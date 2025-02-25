"use client";

import EventsList from "../_components/eventsList";

const eventsData = [
  {
    title: "The Labyrinth",
    subTitle: "Line Follower Robot",
    description:
      "Control your robot, outmaneuver opponents, and score goals while defending your own! Speed, strategy, and precision will crown the ultimate champion. Are you ready for the challenge?",
    linkLabel: "Event Details",
    imgdet: "",
    buttonlink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfEe1L4UA5hWi8n3I90DmNe6n9XPLn3KYpY1dfkN9YVXkBPig/viewform?usp=header",
    eventdet: "",
    img: "line_follower",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "Robo Cup",
    subTitle: "Robo Soccer",
    imgdet: "",
    description:
      "Put your robotics skills to the test! Build and program your Line Follower Robot (LFR) to autonomously follow a track, navigate sharp turns, and race against time. Do you have what it takes to win?",
    linkLabel: "Event Details",
    buttonlink:
      "https://docs.google.com/forms/d/e/1FAIpQLScSLfYV87kPsPkaDb1RmSo1zYyVj5n-SZIH8h0YFS8hH42tPA/viewform?usp=header",
    eventdet: "",
    img: "robo_soccer",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "Robo Derby",
    imgdet: "",
    subTitle: "Robo Race",
    description:
      "Gear up for the ultimate test of speed and agility! Navigate an obstacle-filled track, dodge challenges, and race to victory. Build, control, and conquer—only the fastest bot wins!",
    linkLabel: "Event Details",
    buttonlink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdLcMkdM-V12xQ57CHgoqj5eUP02PEFFxkq7Q0Q-MxEQHyc6w/viewform?usp=header",
    eventdet: "",
    img: "robo_race",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "Hardware Hustle",
    subTitle: "Hardware Hackathon",
    imgdet: "",
    description:
      "Design and build an Autonomous or Controlled Search Vehicle to navigate obstacles and identify targets. Showcase speed, precision, and creativity—bonus points for autonomy and sleek design! Are you ready to innovate?",
    linkLabel: "Event Details",
    buttonlink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdvdioTSxr1joJnIjOXyPFAfug8_zdmxWmAJIt93cXaRPRRTg/viewform?usp=header",
    eventdet: "",
    img: "hardware_hustle",
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
