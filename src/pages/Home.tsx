import React from "react";
import Button from "../components/Button";
import { AiOutlineBell } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <Button
          style="bg-primary text-white py-2 px-3 rounded-full flex items-center"
          icon={<AiOutlineBell />}
        >
          Show Alert
        </Button>
      </div>
    </div>
  );
}
