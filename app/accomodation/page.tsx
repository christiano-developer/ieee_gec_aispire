"use client";
import ButtonG from "@/components/button";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const pixel = localFont({
  src: [
    { path: "../../public/fonts/subset-PixelatedElegance.woff2" },
    { path: "../../public/fonts/subset-PixelatedElegance.woff" },
    { path: "../../public/fonts/subset-PixelatedElegance.ttf" },
  ],
});

const hacked = localFont({
  src: [
    { path: "../../public/fonts/subset-HACKED.woff2" },
    { path: "../../public/fonts/subset-HACKED.woff" },
    { path: "../../public/fonts/subset-HACKED.ttf" },
  ],
});

const Img = [
  {
    title: "Hotel Yashoda Deluxe",
    buttonLink: "https://maps.app.goo.gl/6cKPSniU1TGjZeBUA",
    img: [
      "/venue/hotel_yashoda_deluxe.png",
      "/venue/hotel_yashoda_deluxe_map.png",
    ],
    price: ["₹325 per person (Non-AC)", "₹400 per person (AC)"],
  },
  {
    title: "Farmagudi Residency",

    buttonLink: "https://maps.app.goo.gl/YGZ1sjihWvRPJhiR7",
    img: [
      "/venue/farmagudi_residency.png",
      "/venue/farmagudi_residency_map.png",
    ],
    price: ["₹1700 for 3 people (Non-AC)", " ₹2000 for 3 people (AC)"],
  },
];

export default function Events() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className={`${pixel.className} text-3xl`}>Accommodation</h1>
      <p className="font-mono text-center px-48 py-5">
        We are excited to host you for our upcoming event on the 4th-5th of
        April 2025. Below are the DISCOUNTED accommodation options available for
        your stay:
      </p>
      <div>
        {Img.map((venue, index) => (
          <div
            key={index}
            className="text-white w-full max-w-5xl  lg:mb-4  border-2 p-5 border-secondary justify-center items-center"
          >
            <h1
              className={`text-3xl lg:text-left text-center lg:mb-6 ${hacked.className}`}
            >
              {venue.title}
            </h1>

            {/* Flex container for images & text */}
            <div className="lg:flex lg:flex-row flex-col items-center  lg:justify-between">
              {/* Images for large screens */}
              <div className="hidden lg:flex lg:gap-10 justify-center ">
                {venue.img.map((img, imgIndex) => (
                  <Link
                    key={imgIndex}
                    href={venue.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={img}
                      width={300}
                      height={300}
                      alt={venue.title}
                      className="rounded-lg max-w-min h-[200px] lg:max-w-full  animate-glitch"
                    />
                  </Link>
                ))}
              </div>
              {/* Images for smaller screens */}
              <div className="lg:hidden flex gap-8 justify-center my-6">
                {venue.img.map((img, index) => (
                  <Link
                    key={index}
                    href={venue.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={img}
                      width={130}
                      height={100}
                      alt={venue.title}
                      className="rounded-lg h-[100px] max-w-min lg:max-w-full animate-glitch  "
                    />
                  </Link>
                ))}
              </div>

              <div className="min-w-[200px] lg:max-w-[300px] flex flex-col justify-center items-center gap-y-20">
                <h2 className="lg:text-xl lg:px-12 px-16 text-sm font-semibold text-center">
                  Room Types: AC/Non-AC
                </h2>
                <ul className="text-xs  text-left  px-10 list-disc list-inside">
                  {venue.price.map((p, index) => (
                    <li key={index} className="">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ButtonG label="BOOK NOW" className="text-2xl" />
    </div>
  );
}
