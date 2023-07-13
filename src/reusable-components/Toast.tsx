import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ message }) => {
  const notify = () => {
    toast.success(message);
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <button onClick={notify} style={{ display: "none" }}>
        Show Toast
      </button>
    </div>
  );
};

export default Toast;
