import Image from "next/image";

import SciFiContainer from "./_components/containerSifi";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-screen items-center bg-primary text-white relative py-10">
      <Image
        alt="Mountains"
        src={"/events_bg.png"}
        quality={100}
        fill={true}
        className="opacity-90 "
        style={{ objectFit: "contain" }}
      />

      <Image
        src="/EVENTS_text.png"
        width={500}
        height={10}
        alt="events"
        className="py-10 relative"
      />

      <main className="min-h-screen ">
        <SciFiContainer className="h-auto">{children}</SciFiContainer>
      </main>
    </div>
  );
}
