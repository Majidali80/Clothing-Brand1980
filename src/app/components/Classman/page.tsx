import Image from "next/image";
import Link from 'next/link';

export default function Classman(){
    return(
        <div className="w-[1340px] rounded-[5px] relative bg-[#23856D] border">
            
             <div className="w-[1340px] h-[709px]">
                <div className="w-[1036px] h-[711px] absolute left-[209px] py-[112px] flex  gap-[80px]">
                    <div className="w-[1049px] h-[599px] flex  gap-[30px]">
                        <div className="w-[509px] h-[432px] pt-[60px] flex flex-col gap-[30px]">
                            <h4 className="w-[154px] h-[30px] font-Montserrat font-normal text-[20px] leading-[30px] text-[#FFFFFF]">SUMMER 2020</h4>
                            <h1 className="w-[509px] h-[160px] font-Montserrat font-bold text-[58px] leading-[80px] text-[#FFFFFF]">Vita Classic Product</h1>
                            <p className="w-[341px] h-[40px] font-Montserrat font-medium text-[14px] leading-[20px] text-[#FFFFFF]">We know how large objects will act, We know how are objects will act, We know</p>
                            <div className="w-[295px] h-[52px] flex gap-[34px]">
                                <h3 className="w-[77px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] text-[#FFFFFF]">$16.48</h3>
                                <Link href="/cart">
  <button className="w-[184px] h-[52px] rounded-[5px] px-[40px] bg-[#2DC071] py-[15px] flex gap-[10px]">
    <h1 className="w-[104px] h-[22px] font-Montserrat text-[14px] leading-[22px] flex text-[#FFFFFF] justify-center">ADD TO CART</h1>
  </button>
</Link>
                            </div>
                        </div>
                        <div className="">
  <Image src="/cl1.png" alt="picman" width={443} height={685} className="w-full h-full object-cover" />
</div>

                    </div>
                </div>
             </div>
            </div>
        
    )
}