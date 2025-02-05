"use client";
import { useState, useEffect } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts, furniture } from "@/sanity/lib/queries";
import ProductCard from "../components/ProductCard/page";
import Link from "next/link";
import { FaRegHeart, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/cartContext"; // Importing the cart context
import Footer from "../components/Footer/page";
import Navbar from "../components/Navbar/page";
import Category from "../components/Category/page";

type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: {
    asset: {
      url: string;
    };
  };
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
};

export default function Home() {
  const [wishlist, setWishlist] = useState<Product[]>([]); // Wishlist state
  const [products, setProducts] = useState<Product[]>([]);

  const [isCartOpen, setIsCartOpen] = useState(false); // Added isCartOpen state

  // Track which products are in the wishlist
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(new Set());

  // Cart state and context hook
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart(); // Use the context hook to get cart functions

  useEffect(() => {
    const fetchProducts = async () => {
      const products: Product[] = await sanityFetch({ query: allproducts });
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
    setWishlistIds((prev) => new Set(prev.add(product._id))); // Add product to the wishlist set
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(wishlist.filter((item) => item._id !== productId));
    setWishlistIds((prev) => {
      const updated = new Set(prev);
      updated.delete(productId);
      return updated;
    });
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleCartPopup = () => {
    setIsCartOpen(!isCartOpen); // Toggling the cart popup state
  };

  return (
    <>
      <Navbar />
      <Category />

      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-bold my-8 mt-5">BEST FURNITURE PRODUCTS</h1>
        <div className="text-center mb-8">
          <h2 className="font-Montserrat font-semibold text-[24px] leading-[32px]">ALL PRODUCTS</h2>
          <p className="w-full sm:w-[347px] h-auto font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] mx-auto">
            A Wide Range Of House Hold Furniture
          </p>
        </div>

        {/* Grid of Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product._id} className="relative">
              <ProductCard product={product} />
              {/* Wishlist Button */}
              <button
                onClick={() => 
                  wishlistIds.has(product._id) ? removeFromWishlist(product._id) : addToWishlist(product)
                }
                className="absolute top-10 left-10 text-red-500 hover:text-red-600 transition duration-300"
              >
                {wishlistIds.has(product._id) ? (
                  <FaHeart size={24} />
                ) : (
                  <FaRegHeart size={24} />
                )}
              </button>
              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product)} // Using the addToCart function from the context
                className="absolute top-10 right-10 text-blue-500 hover:text-blue-600 transition duration-300"
              >
                <FaShoppingCart size={24} />
              </button>
            </div>
          ))}
        </div>

        {/* Cart Popup */}
        {isCartOpen && (
          <div className="fixed top-0 right-0 bg-white shadow-lg w-96 h-full z-50 p-6 overflow-y-auto">
            <button
              onClick={toggleCartPopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              X
            </button>
            <h3 className="text-xl font-bold mb-4">Your Cart</h3>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {cart.map((product) => (
                  <div key={product._id} className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <img src={product.productImage.asset.url} alt={product.title} className="w-12 h-12 object-cover mr-4" />
                      <div>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button onClick={() => updateQuantity(product._id, "decrease")} className="px-2 py-1 bg-gray-300 rounded-full">-</button>
                      <span className="mx-2">{product.quantity}</span>
                      <button onClick={() => updateQuantity(product._id, "increase")} className="px-2 py-1 bg-gray-300 rounded-full">+</button>
                      <button onClick={() => removeFromCart(product._id)} className="text-red-500 ml-4">Remove</button>
                    </div>
                  </div>
                ))}
                <div className="text-right mt-4">
                  <Link href="/cart">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      View Cart
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cart Icon */}
        <button
          onClick={toggleCartPopup}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition duration-300"
          style={{
            top: `calc(50% + ${window.scrollY}px)`, // Adjust the scroll speed and limit movement
          }}
        >
          <FaShoppingCart size={24} />
          {totalItemsInCart > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItemsInCart}
            </span>
          )}
        </button>
      </div>

      <Footer />
    </>
  );
}
