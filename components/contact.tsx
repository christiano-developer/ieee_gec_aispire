import localFont from "next/font/local";

const hacked = localFont({
  src: "../public/fonts/subset-HACKED.woff2",
});

interface cardProps {
  className?: string;
}
const ContactCard: React.FC<cardProps> = ({ className }) => {
  const contacts = [
    "Vibhav Shivadekar: +91 82378 50501",
    "Dakshat Patil: +91 86690 72165",
    "Dhruv Prabhugaonkar : +91 93599 87813",
    "Onkar Dabhade: +91 82087 54019",
    "Or mail us at: ieeegecsb@gec.ac.in",
  ];
  return (
    <div
      className={`text-left m-4 font-mono  bottom-8 flex self-center justify-center rounded-lg lg:w-full bg-gradient-to-b from-[#1B4242]/50 to-[#5C8374]/90 space-x-2 p-5  lg:p-10 lg:px-20 ${className}`}
    >
      <div>
        <h1
          className={`${hacked.className} text-3xl
          lg:text-6xl text-center`}
        >
          GET IN TOUCH
        </h1>
        <p className="my-4 font-bold lg:text-[19pt] text-sm">
          Have questions or need assistance? Were here to help!
        </p>
        {contacts.map((contact, index) => (
          <p key={index} className="lg:my-2 py-1  text-xs lg:text-[18pt]">
            {contact}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
