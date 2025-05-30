import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import ServicesCarousel from '../../components/ServicesCarousel';

const AlquilerMaquinariaPesada = () => {
  return (
    <>
      {/* Hero Carousel */}
      <ServicesCarousel />

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/servicios" className="hover:text-blue-600">Nuestros Servicios</Link>
            <span className="mx-2">/</span>
            <span className="text-blue-600">Alquiler de Maquinaria Pesada</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Introducción */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/image1.jpg" 
                alt="Flota de Maquinaria Pesada" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Nuestra Flota de Equipos</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                En Nysa Inversiones contamos con una de las flotas más modernas y completas de maquinaria pesada 
                del país. Nuestros equipos están constantemente actualizados para garantizar la máxima eficiencia 
                y productividad en todos los proyectos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada pieza de maquinaria pasa por rigurosos controles de calidad y mantenimiento preventivo 
                para asegurar su óptimo funcionamiento durante toda la duración del alquiler.
              </p>
            </div>
          </div>

          {/* Excavadoras */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Excavadoras</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Disponemos de excavadoras de diferentes tamaños y capacidades, desde equipos compactos 
                para trabajos urbanos hasta grandes excavadoras para proyectos mineros e industriales.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Excavadoras hidráulicas de 20 a 600 toneladas
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sistemas de control avanzados
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Accesorios especializados disponibles
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/image3.jpg" 
                alt="Excavadoras" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Bulldozers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/image5.jpeg" 
                alt="Bulldozers" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Bulldozers</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestros bulldozers están diseñados para los trabajos más exigentes de movimiento de tierra, 
                nivelación y preparación de terrenos para construcción e infraestructura.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Potencia desde 150 hasta 850 HP
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sistemas GPS para precisión en nivelación
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Hojas rectas y angulares disponibles
                </li>
              </ul>
            </div>
          </div>

          {/* Grúas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Grúas Móviles</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Contamos con grúas móviles de diferentes capacidades para trabajos de izaje y montaje 
                en construcción, industria y minería. Equipos con las más altas especificaciones de seguridad.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Capacidades de 25 a 500 toneladas
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sistemas de seguridad certificados
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Operadores certificados incluidos
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/image6.jpg" 
                alt="Grúas Móviles" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-blue-50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Necesitas cotizar maquinaria para tu proyecto?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contáctanos y nuestros especialistas te ayudarán a encontrar el equipo perfecto
            </p>
            <Link
              to="/contactanos"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 mr-4"
            >
              Solicitar Cotización
            </Link>
            <Link
              to="/servicios"
              className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105"
            >
              Ver Otros Servicios
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AlquilerMaquinariaPesada; 