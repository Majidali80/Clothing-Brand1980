import Image from "next/image";

// Define the types for the props (title, description)
interface CardTextProps {
  title: string;
  description: string;
}

const CardText: React.FC<CardTextProps> = ({ title, description }) => {
  return (
    <div className="w-[239px] h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]">
      <div className="text-center mt-4">
        <h4 className="font-Montserrat font-bold text-[18px] text-[#252B42]">{title}</h4>
        <p className="font-Montserrat font-normal text-[14px] text-[#737373]">{description}</p>
      </div>
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>
      
      <div className="w-[82.2px] h-[16px] flex justify-center">
        <Image src="/pc.png" alt="women" width={1440} height={716} />
      </div>
    </div>
  );
};

export default CardText;
