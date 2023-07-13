import React from "react";
import Button from "../reusable-components/Button";
import { AiOutlineBell } from "react-icons/ai";
import Card from "../reusable-components/Card";
import Form from "../reusable-components/Form";
import OrderForm from "../main-components/OrderForm";
import Orders from "./Orders";
import Products from "../main-components/Porducts";
import Toast from "../reusable-components/Toast";

export default function Home() {
  return (
    <div className="p-4">
      <Toast message={undefined} />
      {/* Cards */}
      <Products />

      {/* Form  */}
      <Orders />
    </div>
  );
}
