import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import ServicesCarousel from '../../components/ServicesCarousel';

const Carpinteria = () => {
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
            <span className="text-blue-600">Carpintería</span>
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
                src="/image5.jpeg" 
                alt="Taller de Carpintería" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Maestría en Madera</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                En Nysa Inversiones contamos con maestros carpinteros con décadas de experiencia que combinan 
                técnicas tradicionales con herramientas modernas para crear obras de carpintería de la más alta calidad.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Trabajamos con maderas seleccionadas y tratadas especialmente para garantizar durabilidad, 
                resistencia y belleza en cada proyecto que realizamos.
              </p>
            </div>
          </div>

          {/* Carpintería de Construcción */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Carpintería de Construcción</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Especializados en estructuras de madera para construcción, incluyendo techos, pisos, 
                escaleras y sistemas de entramado que cumplen con todas las normativas de construcción.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Estructuras de techo y coberturas
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Pisos de madera e ingeniería
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Escaleras y barandas personalizadas
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/image6.jpg" 
                alt="Carpintería de Construcción" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Acabados Arquitectónicos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/image7.jpg" 
                alt="Acabados Arquitectónicos" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Acabados Arquitectónicos</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Creamos elementos decorativos y funcionales que aportan calidez y elegancia a los espacios, 
                incluyendo revestimientos, molduras y elementos ornamentales personalizados.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Revestimientos de madera natural
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Molduras y cornisas decorativas
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Elementos ornamentales tallados
                </li>
              </ul>
            </div>
          </div>

          {/* Mobiliario Especializado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Mobiliario Especializado</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Diseñamos y fabricamos mobiliario a medida para proyectos comerciales e industriales, 
                incluyendo recepciones, estanterías y muebles funcionales para espacios de trabajo.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Recepciones y mostradores
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Estanterías y sistemas de almacenaje
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Muebles de oficina personalizados
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/image8.jpg" 
                alt="Mobiliario Especializado" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Restauración */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/image9.jpg" 
                alt="Restauración de Madera" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Restauración y Conservación</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Servicios especializados en la restauración de elementos históricos y patrimoniales, 
                aplicando técnicas de conservación que preservan la integridad original de las piezas.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Restauración de muebles antiguos
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Conservación de elementos patrimoniales
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Técnicas tradicionales de ebanistería
                </li>
              </ul>
            </div>
          </div>

          {/* Tipos de Madera */}
          <div className="bg-orange-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Maderas que Trabajamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cedro</h3>
                <p className="text-gray-700 text-sm">Resistente y aromático, ideal para estructuras</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Caoba</h3>
                <p className="text-gray-700 text-sm">Noble y elegante, perfecta para acabados finos</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tornillo</h3>
                <p className="text-gray-700 text-sm">Durable y versátil para construcción</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ishpingo</h3>
                <p className="text-gray-700 text-sm">Resistente al clima, ideal para exteriores</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-orange-50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Tienes un proyecto de carpintería en mente?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Consulta con nuestros maestros carpinteros para hacer realidad tu proyecto
            </p>
            <Link
              to="/contactanos"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 mr-4"
            >
              Consulta de Proyecto
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

export default Carpinteria; 