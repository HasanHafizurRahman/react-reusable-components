import React from "react";
import Button from "./Button";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Card = () => {
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
      <Button icon={<AiOutlinePlusCircle />} style="btn-primary">
        Add
      </Button>
      <Button icon={<AiOutlineMinusCircle />} style="btn-secondary">
        Remove
      </Button>
    </div>
  );
};

export default Card;
