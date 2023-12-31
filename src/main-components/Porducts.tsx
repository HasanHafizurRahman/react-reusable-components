import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../reusable-components/Card";
import Loading from "../reusable-components/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false); // Set loading state to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.slice(0, 6).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
