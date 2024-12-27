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
      className={`bg-gradient-to-b from-[#9EC8B9] to-[#092635] font-hacked px-6 py-2 border border-[#9EC8B9] rounded-xl ${className}`}
    >
      {label}
    </Button>
  );
};

export default ButtonG;
