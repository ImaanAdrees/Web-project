"use client";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[url('/background.avif')] bg-cover bg-center w-full h-screen"
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">
          Add a New Recipe
        </h1>
        <form>
          {/* Recipe Title */}
          <div className="mb-4">
            <label
              className="block text-black font-semibold mb-2"
              htmlFor="recipe-title"
            >
              Recipe Title
            </label>
            <input
              type="text"
              id="recipe-title"
              placeholder="Enter recipe title"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Ingredients */}
          <div className="mb-4">
            <label
              className="block text-black font-semibold mb-2"
              htmlFor="ingredients"
            >
              Ingredients
            </label>
            <textarea
              id="ingredients"
              placeholder="List ingredients"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <label
              className="block text-black font-semibold mb-2"
              htmlFor="instructions"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              placeholder="Write steps"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Upload Image */}
          <div className="mb-4">
            <label
              className="block text-black font-semibold mb-2"
              htmlFor="image"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {image && (
              <div className="mt-2">
                <Image
                  src={image}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-softOrange hover:bg-freshgreen text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
