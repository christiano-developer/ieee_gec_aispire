import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";

import React from "react";

interface PDFOverlayProps {
  onClose: () => void;
}

const PDFOverlay: React.FC<PDFOverlayProps> = ({ onClose }) => {
  useEffect(() => {
    // Disable background scrolling
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  const handleDownload = () => {
    const fileUrl = "/AIspire_Sponsorship_Brochure_2025.pdf"; // Path to your PDF in the public folder
    const fileName = "AIspire_Sponsorship_Brochure_2025.pdf";
    console.log(fileUrl); // The name for the downloaded file

    // Create a temporary link element
    const linkT = document.createElement("a");
    linkT.href = fileUrl;
    linkT.setAttribute("download", fileName);

    // Append to the document, trigger the download, then remove the element
    document.body.appendChild(linkT);
    linkT.click();
    document.body.removeChild(linkT);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded shadow-lg w-[90%] md:max-w-4xl relative overflow-hidden">
        <Button
          onPress={onClose}
          className="absolute right-2 text-secondary hover:text-white text-5xl"
        >
          &times;
        </Button>
        <Button
          onPress={handleDownload}
          className="absolute top-[0px] right-14 text-secondary hover:text-gray-800 text-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="bg-secondary rounded-full"
          >
            <g>
              <path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z" />
              <polygon points="13 13.586 13 8 11 8 11 13.586 8.707 11.293 7.293 12.707 12 17.414 16.707 12.707 15.293 11.293 13 13.586" />
            </g>
          </svg>
        </Button>
        <div className="overflow-auto h-[calc(100vh-4rem)]">
          <iframe
            src="/AIspire_Sponsorship_Brochure_2025.pdf"
            title="PDF Viewer"
            className="w-full h-screen rounded-b py-10 bg-primary"
          />
        </div>
      </div>
    </div>
  );
};

interface buttonGProps {
  className?: string;
  label: string;

  link?: string;
}
const ButtonG: React.FC<buttonGProps> = ({ className, label, link }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <Button
        onPress={() => setShowOverlay(true)}
        as="a"
        href={link}
        className={` active:scale-90 hover:scale-110 bg-gradient-to-b from-[#9EC8B9] to-[#092635] font-hacked  lg:px-6 px-2 lg:py-2 py-1 border border-[#9EC8B9] rounded-xl hover:bg-white transition-all duration-500 ${className}`}
      >
        {label}
      </Button>
      {label === "Partner With us" && showOverlay && (
        <PDFOverlay onClose={() => setShowOverlay(false)} />
      )}
    </>
  );
};

export default ButtonG;
