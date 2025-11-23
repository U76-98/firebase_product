"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { addProduct } from "../core/productLogic";

export default function CreateProductPage() {
  const router = useRouter();

  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    discount: "",
    category: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(product);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      {/* Back Button */}
      <button
        onClick={() => router.push("/products")}
        className="absolute top-6 left-6 text-gray-700 hover:text-black px-4 py-2 border border-gray-400 rounded-lg bg-white hover:bg-gray-200 transition"
      >
        ← Back
      </button>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-300 rounded-xl shadow-lg p-8 space-y-5"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-900">
          Create Product
        </h2>

        {[
          { label: "Product ID", name: "id", type: "text", placeholder: "Enter product ID" },
          { label: "Product Name", name: "name", type: "text", placeholder: "Enter product name" },
          { label: "Price (₹)", name: "price", type: "number" },
          { label: "Discount (%)", name: "discount", type: "number" },
          { label: "Category", name: "category", type: "text", placeholder: "Enter category" },
          { label: "Quantity", name: "quantity", type: "number" },
        ].map((input, idx) => (
          <div key={idx} className="space-y-1">
            <label className="block text-sm font-medium text-gray-800">
              {input.label}
            </label>

            <input
              type={input.type}
              name={input.name}
              value={product[input.name]}
              onChange={handleChange}
              placeholder={input.placeholder || ""}
              className="w-full border border-gray-400 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium text-lg hover:bg-black transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
