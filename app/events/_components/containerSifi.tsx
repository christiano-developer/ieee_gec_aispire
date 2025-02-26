"use client";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";

interface SciFiContainerProps {
  children: React.ReactNode;
  className?: string;
}
const hacked = localFont({
  src: [{ path: "../../../public/fonts/subset-HACKED.woff2" }],
});

const eventCategories = [
  { id: "ra", name: "Robo Arena" },
  { id: "ca", name: "Cyber Arena" },
  { id: "sa", name: "Success Arena" },
  { id: "sta", name: "Startup Arena" },
];

export default function SciFiContainer({
  children,
  className,
}: SciFiContainerProps) {
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Get the index based on the current URL
    const currentPath = pathname.split("/").pop();
    const index = eventCategories.findIndex(
      (category) => category.id === currentPath,
    );
    if (index !== -1) setCurrentIndex(index);
  }, [pathname]); // ✅ Runs when the URL changes

  const getNextIndex = () => (currentIndex + 1) % eventCategories.length;
  const getPrevIndex = () =>
    currentIndex === 0 ? eventCategories.length - 1 : currentIndex - 1;

  return (
    <div
      className={`relative w-screen flex flex-col  lg:mx-auto lg:max-w-7xl border-4 border-secondary rounded-xl bg-black/50 ${className}`}
    >
      <nav className="flex lg:justify-start -my-1 lg:-my-0 justify-between lg:space-x-8 rounded-tl-lg rounded-tr-lg bg-black/10 lg:p-0 px-2 lg:px-10">
        {eventCategories.map((category, index) => (
          <Link key={category.id} href={`/events/${category.id}`}>
            <span
              className={`hover:text-white cursor-pointer font-mono p-2 lg:p-3 text-center text-secondary  border-l-[4px] border-r-[4px] border-secondary lg:bg-transparent  transition-all duration-500 inline-block ${
                index === currentIndex
                  ? "border-opacity-100"
                  : "border-opacity-0"
              }`}
            >
              {category.name}
            </span>
          </Link>
        ))}
      </nav>
      <div className="h-[4px] bg-secondary" />
      <h1
        className={`${hacked.className} mt-2 text-4xl p-2  lg:text-6xl text-center`}
      >
        {eventCategories[currentIndex].name}
      </h1>
      <div className="rounded-xl text-white relative   ">{children}</div>
      <div className="h-[4px] bg-secondary mt2" />
      <div className="self-center p-2 flex space-x-4">
        <Link
          href={`/events/${eventCategories[getPrevIndex()].id}`}
          className="w-10 h-10 flex items-center justify-center border-4 border-secondary rounded-full text-secondary hover:bg-primary hover:scale-110 transition duration-200"
        >
          <FiArrowLeft size={25} strokeWidth={2} />
        </Link>
        <Link
          href={`/events/${eventCategories[getNextIndex()].id}`}
          className="w-10 h-10 flex items-center justify-center border-4 border-secondary rounded-full text-secondary hover:bg-primary hover:scale-110 transition duration-200"
        >
          <FiArrowRight size={25} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}
