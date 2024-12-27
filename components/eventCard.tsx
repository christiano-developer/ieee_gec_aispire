import { Button } from "@nextui-org/button";

interface cardProps {
  className?: string;
  label: string;
  link: string;
}
const Ecard: React.FC<cardProps> = ({ className, label, link }) => {
  return (
    <Button
      as="a"
      href={link}
      className={`bg-gradient-to-b from-[#9EC8B9] to-[#092635]  px-4 py-2 border border-[#9EC8B9] rounded-md ${className}`}
    >
      {label}
    </Button>
  );
};

export default Ecard;
