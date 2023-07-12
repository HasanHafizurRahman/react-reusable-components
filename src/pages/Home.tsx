import React from "react";
import Button from "../reusable-components/Button";
import { AiOutlineBell } from "react-icons/ai";
import Card from "../reusable-components/Card";
import Form from "../reusable-components/Form";
import OrderForm from "../reusable-components/OrderForm";
import Orders from "./Orders";

export default function Home() {
  return (
    <div className="p-4">
      {/* Button */}
      <div className="flex">
        <Button style="btn-primary" icon={<AiOutlineBell />}>
          Show Alert
        </Button>
      </div>
      {/* Card */}
      <Card />

      {/* Form  */}
      <Orders />
    </div>
  );
}
