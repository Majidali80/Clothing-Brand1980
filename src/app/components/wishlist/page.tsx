"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

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

type WishlistProps = {
  wishlist: Product[];
  removeFromWishlist: (productId: string) => void;
};

const Wishlist = ({ wishlist, removeFromWishlist }: WishlistProps) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">Your Wishlist</h1>

        {wishlist.length === 0 ? (
          <p className="text-center">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wishlist.map((product) => (
              <div key={product._id} className="relative">
                <div className="border p-4 rounded">
                  <img src={product.productImage.asset.url} alt={product.title} className="w-full h-48 object-cover mb-4" />
                  <h2 className="font-semibold text-lg">{product.title}</h2>
                  <p>${product.price}</p>
                  <button
                    onClick={() => removeFromWishlist(product._id)}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-600"
                  >
                    <FaHeart size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;