import React from "react";
import Button from "../reusable-components/Button";
import { AiOutlineBell } from "react-icons/ai";
import Card from "../reusable-components/Card";
import Form from "../reusable-components/Form";
import OrderForm from "../main-components/OrderForm";
import Orders from "./Orders";
import Products from "../main-components/Porducts";
import Toast from "../reusable-components/Toast";
import Loading from "../reusable-components/Loading";

export default function Home() {
  return (
    <div className="p-4">
      {/* toast notification */}
      <Toast message={undefined} />
      {/* Cards */}
      <Products />

      {/* Loading sckeleton */}
      <h2 className="text-3xl text-primary mt-4 font-semibold">
        Loading Skeleton Reusable Component
      </h2>
      <Loading />
      {/* Form  */}
      <Orders />
    </div>
  );
}
