"use client";

import EventsList from "../_components/eventsList";

const eventsData = [
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
    fee: ["IEEE Fees: Rs.100/-", "Non-IEEE Fees: Rs.250/-"],
    brshLink: "BlindCoding",
  },
];

export default function Events() {
  return <EventsList events={eventsData} />;
}
