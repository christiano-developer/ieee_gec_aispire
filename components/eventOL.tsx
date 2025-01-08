// import { Nunito } from "next/font/google";

import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

const hacked = localFont({
  src: "../public/fonts/subset-HACKED.woff2",
});

/*
const nunito = Nunito({
  weight: "600",
  subsets: ["latin"],
  });*/
interface EventCardProps {
  title: string;
  img: string;
  imgAlt: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, img }) => {
  return (
    <div
      className={`${hacked.className} my-5 relative w-64 h-56 overflow-hidden rounded-sm  shadow-md shadow-black  bg-gradient-to-b from-primary to-[#5C8374]`}
    >
      {/* Background Image */}
      <Image
        src={img}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0  opacity-30 "
      />

      {/* Title Overlay */}
      <div className="absolute inset-0 flex items-start pt-10 justify-center">
        <h2 className="text-white font-extrabold text-3xl tracking-wider uppercase">
          {title}
        </h2>
      </div>
    </div>
  );
};

interface Event {
  title: string;
  buttonLink: string;
  img: string;
  imgAlt: string;
}

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="grid grid-cols-4 gap-1">
      {events.map((event, index) => (
        <Link href={event.buttonLink} key={index}>
          <EventCard
            key={index}
            title={event.title}
            img={event.img}
            imgAlt={event.imgAlt}
          />
        </Link>
      ))}
    </div>
  );
};

export default EventList;
