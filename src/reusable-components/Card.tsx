import React, { useContext, useState } from "react";
import Button from "./Button";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { CartContext } from "../main-components/CartContext";
import { toast } from "react-toastify";

interface ICardProps {
  product: {
    id: string;
    image: string;
    title: string;
    description: string;
    price: number;
  };
}

const Card: React.FC<ICardProps> = ({ product }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleShowMore = () => {
    setShowFullDescription(true);
  };

  const description = showFullDescription
    ? product.description
    : product.description.split(" ").slice(0, 10).join(" ");

  const handleAddToCart = () => {
    addToCart(product);

    addToCartToast();
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);

    removeFromCartToast();
  };
  const addToCartToast = () => {
    toast.success("Success! Product added to cart.");
  };

  const removeFromCartToast = () => {
    toast.success("Success! Product removed from cart.");
  };

  const isInCart = cartItems.some((item) => item.id === product.id);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow py-2">
      <img className="rounded-t-lg w-full h-40" src={product.image} alt="" />
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {product.title}
      </h3>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-40">
        {description}
        {!showFullDescription && (
          <button
            className="text-blue-500 hover:text-blue-600"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        ${product.price}
      </p>

      <Button
        onClick={handleAddToCart}
        disabled={isInCart}
        icon={<AiOutlinePlusCircle />}
        style="btn-primary"
      >
        Add
      </Button>
      <Button
        onClick={handleRemoveFromCart}
        icon={<AiOutlineMinusCircle />}
        style="btn-secondary"
      >
        Remove
      </Button>
    </div>
  );
};

export default Card;
