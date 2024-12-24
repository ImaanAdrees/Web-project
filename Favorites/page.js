

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Favorites</h1>
          <p className="text-lg text-gray-600 mb-4">Here are your favorite recipes:</p>
          
          {/* Dynamic content */}
          <ul className="space-y-3">
            <li className="bg-blue-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-700">Favorite Recipe 1</h2>
              <p className="text-gray-500 text-sm">A short description of Recipe 1.</p>
            </li>
            <li className="bg-blue-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-700">Favorite Recipe 2</h2>
              <p className="text-gray-500 text-sm">A short description of Recipe 2.</p>
            </li>
            <li className="bg-blue-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-700">Favorite Recipe 3</h2>
              <p className="text-gray-500 text-sm">A short description of Recipe 3.</p>
            </li>
          </ul>
        </div>
      </div>
  )
}
