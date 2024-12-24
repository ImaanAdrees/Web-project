"use client";
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Page() {
  return (
    <div className="bg-[#FFF7E6] min-h-screen">
    <header className="bg-[url('/bgg.jpg')] bg-cover bg-center w-full h-full text-white p-6 text-center">
      <h1 className="text-5xl font-oswald font-bold">Welcome to TasteTreasure</h1>
      <input
        type="text"
        placeholder="Search for recipes..."
        className="mt-4 p-2 w-full max-w-md rounded-md text-black"
      />
    </header>

      {/* Featured Recipes and Carousel Section */}
      <section className="carousel relative mt-6">
      <h2 className="text-3xl mb-4 font-oswald text-[#1A1A1A] font-bold">Featured Recipes</h2>
  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Image
          width={2500}
          height={300}
          src="/Biryani.jpg"
          className="d-block w-100"
          alt="Slide 1"
        />
      </div>
      <div className="carousel-item">
        <Image
          width={2500}
          height={300}
          src="/Noodles.jpg"
          className="d-block w-100"
          alt="Slide 2"
        />
      </div>
      <div className="carousel-item">
        <Image
          width={2500}
          height={300}
          src="/meetha.jpg"
          className="d-block w-100"
          alt="Slide 3"
        />
      </div>
    </div>
  </div>
</section>
 {/* Categories Section */}
      <section className='p-6'>
        <h2 className="text-3xl mb-4 font-lexend font-bold text-[#1A1A1A]">Categories</h2>
        <div className="flex gap-14 flex-wrap">
          <div className="card w-[250px]">
            <Image width={200} height={200} src="/pic1.jpeg" className="card-img-top" alt="Pakistani Cuisine" />
            <div className="card-body">
              <h5 className="card-title font-lobsterTwo">Pakistani Cuisine</h5>
              <Link href="/Categories/PakistaniCuisine" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
          <div className="card w-[250px]">
            <Image width={200} height={200} src="/chinese food.jpeg" className="card-img-top" alt="Chinese Cuisine" />
            <div className="card-body">
              <h5 className="card-title font-lobsterTwo">Chinese Cuisine</h5>
              <Link href="/Categories/ChineseCuisine" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
          <div className="card w-[250px]">
            <Image width={200} height={200} src="/snacks.jpeg" className="card-img-top" alt="Snacks" />
            <div className="card-body">
              <h5 className="card-title font-lobsterTwo">Snacks</h5>
              <Link href="/Categories/Snacks" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
          <div className="card w-[250px]">
            <Image width={200} height={200} src="/dessert.jpeg" className="card-img-top" alt="Dessert" />
            <div className="card-body">
              <h5 className="card-title font-lobsterTwo">Dessert</h5>
              <Link href="/Categories/Desserts" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="p-6">
        <h2 className="text-3xl font-lexend mb-4 text-[#1A1A1A] font-bold">Quick Access</h2>
        <div className="flex gap-4 justify-around">
          <Link href="/pages/AllRecepies" className='no-underline text-black'>
            <div className="block bg-softOrange px-14 text-md py-3 rounded-md shadow-md text-center hover:bg-freshgreen">
              My Recipes
            </div>
          </Link>
          <Link href="/pages/Favorites" className='no-underline text-black'>
            <div className="block bg-softOrange px-14 text-md py-3 rounded-md shadow-md text-center hover:bg-freshgreen">
              Favorites
            </div>
          </Link>
          <Link href="/pages/Upload" className='no-underline text-black'>
            <div className="block bg-softOrange px-14 text-md py-3 rounded-md shadow-md text-center hover:bg-freshgreen">
              Add New Recipe
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
