import React from "react";
import { Link } from "react-router-dom";
import { TfiShoppingCartFull } from "react-icons/tfi";

const Navigation = () => {
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
        <span className="text-sm absolute left-3 bottom-5 bg-secondary text-white px-1 rounded-full">
          10
        </span>
      </div>
    </div>
  );
};

export default Navigation;
