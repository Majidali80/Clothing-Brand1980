import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white relative w-[1300px] ">
      {/* Top Section */}
      <section className="bg-[#fafafa] py-10">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight ml-20">
              Bandage
            </h1>
          </div>
          <div className="flex gap-6 mr-36">
            {/* Direct image URLs for social icons */}
            <img
              src="/fbft.png" // Replace with the correct path to your image
              alt="Facebook"
              className="w-6 h-6"
            />
            <img
              src="/insft.png" // Replace with the correct path to your image
              alt="Instagram"
              className="w-6 h-6"
            />
            <img
              src="/twft.png" // Replace with the correct path to your image
              alt="Twitter"
              className="w-6 h-6"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#e6e6e6]" />

      {/* Main Footer Content */}
      <section className="bg-white ml-16 ">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 ml-5 mt-4">
    {/* Company Info */}
    <div className="mt-1">
      <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
      <nav className="flex flex-col gap-1 mt-2">
        <a href="#" className="text-[#727272] text-sm font-bold">
          About Us
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Careers
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          We Are Hiring
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Blog
        </a>
      </nav>
    </div>

    {/* Legal */}
    <div className="mt-1">
      <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
      <nav className="flex flex-col gap-1 mt-2">
        <a href="#" className="text-[#727272] text-sm font-bold">
          About Us
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Careers
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          We Are Hiring
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Blog
        </a>
      </nav>
    </div>

    {/* Features */}
    <div className="mt-1">
      <h2 className="text-[#252b42] text-base font-bold">Features</h2>
      <nav className="flex flex-col gap-1 mt-2">
        <a href="#" className="text-[#727272] text-sm font-bold">
          Business Marketing
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          User Analytics
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Live Chat
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Unlimited Support
        </a>
      </nav>
    </div>

    {/* Resources */}
    <div className="mt-1">
      <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
      <nav className="flex flex-col gap-1 mt-2">
        <a href="#" className="text-[#727272] text-sm font-bold">
          iOS & Android
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Watch a Demo
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Customers
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          API
        </a>
      </nav>
    </div>

    {/* Get in Touch */}
    <div className="mt-1">
      <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
      <div className="mt-2">
        <div className="relative mb-3">
          <input
            type="email"
            className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
            placeholder="Your Email"
          />
          <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
            Subscribe
          </button>
        </div>
        <p className="text-[#727272] text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Bottom Section */}
      <section className="bg-[#FAFAFA] py-4 mt-5">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center ml-20 ">
          <p className="text-[#727272] text-sm font-bold">
            Made with love by Finland. All rights reserved.<a href="https://www.linkedin.com/in/majid-ali-b44661230/" className="text-blue-500">Majid Ali</a>
          </p>
        </div>
      </section>
    </footer>
  );
}
