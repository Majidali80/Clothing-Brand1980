"use client"
import { useEffect, useState } from "react";
import { sanityFetch } from "@/sanity/lib/fetch"; // Custom fetch function
import { productQuery } from "@/sanity/lib/queries"; // Query for fetching related products
import Image from "next/image";
import { Tag } from "styled-components/dist/sheet/types";

type RelatedProduct = {
  _id: string;
  title: string;
  price: number;
  productImage: {
    asset: {
      url: string;
    };
  } | null;
  tags: string[];
};

type ProductDetailProps = {
  currentProductTags: string[];
};

const RelatedProducts = ({ currentProductTags }: ProductDetailProps) => {
  const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const fetchedProducts = await sanityFetch<tags>({
          query: productQuery,
          params: { tags: currentProductTags },
        });

        setRelatedProducts(fetchedProducts || []);
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (currentProductTags.length > 0) {
      fetchRelatedProducts();
    }
  }, [currentProductTags]);

  if (loading) {
    return <div>Loading related products...</div>;
  }

  return (
    <div className="my-12 px-6">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product) => (
            <div key={product._id} className="border rounded-lg shadow-lg p-4">
              <Image
                src={product.productImage?.asset?.url || ""}
                alt={product.title}
                width={300}
                height={300}
                className="rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-xl font-bold text-red-500">
                USD {product.price.toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <div>No related products found.</div>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
