// components/EventsList.tsx
import React from "react";
import EventCard from "./eventCard";

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
}

interface EventsListProps {
  events: Event[];
}

const EventsList: React.FC<EventsListProps> = ({ events }) => {
  return (
    <div className=" rounded-lg drop-shadow-xl m-4 bg-gradient-to-b from-[#1B4242] to-[#5C8374] px-10 mx-20 pb-5">
      <h1 className="text-center mt-10">ROBOSPHERE</h1>
      <div className="grid grid-cols-3 gap-3">
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
