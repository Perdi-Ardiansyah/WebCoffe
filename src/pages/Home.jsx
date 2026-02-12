import React, { useState, useEffect } from "react";
import slide1 from "../assets/images1.jpg";
import slide2 from "../assets/images2.jpg";
import slide3 from "../assets/images3.jpg";
import LocationMap from "../components/LocationMap";

const images = [slide1, slide2, slide3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full md:max-w-6xl mx-auto py-2">
      <div className="grid grid-cols-2 grid-rows-1 gap-3">
        {/* SLIDER */}
        <div className="col-span-2 relative w-full aspect-video overflow-hidden rounded">
          <div
            className="flex transition-transform duration-800 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="slider"
                className="w-full flex-shrink-0 object-cover"
              />
            ))}
          </div>

          {/* Prev */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
          >
            ❮
          </button>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
          >
            ❯
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  currentIndex === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="row-start-2 col-start-1 aspect-video bg-gray-500 bg-blend-multiply bg-[url('/src/assets/coffe.jpg')] bg-cover bg-center text-white p-4 rounded ">
          <div className="flex items-end justify-center h-full">
            <a
              href="/coffe"
              className="bg-green-800 hover:bg-green-900 transition text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg text-white w-fit"
            >
              Order Coffe
            </a>
          </div>
        </div>
        <div className="row-start-2 col-start-2 aspect-video bg-gray-500 bg-blend-multiply bg-[url('/src/assets/miniSoccer.jpg')] bg-cover bg-center text-white p-4 rounded">
          <div className="flex items-end justify-center h-full">
            <a
              href="/mini-soccer"
              className="bg-green-800 hover:bg-green-900 transition text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg text-white w-fit"
            >
              Order Field
            </a>
          </div>
        </div>
      </div>
      
      {/* Rating */}
      <div className="mt-4">
        <div className="h-full p-0 border-b-1 border-black border-dashed mb-2 p-2">
          <h1>
            <strong>Viva Lavida</strong>
          </h1>
          <p>5.0 ⭐ Kota Tasikmalaya, Jawa Barat</p>
        </div>
        
        {/* Deskripsi */}
        <div className="h-full p-0 border-b-1 border-black border-dashed mb-2 p-2">
          <h1>
            <strong>Deskripsi</strong>
          </h1>
          <p>
            Viva Lavida adalah tempat yang sempurna untuk menikmati kopi
            berkualitas tinggi dan bermain sepak bola mini. Kami menawarkan
            berbagai jenis kopi pilihan dan lapangan mini yang nyaman untuk
            semua usia.
            {isExpanded && (
              <>
                {" "}
                Bergabunglah dengan kami untuk pengalaman yang menyenangkan dan
                penuh energi! Kami juga menyediakan berbagai fasilitas seperti
                WiFi gratis, area bermain anak, dan ruang pertemuan untuk acara
                kecil. Tim kami yang ramah siap melayani Anda dengan senyum dan
                dedikasi penuh.
              </>
            )}
            <strong>
              <a
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-red-800"
              >
                {isExpanded ? " Lihat Lebih Sedikit" : " Lihat Selengkapnya"}
              </a>
            </strong>
          </p>
        </div>

        {/* Map */}
        <div className="h-full p-0 border-b-1 border-black border-dashed mb-2 p-2">
          <h1><strong>Lokasi </strong></h1>
          <LocationMap />
        </div>
      </div>
    </div>
  );
};

export default Home;
