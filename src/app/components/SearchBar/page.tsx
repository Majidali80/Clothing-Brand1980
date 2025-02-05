"use client";

import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"; // Import icon for search

// Sanity Client
import { sanityFetch } from "@/sanity/lib/fetch"; // Sanity client for fetching data

// Define types for products (or use your own schema)
type Product = {
  _id: string;
  title: string;
  tags: string[];
  price: number;
  description: string;
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query
  const [products, setProducts] = useState<Product[]>([]); // State for all products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // State for filtered products

  useEffect(() => {
    // Fetch products from Sanity API
    const fetchProducts = async () => {
      const query = '*[_type == "product"]'; // Adjust according to your schema
      try {
        const data = await sanityFetch.fetch(query);
        setProducts(data);
        setFilteredProducts(data); // Initialize with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter products by title or tags
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Search Input Section */}
      <div className="relative w-full sm:w-80">
        <input
          type="text"
          placeholder="Search Products"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute top-3 right-3 text-gray-400" />
      </div>

      {/* Filtered Products Display */}
      <div className="w-full space-y-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-lg font-bold">${product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
