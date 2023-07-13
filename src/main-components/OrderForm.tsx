import React, { useState } from "react";
import Form from "../reusable-components/Form";

interface IOrderFormProps {
  onAddOrder: (newOrder: OrderData) => void;
}

const OrderForm: React.FC<IOrderFormProps> = ({ onAddOrder }) => {
  const [orderData, setOrderData] = useState([]);

  const handleSubmit = (newOrder) => {
    setOrderData(newOrder);
    onAddOrder(newOrder);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold text-primary dark:text-white">
        Create New Order
      </h2>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default OrderForm;
