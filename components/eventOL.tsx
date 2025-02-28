import localFont from "next/font/local";
import { useState } from "react";
import Image from "next/image";

const hacked = localFont({
  src: "../public/fonts/subset-HACKED.woff2",
});
const pixel = localFont({
  src: "../public/fonts/subset-PixelatedElegance.woff2",
});

interface EventCardProps {
  title: string;
  img: string;
  imgAlt: string;
  description: string[];
  buttonLink: string;
  pool?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  img,
  imgAlt,
  description,
  pool,
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className="lg:h-44 lg:w-64 w-36 h-36 lg:m-2  [perspective:1000px]">
      <div
        onClick={handleCardClick}
        className="relative h-full w-full rounded-sm shadow-xl transition-transform duration-500 [transform-style:preserve-3d] cursor-pointer"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 h-full w-full py-2 px-2 rounded-lg bg-gradient-to-b from-[#1B4242] to-[#5C8374]  shadow-lg transition-all duration-500 [backface-visibility:hidden]">
          <div className="relative h-full">
            <Image
              src={img}
              alt={imgAlt}
              fill
              className="object-contain rounded-sm transition-all duration-500 p-1"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center lg:justify-normal  lg:px-2 lg:py-10 ">
              <h2
                className={`text-white drop-shadow-2xl lg:px-0 px-2 shadow-pink-500 font-extralight text-xl lg:text-3xl text-center tracking-wider uppercase ${hacked.className}`}
              >
                {title}
              </h2>
              {pool && (
                <p
                  className={`text-yellow-200/90 text-center text-sm lg:text-xl lg:mt-10 ${hacked.className}`}
                >
                  {pool}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 h-full w-full rounded-lg bg-black/90 px-3 text-center text-white transition-all duration-500 [backface-visibility:hidden] overflow-y-auto"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="flex h-full flex-col items-center justify-center">
            {description.map((disp, index) => (
              <p
                key={index}
                className={`text-xs lg:text-base  tracking-tight ${pixel.className}`}
              >
                {disp}
              </p>
            ))}
            {/*<Link href={buttonLink}>
              <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
                <span>Reach Out</span>
              </button>
            </Link>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

interface Event {
  title: string;
  buttonLink: string;
  img: string;
  imgAlt: string;
  description: string[];
  pool?: string;
}

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="lg:flex grid grid-cols-2 gap-4  lg:scale-100 justify-center items-center lg:gap-4 lg:min-h-fit lg:py-10">
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          img={event.img}
          imgAlt={event.imgAlt}
          description={event.description}
          buttonLink={event.buttonLink}
          pool={event.pool}
        />
      ))}
    </div>
  );
};

export default EventList;
