"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkUserStatus } from "../core/authState";
import { subscribeProducts, deleteProduct, updateProduct } from "../core/productLogic";

export default function ProductsPage() {
  const router = useRouter();

  const [checking, setChecking] = useState(true);
  const [products, setProducts] = useState([]);
  const [popup, setPopup] = useState(null);

  // Auth check
  useEffect(() => {
    const unsub = checkUserStatus((user) => {
      if (!user) router.replace("/");
      else setChecking(false);
    });
    return () => unsub();
  }, []);

  // Subscribe products
  useEffect(() => {
    const unsub = subscribeProducts((data) => setProducts(data));
    return () => unsub();
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        Checking authentication...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-900">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-semibold mb-8 text-center">Products</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-md transition"
            >
              {p.image && (
                <img
                  src={p.image}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
              )}

              <h2 className="text-lg font-semibold">{p.name}</h2>

              <div className="mt-2 text-sm text-gray-600 space-y-1">
                <p>Category: {p.category}</p>
                <p>Price: ₹{p.price}</p>
                <p>Discount: {p.discount}%</p>
                <p>Quantity: {p.quantity}</p>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="px-4 py-1 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  Delete
                </button>

                <button
                  onClick={() =>
                    updateProduct(p.id, {
                      name: prompt("New product name:", p.name),
                    })
                  }
                  className="px-4 py-1 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  Edit
                </button>

                <button
                  onClick={() => setPopup(p)}
                  className="px-4 py-1 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  Info
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product popup */}
        {popup && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 shadow-lg w-96">
              <h2 className="text-xl font-semibold">{popup.name}</h2>

              <div className="mt-3 text-gray-600 space-y-1">
                <p>Category: {popup.category}</p>
                <p>Price: ₹{popup.price}</p>
                <p>Discount: {popup.discount}%</p>
                <p>Quantity: {popup.quantity}</p>
              </div>

              <button
                onClick={() => setPopup(null)}
                className="mt-6 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-black transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Add Product Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => router.push("/createProduct")}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-black transition"
          >
            ➕ Add Product
          </button>
        </div>

      </div>
    </div>
  );
}
