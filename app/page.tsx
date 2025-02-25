"use client";
import AboutCard from "@/components/aboutCard";
import { motion } from "framer-motion";
import ButtonG from "@/components/button";
import Countdown from "@/components/countdown";

import ContactCard from "@/components/contact";
import Image from "next/image";
import Link from "next/link";
import EventList from "@/components/eventOL";
import localFont from "next/font/local";
import { FiArrowRight } from "react-icons/fi";
import Venue from "@/components/venue";

import { useEffect, useState } from "react";

const ugs = localFont({
  src: [{ path: "../public/fonts/UltimateGearSlant.woff2" }],
});

const events = [
  {
    title: "Govind",
    linkLabel: "appapap",
    buttonLink: "/",
    img: "/events/cyber_2_wo_bg.png",
    imgAlt: "Line Follower Robot Event",
    description: "hehe ahashdj ahsjakskf ashhj ",
  },
  {
    title: "Govind",
    linkLabel: "appapap",
    buttonLink: "/",
    img: "/events/LFR.png",
    imgAlt: "Line Follower Robot Event",
    description: "",
  },
  {
    title: "Govind",
    linkLabel: "appapap",
    buttonLink: "/",
    img: "/events/LFR.png",
    imgAlt: "Line Follower Robot Event",
    description: "",
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Force loading for at least 2 seconds
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer); // Cleanup in case component unmounts
  }, []);

  const buttons = [
    { link: "/", label: "Partner With us" },
    { link: "events/ra", label: "REGISTER NOW" },
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0a1a26] z-50">
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: 720, scale: 10 }}
          exit={{ opacity: 100, scale: 10 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-32 h-32"
        >
          <Image
            src="/loader.png"
            alt="Loading Animation"
            width={128}
            height={128}
            priority
            className="rounded-full"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-primary min-h-screen text-white lg:px-16">
      <Image
        alt="Mountains"
        src={"/bghome.png"}
        quality={100}
        fill={true}
        className="opacity-15 "
        style={{ objectFit: "cover" }}
      />

      <div className="lg:px-8 content-center lg:min-h-screen ">
        <div className="lg:flex lg:flex-row lg:justify-between  flex-col justify-evenly lg:mt-0 mt-[40%]">
          <div
            className={`text-center text-3xl lg:text-6xl tracking-wide text-white ${ugs.className}`}
          >
            <Image
              src={"/AiSPIRE_logo_white.png"}
              alt="about"
              width={500}
              height={100}
              className="lg:pl-16 mt-4 lg:scale-[140%] px-10"
            />
            <Image
              src="/event_date.png"
              width={700}
              height={100}
              alt="eventdate"
              className="z-50 p-4 lg:scale-100 scale-90"
            />
            <div className="lg:space-x-10 space-x-4 lg:text-2xl text-xs  lg:mt-5 mt-5">
              {buttons.map((button, index) => (
                <ButtonG key={index} link={button.link} label={button.label} />
              ))}
            </div>
          </div>

          <div>
            <Countdown className="lg:mt-32 scale-50 lg:scale-[80%]" />
          </div>
        </div>
      </div>

      {/* About Section */}

      <AboutCard
        vid="/about.mp4"
        className="relative lg:mx-4  shadow-black shadow-md "
      />

      <div className="relative  flex flex-col justify-center items-center mt-10 h-[480px]">
        <div className="absolute inset-0  bg-[url('/event_home_bg.png')] lg:bg-cover lg:scale-100  scale-125 bg-no-repeat bg-center opacity-30"></div>

        <svg
          width="651"
          height="37"
          viewBox="0 0 651 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative lg:scale-100 scale-50"
        >
          <path
            d="M42.4688 37H0.46875L7.5625 10.4688H17.75L17 13.6875H37.5625L32.0312 22.0312H14.625L12.8438 28.6562H49.2812L42.4688 37ZM54.7188 8.40625H8.125L5.78125 0.0625H52.375L54.7188 8.40625ZM70.625 37H60.25L55.4062 19.9375L58.25 9.40625H67.7812L65.1875 19L68.2188 29.5625H76.7188L70.625 37ZM82.75 37H72.7188L87.4375 19L90.0312 9.40625H99.5625L96.7188 19.9375L82.75 37ZM138.125 26.3125H111.375L133.531 18.875L134.094 16.8125H106.5L104.312 9.40625H142.656L144.188 14.75L142.531 20.9375L138.125 26.3125ZM134.125 37H99.875L98.3438 31.625L101.75 18.875H111.281L108.438 29.5625H140.219L134.125 37ZM184.281 37H174.75L180.156 16.8125H152.469L150.375 9.40625H188.719L190.25 14.75L184.281 37ZM152.531 37H142.969L147.812 18.875H157.375L152.531 37ZM227.062 37H196.375L194.844 31.625L198.25 18.875H207.781L204.938 29.5625H233.156L230.094 33.2812L227.062 37ZM226.969 16.8125H195.531L193.438 9.40625H200.812L203.312 0.03125H212.844L210.344 9.40625H232.594L226.969 16.8125ZM278.531 16.8125H241.312L241.875 14.75L246.281 9.40625H284.625L278.531 16.8125ZM274.25 37H235.906L237.906 29.5625H269.688L270.562 26.3125H241.75L239.906 22.0625L240.469 20H278.812L280.625 24.25L278.656 31.625L274.25 37ZM355.281 8.40625H308.719L306.344 0.0625H354.219L355.906 6.0625L355.281 8.40625ZM344.312 37H304.375L302.688 30.9688L308.156 10.4688H318.281L313.406 28.6562H339.688L344.656 10.1562H354.812L349.25 30.9688L344.312 37ZM371.688 37H361.312L356.469 19.9375L359.312 9.40625H368.844L366.25 19L369.281 29.5625H377.781L371.688 37ZM383.812 37H373.781L388.5 19L391.094 9.40625H400.625L397.781 19.9375L383.812 37ZM439.188 26.3125H412.438L434.594 18.875L435.156 16.8125H407.562L405.375 9.40625H443.719L445.25 14.75L443.594 20.9375L439.188 26.3125ZM435.188 37H400.938L399.406 31.625L402.812 18.875H412.344L409.5 29.5625H441.281L435.188 37ZM472.938 23.1875L474.656 16.8125H453.531L451.438 9.40625H483.219L484.75 14.75L472.938 23.1875ZM453.594 37H444.031L448.875 18.875H458.438L453.594 37ZM502.438 37H492.062L487.219 19.9375L490.062 9.40625H499.594L497 19L500.031 29.5625H508.531L502.438 37ZM514.562 37H504.531L519.25 19L521.844 9.40625H531.375L528.531 19.9375L514.562 37ZM546.344 6.875H536.781L538.625 0.03125H548.188L546.344 6.875ZM538.281 37H528.719L536.125 9.40625H545.688L538.281 37ZM584.25 26.3125H557.5L579.656 18.875L580.219 16.8125H552.625L550.438 9.40625H588.781L590.312 14.75L588.656 20.9375L584.25 26.3125ZM580.25 37H546L544.469 31.625L547.875 18.875H557.406L554.562 29.5625H586.344L580.25 37ZM601.156 27.5H591.625L596.5 9.40625H606.031L601.156 27.5ZM640.281 37H621.125L618.562 27.9688L611.188 37H592.031L590.531 31.625L591.094 29.5625H607.938L616.562 19.0312L619.156 9.40625H628L625.406 19.0312L628.406 29.5625H635.719L641.125 9.40625H650.656L644.688 31.625L640.281 37Z"
            fill="white"
          />
        </svg>

        <EventList events={events} />
        <Link
          href="/events"
          className="flex mt-4 items-center justify-center pb-10 space-x-2 text-center my-2  text-lg drop-shadow-xl text-white font-mono underline underline-offset-2"
        >
          <h2>View All Events</h2>
          <FiArrowRight size={25} strokeWidth={2} />
        </Link>
      </div>
      <div className="relative flex flex-col lg:mb-32 mb-20 justify-center items-center lg:p-0 p-3">
        <Image
          src="/venue/venue_text.png"
          alt="venueText"
          width={300}
          height={100}
          className="p-8"
        />
        <Venue className="py-10 px-1 lg:p-10 z-10" />
      </div>
      <div className="relative lg:h-[380px] ">
        <div className="absolute inset-0 max-w-screen-lg lg:ml-10 bottom-6 lg:scale-[1.3] z-0  bg-[url('/home_touch.png')] bg-contain bg-no-repeat bg-center"></div>
        <ContactCard className="relative shadow-md shadow-black" />
      </div>
    </div>
  );
}
