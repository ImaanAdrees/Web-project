"use client";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Page() {
  return (
    <div>
 
      {/* Carousel Section */}
      <section className="carousel relative mt-6">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                width={2500}
                height={300}
                src="/GulabJamun.jpg"
                className="d-block w-100 opacity-65"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <Image
                width={2500}
                height={300}
                src="/ChocolateCake.jpg"
                className="d-block w-100 opacity-65"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <Image
                width={2500}
                height={300}
                src="/LemonCake.jpg"
                className="d-block w-100 opacity-65"
                alt="Slide 3"
              />
            </div>
          </div>
          {/* Heading overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h2 className="text-white text-7xl font-bold font-lexend bg-black bg-opacity-50 px-4 py-2 rounded">
              Desserts
            </h2>
          </div>
        </div>
      </section>

      {/* Category Buttons */}
      <section className="categories mt-8 text-center">
        <div className="flex justify-center gap-4">
        <button className="bg-softOrange text-white px-6 py-2 rounded hover:bg-freshgreen">
            Biryani
          </button>
          <button className="bg-softOrange text-white px-6 py-2 rounded hover:bg-freshgreen">
            Boneless Handi
          </button>
          <button className="bg-softOrange text-white px-6 py-2 rounded hover:bg-freshgreen">
            Tikka Platter
          </button>
          <button className="bg-softOrange text-white px-6 py-2 rounded hover:bg-freshgreen">
            BreakFast Special
          </button>
          <button className="bg-softOrange text-white px-6 py-2 rounded hover:bg-freshgreen">
            Karahi
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards mt-8 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <Image
              src="/KarahiNaan.jpg"
              width={300}
              height={200}
              className="rounded-t-lg"
              alt="Card 1"
            />
            <h3 className="text-xl font-semibold mt-2">Card Title 1</h3>
            <p className="text-gray-700">This is a description of card 1.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <Image
              src="/KarahiNaan.jpg"
              width={300}
              height={200}
              className="rounded-t-lg"
              alt="Card 2"
            />
            <h3 className="text-xl font-semibold mt-2">Card Title 2</h3>
            <p className="text-gray-700">This is a description of card 2.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <Image
              src="/KarahiNaan.jpg"
              width={300}
              height={200}
              className="rounded-t-lg"
              alt="Card 3"
            />
            <h3 className="text-xl font-semibold mt-2">Card Title 3</h3>
            <p className="text-gray-700">This is a description of card 3.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <Image
              src="/KarahiNaan.jpg"
              width={300}
              height={200}
              className="rounded-t-lg"
              alt="Card 4"
            />
            <h3 className="text-xl font-semibold mt-2">Card Title 4</h3>
            <p className="text-gray-700">This is a description of card 4.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <Image
              src="/KarahiNaan.jpg"
              width={300}
              height={200}
              className="rounded-t-lg"
              alt="Card 5"
            />
            <h3 className="text-xl font-semibold mt-2">Card Title 5</h3>
            <p className="text-gray-700">This is a description of card 5.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
