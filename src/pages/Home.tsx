import React from "react";
import Button from "../components/Button";
import { AiOutlineBell } from "react-icons/ai";
import Card from "../components/Card";
import Form from "../components/Form";
import OrderForm from "../components/OrderForm";

export default function Home() {
  return (
    <div className="p-4">
      {/* Button */}
      <div className="flex">
        <Button
          style="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          icon={<AiOutlineBell />}
        >
          Show Alert
        </Button>
      </div>
      {/* Card */}
      <Card />

      {/* Form  */}
      <OrderForm />
    </div>
  );
}
