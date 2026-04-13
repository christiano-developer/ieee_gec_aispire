import ContactCard from "@/components/contact";
import BASE_PATH from "@/lib/constants";

export default function Events() {
  return (
    <div className="relative py-44 min-h-screen overflow-hidden flex flex-col items-center justify-center lg:scale-100 lg:px-10">
      <div
        className="absolute inset-0 lg:max-w-screen-md lg:mx-auto scale-y-[1.8] lg:top-10 lg:scale-[1.6] bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${BASE_PATH}/home_touch.png')` }}
      ></div>
      <ContactCard className="relative shadow-md shadow-black lg:scale-100 scale-95" />
    </div>
  );
}
