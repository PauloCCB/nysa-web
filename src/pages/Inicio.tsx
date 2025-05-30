import React from "react";
import useIntersection from "../hooks/useIntersection";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Inicio = () => {
  const [heroRef, heroVisible] = useIntersection({ threshold: 0.2 });
  const [aboutRef, aboutVisible] = useIntersection({ threshold: 0.1 });
  const [servicesRef, servicesVisible] = useIntersection({ threshold: 0.1 });
  const [projectsRef, projectsVisible] = useIntersection({ threshold: 0.1 });

  const images = [
    {
      original: "/image1.jpg",
      thumbnail: "/image1.jpg",
    },
    {
      original: "/image2.jpg",
      thumbnail: "/image2.jpg",
    },
    {
      original: "/image7.jpg",
      thumbnail: "/image7.jpg",
    },
    {
      original: "/image8.jpg",
      thumbnail: "/image8.jpg",
    },
    {
      original: "/image4.webp",
      thumbnail: "/image4.webp",
    },
    {
      original: "/image9.jpg",
      thumbnail: "/image9.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section - Carrusel de imágenes */}
      <section 
        ref={heroRef}
        className={`relative min-h-screen transition-all duration-700 ${
          heroVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0">
          <ImageGallery 
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showBullets={true}
            autoPlay={true}
            slideInterval={5000}
            showNav={true}
            showFullscreenButton={false}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Alquiler de Mercancías
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Soluciones integrales para tus proyectos de construcción e industria
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Ver Servicios
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Section */}
      <section 
        ref={aboutRef}
        className={`py-20 px-6 md:px-20 transition-all duration-700 ${
          aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido izquierda */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nosotros</h2>
              <p className="text-lg text-gray-700 mb-6">
                Con más de 15 años de experiencia en el sector, somos una empresa líder en el 
                alquiler de maquinaria pesada y servicios especializados para la industria de la 
                construcción y minería.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Nuestro compromiso es brindar soluciones integrales que permitan a nuestros 
                clientes ejecutar sus proyectos de manera eficiente, segura y rentable.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Equipos modernos y certificados</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Personal técnico especializado</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Soporte 24/7</span>
                </div>
              </div>
            </div>

            {/* Video derecha */}
            <div className="relative">
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <video 
                  controls 
                  className="w-full h-auto"
                  poster="/image1.jpg"
                >
                  <source src="/nosotros-video.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
              <p className="text-center text-gray-600 mt-4">
                Video corporativo - Conoce nuestra empresa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Servicios Section */}
      <section 
        ref={servicesRef}
        className={`py-20 px-6 md:px-20 bg-gray-50 transition-all duration-700 ${
          servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios especializados para satisfacer las 
              necesidades de tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Alquiler de Maquinaria Pesada */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gray-800 p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7h-3V6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM11 7h2v10h-2V7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Alquiler de Maquinaria Pesada</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Ofrecemos una amplia gama de maquinaria pesada para construcción, minería y obras civiles. 
                  Equipos modernos y bien mantenidos.
                </p>
                <Link
                  to="/servicios/alquiler-maquinaria-pesada"
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded transition inline-block text-center"
                >
                  Ver más...
                </Link>
              </div>
            </div>

            {/* Estructura Metálica */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gray-700 p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Estructura Metálica</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Diseño, fabricación e instalación de estructuras metálicas para proyectos industriales y 
                  comerciales con los más altos estándares.
                </p>
                <Link
                  to="/servicios/estructura-metalica"
                  className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded transition inline-block text-center"
                >
                  Ver más...
                </Link>
              </div>
            </div>

            {/* Carpintería */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gray-600 p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Carpintería</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Servicios especializados en carpintería para construcción, acabados y proyectos 
                  personalizados con materiales de primera calidad.
                </p>
                <Link
                  to="/servicios/carpinteria"
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded transition inline-block text-center"
                >
                  Ver más...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Proyectos Section */}
      <section 
        ref={projectsRef}
        className={`py-20 px-6 md:px-20 bg-nysa-black text-white transition-all duration-700 ${
          projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Proyectos</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Conoce algunos de los proyectos más destacados que hemos realizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Proyecto 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-gray-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Proyecto Minero Norte</h3>
                <div className="flex items-center text-blue-400 text-sm mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  UBICACIÓN
                </div>
                <p className="text-blue-400 mb-3">Antofagasta, Chile</p>
                <div className="flex items-center text-gray-300 text-sm mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v8h2v-8zm4-4h-2v12h2V7zm4-4h-2v16h2V3z"/>
                  </svg>
                  TIPO
                </div>
                <p className="text-gray-300 mb-3">Servicios de construcción</p>
                <div className="flex items-center text-yellow-400 text-sm mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  ESTADO
                </div>
                <p className="text-yellow-400">En curso</p>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-gray-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Complejo Industrial</h3>
                <div className="flex items-center text-blue-400 text-sm mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  UBICACIÓN
                </div>
                <p className="text-blue-400 mb-3">Lima, Perú</p>
                <div className="flex items-center text-gray-300 text-sm mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v8h2v-8zm4-4h-2v12h2V7zm4-4h-2v16h2V3z"/>
                  </svg>
                  TIPO
                </div>
                <p className="text-gray-300 mb-3">Estructura metálica</p>
                <div className="flex items-center text-green-400 text-sm mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  ESTADO
                </div>
                <p className="text-green-400">Completado</p>
              </div>
            </div>

            {/* Proyecto 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-gray-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Centro Comercial</h3>
                <div className="flex items-center text-blue-400 text-sm mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  UBICACIÓN
                </div>
                <p className="text-blue-400 mb-3">Santiago, Chile</p>
                <div className="flex items-center text-gray-300 text-sm mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v8h2v-8zm4-4h-2v12h2V7zm4-4h-2v16h2V3z"/>
                  </svg>
                  TIPO
                </div>
                <p className="text-gray-300 mb-3">Carpintería y acabados</p>
                <div className="flex items-center text-yellow-400 text-sm mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  ESTADO
                </div>
                <p className="text-yellow-400">En curso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Inicio;
