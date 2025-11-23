"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createAccount } from "../core/authLogic";

export default function CreateAccountPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleCreateAccount() {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    createAccount(email, password);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-5">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
          Create Account
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Create Account */}
        <button
          className="bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-black transition"
          onClick={handleCreateAccount}
        >
          Create Account
        </button>

        {/* Go to Login */}
        <button
          className="text-blue-600 underline text-center"
          onClick={() => router.push("/")}
        >
          Already have an account? Sign In
        </button>

      </div>
    </div>
  );
}
