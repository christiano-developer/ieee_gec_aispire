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

  // The modal content is rendered in a portal (to document.body)
  const modalContent = (
    <div
      className="fixed inset-0 flex items-center justify-center bg-transparent/50 z-50"
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
          className="z-40 top-10 left-96 text-white px-3 py-1 bg-primary border-2 border-secondary rounded-lg hover:scale-105 transition-all duration-500"
        >
          ✖
        </Button>

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
        className={`flex flex-col h-[34rem] justify-between lg:w-80 border-2 border-secondary lg:scale-100 rounded-lg bg-gradient-to-b from-[#092635] to-[#315354] lg:my-5 lg:p-4 p-2 lg:py-4 bg-white shadow-inner shadow-black`}
      >
        <h1
          className={`text-xl font-bold text-center whitespace-nowrap ${className} ${pixel.className}`}
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
        <div className={`${nunito.className} flex-1 flex flex-col`}>
          <p className="text-sm text-white mb-6 text-center flex-grow font-mono">
            {description}
          </p>
          <div className="flex justify-center items-center mt-auto space-x-1">
            {buttonlink && (
              <Button
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={buttonlink}
                className="py-1 px-2 text-[16px] h-fit w-fit text-center bg-primary text-secondary border-2 border-secondary rounded hover:bg-white hover:scale-110 transition-all duration-700"
              >
                Register Now!
              </Button>
            )}
            {linkLabel && (
              <Button
                onPress={() => setModalOpen(true)}
                className="self-center underline text-xs"
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
