import React from "react";
import Button from "./Button";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Card = () => {
  const addToCartButton =
    "inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300";
  const removeFromCartButton =
    "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300";
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <img
        className="rounded-t-lg w-full"
        src="https://th.bing.com/th/id/OIP.SLXZeuIoCke-8XztFgrLYwHaE8?w=255&h=180&c=7&r=0&o=5&pid=1.7"
        alt=""
      />
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Product Title
      </h3>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Description: lorem ipsum..................
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        producPrice
      </p>
      <Button icon={<AiOutlinePlusCircle />} style={addToCartButton}>
        Add
      </Button>
      <Button icon={<AiOutlineMinusCircle />} style={removeFromCartButton}>
        Remove
      </Button>
    </div>
  );
};

export default Card;
