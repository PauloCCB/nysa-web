import React from "react";
import useIntersection from "../hooks/useIntersection";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Inicio = () => {
  const [ref, isVisible] = useIntersection({ threshold: 0.2 });

  const images = [
    {
      original: "/image1.jpg",
      thumbnail: "/image1.jpg",
      originalHeight: 100,
      originalWidth: 100,
      src: "/image1.jpg",
      alt: "Imagen 1",
    },
    {
      original: "/image2.jpg",
      thumbnail: "/image2.jpg",
      originalHeight: 100,
      originalWidth: 100,
      src: "/image2.jpg",
      alt: "Imagen 2",
    },
    {
      original: "/image3.jpg",
      thumbnail: "/image3.jpg",
      originalHeight: 100,
      originalWidth: 100,
      src: "/image3.jpg",
      alt: "Imagen 3",
    },
    {
      original: "/image4.webp",
      thumbnail: "/image4.webp",
      originalHeight: 100,
      originalWidth: 100,
      src: "/image4.webp",
      alt: "Imagen 4",
    },
    {
      original: "/image5.jpeg",
      thumbnail: "/image5.jpeg",
      originalHeight: 100,
      originalWidth: 100,
      src: "/image5.jpeg",
      alt: "Imagen 5",
    },
    {
      original: "/image6.jpg",
      thumbnail: "/image6.jpg",
      originalHeight: 100,
      originalWidth: 100,
      src: "/image6.jpg",
      alt: "Imagen 6",
    },
  ];
  return (
    <>
      <div>
        <ImageGallery items={images} />
      </div>
      <section
        ref={ref}
        className={`min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 pb-10 bg-gray-200 transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      `}
      >
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            La mejor tecnología minera a tu servicio
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Creamos soluciones que impulsan el crecimiento de tu negocio en la
            nueva era digital y minera.
          </p>
          <a
            href="https://wa.me/51916998856"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A12 12 0 003.48 20.52l-1.3 4.77a1 1 0 001.22 1.22l4.77-1.3A12 12 0 1020.52 3.48z" />
            </svg>
            Contáctenos por WhatsApp
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/image2.jpg"
            alt="Ilustración minería"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Inicio;
