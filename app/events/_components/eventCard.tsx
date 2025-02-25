// components/EventCard.tsx
import { Nunito } from "next/font/google";
import { useState } from "react";
import localFont from "next/font/local";
import { Button } from "@nextui-org/button";

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
  imgdet: string[];
  linkLabel: string;
  buttonlink: string;
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
  imgdet,
  buttonlink,

  linkLabel,
  img,
  imgAlt,
  imgW,
  imgH,
  className,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div
        className={`flex flex-col justify-between lg:w-72 border-2 border-secondary lg:scale-100 rounded-lg bg-gradient-to-b from-[#092635] to-[#1B4242] lg:my-5 lg:p-4 p-2 lg:py-4 bg-white shadow-inner shadow-black `}
      >
        <h1
          className={`text-xl font-bold text-center whitespace-nowrap ${className} ${pixel.className}`}
        >
          {title}
        </h1>
        <div className="self-center  rounded-sm m-4 drop-shadow-2xl bg-secondary">
          <Image
            src={img ? "/event_logos/" + img + ".png" : ""}
            alt={imgAlt ? imgAlt : " "}
            width={imgW ? imgW : 160}
            height={imgH ? imgH : 160}
            className="contain-size "
          />
        </div>

        {subTitle && (
          <h3 className={`${pixel.className} text-md text-center`}>
            {subTitle}
          </h3>
        )}

        <div className={`${nunito.className} flex-1 flex flex-col`}>
          <p className="text-sm text-white mb-6 text-center flex-grow font-mono">
            {description}
          </p>

          <div className="flex justify-between mt-auto space-x-1">
            <Button
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              href={buttonlink}
              className="py-1 px-2 text-[16px] h-fit w-fit text-center bg-primary text-secondary border-2 border-secondary rounded hover:bg-white hover:scale-110 transition-all duration-700"
            >
              Register Now!
            </Button>
            <Button
              onPress={() => setModalOpen(true)}
              className="self-center underline text-xs "
            >
              {linkLabel}
            </Button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-transparent/50 z-50"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative flex items-center justify-center ">
            {/* Close Button */}
            <Button
              onPress={() => setModalOpen(false)}
              className="absolute top-44 right-5 text-white  px-3 py-1 bg-red-800 rounded-lg  transition"
            >
              ✖
            </Button>

            {/* Full-Dimension Image */}
            <div className="flex flex-row space-x-4 justify-center items-center mt-10">
              {imgdet.map((img, index) => (
                <Image
                  key={index}
                  src={`/brochure/${img}.png`}
                  alt={imgAlt || "Event image"}
                  layout="intrinsic"
                  width={600} // Change if needed
                  height={800} // Change if needed
                  className="max-w-screen-lg max-h-[700px] object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;
