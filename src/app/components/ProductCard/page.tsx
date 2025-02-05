

import Link from "next/link";

interface ProductCardProps  {
  product: {
    _id: string;
    title: string;
    price: number;
    productImage: {
      asset: {
        url: string;
      };
    };
  };
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all">
      <Link href={`/product/${product._id}`}>
        <div className="relative w-full h-60 mb-4">
          <img
            src={product.productImage.asset.url}
            alt={product.title}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-sm">${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
