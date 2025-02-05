
"use client";
import Link from "next/link";
import Footer from "../components/Footer/page";
import { useState } from "react";

function Pricing() {

  const [isMonthly, setIsMonthly] = useState(true);


  return (
    <div className="w-[1340px] h-[1245px] bg-[#fafafa]">
      <div className="w-[1050px] h-[1600px] ">
        {/* Content goes here */}
        {/* Main section with content */}
        <div className="w-[870px] h-[280px] absolute top-[104px] py-[50px] ml-72 bg-white">
          {/* Logo and Navigation */}
          <div className="w-[1100px] h-[58px] lg:w-[1000px] lg:h-[10px] lg:px-[17px] lg:pl-[38px] flex items-center">
            {/* Logo */}
            <div className="flex items-center">
              <h3 className="font-Montserrat font-semibold leading-[32px] text-[24px] text-[#252B42] hidden lg:block">
                Bandage
              </h3>
            </div>
{/* Made By Majid Ali */}
            {/* Navigation links */}
            <div className="hidden lg:flex lg:flex-grow lg:justify items-center">
              <ul className="font-Montserrat font-semibold text-[14px] text-[#737373] gap-[20px] leading-[24px] flex ml-5">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Shop">Product</Link></li>
                <li><Link href="/price">Pricing</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>

              {/* Login / Register section */}
              <div className="flex items-center gap-[20px]">
                <div className="w-[166px] h-[54px] p-[15px] flex items-center gap-[10px] mr-3 cursor-pointer">
                  <div className="w-[12px] h-[12px] mt-[6px]"></div>
                  <span className="font-Montserrat font-semibold text-[14px] text-[#23A6F0]">
                    Login
                  </span>
                </div>

                {/* Become a Member button */}
                <button className="bg-[#23A6F0] text-white font-semibold text-[14px] py-2 px-6 rounded">
                  Become a Member
                </button>
              </div>
            </div>
          </div>
{/* Made By Majid Ali */}
          {/* Child div for Pricing */}
          <div className="w-[788px] h-[180px] px-10 py-16">
            {/* Heading for Pricing */}
            <h5 className="w-[111px] h-[24px] font-Montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center ml-80 text-[#737373]">
              PRICING
            </h5>

            {/* Main title */}
            <h1 className="w-[788px] h-[80px] font-Montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center text-[#252B42]">
              Simple Pricing
            </h1>

            {/* Breadcrumb navigation */}
            <div className="w-auto h-[44px]">
              <div className="text-sm text-gray-500 flex items-center ml-80">
                <nav>
                  <span>Home</span> &gt; <span className="text-gray-800">Pricing</span>
                </nav>
              </div>
            </div>

            <div className="w-[625px] h-[100px] flex justify-center mt-10">
              <h2 className="font-Montserrat text-[40px] font-bold ml-24 leading-[50px] text-[#252B42]">
                Pricing
              </h2>
            </div>

            <p className="w-[400px] h-[40px] ml-44 text-[14px] font-normal text-center text-[#737373]">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
            </p>

            {/* Toggle for Monthly/Yearly */}
            <div className="flex items-center justify-center mt-10 gap-4">
            <h3 className="text-[#252B42] font-bold text-[16px]">Monthly</h3>
            <div
              className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer border border-[#23A6F0]`}
              onClick={() => setIsMonthly(!isMonthly)}
            >
              <div
                className={`w-5 h-5 rounded-full shadow-md transform transition-transform ${isMonthly ? "translate-x-7 bg-[#2DC071]" : "bg-[#D0D0D0]"
                  }`}
              ></div>

            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-[#252B42] font-bold text-[16px]">Yearly</h3>
              <div className="bg-[#B2E3FF] text-[#23A6F0] text-[14px] font-bold px-4 py-3 rounded-full">
                Save 25%
              </div>
            </div>
          </div>

{/* Made By Majid Ali */}
            {/* Pricing Cards */}
            <div className="grid gap-8 md:grid-cols-3 mt-20">
              {/* Free Plan */}
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <h3 className="text-[24px] font-[700] leading-[32px] tracking-[0.1px] text-[#252B42] text-center">FREE</h3>
                <p className="mt-2 text-gray-600">Organize across all apps by hand</p>

                <div className="flex items-center space-x-2 ml-5 mt-8">
                  {/* Left side: Number */}
                  <div>
                    <p className="text-4xl font-bold text-[#8EC2F2] leading-tight">0</p>
                  </div>

                  {/* Right side: $ and Per Month */}
                  <div className="flex flex-col">
                    {/* Dollar Sign */}
                    <span className="text-xl font-bold text-[#8EC2F2] leading-none text-left">$</span>
                    {/* Per Month */}
                    <span className="text-sm font-bold text-[#8EC2F2]">Per Month</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="text-green-500 font-medium">✔ Unlimited product updates</li>
                </ul>
              </div>

              {/* Standard Plan */}
              <div className="p-6 bg-[#252B42] text-white rounded-lg shadow-md text-center">
                <h3 className="text-[24px] font-[700] leading-[32px] tracking-[0.1px] text-[#ffffff] text-center">STANDARD</h3>
                <p className="mt-2 text-white">Organize across all apps by hand</p>

                <div className="flex items-center space-x-2 ml-5 mt-8">
                  {/* Left side: Number */}
                  <div>
                    <p className="text-3xl font-bold text-[#8EC2F2] leading-tight">9.99</p>
                  </div>

                  {/* Right side: $ and Per Month */}
                  <div className="flex flex-col">
                    {/* Dollar Sign */}
                    <span className="text-xl font-bold text-[#8EC2F2] leading-none text-left">$</span>
                    {/* Per Month */}
                    <span className="text-sm font-medium text-[#8EC2F2]">Per Month</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="text-green-500 font-medium">✔ Unlimited product updates</li>
                </ul>
              </div>

              {/* Premium Plan */}
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <h3 className="text-[24px] font-[700] leading-[32px] tracking-[0.1px] text-[#252B42] text-center">PREMIUM</h3>
                <p className="mt-2 text-gray-600">Organize across all apps by hand</p>

                <div className="flex items-center space-x-2 ml-5 mt-8">
                  {/* Left side: Number */}
                  <div>
                    <p className="text-3xl font-medium text-[#8EC2F2] leading-tight">19.99</p>
                  </div>

                  {/* Right side: $ and Per Month */}
                  <div className="flex flex-col">
                    {/* Dollar Sign */}
                    <span className="text-xl font-bold text-[#8EC2F2] leading-none text-left">$</span>
                    {/* Per Month */}
                    <span className="text-sm font-medium text-[#8EC2F2]">Per Month</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="text-green-500 font-medium">✔ Unlimited product updates</li>
                </ul>
              </div>
            </div>

            <div className="text-center w-[700px]">
              <h4 className="text-[20px] font-normal leading-[30px] tracking-[0.2px] text-[#252B42] text-center">
                Trusted By Over 4000 Big Companies
              </h4>

              <section className=" py-6">
                <div className="max-w-6xl mx-auto flex justify-center items-center">
                  <div className="">
                    <img
                      src="/pr2.png" // Replace with the actual image path
                      alt="Shop Image"
                      className="w-[1300px] h-[175px]" // Adjust the size or remove grayscale if needed
                    />
                  </div>
                </div>
{/* Made By Majid Ali */}
                <div className="bg-white mt-10">
                  {/* Pricing FAQs Header */}
                  <div className="bg-[#ffffff]">
                    <h2 className="text-4xl font-bold text-gray-800 leading-[50px] tracking-[0.2px] custom-heading text-center">
                      Pricing FAQs
                    </h2>

                    <h4 className="text-lg text-gray-500 font-montserrat text-center leading-7 tracking-wide">
                      Problems trying to resolve the conflict between <br />the two major realms of Classical physics
                    </h4>

                    {/* FAQ Items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-5 ">
                      {[...Array(6)].map((_, index) => (
                        <div key={index} className="flex justify-end bg-white w-[400px] h-auto mr-20">
                          <div className="text-blue-500 ">   
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-gray-800 flex justify-start">The quick fox jumps over the lazy dog</h3>
                            <p className="text-gray-600 text-center mt-2">
                              Met minim Mollie non deserunt Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent<br /> nostrum met.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Footer Section */}
                  <div className="text-center mt-28">
                    <p className="text-gray-600 text-lg">Haven’t got your answer? Contact our support</p>
                  </div>
                </div>
              </section>
            </div>
            <div className="w-[600px] h-[442px] bg-[#ffffff] flex flex-col justify-center items-center mt-44 ml-10">
              <div className="w-[547px] h-[50px]">
                <h2 className="gap-0 text-[#252B42] font-Montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center">
                  Start your 14 days free trial
                </h2>
              </div>
              <div className="mt-5 w-[411px] h-[40px] gap-0 text-[#737373] font-Montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
              </div>

              <button className="w-[186px] h-[52px] px-[40px] py-[15px] bg-[#23A6F0] text-[#FFFFFF] rounded-tl-[5px] mt-5">
                Try it free now
              </button>
                        {/* Made By Majid Ali */}
              <div className="w-[242px] h-[50px] pt-[10px] flex justify-between items-center mt-5  bg-white mb-32">
                {/* Social Icons */}
                <img src="/pr3.png" alt="Twitter" className="w-[30px] h-[30px]" />
                <img src="/pr4.png" alt="Facebook" className="w-[30px] h-[30px]" />
                <img src="/pr5.png" alt="Instagram" className="w-[30px] h-[30px]" />
                <img src="/pr6.png" alt="LinkedIn" className="w-[30px] h-[30px]" />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pricing