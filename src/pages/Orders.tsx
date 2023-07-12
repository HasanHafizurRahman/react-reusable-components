import React, { useState } from "react";
import OrderForm from "../components/OrderForm";

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
      customerName: "Jane Smith",
      product: "Product B",
      quantity: 1,
      price: 15,
    },
  ]);

  const handleAddOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold">Order History</h2>
      <OrderForm onAddOrder={handleAddOrder} />
      {orders.length > 0 ? (
        <table className="table-auto mt-4">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.customerName}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
};

export default Orders;
