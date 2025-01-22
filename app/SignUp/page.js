// components/SignupForm.js
"use client";
import React from "react";
import { useState } from "react";



export default function Page() {
    const [role,setRole]=useState("user");
    const [LoginUser,setLoginUser]=useState({
      name: "",
      email: "",
      password: "",
      role: "",
      });
      const Signin=async()=>{
        try {
          const response = await fetch('/api/Users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify(LoginUser),
              });
              const data = await response.json();
              console.log(data);
            }
            catch (error) {
              console.error(error);
              }
      }
   // let roleText =role="admin"?"Admin":"User";
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up for TasteTreasure</h2>
        <form onSubmit={Signin}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={LoginUser.name}
              onChange={(e)=>setLoginUser({...LoginUser,name:e.target.value})}
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={LoginUser.email}
              onChange={(e)=>setLoginUser({...LoginUser,email:e.target.value})}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={LoginUser.password}
              onChange={(e)=>setLoginUser({...LoginUser,password:e.target.value})}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
                <h4 className="mb-3 ml-1 font-semibold">Role:</h4>
                <select
                  className="w-full bg-white border border-gray-300 rounded-md text-md tracking-wide font-semibold p-2 py-2"
                  value={LoginUser.role}
                  onChange={(e)=>setLoginUser({...LoginUser,role:e.target.value})}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

