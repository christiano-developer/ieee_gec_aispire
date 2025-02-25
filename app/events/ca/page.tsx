"use client";

import EventsList from "../_components/eventsList";

const eventsData = [
  {
    title: "Call of Duty",
    imgdet: ["", ""],
    subTitle: "",
    description:
      "Lock and load for an adrenaline-fueled battle! Call of Duty delivers intense, fast-paced action, pushing your strategy and reflexes to the limit across thrilling game modes. Are you ready to dominate the battlefield?",

    buttonlink: "https://forms.gle/DbbiCar1PKEeVnx66",
    eventdet: "",
    img: "cod",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "FIFA",
    subTitle: "",
    imgdet: ["", ""],
    description:
      "Step onto the virtual pitch and showcase your skills!  This highly competitive football simulation challenges you to showcase your skills, master tactics, and outplay opponents in an immersive showdown. Do you have what it takes to lift the trophy?",
    buttonlink: "https://forms.gle/bzasMV3qEtKPBof8A",
    eventdet: "",
    img: "fifa",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 160,
  },
  {
    title: "Blind Coding",
    subTitle: "",
    imgdet: ["blind_coding"],
    description:
      "Think you can code without peeking? Test your memory, logic, and speed as you tackle tricky problems under pressure. No syntax highlighting, no previews—just pure skill. Are you up for the challenge?",
    linkLabel: "Event Details",
    buttonlink: "https://forms.gle/EYf9Jhke937YpqMh8",
    eventdet: "",
    img: "blind_coding",
    imgAlt: "Line Follower Robot Event",
    imgW: 0,
    imgH: 0,
  },
  {
    title: "Capture the Flag",
    subTitle: "",
    imgdet: ["capture_the_flag_1", "capture_the_flag_1"],
    description:
      "Team up in pairs for an action-packed challenge! Solve beginner to intermediate tasks blending cybersecurity and robotics, earn points, and hunt for flags. Are you ready to rise to the top?",
    linkLabel: "Event Details",
    buttonlink: "https://forms.gle/2EUqzFbWGHfmdVD7A",
    eventdet: "",
    img: "ctf",
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
