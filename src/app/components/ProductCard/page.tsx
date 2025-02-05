import React from "react";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default ProductCard;
