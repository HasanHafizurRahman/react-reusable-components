import React, { useState } from "react";
import Button from "./Button";

const Form = ({ onSubmit }) => {
  const [customerName, setCustomerName] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      customerName,
      product,
      quantity: parseInt(quantity),
      price: parseInt(price),
    };
    onSubmit(newOrder);
    setCustomerName("");
    setProduct("");
    setQuantity("");
    setPrice("");
  };

  return (
    <section className="bg-white dark:bg-gray-900 mt-2">
      <div className="py-4 px-4 mx-auto max-w-2xl lg:py-6">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="customerName"
                className="block mb-2 text-sm font-medium text-primary dark:text-white"
              >
                Customer Name:
              </label>
              <input
                type="text"
                id="customerName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center mb-2">
              <label
                htmlFor="product"
                className="block mb-2 text-sm font-medium text-primary"
              >
                Product:
              </label>
              <input
                type="text"
                id="product"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center mb-2">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-primary"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center mb-2">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-primary"
              >
                Price:
              </label>
              <input
                type="number"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
          </div>
          <Button type="submit" icon={undefined} style="btn-primary">
            Add Order
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Form;
