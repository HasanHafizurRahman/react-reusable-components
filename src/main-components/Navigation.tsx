import React, { useContext } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );
  return (
    <div className="flex justify-around bg-slate-200 py-6">
      <div className="flex gap-5">
        <Link
          to="/"
          className="font-semibold text-primary hover:text-secondary"
        >
          Home
        </Link>
        <Link
          to="/orders"
          className="font-semibold text-primary hover:text-secondary"
        >
          Orders
        </Link>
      </div>
      <div className="text-primary font-semibold relative">
        <TfiShoppingCartFull className="h-6 w-6" />
        <span className="absolute left-3 bottom-5 bg-white text-white px-1 rounded-full">
          {cartItemCount > 0 && (
            <span className="bg-blue-500 text-white rounded-full px-2">
              {cartItemCount}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default Navigation;
