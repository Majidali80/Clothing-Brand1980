import Head from 'next/head';
import Greentopheader from '../Greentopheader/page';
import Navbar from '../Navbar/page';
import Footer from '../Footer/page';
import Cardtext from '../cards-text/page';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Shop for your favorite items" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Header Section */}
      <Greentopheader />

      {/* Navbar Section */}
      <div className="flex justify-center">
        <Navbar />
      </div>

      {/* Main Content Section */}
      <main className="w-[1340px] container mx-auto p-6 mt-16 bg-[#fafafa]">
        <header className="bg-[#fafafa] p-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold">Shop</h1>
            </div>
            <div className="text-sm text-gray-500 px-3 py-1">
              <nav>
                <span>Home</span> &gt; <span className="text-gray-800">Shop</span>
              </nav>
            </div>
          </div>
        </header>

        {/* Categories Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {['Clothes', 'Electronics', 'Shoes', 'Accessories', 'Home'].map((category, index) => (
            <div key={index} className="relative p-4 rounded shadow">
              <img
                src={`/${index + 1}.png`} // Ensure images are placed in the public directory
                alt={category}
                className="rounded"
              />
              <div className=" flex flex-col justify-center items-center text-transparent">
                <h2 className="opacity-50">{category}</h2>
                <p>{Math.floor(Math.random() * 10) + 1} Items</p>
              </div>
            </div>
          ))}
        </section>

        {/* Filter Section */}
        <section className="bg-[#ffffff] py-4 mt-8">
          <div className="max-w-[1050px] mx-auto flex items-center justify-between h-[98px] px-0 py-[24px] ml-28">
            <span className="w-[330px] text-gray-600">Showing all 12 results</span>
            <div className="flex justify-center space-x-4 mt-8">
              <span>View</span>
              <img
                src="/s1.png" // Replace with your grid icon image path
                alt="Grid view"
                className="w-18 h-12"
              />
            </div>

            {/* Sorting and Filter Section */}
            <div className="flex items-center justify-between space-x-2 ml-10">
              <div className="flex items-center space-x-2 ml-16">
                <select
                  id="sort"
                  className="border border-gray-300 rounded px-3 py-1 text-[#DDDDDD] w-[141px] h-[50px]"
                >
                  <option>Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>

              <div>
                <button className="bg-[#23A6F0] text-white w-[94px] h-[50px] text-[14px] font-[Montserrat] font-bold leading-[24px] tracking-[0.2px] text-center rounded hover:bg-blue-600">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="bg-[#ffffff] py-6">
          <div className="max-w-7xl mx-auto flex justify-center items-center">
            <div className="p-4">
              <img
                src="/pr2.png" // Replace with the actual image path
                alt="Shop Image"
                className="w-[1320px] h-[175px] left-[195px]" // Adjust the size or remove grayscale if needed
              />
            </div>
          </div>
        </section>

        {/* Product Cards Section */}
        <section className="w-[1240px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[0px] bg-[#ffffff]">
          {["/1a.png", "/2a.png", "/sh3.png", "/sh4.png",
            "/sh5.png", "/6a.png", "/sh6.png", "/8a.png",
            "/sh8.png", "/10a.png", "/11a.png", "/12a.png"
          ].map((pic, index) => (
            <div key={index} className="w-[240px] h-[615px] mx-auto bg-[#ffffff]">
              <div className="w-full h-full mt-16">
                <div className="w-[239px] h-[320px]">
                  <img src={pic} alt={`picture${index + 1}`} className="w-full h-full object-cover" />
                </div>
                <Cardtext />
              </div>
            </div>
          ))}
        </section>

        {/* Pagination Section */}
        <section className="flex justify-center items-center gap-4 mt-8 w-[313px] h-[74px] bg-white border-[1.35px] border-[#BDBDBD] rounded-[6.73px] shadow-[0px_2px_4px_0px_#0000001A] mx-auto">
          {/* First Button */}
          <button className="w-[84px] h-[74px] px-4 py-2 bg-[#F3F3F3] text-[#bdbdbd] border-[1px] border-[#BDBDBD] rounded-[6.73px] hover:bg-[#E0E0E0] font-semibold flex items-center justify-center transition-all duration-300 ease-in-out">
            First
          </button>

          {/* Page 1 Button */}
          <button className="w-[46px] h-[74px] bg-[#FFFFFF] text-[#23A6F0] border-[1px] border-[#E9E9E9] rounded-[6.73px] text-center font-semibold text-sm tracking-wide hover:bg-[#F3F3F3] transition-all duration-300 ease-in-out">
            1
          </button>

          {/* Page 2 Button */}
          <button className="w-[46px] h-[74px] bg-[#23A6F0] text-[#ffffff] border-[1px] border-[#E9E9E9] rounded-[6.73px] text-center font-semibold text-sm tracking-wide hover:bg-[#1E87C5] transition-all duration-300 ease-in-out">
            2
          </button>

          {/* Page 3 Button */}
          <button className="w-[46px] h-[74px] bg-[#FFFFFF] text-[#23A6F0] border-[1px] border-[#E9E9E9] rounded-[6.73px] text-center font-semibold text-sm tracking-wide hover:bg-[#F3F3F3] transition-all duration-300 ease-in-out">
            3
          </button>

          {/* Next Button */}
          <button className="w-[84px] h-[74px] px-4 py-2 bg-[#FFFFFF] text-[#23A6F0] border-[1px] border-[#BDBDBD] rounded-[6.73px] hover:bg-[#E0E0E0] font-semibold flex items-center justify-center transition-all duration-300 ease-in-out">
            Next
          </button>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
