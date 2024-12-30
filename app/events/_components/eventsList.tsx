// components/EventsList.tsx
import React from "react";
import EventCard from "./eventCard";
import localFont from "next/font/local";

const hacked = localFont({
  src: "../../../public/fonts/subset-HACKED.woff2",
});

interface Event {
  title: string;
  subTitle?: string;
  description: string;
  buttonLabel: string;
  linkLabel: string;
  buttonlink: string;
  eventdet: string;
  img: string;
  imgAlt: string;
  imgW: number;
  imgH: number;
  className?: string;
}

interface EventsListProps {
  events: Event[];

  isTitle?: boolean;
}

const EventsList: React.FC<EventsListProps> = ({ events, isTitle = false }) => {
  return (
    <div className="rounded-lg drop-shadow-xl mt-5 bg-gradient-to-b from-[#1B4242] to-[#5C8374] px-24 mx-20 mb-10">
      {isTitle ? (
        <h1
          className={`${hacked.className} text-center pt-5 text-5xl tracking-wider`}
        >
          ROBOSPHERE
        </h1>
      ) : (
        <div className="mb-5"></div>
      )}
      <div className="grid grid-cols-3 gap-16">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            subTitle={event.subTitle}
            description={event.description}
            buttonLabel={event.buttonLabel}
            linkLabel={event.linkLabel}
            buttonlink={event.buttonlink}
            eventdet={event.eventdet}
            className={event.className}
            img={event.img}
            imgH={event.imgH}
            imgW={event.imgW}
            imgAlt={event.imgAlt}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsList;
