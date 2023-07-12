import React, { useState } from "react";
import OrderForm from "../reusable-components/OrderForm";
import Table from "../reusable-components/Table";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "John Doe",
      product: "Product A",
      quantity: 2,
      price: 10,
    },
    {
      id: 2,
      customerName: "Donal Trump",
      product: "Weapon 0",
      quantity: 1,
      price: 15,
    },
    {
      id: 3,
      customerName: "Vladimir Putin",
      product: "Weapon X",
      quantity: 1,
      price: 15,
    },
    {
      id: 4,
      customerName: "Bashar Al Asad",
      product: "Weapon A",
      quantity: 1,
      price: 15,
    },
    {
      id: 5,
      customerName: "Abu Bakar",
      product: "Product 0",
      quantity: 1,
      price: 15,
    },
    {
      id: 6,
      customerName: "Captain Smith",
      product: "Product 12",
      quantity: 1,
      price: 15,
    },
    {
      id: 7,
      customerName: "Momith shah",
      product: "Product C",
      quantity: 1,
      price: 15,
    },
    {
      id: 8,
      customerName: "Jane Smith",
      product: "Product B",
      quantity: 1,
      price: 15,
    },
  ]);

  const tableHeaders = ["Customer Name", "Product Name", "Quantity", "Price"];
  const tableRows = orders.map((order, index) => [
    order.customerName,
    order.product,
    order.quantity,
    order.price,
  ]);
  const handleAddOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold">Order History</h2>
      <OrderForm onAddOrder={handleAddOrder} />
      {orders.length > 0 ? (
        <Table headers={tableHeaders} rows={tableRows} />
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
};

export default Orders;
