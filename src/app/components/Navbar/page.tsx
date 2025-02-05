"use client";

import Link from "next/link";
import { useCart } from "../../context/cartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { IoCallOutline, IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { CiHeart, CiSearch, CiYoutube, CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram, FaAngleDown } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BiMenuAltRight } from "react-icons/bi";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { cart } = useCart() || { cart: [] }; // Fallback in case useCart returns null
  const [cartNumber, setCartNumber] = useState(0);
  const [wishlistNumber, setWishlistNumber] = useState(0); // State for wishlist count

  // Fetch cart and wishlist data from localStorage (only on the client side)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartNumber(storedCart.length);

      const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlistNumber(storedWishlist.length); // Get wishlist items from localStorage
    }
  }, [cart]);

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleCartPopup = () => {
    // Your cart popup toggle functionality here
  };

  return (
    <header className="max-w-screen-2xl mx-auto font-sans">
      {/* Top Section Header */}
      <div className="hidden lg:flex justify-between items-center bg-[#252B42] text-white py-4 px-5">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-semibold">
            <IoCallOutline size={20} />
            <p>(225) 555-0118</p>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <TfiEmail size={20} />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>
        <div className="font-bold text-center">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center gap-4 font-bold">
          <p>Follow Us:</p>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <CiYoutube size={20} />
          </Link>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <CiFacebook size={20} />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <CiTwitter size={20} />
          </Link>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <p className="text-3xl font-bold">Bandage</p>

          {/* Navigation Links */}
          <nav className="hidden sm:flex items-center gap-6 text-[#737373] font-bold">
            <Link href={"/"}>
              <li className="list-none hover:text-[#23A6F0]">Home</li>
            </Link>

            {/* Shop Dropdown */}
            <li className="list-none flex items-center relative group">
              <Link href="#">
                <p className="flex items-center gap-1">
                  Shop <FaAngleDown className="ml-1" />
                </p>
              </Link>

              {/* Dropdown Menu */}
              <ul className="absolute left-0 hidden group-hover:block top-full mt-2 bg-white shadow-lg rounded-md w-48 z-50">
                <Link href="/category/men">
                  <li className="p-3 hover:bg-gray-100 hover:text-[#23A6F0] cursor-pointer">Men</li>
                </Link>
                <Link href="/category/women">
                  <li className="p-3 hover:bg-gray-100 hover:text-[#23A6F0] cursor-pointer">Women</li>
                </Link>
                <Link href="/category/accessories">
                  <li className="p-3 hover:bg-gray-100 hover:text-[#23A6F0] cursor-pointer">Accessories</li>
                </Link>
                <Link href="/category/kids">
                  <li className="p-3 hover:bg-gray-100 hover:text-[#23A6F0] cursor-pointer">Kids</li>
                </Link>
              </ul>
            </li>

            <Link href={"/About"}>
              <li className="list-none hover:text-[#23A6F0]">About</li>
            </Link>

            <Link href={"/Team"}>
              <li className="list-none hover:text-[#23A6F0]">Blog</li>
            </Link>
            
            <Link href={"/product"}>
              <li className="list-none hover:text-[#23A6F0]">Product</li>
            </Link>

            <Link href={"/contact"}>
              <li className="list-none hover:text-[#23A6F0]">Contact</li>
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-3 text-[#23A6F0] font-bold">
              <IoPersonOutline size={20} />
              <p>Login / Register</p>
            </div>

            {/* Cart Icon with Badge */}
            <div className="relative cursor-pointer" onClick={toggleCartPopup}>
              <Link href="/cart">
                <IoCartOutline size={30} color="#23A6F0" />
                <span className="absolute top-0 right-0 w-[18px] h-[18px] rounded-full bg-[#23A6F0] flex justify-center items-center text-[12px] text-white">
                  {totalItemsInCart || 0}
                </span>
              </Link>
            </div>

            {/* Wishlist Icon with Badge */}
            <div className="relative cursor-pointer">
              <Link href="/wishlist">
                <CiHeart size={30} color="#23A6F0" />
                <span className="absolute top-0 right-0 w-[18px] h-[18px] rounded-full bg-[#23A6F0] flex justify-center items-center text-[12px] text-white">
                  {wishlistNumber || 0}
                </span>
              </Link>
            </div>

            <Sheet>
              <SheetTrigger className="sm:hidden">
                <BiMenuAltRight size={30} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-lg font-semibold text-[#252B42] mb-4 mt-5">
                    Navigation Menu
                  </SheetTitle>
                  <nav className="text-[#737373] font-bold text-sm">
                    <Link href={"/"}>
                      <li className="list-none mb-3 hover:text-[#23A6F0]">Home</li>
                    </Link>
                    <Link href={"/shop"}>
                      <li className="list-none mb-3 hover:text-[#23A6F0]">Shop</li>
                    </Link>
                    <Link href={"/product"}>
                      <li className="list-none hover:text-[#23A6F0]">Product</li>
                    </Link>
                    <Link href={"/about"}>
                      <li className="list-none mb-3 hover:text-[#23A6F0]">About</li>
                    </Link>
                    <Link href={"/contact"}>
                      <li className="list-none hover:text-[#23A6F0]">Contact</li>
                    </Link>
                  </nav>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
