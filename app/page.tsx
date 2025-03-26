"use client";
import AboutCard from "@/components/aboutCard";
import { motion } from "framer-motion";
import ButtonG from "@/components/button";
import Countdown from "@/components/countdown";

import ContactCard from "@/components/contact";
import Image from "next/image";
import Link from "next/link";
import EventList from "@/components/eventOL";

import { FiArrowRight } from "react-icons/fi";
import Venue from "@/components/venue";

import { useEffect, useState } from "react";

const scrollAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const events = [
  {
    title: "Robo arena",
    linkLabel: "appapap",
    buttonLink: "/events/ra",
    img: "/eventO/robo_arena_wo_bg.png",
    imgAlt: "Line Follower Robot Event",
    description: [
      "The Labyrinth",
      "Robo Cup",
      " Robo Derby",
      "Hardware Hustle",
    ],
    pool: "Prize pool:Rs.75,000/-",
  },
  {
    title: "cyber arena",
    linkLabel: "appapap",
    buttonLink: "/events/ca",
    img: "/eventO/cyber_2_wo_bg.png",
    imgAlt: "Line Follower Robot Event",
    description: ["Call Of Duty", "FIFA", "Capture The Flag", "Blind Coding"],
    pool: "Prize pool:Rs.31,000/-",
  },
  {
    title: "success arena",
    linkLabel: "appapap",
    buttonLink: "/events/sa",
    img: "/eventO/success_arena_wo_bg.png",
    imgAlt: "Line Follower Robot Event",
    description: ["Placement Bootcamp ", "Woman Summit ", "Expert Talks"],
  },
  {
    title: "Startup arena",
    linkLabel: "appapap",
    buttonLink: "/events/sta",
    img: "/eventO/startup_arena_wo_bg.png",
    imgAlt: "Line Follower Robot Event",
    description: ["Pitch It Up", "TechXplore"],
    pool: "Prize pool:Rs.50,000/-",
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
    {
      label: "Partner With us",
    },
    { link: "events/ra", label: "REGISTER NOW" },
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0a1a26] z-50 overflow-x-hidden">
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
    <div className="bg-primary min-h-screen text-white lg:px-16 pt-8 lg:pt-0">
      <Image
        alt="Mountains"
        src={"/bghome.png"}
        quality={100}
        fill={true}
        className="opacity-10 "
        style={{ objectFit: "cover" }}
      />

      <div className="lg:px-8 content-center min-h-screen ">
        <div className="lg:flex lg:flex-row lg:justify-between  flex-col justify-center items-center lg:mt-0">
          <div
            className={`md:grid md:grid-rows-2 md:gap-4 lg:flex lg:flex-col lg:gap-0 place-items-center`}
          >
            <Image
              src={"/AiSPIRE_logo_white.png"}
              alt="about"
              width={500}
              height={100}
              className="lg:pl-16 mt-8 lg:scale-[140%] px-10"
            />
            <Image
              src="/event_date.png"
              width={700}
              height={100}
              alt="eventdate"
              className="z-50 p-4 lg:scale-100 scale-75 max-w-full"
            />
            <div className="lg:hidden flex">
              <Countdown className="-my-10 scale-[0.6]  lg:scale-[80%]" />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 justify-items-center lg:flex lg:justify-center lg:space-x-10 lg:text-2xl text-xl">
              {buttons.map((button, index) => (
                <ButtonG
                  key={index}
                  link={button.link}
                  label={button.label}
                  className="w-fit hidden lg:flex"
                />
              ))}
              {buttons.reverse().map((button, index) => (
                <ButtonG
                  key={index}
                  link={button.link}
                  label={button.label}
                  className="w-fit flex lg:hidden"
                />
              ))}
            </div>
          </div>

          <div>
            <Countdown className="hidden lg:flex lg:mt-32 -mt-5 scale-[0.6]  lg:scale-[80%]" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.0 }}
        variants={scrollAnimation}
      >
        <AboutCard
          vid="/about.mp4"
          className="relative lg:mx-4 lg:my-2 shadow-black shadow-md"
        />
      </motion.div>

      <div className="relative  flex flex-col justify-center   items-center mt-10 lg:mt-24 lg:mb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.0 }}
          variants={scrollAnimation}
        >
          <svg
            width="651"
            height="37"
            viewBox="0 0 651 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-full px-10 mb-5"
          >
            <path
              d="M42.4688 37H0.46875L7.5625 10.4688H17.75L17 13.6875H37.5625L32.0312 22.0312H14.625L12.8438 28.6562H49.2812L42.4688 37ZM54.7188 8.40625H8.125L5.78125 0.0625H52.375L54.7188 8.40625ZM70.625 37H60.25L55.4062 19.9375L58.25 9.40625H67.7812L65.1875 19L68.2188 29.5625H76.7188L70.625 37ZM82.75 37H72.7188L87.4375 19L90.0312 9.40625H99.5625L96.7188 19.9375L82.75 37ZM138.125 26.3125H111.375L133.531 18.875L134.094 16.8125H106.5L104.312 9.40625H142.656L144.188 14.75L142.531 20.9375L138.125 26.3125ZM134.125 37H99.875L98.3438 31.625L101.75 18.875H111.281L108.438 29.5625H140.219L134.125 37ZM184.281 37H174.75L180.156 16.8125H152.469L150.375 9.40625H188.719L190.25 14.75L184.281 37ZM152.531 37H142.969L147.812 18.875H157.375L152.531 37ZM227.062 37H196.375L194.844 31.625L198.25 18.875H207.781L204.938 29.5625H233.156L230.094 33.2812L227.062 37ZM226.969 16.8125H195.531L193.438 9.40625H200.812L203.312 0.03125H212.844L210.344 9.40625H232.594L226.969 16.8125ZM278.531 16.8125H241.312L241.875 14.75L246.281 9.40625H284.625L278.531 16.8125ZM274.25 37H235.906L237.906 29.5625H269.688L270.562 26.3125H241.75L239.906 22.0625L240.469 20H278.812L280.625 24.25L278.656 31.625L274.25 37ZM355.281 8.40625H308.719L306.344 0.0625H354.219L355.906 6.0625L355.281 8.40625ZM344.312 37H304.375L302.688 30.9688L308.156 10.4688H318.281L313.406 28.6562H339.688L344.656 10.1562H354.812L349.25 30.9688L344.312 37ZM371.688 37H361.312L356.469 19.9375L359.312 9.40625H368.844L366.25 19L369.281 29.5625H377.781L371.688 37ZM383.812 37H373.781L388.5 19L391.094 9.40625H400.625L397.781 19.9375L383.812 37ZM439.188 26.3125H412.438L434.594 18.875L435.156 16.8125H407.562L405.375 9.40625H443.719L445.25 14.75L443.594 20.9375L439.188 26.3125ZM435.188 37H400.938L399.406 31.625L402.812 18.875H412.344L409.5 29.5625H441.281L435.188 37ZM472.938 23.1875L474.656 16.8125H453.531L451.438 9.40625H483.219L484.75 14.75L472.938 23.1875ZM453.594 37H444.031L448.875 18.875H458.438L453.594 37ZM502.438 37H492.062L487.219 19.9375L490.062 9.40625H499.594L497 19L500.031 29.5625H508.531L502.438 37ZM514.562 37H504.531L519.25 19L521.844 9.40625H531.375L528.531 19.9375L514.562 37ZM546.344 6.875H536.781L538.625 0.03125H548.188L546.344 6.875ZM538.281 37H528.719L536.125 9.40625H545.688L538.281 37ZM584.25 26.3125H557.5L579.656 18.875L580.219 16.8125H552.625L550.438 9.40625H588.781L590.312 14.75L588.656 20.9375L584.25 26.3125ZM580.25 37H546L544.469 31.625L547.875 18.875H557.406L554.562 29.5625H586.344L580.25 37ZM601.156 27.5H591.625L596.5 9.40625H606.031L601.156 27.5ZM640.281 37H621.125L618.562 27.9688L611.188 37H592.031L590.531 31.625L591.094 29.5625H607.938L616.562 19.0312L619.156 9.40625H628L625.406 19.0312L628.406 29.5625H635.719L641.125 9.40625H650.656L644.688 31.625L640.281 37Z"
              fill="white"
            />
          </svg>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.0 }}
          variants={scrollAnimation}
          className="relative mb-10 lg:mb-0 flex flex-col items-center justify-center lg:px-0  lg:scale-100 "
        >
          <EventList events={events} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.0 }}
          variants={scrollAnimation}
        >
          <Link
            href="/events/ra"
            className="flex items-center justify-center pb-10 space-x-2 text-center my-2  text-lg drop-shadow-xl text-white font-mono underline underline-offset-2"
          >
            <h2>View All Events</h2>
            <FiArrowRight size={25} strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
      <div className="relative flex flex-col lg:mb-32 mb-20 justify-center items-center lg:p-0 p-3">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.0 }}
          variants={scrollAnimation}
        >
          <svg
            width="232"
            height="37"
            viewBox="0 0 232 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.7188 37H21.1875L27.8125 28.6562L37.4062 16.9688L41.9375 0.0625H52.0938L47.2812 17.9688L31.7188 37ZM18.9375 37H6.09375L0.6875 17.9688L3.25 8.40625L0.90625 0.0625H15.6562L11.125 16.9688L14.4062 28.6562H25.5625L20.3125 35.2812H20.3438L18.9375 37ZM87.6875 26.3125H60.9375L83.0938 18.875L83.6562 16.8125H56.0625L53.875 9.40625H92.2188L93.75 14.75L92.0938 20.9375L87.6875 26.3125ZM83.6875 37H49.4375L47.9062 31.625L51.3125 18.875H60.8438L58 29.5625H89.7812L83.6875 37ZM133.844 37H124.312L129.719 16.8125H102.031L99.9375 9.40625H138.281L139.812 14.75L133.844 37ZM102.094 37H92.5312L97.375 18.875H106.938L102.094 37ZM176.938 37H141.531L140.031 31.625L146 9.40625H155.531L150.125 29.5625H181.875L181.312 31.625L176.938 37ZM182.406 27.5H172.875L177.75 9.40625H187.281L182.406 27.5ZM225.875 26.3125H199.125L221.281 18.875L221.844 16.8125H194.25L192.062 9.40625H230.406L231.938 14.75L230.281 20.9375L225.875 26.3125ZM221.875 37H187.625L186.094 31.625L189.5 18.875H199.031L196.188 29.5625H227.969L221.875 37Z"
              fill="white"
            />
          </svg>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.0 }}
          variants={scrollAnimation}
        >
          <Venue className="my-5 mb-0 px-1 lg:p-10  z-10 lg:scale-100 scale-95" />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.0 }}
        variants={scrollAnimation}
        className="relative mb-10 flex flex-col items-center justify-center lg:px-0  lg:scale-100 "
      >
        <div className="absolute inset-0 lg:max-w-screen-lg lg:mx-auto scale-y-[1.5] opacity-70  top-6 lg:scale-[1.25]  bg-[url('/home_touch.png')] bg-contain bg-no-repeat bg-center"></div>
        <ContactCard className="relative shadow-md shadow-black lg:scale-100 scale-95" />
      </motion.div>
    </div>
  );
}
