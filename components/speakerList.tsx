// components/EventCard.tsx
import { Nunito } from "next/font/google";

import localFont from "next/font/local";

import Image from "next/image";

const pixel = localFont({
  src: "../public/fonts/subset-PixelatedElegance.woff2",
});

const nunito = Nunito({
  weight: "600",
  subsets: ["latin"],
});
interface SpeakerCardProps {
  title: string;
  subTitle?: string;
  description: string;
  img: string;
  imgAlt: string;
  imgW: number;
  imgH: number;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  title,
  subTitle,
  description,
  img,
  imgAlt,
  imgW,
  imgH,
}) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-lg border-[#9EC8B9] border-[0.09rem] w-fit bg-gradient-to-b from-[#092635] to-[#1B4242] m-5 p-10 bg-white shadow-inner shadow-gray-950/20`}
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
      </div>
    </div>
  );
};

interface Speaker {
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
  speakers: Speaker[];
}

const SpeakerList: React.FC<EventsListProps> = ({ speakers }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {speakers.map((speaker, index) => (
        <SpeakerCard
          key={index}
          title={speaker.title}
          subTitle={speaker.subTitle}
          description={speaker.description}
          img={speaker.img}
          imgH={speaker.imgH}
          imgW={speaker.imgW}
          imgAlt={speaker.imgAlt}
        />
      ))}
    </div>
  );
};

export default SpeakerList;
