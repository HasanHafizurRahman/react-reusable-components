import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../reusable-components/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
