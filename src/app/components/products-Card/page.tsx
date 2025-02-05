'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the CardText component
const CardText = dynamic(() => import('../cards-text/page'), { ssr: false });

export default function ProductCard() {
  // Dynamic data for products
  const products = [
    { id: 1, image: '/pc0.png', title: 'Graphic Design', description: 'English Department' },
    { id: 2, image: '/pc1.png', title: 'Graphic Design', description: 'English Department' },
    { id: 3, image: '/pc2.png', title: 'Graphic Design', description: 'English Department' },
    { id: 4, image: '/pc3.png', title: 'Graphic Design', description: 'English Department' },
    { id: 5, image: '/pc4.png', title: 'Graphic Design', description: 'English Department' },
    { id: 6, image: '/pc5.png', title: 'Graphic Design', description: 'English Department' },
    { id: 7, image: '/pc6.png', title: 'Graphic Design', description: 'English Department' },
    { id: 8, image: '/pc7.png', title: 'Graphic Design', description: 'English Department' },
  ];

  return (
    <div className="w-full lg:w-[1340px] h-auto flex justify-center bg-[#ffffff]">
      <div className="w-full sm:w-[1124px] py-[80px] flex flex-col gap-[80px]">
        {/* Text Section */}
        <div className="w-full flex flex-col mt-2 gap-[10px] justify-center items-center">
          <h4 className="font-Montserrat font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[12px] sm:text-[14px] md:text-[14px] lg:text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {/* Map through products data */}
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[240px] h-[615px] mx-auto group relative transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="w-full h-full">
                  <div className="w-full h-[427px]">
                    <img
                      src={product.image}
                      alt={`picture${product.id}`}
                      className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:opacity-80"
                    />
                  </div>
                  {/* Dynamically imported CardText component */}
                  <CardText title={product.title} description={product.description} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
