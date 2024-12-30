import Image from "next/image";

import localFont from "next/font/local";

const hacked = localFont({
  src: "../public/fonts/subset-HACKED.woff2",
});

interface cardProps {
  className?: string;
}
const AboutCard: React.FC<cardProps> = ({ className }) => {
  return (
    <div
      className={`flex justify-stretch rounded-lg w-fit bg-gradient-to-b from-[#1B4242] to-[#5C8374] m-5 mt-20 p-10 px-20 ${className}`}
    >
      <Image
        src="/events/WomenSummit.png"
        alt="about "
        width={300}
        height={100}
        className="rounded-xl"
      />
      <div>
        <h1 className={`${hacked.className} text-center text-6xl`}>
          About hize
        </h1>

        <p className="text-center px-10">
          The IEEE Computer Society, a premier organization under the Institute
          of Electrical and Electronics Engineers (IEEE), is dedicated to
          advancing the theory, practice, and application of computer and
          information processing technology. As the world’s largest technical
          professional organization, IEEE brings together global expertise to
          drive innovation. One of its key initiatives, the IEEE High Impact
          Zonal Events (HIZE), has been inspiring India’s brightest tech minds.
        </p>
        <p className="text-center px-10">
          HIZE 2025, named AiSPIRE and hosted by the Goa College of Engineering
          (GEC), will be one of India’s largest tech events, focusing on fields
          like AI, robotics, and cybersecurity. The event will include a 24-hour
          robotics hackathon, a women’s summit, idea pitching, blind coding
          challenges, workshops, keynote sessions, and various competitions.
          With participation from students, leading tech companies, and top tech
          influencers, this event aims to foster innovation, collaboration, and
          skill development. It also strengthens ties between academia and
          industry, offering an unmatched experience for attendees.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
