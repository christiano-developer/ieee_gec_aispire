import Image from "next/image";

interface cardProps {
  className?: string;
}
const AboutCard: React.FC<cardProps> = ({ className }) => {
  return (
    <div
      className={`flex justify-stretch rounded-lg w-fit bg-gradient-to-b from-[#1B4242] to-[#5C8374] m-5 mt-20 p-20 ${className}`}
    >
      <Image src="" alt=" " width={20} height={100} />

      <p className="text-center px-44">
        HIZE is a premier event bringing together students, professionals, and
        industry experts for two impactful days of knowledge sharing,
        innovation, and networking. The event celebrates the achievements of
        regional HIZ events held across the country, with an immersive program
        including conferences, workshops, hackathons, and cultural experiences.
        Attendees can expect exclusive insights from thought leaders in
        technology, unique networking opportunities, and a chance to showcase
        their ideas on a global stage.
      </p>
    </div>
  );
};

export default AboutCard;
