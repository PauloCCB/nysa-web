import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ServicesCarousel from '../components/ServicesCarousel';

const NuestrosServicios = () => {
  return (
    <>
      {/* Hero Carousel */}
      <ServicesCarousel />

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Alquiler de Maquinaria Pesada */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Alquiler de Maquinaria Pesada</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ofrecemos una amplia gama de maquinaria pesada para construcción, minería y obras civiles. 
                Nuestro equipo moderno y bien mantenido garantiza la eficiencia y seguridad en todos tus proyectos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Contamos con excavadoras, bulldozers, grúas, compactadores y una extensa flota de equipos 
                especializados que se adaptan a las necesidades específicas de cada proyecto.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Maquinaria moderna y certificada</span>
                </div>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Mantenimiento preventivo constante</span>
                </div>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Operadores capacitados disponibles</span>
                </div>
              </div>
              <Link
                to="/servicios/alquiler-maquinaria-pesada"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
              >
                Ver más detalles
              </Link>
            </div>
            <div>
              <img 
                src="/image2.jpg" 
                alt="Alquiler de Maquinaria Pesada" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Estructura Metálica */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/estructura-metalica.webp" 
                alt="Estructura Metálica" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Estructura Metálica</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Diseñamos, fabricamos e instalamos estructuras metálicas para proyectos industriales y 
                comerciales con los más altos estándares de calidad y seguridad.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestro equipo de ingenieros especializados trabaja con tecnología de punta para crear 
                soluciones estructurales duraderas y eficientes que cumplan con todas las normativas vigentes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Diseño e ingeniería especializada</span>
                </div>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Materiales de primera calidad</span>
                </div>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Instalación profesional certificada</span>
                </div>
              </div>
              <Link
                to="/servicios/estructura-metalica"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
              >
                Ver más detalles
              </Link>
            </div>
          </div>

          {/* Carpintería */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Carpintería</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Servicios especializados en carpintería para construcción, acabados y proyectos 
                personalizados con materiales de primera calidad y técnicas tradicionales combinadas con tecnología moderna.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestros maestros carpinteros cuentan con años de experiencia en la elaboración de estructuras de madera, 
                acabados arquitectónicos y mobiliario especializado para proyectos industriales y residenciales.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Maestros carpinteros experimentados</span>
                </div>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Maderas seleccionadas y tratadas</span>
                </div>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Acabados de alta precisión</span>
                </div>
              </div>
              <Link
                to="/servicios/carpinteria"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
              >
                Ver más detalles
              </Link>
            </div>
            <div>
              <img 
                src="/carpinteria.jpg" 
                alt="Carpintería" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
        </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas más información sobre nuestros servicios?</h2>
          <p className="text-xl mb-8">
            Contáctanos y te ayudaremos a encontrar la solución perfecta para tu proyecto
          </p>
          <Link
            to="/contactanos"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105"
          >
            Contactar Ahora
          </Link>
      </div>
    </section>

      <Footer />
    </>
  );
};

export default NuestrosServicios; 