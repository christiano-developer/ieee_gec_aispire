import { Button } from "@nextui-org/button";

interface buttonGProps {
  className?: string;
  label: string;
  link: string;
}
const ButtonG: React.FC<buttonGProps> = ({ className, label, link }) => {
  return (
    <Button
      as="a"
      href={link}
      className={` active:scale-90 hover:scale-110 bg-gradient-to-b from-[#9EC8B9] to-[#092635] font-hacked  lg:px-6 px-2 lg:py-2 py-1 border border-[#9EC8B9] rounded-xl hover:bg-white transition-all duration-500 ${className}`}
    >
      {label}
    </Button>
  );
};

export default ButtonG;
