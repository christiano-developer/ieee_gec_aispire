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
      className={`mx-4 lg:mx-0 lg:flex rounded-xl hover:scale-105 lg:w-full bg-gradient-to-b from-[#1B4242] to-[#5F8880] lg:space-x-6  overflow-hidden transition-all duration-700 ${className}`}
    >
      <div className="lg:w-1/2  w-full shadow-xl   transition-all duration-500 ">
        <video className="w-full  rounded-xl" playsInline autoPlay muted loop>
          <source src={vid} type="video/mp4" />
        </video>
      </div>

      <div className="lg:w-1/2 w-full p-4">
        <h1
          className={`${hacked.className} lg:px-4 text-center my-2  lg:text-6xl text-5xl`}
        >
          About Aispre
        </h1>

        <p
          className={`text-left lg:px-4 lg:text-[13pt] tracking-tighter leading-[19px] px-8 pb-5 lg:pb-0  text-sm ${inconso.className}`}
        >
          AiSPIRE 2025, hosted by Goa College of Engineering, is set to be the
          biggest tech event in India, showcasing cutting-edge domains like AI,
          robotics, and cybersecurity. The event will feature a hardware
          hackathon, women’s summit, idea pitching, blind coding challenges,
          project exhibitions, keynote sessions, and engaging competitions. With
          participation from students nationwide, leading tech corporations, and
          top tech content creators, this prestigious event will promote
          innovation, collaboration, and skill development. This partnership
          between IEEE and GEC aims to strengthen academia-industry ties while
          delivering an unparalleled experience for all attendees.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
