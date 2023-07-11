import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-around mt-5">
      <div className="flex gap-5">
        {/* <Link
          className="font-semibold text-primary hover:text-secondary"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="font-semibold text-primary hover:text-secondary"
          to={"/orders"} //   to="/orders"
        >
          Orders
        </Link> */}
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
        Cart
        <span className="text-sm absolute left-8 bottom-2 bg-secondary text-white px-1 rounded-full">
          0
        </span>
      </div>
    </div>
  );
};

export default Navigation;
