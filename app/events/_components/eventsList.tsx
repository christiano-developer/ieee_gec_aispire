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
  joinNow?: string;
  buttonlink?: string;
  eventdet: string;
  img: string;
  imgAlt: string;
  imgW: number;
  imgH: number;
  className?: string;
  fee?: string[];
  brshLink?: string;
}

interface EventsListProps {
  events: Event[];
}

const EventsList: React.FC<EventsListProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1)),
    onSwipedRight: () =>
      setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1)),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="rounded-lg drop-shadow-xl px-8 w-full">
      {/* Desktop Grid View */}
      <div className="hidden lg:flex lg:flex-row lg:justify-evenly lg:gap-4">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative w-full">
        <div {...swipeHandlers} className="w-full overflow-hidden">
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
        {/* Toggle Buttons placed outside the card area */}
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? events.length - 1 : prev - 1,
            )
          }
          className={`absolute left-[-20px] top-1/2 transform -translate-y-1/2 text-[#hC8374] rounded-full text-7xl ${pixel.className}`}
        >
          &lt;
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === events.length - 1 ? 0 : prev + 1,
            )
          }
          className={`absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-[#hC8374] text-7xl rounded-full ${pixel.className}`}
        >
          &gt;
        </button>
      </div>

      {/* Mobile Pagination Indicator */}
      <div className={`lg:hidden text-center mt-2 ${pixel.className}`}>
        {currentIndex + 1}/{events.length}
      </div>
    </div>
  );
};

export default EventsList;
