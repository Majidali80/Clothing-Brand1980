"use client"
import { useCart } from "../../context/cartContext"; // Import CartContext
import { useEffect, useState } from "react";
import { sanityFetch } from "@/sanity/lib/fetch"; // Custom fetch function
import { productQuery } from "@/sanity/lib/queries"; // Query for a single product by ID
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";
import Image from "next/image";

// Define the Product type
type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: {
    asset: {
      url: string;
    };
  } | null; // Handle potential null value for productImage
  tags: string[]; // Available colors/features
  stockStatus: "In Stock" | "Out of Stock";
};

// Define the CartItem type (structure of an item in the cart)
type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  productImage: string | null;
};

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  // Safely destructure the cart context
  const { addToCart } = useCart() || {}; // Ensure that useCart is not null

  // Fetch the product data using `useEffect`
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await sanityFetch<Product>({
          query: productQuery,
          params: { id: params.id },
        });

        if (!fetchedProduct) {
          setError("Product not found");
        } else {
          setProduct(fetchedProduct);
        }
      } catch (err) {
        setError("An error occurred while fetching product data.");
      }
    };

    fetchProduct();
  }, [params.id]);

  if (error) {
    return (
      <div className="text-center my-8">
        <h2 className="text-xl font-bold">{error}</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center my-8">
        <h2 className="text-xl font-bold">Loading...</h2>
      </div>
    );
  }

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const handleAddToCart = () => {
    if (addToCart && product) { // Check if addToCart is defined and product exists
      const newCartItem: CartItem = {
        productId: product._id,
        name: product.title,
        price: product.price,
        quantity,
        productImage: product.productImage?.asset?.url || null,
      };

      addToCart(newCartItem); // Call the addToCart function
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-12 px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 w-full">
            {product.productImage?.asset?.url ? (
              <Image
                src={product.productImage.asset.url}
                alt={product.title}
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-contain"
                quality={80}
              />
            ) : (
              <div className="text-center text-gray-500">No image available</div>
            )}
          </div>
          <div className="lg:w-1/2 w-full">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="mb-6 flex items-center gap-4">
              <p className="text-2xl font-bold text-red-500">
                USD {(product.price * quantity).toLocaleString()}
              </p>
              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  onClick={() => handleQuantityChange("decrement")}
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>
            </div>
            <p className="text-sm mb-6">
              {product.stockStatus === "Out of Stock" ? (
                <span className="text-red-500 font-medium">Out of Stock</span>
              ) : (
                <span className="text-green-500 font-semibold">In Stock</span>
              )}
            </p>
            <div className="flex gap-4">
              <button
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                Buy Now
              </button>
              <button className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
