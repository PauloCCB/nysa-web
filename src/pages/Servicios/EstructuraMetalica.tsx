import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import ServicesCarousel from '../../components/ServicesCarousel';

const EstructuraMetalica = () => {
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
            <span className="text-blue-600">Estructura Metálica</span>
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
                src="/image7.jpg" 
                alt="Taller de Estructuras Metálicas" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Ingeniería y Fabricación</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                En Nysa Inversiones contamos con un equipo de ingenieros especializados en diseño estructural 
                y un moderno taller de fabricación equipado con tecnología de punta para garantizar la más alta 
                calidad en cada proyecto.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Desarrollamos soluciones estructurales completas desde el diseño inicial hasta la instalación 
                final, cumpliendo con todas las normativas nacionales e internacionales de construcción.
              </p>
            </div>
          </div>

          {/* Diseño Estructural */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Diseño Estructural</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestro equipo de ingenieros estructurales utiliza software especializado para crear diseños 
                optimizados que garantizan la seguridad, durabilidad y eficiencia económica de cada proyecto.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Análisis estructural con software BIM
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cumplimiento de normas sísmicas
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Optimización de materiales
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/image8.jpg" 
                alt="Diseño Estructural" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Fabricación */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/image9.jpg" 
                alt="Proceso de Fabricación" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Fabricación Especializada</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestro taller cuenta con equipos de corte por plasma, soldadura especializada y control 
                de calidad riguroso para garantizar la precisión y resistencia de cada componente estructural.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Corte CNC de alta precisión
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Soldadores certificados AWS
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Control de calidad ISO 9001
                </li>
              </ul>
            </div>
          </div>

          {/* Instalación */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Montaje e Instalación</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Contamos con equipos especializados de montaje y las grúas necesarias para la instalación 
                segura y precisa de estructuras metálicas en cualquier tipo de proyecto y altura.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Personal certificado en altura
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Equipos de izaje especializados
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Protocolos de seguridad estrictos
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/image1.jpg" 
                alt="Montaje de Estructuras" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Tipos de Proyectos */}
          <div className="bg-gray-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tipos de Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 21h18v-2H3v2zM5 7v10h4V7H5zm6 0v10h4V7h-4zm6 0v10h4V7h-4zM3 3v2h18V3H3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Edificios Industriales</h3>
                <p className="text-gray-700">Naves industriales, almacenes y plantas de producción</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Estructuras Mineras</h3>
                <p className="text-gray-700">Instalaciones mineras, tolvas y estructuras de soporte</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proyectos Comerciales</h3>
                <p className="text-gray-700">Centros comerciales, oficinas y edificios corporativos</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-green-50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Tienes un proyecto de estructura metálica?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contacta a nuestros ingenieros para una consulta técnica especializada
            </p>
            <Link
              to="/contactanos"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 mr-4"
            >
              Consulta Técnica
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

export default EstructuraMetalica; 