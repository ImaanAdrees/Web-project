// components/Header.jsx
"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header({ user }) {
  const [notifications, setNotifications] = useState(5); // Example notification count
  const [messages, setMessages] = useState(2); // Example message count

  return (
    <header className="bg-[#7d250e]  text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <div className="flex items-center space-x-2">
          <Image src={"/logo.jpg"} width={"60"} height={"60"} alt="trreature" className="rounded-[50%]"/>
          <h1 className="text-2xl font-bold text-orange-500">TasteTreasure</h1>
        </div>
        {/* User Actions */}
        <div className="flex items-center space-x-6">
          {/* Email Display */}
          <span className="hidden md:inline-block text-sm text-gray-300">
            {user?.email || "guest@example.com"}
          </span>

          {/* Notification Icon */}
          <div className="relative">
            <button className="hover:text-orange-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
                />
              </svg>
            </button>
            {notifications > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1">
                {notifications}
              </span>
            )}
          </div>

          {/* Message Icon */}
          <div className="relative">
            <button className="hover:text-orange-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
                />
              </svg>
            </button>
            {messages > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1">
                {messages}
              </span>
            )}
          </div>

          {/* User Profile Picture */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={user?.image || "/default-avatar.png"} // Default avatar if no user image
              alt="User Avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
