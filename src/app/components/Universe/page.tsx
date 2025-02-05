import Image from "next/image";

export default function Universe () {
  return (
    <div className="w-full lg:w-[1340px] h-auto">
      <div className="w-full lg:w-[1340px] max-w-[1340px] flex flex-col sm:flex-col lg:flex-row gap-[30px] px-4 lg:px-0 ">
        {/* Image Section */}
        <div className="relative w-full sm:w-full lg:w-[707px] h-[400px] sm:h-[300px] lg:h-[682px] flex justify-center">
          <Image src="/un.png" alt="women" width={707} height={400} />
        </div>
        
        {/* Text Section */}
        <div className="w-full sm:w-full lg:w-[573px] h-auto flex flex-col gap-[20px] justify-center items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0 ml-20">
          <h5 className="text-[14px] sm:text-[16px] lg:text-[16px] font-Montserrat font-bold leading-[24px] text-[#BDBDBD]">
            SUMMER 2020
          </h5>
          <h2 className="text-[20px] sm:text-[24px] lg:text-[40px] font-Montserrat font-bold leading-[32px] sm:leading-[40px] lg:leading-[50px] text-[#252B42]">
            Part of the Neural Universe
          </h2>
          <h4 className="text-[14px] sm:text-[16px] lg:text-[20px] font-Montserrat font-normal leading-[24px] sm:leading-[30px] lg:leading-[30px] text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-wrap justify-center lg:justify-start gap-[10px]">
            <button className="w-[140px] sm:w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] bg-[#2DC071] flex justify-center items-center">
              <h1 className="text-[14px] sm:text-[14px] lg:text-[14px] font-Montserrat font-bold text-white">
                BUY NOW
              </h1>
            </button>
            <button className="w-[140px] sm:w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] border border-[#2DC071] flex justify-center items-center">
              <h1 className="text-[14px] sm:text-[14px] lg:text-[14px] font-Montserrat font-bold whitespace-nowrap text-[#2DC071]">
                READ MORE
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
