import React from 'react';

export default function Page() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[url('/background.avif')] bg-cover bg-center w-full h-screen"
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Add a New Recipe
        </h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-semibold mb-2"
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

          <div className="mb-4">
            <label
              className="block text-gray-600 font-semibold mb-2"
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

          <div className="mb-6">
            <label
              className="block text-gray-600 font-semibold mb-2"
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
