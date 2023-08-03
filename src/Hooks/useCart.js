import { useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to calculate the total price of all cart items
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to add an item to the cart
  const addToCart = (item) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingCartItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return { cartItems, addToCart, removeItem, calculateTotalPrice };
};

export default useCart;
