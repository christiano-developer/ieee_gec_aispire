"use client";
import EventsList from "./_components/eventsList";

import localFont from "next/font/local";

const ugs = localFont({
  src: [
    { path: "../../public/fonts/UltimateGearSlant.woff2" },
    { path: "../../public/fonts/UltimateGearSlant.woff" },
    { path: "../../public/fonts/UltimateGearSlant.ttf" },
  ],
});

const eventsData = [
  {
    title: "Robo Rivals",
    subTitle: "Line Follower Robot",
    description:
      "Test your robotics skills in this thrilling competition! Participants must build and program their Line Follower Robots (LFRs) to navigate tracks and overcome challenges while racing against time and opponents.",
    buttonLabel: "Register Now!",
    linkLabel: "Event Details",
    buttonlink: "",
    eventdet: "",
    img: "LFR",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "Turbo Track",
    subTitle: "Robo Race",
    description:
      "Get ready to put your robotic speed and agility to the ultimate test! Turbo Track brings the thrill of racing to the robotics arena. Build a bot, beat the obstacles, and outpace the competition to emerge as the fastest robot on the track!",
    buttonLabel: "Register Now!",
    linkLabel: "Event Details",
    buttonlink: "",
    eventdet: "",
    img: "RoboRace",
    imgAlt: "Turbo Track Robo Race Event",
    imgW: 190,
    imgH: 0,
  },
  {
    title: "Maze Craze",
    subTitle: "Robot Maze Solver",
    description:
      "Challenge your robotics ingenuity in this ultimate maze-solving competition! Participants must build autonomous robots capable of navigating complex mazes with precision and speed.",
    buttonLabel: "Register Now!",
    linkLabel: "Event Details",
    buttonlink: "",
    eventdet: "",
    img: "MazeSolver",
    imgAlt: "Robot Maze Solver Event",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "Women Summit",
    subTitle: "Empowering Women in STEM",
    description:
      "An inspiring summit focused on empowering women in STEM! Engage in dynamic discussions on overcoming barriers in science and explore cutting-edge skills in AI, Data Science, and Cybersecurity. Gain valuable insights, boost your leadership potential, and be part of the movement driving change in technology and innovation.",
    buttonLabel: "Register Now!",
    linkLabel: "Event Details",
    buttonlink: "",
    eventdet: "",
    img: "",
    imgAlt: "Women in STEM Summit",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "Geoguessr",
    subTitle: "A Thrilling Two-Day Adventure",
    description:
      "Explore the world in GeoGuessr and race against the clock in Minute to Win It, completing quirky tasks and chasing high scores. Whether you're a lone wolf or part of a small team, these games will test your skills, speed, and strategy. Compete, climb the leaderboard, and seize victory!",
    buttonLabel: "Register Now!",
    linkLabel: "Event Details",
    buttonlink: "",
    eventdet: "",
    img: "",
    imgAlt: "Geoguessr Event",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "Placement Bootcamp",
    className: "text-[12px]",
    subTitle: "Hardware Hustle",
    description:
      "Gear up for a 24-hour hackathon! Design and build an Autonomous or Controlled Image Processing Search Vehicle. Showcase speed, precision, and creativity as your bot navigates obstacles and identifies targets. Bonus points for autonomy and sleek design. Are you ready to innovate?",
    buttonLabel: "Register Now!",
    linkLabel: "Event Details",
    buttonlink: "",
    eventdet: "",
    img: "",
    imgAlt: "Hardware Hustle Hackathon",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "Capture the Flag",
    subTitle: "Cybersecurity & Robotics",
    className: "text-[17px]",
    description:
      "Team up in pairs for an action-packed challenge! Solve beginner to intermediate tasks blending cybersecurity and robotics, earn points, and hunt for flags. Are you ready to rise to the top?",
    buttonLabel: "Register Now!",
    linkLabel: "Event Details",
    buttonlink: "",
    eventdet: "",
    img: "",
    imgAlt: "Capture the Flag Event",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "Pitch It Up",
    subTitle: "Game-Changing Ideas",
    description:
      "Got a game-changing idea? Show it off in Pitch It Up! Craft a killer pitch deck that outlines your Problem, Solution, and Business Model. Work solo or in a team, and submit your best ideas to stand out! Creativity and market potential are your ticket to success. Ready to pitch? Let’s go!",
    buttonLabel: "Register Now!",
    linkLabel: "Event Details",
    buttonlink: "",
    eventdet: "",
    img: "",
    imgAlt: "Pitch It Up Event",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "Blind Coding",
    subTitle: "Coding Skills Challenge",
    description:
      "Get ready to put your coding skills to the ultimate test! In Blind Coding, you’ll tackle memory challenges, solve tricky problems under time pressure, and face extreme coding tasks that demand both logic and speed. Can you code without peeking?",
    buttonLabel: "Register Now!",
    linkLabel: "Event Details",
    buttonlink: "",
    eventdet: "",
    img: "",
    imgAlt: "Blind Coding Challenge",
    imgW: 0,
    imgH: 0,
  },
];

export default function Events() {
  return (
    <div className="bg-[#092635] min-h-screen mt-[74px] pb-10">
      <span
        className={`text-center text-8xl drop-shadow-xl text-white ${ugs.className}`}
      >
        Events
      </span>

      <EventsList events={eventsData.slice(0, 3)} isTitle={true} />
      <EventsList events={eventsData.slice(3, 6)} />
      <EventsList events={eventsData.slice(6)} />
    </div>
  );
}
