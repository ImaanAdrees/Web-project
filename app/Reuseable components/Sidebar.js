import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ user }) {
  return (
    <aside className="w-64 h-full bg-[#7d250e] text-white flex flex-col justify-between">
      {/* Sidebar Header */}
      <div>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              width={50}
              height={50}
              alt="TasteTreasure"
              className="rounded-full"
            />
            <h1 className="text-xl font-bold text-orange-500">TasteTreasure</h1>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="mt-6 space-y-4">
          <li>
            <Link
              href="/DashBoard/Home"
              className="flex items-center space-x-4 py-2.5 px-4 rounded transition hover:bg-orange-600"
            >
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
                  d="M3 12l2-2m0 0l7-7 7 7M13 5v6a2 2 0 002 2h5l-9 9-9-9h5a2 2 0 002-2V5z"
                />
              </svg>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/DashBoard/AllRecepies"
              className="flex items-center space-x-4 py-2.5 px-4 rounded transition hover:bg-orange-600"
            >
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
                  d="M3 10h11M9 21V3m12 10h-3m-4 0h3m4 0h3"
                />
              </svg>
              <span>My Recipes</span>
            </Link>
          </li>
          <li>
            <Link
              href="/DashBoard/Favorites"
              className="flex items-center space-x-4 py-2.5 px-4 rounded transition hover:bg-orange-600"
            >
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
                  d="M3 10l4.48-2.24m4 0l4.48 2.24m-4 0V3m4 2.24l4.48 2.24m-4 0V21m0-6.12l4.48-2.24M9 15.88L4.52 13.64M4.52 9.76L9 7.52"
                />
              </svg>
              <span>Favorites</span>
            </Link>
          </li>
          <li>
            <Link
              href="/DashBoard/Upload"
              className="flex items-center space-x-4 py-2.5 px-4 rounded transition hover:bg-orange-600"
            >
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
                  d="M16 7V3m0 0L9 3m7 0v4M3 17v4m0-4l7 4m0-4V3m7 18h4m-4 0l-4 4m4-4v-4"
                />
              </svg>
              <span>Upload Recipes</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={user?.image || "/default-avatar.png"}
              alt="User Avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">{user?.name || "Guest"}</p>
            <p className="text-xs text-gray-300">{user?.email || "guest@example.com"}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
