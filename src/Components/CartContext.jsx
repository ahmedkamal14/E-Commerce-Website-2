import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Add this line to import PropTypes

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  // Add props validation
  CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
