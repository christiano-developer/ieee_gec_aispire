import Image from "next/image";
import Link from "next/link";

interface Speaker {
  title: string;
  subTitle?: string;
  description: string;
  img: string;
  imgAlt: string;
}

interface SpeakerListProps {
  speakers: Speaker[];
  className?: string;
}

const SpeakerCard: React.FC<Speaker> = ({
  title,
  description,
  img,
  imgAlt,
}) => {
  const logosLeft = [{ src: "/HIZE_nobg.png" }];
  const logosRight = [
    { src: "/HIZE_nobg.png" },
    { src: "/GEC_logo_nobg.png" },
    { src: "/IEEEMB_nobg.png" },
  ];

  return (
    <div className="group h-96 w-72 [perspective:1000px]">
      <div className="relative  h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-b from-[#092635] to-[#1B4242] shadow-md border-[#9EC8B9] border-[0.09rem] [backface-visibility:hidden]">
          {/* Logos */}
          <div className="grid grid-cols-2 bg-black rounded-t-xl border-b-[0.09rem] border-secondary px-2 py-1">
            <div className="flex items-center space-x-2">
              {logosLeft.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt="logo"
                  width={50}
                  height={30}
                  className="scale-[80%]"
                />
              ))}
            </div>
            <div className="flex flex-row-reverse items-center space-x-2">
              {logosRight.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt="logo"
                  width={30}
                  height={30}
                  className="scale-[80%]"
                />
              ))}
            </div>
          </div>

          {/* Speaker Image */}
          <div className="flex flex-col items-center justify-center py-6">
            <div className="rounded-full border w-44 h-44 overflow-hidden">
              <Image
                src={img || "/"}
                alt={imgAlt || " "}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-semibold text-white mt-10">{title}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0  h-full w-full rounded-xl bg-black/80 px-6 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-pretty text-center mb-4">
              {description}
            </p>
            <Link href="google.com" className="inline-flex">
              <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                <span>Reach Out</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpeakerList: React.FC<SpeakerListProps> = ({ speakers, className }) => {
  return (
    <section className="mx-auto my-20">
      <div className="flex justify-center px-4 lg:max-w-7xl">
        <div className={`grid gap-12 md:gap-16 lg:grid-cols-3 ${className}`}>
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              title={speaker.title}
              subTitle={speaker.subTitle}
              description={speaker.description}
              img={speaker.img}
              imgAlt={speaker.imgAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerList;
