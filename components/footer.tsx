"use client";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface NavbarProps {
  className?: string;
}

const footerLogos = [
  {
    img: "/logos/AiSPIRE_logo_white.png",
    width: 290,
    height: 100,
  },
  {
    img: "/logos/IEEE_GEC_SB_TransC.png",
    width: 500,
    height: 100,
    className: "lg:scale-75",
  },
  {
    img: "/logos/IEEE_WIE.png",
    width: 100,
    height: 100,
  },
  {
    img: "/logos/gec_logo_wo_bg.png",
    width: 80,
    height: 50,
  },
];

const footerLogosMobile = [
  { img: "/logos/AiSPIRE_logo_white.png", width: 90, height: 40 },
  { img: "/logos/IEEE_GEC_SB_TransC.png", width: 100, height: 40 },
  { img: "/logos/IEEE_WIE.png", width: 40, height: 50 },
  { img: "/logos/gec_logo_wo_bg.png", width: 30, height: 25 },
];

const Footer: React.FC<NavbarProps> = ({ className }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (parentRef.current && socialRef.current) {
        // Total available width for logos = parent's width minus the social icons container's width.
        const parentWidth = parentRef.current.offsetWidth;
        const socialWidth = socialRef.current.offsetWidth;
        const availableWidth = parentWidth - socialWidth;
        // Sum up the intrinsic widths of the logos.
        const totalLogoWidth = footerLogosMobile.reduce(
          (acc, logo) => acc + logo.width,
          0,
        );
        // Assume an 8px gap between logos.
        const totalGapWidth = (footerLogosMobile.length - 1) * 8;
        const totalRequiredWidth = totalLogoWidth + totalGapWidth;
        // Compute scale if logos don't fit.
        const newScale =
          availableWidth < totalRequiredWidth
            ? (availableWidth / totalRequiredWidth) * 0.8
            : 1;
        setScale(newScale);
      }
    };

    // Initial calculation.
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <footer
        className={`lg:block hidden bg-black w-full text-white py-4  px-4 lg:py-6 lg:px-12 relative ${className}`}
      >
        <div className="flex items-center justify-center  ">
          {/* Logo Section */}
          <div className="flex items-center gap-4 lg:gap-6 flex-nowrap overflow-x-auto">
            {footerLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo.img}
                width={logo.width}
                height={logo.height}
                alt="Logo"
                className={`h-auto max-w-full object-contain ${logo.className}`}
              />
            ))}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <Link href="https://www.instagram.com/ieeegec" target="_blank">
                <svg
                  className="w-8 h-8 lg:w-10 lg:h-10 hover:scale-110 transition"
                  viewBox="0 0 48 48"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_733_586)">
                    <path
                      d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                      fill="white"
                    />
                    <path
                      d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                      fill="white"
                    />
                    <path
                      d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_733_586">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/ieeegec/">
                <svg
                  className="w-8 h-8 lg:w-10 lg:h-10 hover:scale-110 transition"
                  viewBox="0 0 48 48"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_737_707)">
                    <path
                      d="M44.4469 0.880859H3.54375C1.58437 0.880859 0 2.42773 0 4.34023V45.4121C0 47.3246 1.58437 48.8809 3.54375 48.8809H44.4469C46.4062 48.8809 48 47.3246 48 45.4215V4.34023C48 2.42773 46.4062 0.880859 44.4469 0.880859ZM14.2406 41.784H7.11563V18.8715H14.2406V41.784ZM10.6781 15.7496C8.39062 15.7496 6.54375 13.9027 6.54375 11.6246C6.54375 9.34648 8.39062 7.49961 10.6781 7.49961C12.9563 7.49961 14.8031 9.34648 14.8031 11.6246C14.8031 13.8934 12.9563 15.7496 10.6781 15.7496ZM40.9031 41.784H33.7875V30.6465C33.7875 27.9934 33.7406 24.5715 30.0844 24.5715C26.3812 24.5715 25.8187 27.4684 25.8187 30.459V41.784H18.7125V18.8715H25.5375V22.0027H25.6312C26.5781 20.2027 28.9031 18.2996 32.3625 18.2996C39.5719 18.2996 40.9031 23.0434 40.9031 29.2121V41.784Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_737_707">
                      <rect
                        width="48"
                        height="48"
                        fill="white"
                        transform="translate(0 0.880859)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>

          {/* Social Icons */}
        </div>
      </footer>

      {/*mobileview */}
      <footer
        className={`flex lg:hidden bg-black text-white py-4 justify-center ${className}`}
        ref={parentRef}
      >
        <div
          className="flex gap-1 items-center justify-center"
          style={{
            transform: `scale(${scale})`,
          }}
          ref={logosRef}
        >
          {/* Logos container gets scaled down if needed */}
          <div className="flex gap-1 items-center justify-center overflow-hidden">
            {footerLogosMobile.map((logo, index) => (
              <Image
                key={index}
                src={logo.img}
                width={logo.width}
                height={logo.height}
                alt="Logo"
                className="h-auto max-w-fit object-contain"
              />
            ))}
          </div>
          {/* Social icons remain at full scale */}
          <div
            ref={socialRef}
            className="flex justify-center items-center space-x-2"
          >
            <Link href="https://www.instagram.com/ieeegec" target="_blank">
              <svg
                className="w-5 h-5 hover:scale-110 transition"
                viewBox="0 0 48 48"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_733_586)">
                  <path
                    d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                    fill="white"
                  />
                  <path
                    d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                    fill="white"
                  />
                  <path
                    d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_733_586">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/ieeegec/"
              target="_blank"
            >
              <svg
                className="w-5 h-5 lg:w-10 lg:h-10 hover:scale-110 transition"
                viewBox="0 0 48 48"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_737_707)">
                  <path
                    d="M44.4469 0.880859H3.54375C1.58437 0.880859 0 2.42773 0 4.34023V45.4121C0 47.3246 1.58437 48.8809 3.54375 48.8809H44.4469C46.4062 48.8809 48 47.3246 48 45.4215V4.34023C48 2.42773 46.4062 0.880859 44.4469 0.880859ZM14.2406 41.784H7.11563V18.8715H14.2406V41.784ZM10.6781 15.7496C8.39062 15.7496 6.54375 13.9027 6.54375 11.6246C6.54375 9.34648 8.39062 7.49961 10.6781 7.49961C12.9563 7.49961 14.8031 9.34648 14.8031 11.6246C14.8031 13.8934 12.9563 15.7496 10.6781 15.7496ZM40.9031 41.784H33.7875V30.6465C33.7875 27.9934 33.7406 24.5715 30.0844 24.5715C26.3812 24.5715 25.8187 27.4684 25.8187 30.459V41.784H18.7125V18.8715H25.5375V22.0027H25.6312C26.5781 20.2027 28.9031 18.2996 32.3625 18.2996C39.5719 18.2996 40.9031 23.0434 40.9031 29.2121V41.784Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_737_707">
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      transform="translate(0 0.880859)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
