import localFont from "next/font/local";
import { useEffect, useRef, useState } from "react";
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
  phoneFlipped?: boolean;
  onPhoneClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  img,
  imgAlt,
  description,
  pool,
  phoneFlipped,
  onPhoneClick,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const leaveTimeoutRef = useRef<number | null>(null);

  const effectiveFlipped =
    !isDesktop && phoneFlipped !== undefined ? phoneFlipped : flipped;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 1024);
    }
  }, []);

  // Desktop hover handlers with delay on mouse leave
  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    // Delay flipping back to smooth out minor pointer exits
    leaveTimeoutRef.current = window.setTimeout(() => {
      setFlipped(false);
    }, 200);
  };

  const handleCardClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className="lg:h-44 lg:w-64 w-36 h-36 lg:m-2 [perspective:1000px]">
      <div
        onClick={
          !isDesktop
            ? onPhoneClick
              ? onPhoneClick
              : handleCardClick
            : undefined
        }
        onMouseEnter={isDesktop ? handleMouseEnter : undefined}
        onMouseLeave={isDesktop ? handleMouseLeave : undefined}
        className="relative h-full w-full rounded-sm shadow-xl transition-transform duration-500 [transform-style:preserve-3d] cursor-pointer"
        style={{
          transform: effectiveFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 h-full w-full py-2 px-2 rounded-lg bg-gradient-to-b from-[#1B4242] to-[#5C8374] shadow-lg transition-all duration-500 [backface-visibility:hidden]">
          <div className="relative h-full">
            <Image
              src={img}
              alt={imgAlt}
              fill
              className="object-contain rounded-sm transition-all duration-500 p-1"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center lg:justify-normal lg:px-2 lg:py-10">
              <h2
                className={`text-white drop-shadow-2xl lg:px-0 px-4 shadow-pink-500 font-extralight text-xl lg:text-3xl text-center tracking-wider uppercase ${hacked.className}`}
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
                className={`text-xs lg:text-base tracking-tight ${pixel.className}`}
              >
                {disp}
              </p>
            ))}
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
  // State for phone view to control only one flipped card at a time
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="lg:flex grid grid-cols-2 gap-4 lg:scale-100 justify-center items-center lg:gap-4 lg:h-fit lg:py-10">
      <div className="absolute -inset-10 bg-[url('/event_home_bg.png')] lg:bg-cover bg-no-repeat bg-center opacity-30"></div>
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          img={event.img}
          imgAlt={event.imgAlt}
          description={event.description}
          buttonLink={event.buttonLink}
          pool={event.pool}
          phoneFlipped={activeCard === index}
          onPhoneClick={() =>
            setActiveCard(activeCard === index ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default EventList;
