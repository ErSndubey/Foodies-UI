import React from "react";
import useCart from "../Hooks/useCart";
import { ITEM_IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

const CartPage = () => {
  // Sample data for cart items
  const { cartItems, addToCart, removeItem, calculateTotalPrice } = useCart();

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center mb-4 border-b border-gray-200 pb-2"
              >
                <img
                  src={ITEM_IMG_CDN_URL + item?.imageId}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded-l"
                      onClick={() => {
                        if (item.quantity > 1) {
                          addToCart(item);
                        } else {
                          removeItem(item.id);
                        }
                      }}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded-r"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-800 font-bold">
                    ₹{item.price / 100 * item.quantity}
                  </p>
                </div>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-lg font-bold">Total: ₹{calculateTotalPrice()}</p>
              <Link to="/checkout">
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
