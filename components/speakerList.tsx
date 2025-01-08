// import { Nunito } from "next/font/google";

// import localFont from "next/font/local";

import Image from "next/image";

/*const pixel = localFont({
  src: "../public/fonts/subset-PixelatedElegance.woff2",
});

const nunito = Nunito({
  weight: "600",
  subsets: ["latin"],
  });*/
interface SpeakerCardProps {
  title?: string;
  subTitle?: string;
  description?: string;
  img: string;
  imgAlt: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  description,
  title,
  img,
  imgAlt,
}) => {
  const logosLeft = [{ src: "/HIZE_nobg.png" }];
  const logosRight = [
    { src: "/HIZE_nobg.png" },
    { src: "/GEC_logo_nobg.png" },
    { src: "/IEEEMB_nobg.png" },
  ];
  return (
    <div
      className={`flex flex-col justify-between shadow-md shadow-black rounded-lg border-[#9EC8B9] border-[0.09rem] bg-gradient-to-b from-[#092635] to-[#1B4242] m-5 w-72 h-96`}
    >
      {/* Logos Section */}
      <div className="grid grid-cols-2 bg-black rounded-tl-lg rounded-tr-lg border-b-[0.09rem] border-secondary px-3 py-1 mb-5">
        <div className="flex items-center space-x-2">
          {logosLeft.map((logosLeft, index) => (
            <Image
              alt="logos"
              key={index}
              width={50}
              height={30}
              src={logosLeft.src}
            />
          ))}
        </div>
        <div className="flex flex-row-reverse items-center space-x-2">
          {logosRight.map((logosRight, index) => (
            <Image
              alt="logos"
              key={index}
              width={30}
              height={30}
              src={logosRight.src}
            />
          ))}
        </div>
      </div>

      {/* Speaker Image Section */}
      <div className="self-center flex flex-col items-center space-y-3">
        <div className="rounded-full border w-24 h-24 overflow-hidden">
          <Image
            src={img || "/"} // Speaker image
            alt={imgAlt || " "}
            width={96} // Constant width
            height={96} // Constant height
            className="w-full h-full object-cover" // Ensures the image covers the container
          />
        </div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>

      {/* Description Section */}
      <div className="flex-1 text-center px-3 py-2 text-sm text-gray-300">
        {description}
      </div>
    </div>
  );
};

interface Speaker {
  title: string;
  subTitle?: string;
  description: string;

  img: string;
  imgAlt: string;
}

interface SpeakerListProps {
  speakers: Speaker[];
  className?: string;
}

const SpeakerList: React.FC<SpeakerListProps> = ({ speakers, className }) => {
  return (
    <div className={`grid grid-cols-3 gap-3  ${className}`}>
      {speakers.map((speaker, index) => (
        <SpeakerCard
          key={index}
          title={speaker.title}
          subTitle={speaker.subTitle}
          description={speaker.description}
          img={speaker.img}
          imgAlt={speaker.imgAlt}
        />
      ))}
    </div>
  );
};

export default SpeakerList;
