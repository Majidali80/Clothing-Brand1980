import Image from "next/image";

export default function Editors() {
  return (
    <div className="w-full h-auto flex justify-center py-[5px] relative bg-[#FAFAFA]">
      <div className="w-full sm:w-[1050px] h-auto sm:h-[770px] flex flex-col gap-[48px] px-[20px] sm:p-[80px_0px_80px_0px]">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-[10px]">
          <h3 className="font-Montserrat font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px]">
            EDITOR’S PICK
          </h3>
          <p className="w-full sm:w-[347px] h-auto font-Montserrat font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full flex flex-col sm:flex-row gap-[30px] sm:gap-[30px]">
          {/* Men Image */}
          <div className="relative w-full sm:w-[510px] h-[500px] group">
            <Image
              src="/ed1.png"
              alt="men"
              width={510}
              height={500}
              className="w-full h-full object-cover rounded-md transition-all duration-300 group-hover:opacity-80"
            />
            <button className="absolute top-[434px] left-[50%] transform -translate-x-1/2 bg-[#ffffff] px-[50px] py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100 hover:scale-105">
              MEN
            </button>
          </div>

          {/* Women Image */}
          <div className="relative w-full sm:w-[240px] h-[500px] group">
            <Image
              src="/ed2.png"
              alt="women"
              width={240}
              height={500}
              className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-80"
            />
            <button className="absolute top-[434px] left-[50%] transform -translate-x-1/2 w-[136px] h-[48px] px-[48px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100 hover:scale-105">
              <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                WOMEN
              </h2>
            </button>
          </div>

          {/* Accessories and Kids */}
          <div className="w-full sm:w-[240px] h-auto flex flex-col gap-[30px] sm:h-[500px]">
            {/* Accessories Image */}
            <div className="relative w-full sm:w-[240px] h-[242px] group">
              <Image
                src="/ed3.png"
                alt="accessories"
                width={240}
                height={242}
                className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-80"
              />
              <button className="absolute top-[180px] left-[50%] transform -translate-x-1/2 w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                  ACCESSORIES
                </h2>
              </button>
            </div>

            {/* Kids Image */}
            <div className="relative w-full sm:w-[240px] h-[242px] group">
              <Image
                src="/ed4.png"
                alt="kids"
                width={240}
                height={242}
                className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-80"
              />
              <button className="absolute top-[180px] left-[50%] transform -translate-x-1/2 w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                  KIDS
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
