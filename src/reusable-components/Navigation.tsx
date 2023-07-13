import React, { useContext } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { CartContext } from "../main-components/CartContext";

const Navigation = () => {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );
  return (
    <div className="flex justify-around mt-5">
      <div className="flex gap-5">
        <a href="/" className="font-semibold text-primary hover:text-secondary">
          Home
        </a>
        <a
          href="/orders"
          className="font-semibold text-primary hover:text-secondary"
        >
          Orders
        </a>
      </div>
      <div className="text-primary font-semibold relative">
        <TfiShoppingCartFull className="h-6 w-6" />
        <span className="absolute left-3 bottom-5 bg-white text-white px-1 rounded-full">
          {cartItemCount > 0 && (
            <span className="bg-blue-500 text-white rounded-full px-2 py-1">
              {cartItemCount}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default Navigation;
