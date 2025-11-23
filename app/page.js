"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginWithEmail } from "./core/authLogic";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-5">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
          Sign In
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

        {/* Sign In */}
        <button
          className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={() => loginWithEmail(email, password, router)}
        >
          Sign In
        </button>

        {/* Go to Create Account */}
        <button
          className="text-blue-600 underline text-center"
          onClick={() => router.push("/createacc")}
        >
          Create an Account
        </button>
      </div>
    </div>
  );
}
