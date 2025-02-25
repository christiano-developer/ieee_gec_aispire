{
  /*import { useCallback, useEffect } from "react";
  import useEmblaCarousel from "embla-carousel-react";*/
}
import localFont from "next/font/local";

const hacked = localFont({
  src: "../public/fonts/subset-HACKED.woff2",
});

const inconso = localFont({
  src: [
    { path: "../public/fonts/Inconsolata_Regular.woff2" },
    { path: "../public/fonts/Inconsolata_Regular.woff" },
  ],
});

interface CardProps {
  className?: string;
  vid: string;
}

const AboutCard: React.FC<CardProps> = ({ className, vid }) => {
  return (
    <div
      className={`lg:flex rounded-xl hover:scale-105 lg:w-full bg-gradient-to-b from-[#1B4242] to-[#5C8374] lg:space-x-6  overflow-hidden transition-all duration-700 ${className}`}
    >
      <div className="lg:w-1/2 w-full shadow-xl shadow-black rounded-xl  transition-all duration-500">
        <video
          className="w-full h-auto rounded-xl"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={vid} type="video/mp4" />
        </video>
      </div>

      <div className="lg:w-1/2 w-full p-4">
        <h1
          className={`${hacked.className} lg:px-4 text-center my-2  lg:text-6xl text-2xl`}
        >
          About Aispre
        </h1>

        <p
          className={`text-left lg:px-4 lg:text-[11pt] text-sm ${inconso.className}`}
        >
          The IEEE Computer Society, a premier organization under the Institute
          of Electrical and Electronics Engineers (IEEE), is dedicated to
          advancing the theory, practice, and application of computer and
          information processing technology. As the world’s largest technical
          professional organization, IEEE brings together global expertise to
          drive innovation. One of its key initiatives, the IEEE High Impact
          Zonal Events (HIZE), has been inspiring India’s brightest tech
          minds.....
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
