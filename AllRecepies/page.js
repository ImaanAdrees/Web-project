
export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-6">My Recipes</h1>
              <p className="text-lg text-gray-600 mb-4">Here are the recipes you have shared:</p>
              
              {/* Dynamic content */}
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <li className="bg-yellow-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-xl font-semibold text-gray-800">Recipe 1</h2>
                  <p className="text-gray-500 text-sm">A short description of Recipe 1.</p>
                </li>
                <li className="bg-yellow-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-xl font-semibold text-gray-800">Recipe 2</h2>
                  <p className="text-gray-500 text-sm">A short description of Recipe 2.</p>
                </li>
                <li className="bg-yellow-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-xl font-semibold text-gray-800">Recipe 3</h2>
                  <p className="text-gray-500 text-sm">A short description of Recipe 3.</p>
                </li>
              </ul>
            </div>
          </div>
  );
}
