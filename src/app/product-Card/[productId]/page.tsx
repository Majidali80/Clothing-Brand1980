'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductDetailPage() {
  const router = useRouter();
  const { productId } = router.query;

  // Simulated product data
  const [product, setProduct] = useState<any>(null);

  // Fetch the product details dynamically (could be replaced by an API call)
  useEffect(() => {
    const productData = [
      { id: 1, image: '/pc0.png', title: 'Graphic Design', description: 'Detailed design description', price: '$100', sizes: ['S', 'M', 'L'], colors: ['Red', 'Blue', 'Black'] },
      { id: 2, image: '/pc1.png', title: 'Web Development', description: 'Comprehensive web development course', price: '$120', sizes: ['M', 'L', 'XL'], colors: ['Green', 'White'] },
      { id: 3, image: '/pc2.png', title: 'Web Development', description: 'Comprehensive web development course', price: '$120', sizes: ['M', 'L', 'XL'], colors: ['Green', 'White'] },
      { id: 4, image: '/pc3.png', title: 'Web Development', description: 'Comprehensive web development course', price: '$120', sizes: ['M', 'L', 'XL'], colors: ['Green', 'White'] },
      { id: 5, image: '/pc4.png', title: 'Web Development', description: 'Comprehensive web development course', price: '$120', sizes: ['M', 'L', 'XL'], colors: ['Green', 'White'] },
      { id: 6, image: '/pc5.png', title: 'Web Development', description: 'Comprehensive web development course', price: '$120', sizes: ['M', 'L', 'XL'], colors: ['Green', 'White'] },
      { id: 7, image: '/pc6.png', title: 'Web Development', description: 'Comprehensive web development course', price: '$120', sizes: ['M', 'L', 'XL'], colors: ['Green', 'White'] },
      { id: 8, image: '/pc7.png', title: 'Web Development', description: 'Comprehensive web development course', price: '$120', sizes: ['M', 'L', 'XL'], colors: ['Green', 'White'] },

    ];

    if (productId) {
      const foundProduct = productData.find((item) => item.id === parseInt(productId as string, 10));
      setProduct(foundProduct);
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <img src={product.image} alt={product.title} className="w-full rounded-lg shadow-lg" />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600">{product.price}</p>

          {/* Available Sizes */}
          <div>
            <h3 className="text-lg font-medium text-gray-700">Available Sizes:</h3>
            <ul className="flex gap-2">
              {product.sizes.map((size :any) => (
                <li key={size} className="px-3 py-1 border rounded-md text-gray-700">{size}</li>
              ))}
            </ul>
          </div>

          {/* Available Colors */}
          <div>
            <h3 className="text-lg font-medium text-gray-700">Available Colors:</h3>
            <ul className="flex gap-2">
              {product.colors.map((color:any) => (
                <li key={color} className={`w-8 h-8 rounded-full`} style={{ backgroundColor: color.toLowerCase() }}></li>
              ))}
            </ul>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
