import { Button } from "@nextui-org/button";
import { useState } from "react";

import React from "react";

interface PDFOverlayProps {
  onClose: () => void;
}

const PDFOverlay: React.FC<PDFOverlayProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded shadow-lg max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute right-2 text-secondary hover:text-gray-800 text-5xl"
        >
          &times;
        </button>
        <iframe
          src="/AIspire_Sponsorship_Brochure_2025.pdf"
          title="PDF Viewer"
          className="w-full h-screen rounded-b py-10 bg-primary"
        />
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
  {
    /*const file = "/document.pdf"; // Path to your PDF in the

  const handleDownload = () => {
    const fileUrl = "/AIspire_Sponsorship_Brochure_2025.pdf"; // Path to your PDF in the public folder
    const fileName = "AIspire_Sponsorship_Brochure_2025.pdf";
    console.log(fileName); // The name for the downloaded file

    // Create a temporary link element
    const linkT = document.createElement("a");
    linkT.href = fileUrl;
    linkT.setAttribute("download", fileName);

    // Append to the document, trigger the download, then remove the element
    document.body.appendChild(linkT);
    linkT.click();
    document.body.removeChild(linkT);
    }; */
  }

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
