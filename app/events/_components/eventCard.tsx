// components/EventCard.tsx
import { Nunito } from "next/font/google";

import localFont from "next/font/local";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";

const pixel = localFont({
  src: [
    { path: "../../../public/fonts/subset-PixelatedElegance.woff2" },
    { path: "../../../public/fonts/subset-PixelatedElegance.woff" },
    { path: "../../../public/fonts/subset-PixelatedElegance.ttf" },
  ],
});

const nunito = Nunito({
  weight: "600",
  subsets: ["latin"],
});
interface EventCardProps {
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

const EventCard: React.FC<EventCardProps> = ({
  title,
  subTitle,
  description,
  buttonLabel,
  buttonlink,
  eventdet,
  linkLabel,
  img,
  imgAlt,
  imgW,
  imgH,
  className,
}) => {
  return (
    <div
      className={`flex flex-col justify-between lg:w-72 sm:scale-50 lg:scale-100 rounded-lg bg-gradient-to-b from-[#092635] to-[#1B4242] my-5 p-8 py-5 bg-white shadow-inner shadow-gray-950/20`}
    >
      <h1
        className={`text-xl font-bold text-center whitespace-nowrap ${className} ${pixel.className}`}
      >
        {title}
      </h1>

      <Image
        src={img ? "/events/" + img + ".png" : "/events/CTF.png"}
        alt={imgAlt ? imgAlt : " "}
        width={imgW ? imgW : 150}
        height={imgH ? imgH : 100}
        className="self-center rounded-sm m-4 drop-shadow-2xl "
      />

      {subTitle && (
        <h3 className={`${pixel.className} text-md text-center`}>{subTitle}</h3>
      )}

      <div className={`${nunito.className} flex-1 flex flex-col`}>
        <p className="text-sm text-white mb-6 text-center flex-grow">
          {description}
        </p>

        <div className="flex justify-between mt-auto space-x-1">
          <Button
            as="a"
            href={buttonlink}
            className="py-1 px-2 text-[16px] h-fit w-fit text-center bg-primary text-secondary border-2 border-secondary rounded"
          >
            {buttonLabel}
          </Button>
          <Link
            href={eventdet ? eventdet : "/events"}
            className="self-center underline text-xs "
          >
            {linkLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
