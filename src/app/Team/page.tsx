

import Image from "next/image";
import Navbar2 from "../components/Navbar2/page";
import Footer from "../components/Footer/page";

interface TeamCardProps {
  image: string;       // Image path is a string
  name: string;        // Name of the person
  role: string;        // Role of the person
  facebook: string;    // Facebook icon path
  instagram: string;   // Instagram icon path
  twitter: string;     // Twitter icon path
}

const TeamCard = ({ image, name, role, facebook, instagram, twitter }: TeamCardProps) => (
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden mt-5">
    <div className="w-full h-full relative">
      <Image src={image} alt={name} className="object-cover w-full h-full" width={230} height={230} />
    </div>
    <div className="p-6 text-center">
      <h5 className="text-xl font-bold text-[#252B42]">{name}</h5>
      <h6 className="text-sm font-semibold text-[#737373]">{role}</h6>
      <div className="flex justify-center gap-4 mt-4">
        <Image src={facebook} alt="Facebook" className="w-6 h-6" width={24} height={24} />
        <Image src={instagram} alt="Instagram" className="w-6 h-6" width={24} height={24} />
        <Image src={twitter} alt="Twitter" className="w-6 h-6" width={24} height={24} />
      </div>
    </div>
  </div>
);



export default function Home() {
    return (
        <div>
            <Navbar2 />
       
        <div className="w-[1240px] h-[384px] ml-10">
        {/* <!-- Child div --> */}
        <div className="w-[788px] h-[180px] ml-64 mt-20">
          {/* <!-- h5 element --> */}
          <h5 className="w-[111px] h-[24px] font-Montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center ml-80 text-[#737373]">
            WHAT WE DO
          </h5>
          
          {/* <!-- h1 element --> */}
          <h1 className="w-[788px] h-[80px] font-Montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center text-[#252B42]">
            Innovation tailored for you
          </h1>
      
          {/* <- div3 element -> */}
          <div className="w-auto h-[44px] ">
          <div className="text-sm text-gray-500 flex items-center ml-80">
              <nav >
                <span>Home</span> &gt; <span className="text-gray-800">Shop</span>
              </nav>
            </div>
          </div>
          </div>
          <div className="flex justify-center w-[1100px] h-[530px] gap-[15px] bg-white ml-20">
  {/* Left Box */}
  <div className="w-[700px] h-[530px] rounded-lg overflow-hidden">
    <Image src="/t01.png" alt="Large Image" width={700} height={530} objectFit="contain" />
  </div>

  {/* Right Boxes Container */}
  <div className="flex flex-wrap w-[520px] gap-[10px]">
    {/* First row of two boxes */}
    <div className="flex w-full gap-[10px]">
      <div className="w-[361] h-[260px] rounded-lg overflow-hidden">
        <Image 
          src="/t02.png" 
          alt="Image 1" 
          width={361} 
          height={260} 
          objectFit="contain" 
        />
      </div>
      <div className="w-[361] h-[260px] rounded-lg overflow-hidden">
        <Image 
          src="/t03.png" 
          alt="Image 2" 
          width={361} 
          height={260} 
          objectFit="contain" 
        />
      </div>
    </div>

    {/* Second row of two boxes */}
    <div className="flex w-full gap-[10px] pt-1 ">
      <div className="w-[361] h-[260px] rounded-lg overflow-hidden">
        <Image 
          src="/t04.png" 
          alt="Image 3" 
          width={361} 
          height={260} 
          objectFit="contain" 
        />
      </div>
      <div className="w-[361] h-[260px] rounded-lg overflow-hidden">
        <Image 
          src="/t05.png" 
          alt="Image 4" 
          width={361} 
          height={260} 
          objectFit="contain" 
        />
      </div>
    </div>
  </div>
</div>

  
   {/* Team Section */}
   <section className="relative bg-white py-10">
          <div className="container mx-auto flex flex-col items-center gap-16 px-4">
            {/* Heading */}
            <div className="text-center max-w-lg">
              <h2 className="text-4xl font-bold text-[#252B42]">Meet Our Team</h2>
              <p className="text-base text-[#737373] mt-4">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 group-hover:opacity-25 transition-all duration-300">
              <TeamCard
                image="/tm1.jpg"
                name="Username"
                role="Professional"
                facebook="/fbft.png"
                instagram="/insft.png"
                twitter="/twft.png"
              />
              <TeamCard
                image="/tm2.jpg"
                name="Username"
                role="Professional"
                facebook="/fbft.png"
                instagram="/insft.png"
                twitter="/twft.png"
              />
              <TeamCard
                image="/tm3.jpg"
                name="Username"
                role="Professional"
                facebook="/fbft.png"
                instagram="/insft.png"
                twitter="/twft.png"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <TeamCard
                image="/tm4.jpg"
                name="Username"
                role="Professional"
                facebook="/fbft.png"
                instagram="/insft.png"
                twitter="/twft.png"
              />
              <TeamCard
                image="/tm5.jpg"
                name="Username"
                role="Professional"
                facebook="/fbft.png"
                instagram="/insft.png"
                twitter="/twft.png"
              />
              <TeamCard
                image="/tm6.jpg"
                name="Username"
                role="Professional"
                facebook="/fbft.png"
                instagram="/insft.png"
                twitter="/twft.png"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <TeamCard
                image="/tm7.jpg"
               name="Username"
                role="Professional"
                facebook="/fbft.png"
                instagram="/insft.png"
                twitter="/twft.png"
              />
              <TeamCard
                image="/tm8.jpg"
                name="Username"
                role="Professional"
                facebook="/fbft.png"
                instagram="/insft.png"
                twitter="/twft.png"
              />
              <TeamCard
                image="/tm9.jpg"
                name="Username"
                role="Professional"
                facebook="/fbft.png"
                instagram="/insft.png"
                twitter="/twft.png"
              />
            </div>
          </div>
        </section>

<div className="w-[1100px] h-[442px] bg-[#ffffff] flex flex-col justify-center items-center ml-10">
  <div className="w-[547px] h-[50px]">
<h2 className=" gap-0 text-[#252B42] font-Montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center ">
  Start your 14 days free trial
</h2></div>
<div className="mt-5 w-[411px] h-[40px] gap-0 text-[#737373] font-Montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center">
  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
</div>

<button className="w-[186px] h-[52px] px-[40px] py-[15px] bg-[#23A6F0] text-[#FFFFFF] rounded-tl-[5px] mt-5">
  Try it free now
</button>

<div className="w-[242px] h-[50px] pt-[10px] flex justify-between items-center mt-5 ">
  {/* <!-- Social Icons --> */}
   <img src="/pr3.png" alt="Twitter" className="w-[30px] h-[30px]" />
  <img src="/pr4.png" alt="Facebook" className="w-[30px] h-[30px]" />
  <img src="/pr5.png" alt="Instagram" className="w-[30px] h-[30px]" />
  <img src="/pr6.png" alt="LinkedIn" className="w-[30px] h-[30px]" />
</div>

</div>
  <Footer />

  </div>
      </div>
    

      
    )
  }

