import React from "react";
import Button from "../reusable-components/Button";
import { AiOutlineBell } from "react-icons/ai";
import Card from "../reusable-components/Card";
import Form from "../reusable-components/Form";
import OrderForm from "../main-components/OrderForm";
import Orders from "./Orders";
import Products from "../main-components/Porducts";

export default function Home() {
  return (
    <div className="p-4">
      {/* Button */}
      <div className="flex">
        <Button style="btn-primary" icon={<AiOutlineBell />}>
          Show Alert
        </Button>
      </div>
      {/* Cards */}
      <Products />

      {/* Form  */}
      <Orders />
    </div>
  );
}
