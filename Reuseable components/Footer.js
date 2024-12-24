// components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-[#7d250e] text-gray-300 py-3">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and About Section */}
            <div>
              <h1 className="text-2xl font-bold text-orange-500">Taste Treasure</h1>
              <p className="mt-4">
                Discover the finest recipes, cooking tips, and culinary treasures from around the globe. Lets make your kitchen the happiest place!
              </p>
            </div>
  
            {/* Quick Links Section */}
            <div>
              <h2 className="text-lg font-semibold text-white">Quick Links</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="/about" className="hover:text-orange-500 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/recipes" className="hover:text-orange-500 transition">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-orange-500 transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:text-orange-500 transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Media Section */}
            <div>
              <h2 className="text-lg font-semibold text-white">Follow Us</h2>
              <p className="mt-4">Stay connected with us on social media:</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.99 3.657 9.12 8.438 9.879V15.89h-2.54v-2.89h2.54v-2.05c0-2.503 1.493-3.89 3.776-3.89 1.095 0 2.238.194 2.238.194v2.459h-1.26c-1.243 0-1.631.771-1.631 1.563v1.724h2.773l-.443 2.89h-2.33v6.989C18.343 21.121 22 16.99 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M24 4.56c-.89.39-1.85.66-2.86.78a4.93 4.93 0 002.15-2.72 9.75 9.75 0 01-3.13 1.2 4.92 4.92 0 00-8.38 4.49A13.94 13.94 0 011.67 3.15a4.92 4.92 0 001.52 6.57A4.9 4.9 0 01.96 9v.06a4.92 4.92 0 003.94 4.83 4.93 4.93 0 01-2.21.08 4.92 4.92 0 004.6 3.42A9.87 9.87 0 010 19.54a13.93 13.93 0 007.55 2.21c9.06 0 14-7.51 14-14 0-.21 0-.42-.02-.63A9.93 9.93 0 0024 4.56z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 2.16c3.204 0 3.584.012 4.849.07 1.259.057 2.132.27 2.636.448.65.218 1.115.479 1.607.971.492.492.753.957.971 1.607.178.504.39 1.377.448 2.636.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.057 1.259-.27 2.132-.448 2.636-.218.65-.479 1.115-.971 1.607-.492.492-.957.753-1.607.971-.504.178-1.377.39-2.636.448-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.057-2.132-.27-2.636-.448-.65-.218-1.115-.479-1.607-.971-.492-.492-.753-.957-.971-1.607-.178-.504-.39-1.377-.448-2.636C2.172 15.584 2.16 15.204 2.16 12s.012-3.584.07-4.849c.057-1.259.27-2.132.448-2.636.218-.65.479-1.115.971-1.607.492-.492.957-.753 1.607-.971.504-.178 1.377-.39 2.636-.448C8.416 2.172 8.796 2.16 12 2.16m0-2.16C8.737 0 8.332.012 7.052.07 5.785.127 4.842.314 4.145.594 3.297.928 2.633 1.264 2.07 1.826c-.562.563-.898 1.227-1.232 2.075-.28.697-.467 1.64-.525 2.907C.012 8.332 0 8.737 0 12c0 3.263.012 3.668.07 4.948.057 1.267.244 2.21.525 2.907.334.848.67 1.512 1.232 2.075.563.562 1.227.898 2.075 1.232.697.28 1.64.467 2.907.525 1.28.058 1.685.07 4.948.07 3.263 0 3.668-.012 4.948-.07 1.267-.057 2.21-.244 2.907-.525.848-.334 1.512-.67 2.075-1.232.562-.563.898-1.227 1.232-2.075.28-.697.467-1.64.525-2.907.058-1.28.07-1.685.07-4.948 0-3.263-.012-3.668-.07-4.948-.057-1.267-.244-2.21-.525-2.907-.334-.848-.67-1.512-1.232-2.075-.563-.562-1.227-.898-2.075-1.232-.697-.28-1.64-.467-2.907-.525C15.668.012 15.263 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.161a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p>&copy; {new Date().getFullYear()} Taste Treasure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  