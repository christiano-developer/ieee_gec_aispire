"use client";
import localFont from "next/font/local";
import EventCard from "./eventCard";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const pixel = localFont({
  src: [
    { path: "../../../public/fonts/subset-PixelatedElegance.woff2" },
    { path: "../../../public/fonts/subset-PixelatedElegance.woff" },
    { path: "../../../public/fonts/subset-PixelatedElegance.ttf" },
  ],
});

interface Event {
  title: string;
  subTitle?: string;
  description: string;
  imgdet?: string[];
  linkLabel?: string;
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
}

const EventsList: React.FC<EventsListProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => Math.min(prev + 1, events.length - 1)),
    onSwipedRight: () => setCurrentIndex((prev) => Math.max(prev - 1, 0)),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="rounded-lg drop-shadow-xl px-8 w-full">
      {/* Desktop Grid View */}
      <div className="hidden lg:flex lg:flex-row-cols lg:justify-center lg:gap-4">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      {/* Mobile */}
      <div
        {...swipeHandlers}
        className="lg:hidden relative w-full overflow-hidden"
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <EventCard {...event} className="w-full max-w-sm mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Pagination Indicator */}
      <div className={`lg:hidden text-center mt-2 ${pixel.className}`}>
        {currentIndex + 1}/{events.length}
      </div>
    </div>
  );
};

export default EventsList;
