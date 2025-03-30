"use client";
import ButtonG from "@/components/button";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

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
    buttonLink: "https://maps.app.goo.gl/Qvq4EAJi4Fkwapqf8",
    img: [
      "/venue/hotel_yashoda_deluxe.png",
      "/venue/hotel_yashoda_deluxe_map.png",
    ],
    price: ["₹325 per person (Non-AC)", "₹400 per person (AC)"],
  },
  {
    title: "Farmagudi Residency",

    buttonLink: "https://maps.app.goo.gl/aQdy64M2TiTvigHk6",
    img: [
      "/venue/farmagudi_residency.png",
      "/venue/farmagudi_residency_map.png",
    ],
    price: ["₹1700 for 3 people (Non-AC)", " ₹2000 for 3 people (AC)"],
  },
];

export default function Events() {
  return (
    <div className="flex flex-col items-center justify-center py-5 lg:mt-0 mt-20">
      <h1 className={`${pixel.className} text-3xl`}>Accommodation</h1>
      <p className="font-mono text-center lg:px-48 lg:py-5 px-2 py-4">
        We are excited to host you for our upcoming event on the 4th-5th of
        April 2025. Below are the DISCOUNTED accommodation options available for
        your stay:
      </p>
      <div>
        {Img.map((venue, index) => (
          <div
            key={index}
            className="text-white lg:w-full lg:max-w-5xl mb-5 max-w-96 py-5  border-2 rounded-md lg:px-5 lg:py-8 border-secondary justify-center items-center"
          >
            <h1
              className={`text-3xl lg:text-left text-center pb-2 ${hacked.className}`}
            >
              {venue.title}
            </h1>

            {/* Flex container for images & text */}
            <div className="lg:flex lg:flex-row flex-col items-center  lg:justify-evenly">
              {/* Images for large screens */}
              <div className="hidden lg:flex lg:gap-5 justify-center ">
                {venue.img.map((img, imgIndex) => (
                  <Link
                    key={imgIndex}
                    href={venue.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={img}
                      width={330}
                      height={300}
                      alt={venue.title}
                      className="rounded-lg max-w-min h-[240px] lg:max-w-full "
                    />
                  </Link>
                ))}
              </div>
              {/* Images for smaller screens */}
              <div className="lg:hidden flex gap-4 justify-center my-2">
                {venue.img.map((img, index) => (
                  <Link
                    key={index}
                    href={venue.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={img}
                      width={150}
                      height={100}
                      alt={venue.title}
                      className="rounded-lg h-[100px] max-w-min lg:max-w-full "
                    />
                  </Link>
                ))}
              </div>

              <div className="min-w-[200px] lg:max-w-[300px]  flex flex-col lg:px-3 px-8">
                <h2 className="lg:text-lg  text-sm  font-mono text-left lg:mb-6 mb-3">
                  Room Types: AC/Non-AC
                </h2>
                <h2 className="lg:text-md px-2 text-sm font-mono text-left">
                  Rates:
                </h2>
                <ul className="lg:text-md font-mono  text-left  lg:px-10 list-disc list-inside">
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
      <ButtonG
        blank="_blank"
        label="BOOK NOW"
        link="https://forms.gle/CFT45iThjLWSZZgy6"
        className="text-2xl"
      />
    </div>
  );
}
