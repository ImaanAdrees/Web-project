"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("/api/recipes");
      const data = await response.json();
      setRecipes(data);
      setLoading(false);
    };

    fetchRecipes();
  }, []);

  const totalFavorites = recipes.reduce((sum, recipe) => sum + recipe.favorites, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-indigo-50">
      {/* Header Section */}
      <header className="bg-[url('/bgg.jpg')] bg-cover bg-center w-full h-full text-white p-6 text-center">
      <h1 className="text-5xl font-oswald font-bold">Welcome to TasteTreasure</h1>
      <p className="mt-2 text-lg">Track your recipes and their performance</p>
    </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats Section */}
          <div className="lg:col-span-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-black mb-4">Your Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span>Total Recipes Uploaded:</span>
                <span className="font-semibold">{recipes.length}</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span>Total Favorites:</span>
                <span className="font-semibold">{totalFavorites}</span>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-black mb-4">Quick Actions</h2>
            <nav>
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link
                    href="/DashBoard/Upload"
                    className="block  bg-softOrange px-14 text-md py-3 rounded-md shadow-md text-center hover:bg-freshgreen"
                  >
                    Add New Recipe
                  </Link>
                </li>
                <li>
                  <Link
                    href="/DashBoard/Favorites"
                    className="block  bg-softOrange px-14 text-md py-3 rounded-md shadow-md text-center hover:bg-freshgreen"
                  >
                    View Favorites
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Recipes Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-black mb-6">Popular Recipes</h2>
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <p className="text-black text-lg animate-pulse">Loading...</p>
            </div>
          ) : recipes.length === 0 ? (
            <p className="text-gray-500 text-lg">
              No recipes found. Start by adding some!
            </p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <li
                  key={recipe.id}
                  className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
                >
                  <Link
                    href={`/recipes/${recipe.id}`}
                    className="text-xl font-semibold text-indigo-600 hover:underline"
                  >
                    {recipe.title}
                  </Link>
                  <p className="text-gray-700 mt-2">{recipe.description}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Views: {recipe.views} | Favorites: {recipe.favorites}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
