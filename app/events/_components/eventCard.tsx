"use client";
import { Nunito } from "next/font/google";
import { useState, useEffect } from "react";
import localFont from "next/font/local";
import { Button } from "@nextui-org/button";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import { createPortal } from "react-dom";

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
  imgdet?: string[];
  linkLabel?: string;
  buttonlink?: string;
  joinNow?: string;
  img: string;
  imgAlt: string;
  imgW: number;
  imgH: number;
  className?: string;
  pdf?: string;
  fee?: string[];
  brshLink?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  subTitle,
  description,
  imgdet,
  buttonlink,
  joinNow,
  linkLabel,
  fee,
  img,
  imgAlt,
  imgW,
  imgH,
  brshLink,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // For portal usage (client-side only)
  useEffect(() => {
    setMounted(true);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) =>
        Math.min(prev + 1, (imgdet ? imgdet.length : 0) - 1),
      ),
    onSwipedRight: () => setCurrentIndex((prev) => Math.max(prev - 1, 0)),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  const handleDownload = () => {
    const fileUrl = `/ERB/${brshLink}.pdf`; // Path to your PDF in the public folder
    const fileName = `${brshLink}`;
    // The name for the downloaded file
    console.log(fileUrl);
    // Create a temporary link element
    const linkT = document.createElement("a");
    linkT.href = fileUrl;
    linkT.setAttribute("download", fileName);

    // Append to the document, trigger the download, then remove the element
    document.body.appendChild(linkT);
    linkT.click();
    document.body.removeChild(linkT);
  };

  // The modal content is rendered in a portal (to document.body)
  const modalContent = (
    <div
      className="fixed inset-0 flex items-center justify-center bg-primary/70 z-50"
      onClick={() => setModalOpen(false)}
    >
      <div
        className="relative flex flex-col items-center justify-center w-full"
        // Stop click events so that clicking inside the modal doesn't close it.
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          onPress={() => setModalOpen(false)}
          className=" top-4  z-40 text-white w-fit px-3 py-1 bg-primary border-2 border-secondary rounded-lg hover:scale-105 transition-all duration-500 lg:top-10 lg:left-96"
        >
          ✖
        </Button>
        {brshLink && (
          <Button
            onPress={handleDownload}
            className="bottom-5 left-16 z-40 lg:top-[50px] lg:left-96"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="bg-secondary scale-110 rounded-full hover:bg-white hover:scale-125 transition duration-500"
            >
              <g>
                <path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z" />
                <polygon points="13 13.586 13 8 11 8 11 13.586 8.707 11.293 7.293 12.707 12 17.414 16.707 12.707 15.293 11.293 13 13.586" />
              </g>
            </svg>
          </Button>
        )}

        {/* Swipeable Image Container */}
        <div
          {...swipeHandlers}
          onTouchStart={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onTouchMove={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onTouchEnd={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          className="relative w-full overflow-hidden"
        >
          {/* Desktop View */}
          <div
            className="lg:flex hidden transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imgdet &&
              imgdet.map((imgName, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Image
                    src={`/brochure/${imgName}.png`}
                    alt={imgAlt || "Event image"}
                    layout="intrinsic"
                    width={1000}
                    height={1000}
                    className="w-[400px] max-h-[1000px] object-contain mx-auto"
                  />
                </div>
              ))}
          </div>
          {/* Mobile View */}
          <div
            className="lg:hidden flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imgdet &&
              imgdet.map((imgName, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Image
                    src={`/brochure/${imgName}.png`}
                    alt={imgAlt || "Event image"}
                    layout="intrinsic"
                    width={600}
                    height={800}
                    className="w-[300px] max-h-[700px] object-contain mx-auto"
                  />
                </div>
              ))}
          </div>
        </div>
        {/* Desktop Navigation Buttons */}
        <div className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 w-full justify-between px-80 z-20">
          <Button
            onPress={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
            className="border-2 border-secondary rounded-lg bg-primary/80 hover:bg-primary hover:scale-110 transition-all duration-500"
          >
            Prev
          </Button>
          <Button
            onPress={() =>
              setCurrentIndex((prev) =>
                Math.min(prev + 1, (imgdet ? imgdet.length : 0) - 1),
              )
            }
            disabled={imgdet ? currentIndex === imgdet.length - 1 : true}
            className="border-2 border-secondary rounded-lg bg-primary/80 hover:bg-primary hover:scale-110 transition-all duration-500"
          >
            Next
          </Button>
        </div>
        {/* Pagination Indicator for Desktop */}
        <div className={`hidden lg:block text-center mt-2 ${pixel.className}`}>
          {imgdet ? currentIndex + 1 : 0}/{imgdet ? imgdet.length : 0}
        </div>
        {/* Pagination Indicator for Mobile */}
        <div className={`lg:hidden text-center mt-2 ${pixel.className}`}>
          {imgdet ? currentIndex + 1 : 0}/{imgdet ? imgdet.length : 0}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`flex flex-col h-[34rem] justify-center lg:w-80 border-2 border-secondary lg:scale-100 rounded-lg bg-gradient-to-b from-[#092635] to-[#315354] lg:my-5 lg:p-4 p-2 lg:py-4  shadow-inner shadow-black`}
      >
        <h1
          className={`lg:text-xl  font-bold text-center whitespace-nowrap  ${pixel.className}`}
        >
          {title}
        </h1>
        <div className="self-center rounded m-4 drop-shadow-2xl bg-secondary">
          <Image
            src={img ? "/event_logos/" + img + ".png" : ""}
            alt={imgAlt ? imgAlt : " "}
            width={imgW ? imgW : 160}
            height={imgH ? imgH : 160}
            className="contain-size"
          />
        </div>
        {subTitle && (
          <h3
            className={`${pixel.className} text-lg tracking-tighter text-center`}
          >
            {subTitle}
          </h3>
        )}
        <div
          className={`${nunito.className} flex-1 flex flex-col justify-center items-center`}
        >
          <p className="text-sm text-white mb-6 leading-snug text-center flex-grow font-extralight">
            {description}
          </p>
          <div className="flex-grow flex flex-col text-xs hover:scale-125 transition-all w-fit duration-500  items-center mb-2">
            {fee &&
              fee.map((fee, index) => (
                <p
                  className="text-yellow-300/90 font-extrabold  text-sm text-center  font-mono"
                  key={index}
                >
                  {fee}
                </p>
              ))}
          </div>
          <div className="flex justify-center items-center mt-auto space-x-1">
            {buttonlink && (
              <Button
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={buttonlink}
                className="py-1 px-2 text-[16px] h-fit w-fit text-center bg-primary text-secondary border-2 border-secondary rounded hover:bg-secondary hover:text-primary hover:scale-110 transition-all duration-700"
              >
                <p className="text-sm">{joinNow || "Register Now!"}</p>
              </Button>
            )}
            {linkLabel && (
              <Button
                onPress={() => setModalOpen(true)}
                className="self-center underline text-xs hover:scale-125 transition-all duration-500"
              >
                {linkLabel}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Render the modal via a portal only when open */}
      {isModalOpen && mounted && createPortal(modalContent, document.body)}
    </>
  );
};

export default EventCard;
