import localFont from "next/font/local";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const hacked = localFont({
  src: "../public/fonts/subset-HACKED.woff2",
});

interface cardProps {
  className?: string;
}
const ContactCard: React.FC<cardProps> = ({ className }) => {
  const contacts = [
    {
      cont: "Vibhav Shivadekar: +91 82378 50501",
      link: "https://wa.me/+918237850501?text=Aispire%202025!",
    },

    {
      cont: "Dhruv Prabhugaonkar : +91 93599 87813",
      link: "https://wa.me/+919359987813?text=Aispire%202025!",
    },
    {
      cont: "Onkar Dabhade: +91 82087 54019",
      link: "https://wa.me/+918208754019?text=Aispire%202025!",
    },
  ];
  return (
    <div
      className={`text-left mx-4 font-mono   flex self-center justify-center rounded-lg lg:w-full bg-gradient-to-b from-[#1B4242]/90 to-[#5C8374]/90 space-x-2 p-5  lg:p-10 lg:px-20 ${className}`}
    >
      <div>
        <h1
          className={`${hacked.className} text-3xl
          lg:text-6xl text-center`}
        >
          GET IN TOUCH
        </h1>
        <p className="lg:my-10 my-2 font-bold lg:text-[19pt] text-sm">
          Have questions or need assistance? Were here to help!
        </p>
        {contacts.map((contact, index) => (
          <Link
            key={index}
            href={contact.link}
            target="_blank"
            className="flex items-center"
          >
            <p className="lg:my-2 lg:py-2    my-1 text-xs lg:text-[18pt] underline underline-offset-4">
              {contact.cont}
            </p>
            <FiExternalLink className="mx-1" />
          </Link>
        ))}
        <p className="lg:my-4 lg:mt-10 my-2 lg:text-[19pt] text-sm">
          Or mail us at: ieeegecsb@gec.ac.in
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
