import Link from "next/link";

export default function Sidebar() {
  return (
    <div className=" h-full bg-softcream text-charcoal">
      <ul className="pt-3">
        <li>
          <Link href="/pages/Home"className="block py-2.5 px-4 rounded transition hover:bg-freshgreen">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/pages/AllRecepies"
            className="block py-2.5 px-4 rounded transition hover:bg-freshgreen"
          >
            My Recipes
          </Link>
        </li>
        <li>
          <Link
            href="/pages/Favorites"
            className="block py-2.5 px-4 rounded transition hover:bg-freshgreen"
          >
            Favorites
          </Link>
        </li>
        <li>
          <Link
            href="/pages/Upload"
            className="block py-2.5 px-4 rounded transition hover:bg-freshgreen"
          >
            Upload Recipes
          </Link>
        </li>
      </ul>
    </div>
  );
}

