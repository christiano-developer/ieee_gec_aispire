import localFont from "next/font/local";

const hacked = localFont({
  src: "../public/fonts/subset-HACKED.woff2",
});

interface cardProps {
  className?: string;
}
const ContactCard: React.FC<cardProps> = ({ className }) => {
  const contacts = [
    "Sadhavi Chodankar: +91 88066 64468",
    "Vibhav Shivadekar: +91 82378 50501",
    "Dakshat Patil: +91 86690 72165",
    "Varad: +91 70302 11188",
  ];
  return (
    <div
      className={`flex self-center justify-center rounded-lg w-full bg-gradient-to-b from-[#1B4242] to-[#5C8374] space-x-2  p-10 px-20 ${className}`}
    >
      <div>
        <h1
          className={`${hacked.className}
          text-center text-6xl`}
        >
          GET IN TOUCH
        </h1>
        <p className="text-center px-8 my-4 font-bold text-[15pt]">
          Have questions or need assistance? We're here to help!
        </p>
        {contacts.map((contact, index) => (
          <p
            key={index}
            className="text-center px-8 my-4 font-bold text-[15pt]"
          >
            {contact}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
