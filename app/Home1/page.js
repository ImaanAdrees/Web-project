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
 
    </div>
  );
}
