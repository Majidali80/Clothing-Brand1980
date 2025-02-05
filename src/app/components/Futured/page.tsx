import React from "react";
import Image from "next/image"; // Import Image from next/image for optimized images

export default function Futurepost() {
  const posts = [
    {
      id: 1,
      head1:"Google ",
      head2:"Trending ",
      head3:"New ",
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: "/fp1.jpeg",
      date: "22 April 2021",
      comments: 10,
      tag: "NEW",
    },
    {
      id: 2,
      head1:"Google ",
      head2:"Trending ",
      head3:"New ",
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: "/fp2.jpeg",
      date: "22 April 2021",
      comments: 10,
      tag: "NEW",
    },
    {
      id: 3,
      head1:"Google ",
      head2:"Trending ",
      head3:"New ",
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: "/fp3.jpeg",
      date: "22 April 2021",
      comments: 10,
      tag: "NEW",
    },
  ];

  return (
    
    <div className="w-[1340px] bg-white py-10 ">
      {/* Section Header */}
      <div className=" text-center mb-8 flex flex-col items-center justify-center">
  <h6 className="w-[114px] h-[24px] text-[#23A6F0] font-Montserrat text-[14px] font-bold leading-[24px] mt-2">
    Practice Advice
  </h6>
  
  <h2 className="font-Montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px]">
    Featured Posts
  </h2>

  <p className="font-Montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] text-[#737373] mt-3">
    Problems trying to resolve the conflict between <br />the two major realms of Classical physics: 
    Newtonian mechanics
  </p>
</div>


      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 max-w-6xl mx-auto relative h-[600px]">

        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden group relative transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer">
            {/* Post Image */}
            <div className="relative">
              <Image
                src={post.img}
                alt={post.title}
                width={500} // Set an appropriate width
                height={250} // Set an appropriate height
                className="w-[348px] h-[300px] object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                {post.tag}
              </span>
            </div>

      {/* Post Content */}
    <div className="p-3 relative">
    <div className="flex space-x-6">
    <p className="font-Montserrat text-[12px] font-normal leading-[16px] tracking-[0.2px] text-left text-[#8EC2F2] ">
      {post.head1}</p>
    <p className="font-Montserrat text-[12px] font-normal leading-[16px] tracking-[0.2px] text-left">
      {post.head2}</p>
    <p className="font-Montserrat text-[12px] font-normal leading-[16px] tracking-[0.2px] text-left">
    {post.head3}</p>
    </div>
    <h4 className="w-[247px] font-Montserrat text-[20px] font-normal leading-[30px] tracking-[0.2px] text-left mt-2 text-[#252b42]">{post.title}</h4>
    <p className="w-[280px] font-Montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] text-left mt-2 text-[#737373]">{post.description}</p>
    <div className="flex justify-between items-center text-gray-500 text-xs mt-4">
        {/* Date with custom icon */}
        <div className="flex items-center space-x-1">
          <img src="/ic1.png" alt="Calendar Icon" className="w-4 h-4 text-gray-500" />
          <span>{post.date}</span>
        </div>

        {/* Comments with custom icon */}
        <div className="flex items-center space-x-1 mt-3">
          <img src="/ic2.png" alt="Chat Icon" className="w-4 h-4 text-gray-500" />
          <span>{post.comments} comments</span>
        </div>
      </div>

              <a
                href="#"
                className="font-Montserrat text-[#737373] text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left mt-4 inline-block "
              >
                
                Learn More 
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
