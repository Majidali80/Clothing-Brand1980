import { useContext } from "react";
import  {cartContext } from '../context/cartContext';

// Custom hook for accessing cart context
export const useCart = () => {
  // Retrieve the context value from CartContext
  const context = useContext(cartContext);

  // Throw an error if used outside of the CartProvider
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  // Return the context value
  return context;
};
