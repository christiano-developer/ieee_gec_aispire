import localFont from "next/font/local";
import Link from "next/link";
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
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, img, description }) => {
  return (
    <div className="lg:h-44 lg:w-64 h-32 w-32 group m-2">
      <div className="relative h-full w-full shadow-xl transition-all duration-500 rounded-sm">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-[#1B4242] to-[#9EC8B9] shadow-lg rounded-sm transition-all duration-500">
          <div className="relative h-full ">
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover rounded-sm transition-all duration-500 p-1"
            />
            <div className="absolute inset-0 flex flex-col  justify-center px-3  group-hover:bg-black transition-all duration-500">
              <h2
                className={`text-white font-extrabold text-xl lg:text-3xl text-center tracking-wider uppercase transition-all duration-500 group-hover:hidden ${hacked.className}`}
              >
                {title}
              </h2>
              <p
                className={`hidden text-white text-sm text-center p-5  transition-opacity duration-700 group-hover:block ${pixel.className}`}
              >
                {description}
              </p>
            </div>
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
  description: string;
}

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="lg:flex grid grid-cols-2 justify-center items-center lg:gap-4 lg:min-h-fit lg:py-10">
      {events.map((event, index) => (
        <Link href={event.buttonLink} key={index}>
          <EventCard
            title={event.title}
            img={event.img}
            imgAlt={event.imgAlt}
            description={event.description}
          />
        </Link>
      ))}
    </div>
  );
};

export default EventList;
