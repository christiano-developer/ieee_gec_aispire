import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

interface VenueProps {
  className?: string;
}

const pixel = localFont({
  src: [
    { path: "../public/fonts/subset-PixelatedElegance.woff2" },
    { path: "../public/fonts/subset-PixelatedElegance.woff" },
    { path: "../public/fonts/subset-PixelatedElegance.ttf" },
  ],
});

const Img = [
  {
    title: "Rajiv Gandhi Kala Mandir",
    buttonLink: "https://maps.app.goo.gl/6cKPSniU1TGjZeBUA",
    img: [
      "/venue/rajiv-gandhi-kala-mandir-ponda-goa-auditoriums.avif",
      "/venue/rajiv_gandhi_kala_mandir_map.png",
    ],
    loci: "92X7+XJ8, Ponda – Curti Rd, Durgabhat, Betora, Ponda, Goa 403401",
  },
  {
    title: "Goa College of Engineering",
    buttonLink: "https://maps.app.goo.gl/YGZ1sjihWvRPJhiR7",
    img: ["/venue/goa-college-of-engineering-ponda.webp", "/venue/gec_map.png"],
    loci: "Bhausaheb Bandodkar ,Technical Education Complex Farmagudi ,Ponda , Goa 403401",
  },
];

const Venue: React.FC<VenueProps> = ({ className }) => {
  return (
    <div
      className={`${pixel.className} flex flex-col justify-center items-center w-full lg:h-screen bg-cover bg-center bg-no-repeat border-4 rounded-2xl border-secondary lg:p-6 overflow-hidden ${className}`}
      style={{ backgroundImage: `url('/venue/venue_black_bg.png')` }}
    >
      {Img.map((venue, index) => (
        <div
          key={index}
          className="text-white w-full max-w-5xl lg:space-y-4 lg:mb-4 py-5"
        >
          <h1 className="text-3xl lg:text-left py-2 text-center font-bold">
            DAY {index + 1}:
          </h1>

          {/* Flex container for images & text */}
          <div className="lg:flex lg:flex-row flex-col items-center lg:justify-between lg:gap-6">
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
                    className="rounded-lg max-w-min h-[200px] lg:max-w-full  shadow-[4px_4px_0_#ff0000,-4px_-4px_0_#00ffff,2px_-2px_0_#ff00ff,-2px_2px_0_#ffff00]"
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
                  as="a"
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

            {/* Venue Details */}
            <div className="min-w-[200px] lg:max-w-[300px] space-y-2 my-5">
              <h2 className="lg:text-xl text-sm font-semibold text-center">
                {venue.title}
              </h2>
              <p className="text-xs text-center px-10">{venue.loci}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Venue;
