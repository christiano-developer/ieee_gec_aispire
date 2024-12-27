// components/EventCard.tsx
import { Nunito } from "next/font/google";

import localFont from "next/font/local";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";

const pixel = localFont({
  src: "../../../public/fonts/subset-PixelatedElegance.woff2",
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
}) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-lg w-fit bg-gradient-to-b from-[#092635] to-[#1B4242] m-5 p-10 bg-white shadow-inner shadow-gray-950/20`}
    >
      <h1 className={`text-xl font-bold text-center mb-4 ${pixel.className}`}>
        {title}
      </h1>
      <Image
        src={img ? img : "/"}
        alt={imgAlt ? imgAlt : " "}
        width={imgW ? imgW : 0}
        height={imgH ? imgH : 0}
      />
      <h3 className={`${pixel.className} text-md text-center`}>{subTitle}</h3>
      <div className={`${nunito.className} flex-grow`}>
        <p className="text-gray-700 mb-6 text-center">{description}</p>
        <div className="flex justify-between mt-6 space-x-4">
          <Button
            as="a"
            href={buttonlink}
            className="px-4 py-2 bg-primary text-white border border-secondary rounded "
          >
            {buttonLabel}
          </Button>
          <Link href={eventdet ? eventdet : "/events"}>{linkLabel}</Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
