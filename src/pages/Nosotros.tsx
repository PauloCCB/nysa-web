import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Nosotros = () => {
  const [activeSection, setActiveSection] = useState('quienes-somos');

  const renderContent = () => {
    switch (activeSection) {
      case 'quienes-somos':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Quienes Somos</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nysa Inversiones fue fundada en 1986 y ha efectuado, a lo largo de los últimos 38 años, una mejora 
                continua para lograr ser lo que es hoy en día: una organización empresarial de referencia, reconocida en 
                las áreas de Ingeniería y Construcción, y Medio ambiente y Servicios.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Trabaja con un equipo de profesionales reconocidos por su talento, experiencia y un profundo 
                conocimiento del mercado peruano. Las obras MEP llevan la firma de su compromiso, con la calidad y 
                cumplimiento de todos los estándares de seguridad y calidad que sus clientes exigen. A la experiencia se 
                suman los elevados estándares internos, el respeto por el medio ambiente y el buen relacionamiento con 
                las comunidades.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 font-semibold text-lg italic">
                  "MEP está entre las principales constructoras del Perú, lo que demuestra su 
                  capacidad de fusionar con éxito los años de experiencia global del Grupo con 
                  un claro conocimiento del mercado nacional."
                </p>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Con cerca de 3,000 trabajadores, Nysa Inversiones, se posiciona como una empresa de referencia y 
                eficiencia, logrando optimizar proyectos con constante innovación y capacidad tecnológica.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <img 
                src="/imagen-nosotros1.jpg" 
                alt="Instalaciones de Nysa Inversiones" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 text-center text-sm">
                Nuestras instalaciones y equipo de trabajo
              </p>
            </div>
          </div>
        );
      
      case 'historia':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Historia</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Desde nuestros inicios en 1986, Nysa Inversiones ha sido pionera en el sector de alquiler de 
                maquinaria pesada y servicios especializados en el Perú.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">1986 - Fundación</h3>
                  <p className="text-gray-700">
                    Iniciamos operaciones como una pequeña empresa familiar dedicada al alquiler de equipos básicos 
                    para la construcción.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">1995 - Expansión</h3>
                  <p className="text-gray-700">
                    Ampliamos nuestra flota de maquinaria e incursionamos en proyectos de gran envergadura 
                    en el sector minero.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">2005 - Diversificación</h3>
                  <p className="text-gray-700">
                    Incorporamos servicios de estructura metálica y carpintería, consolidándonos como una 
                    empresa integral.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">2015 - Modernización</h3>
                  <p className="text-gray-700">
                    Implementamos tecnologías de vanguardia y sistemas de gestión certificados para mejorar 
                    la calidad de nuestros servicios.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">2024 - Actualidad</h3>
                  <p className="text-gray-700">
                    Somos líderes en el sector con más de 3,000 colaboradores y presencia en todo el territorio nacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'vision-mision':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Visión, Misión y Valores</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Misión */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Somos una empresa de ingeniería y construcción, que fusiona experiencia 
                  internacional con talento peruano para lograr satisfacer a nuestros clientes y 
                  stakeholders; priorizando la calidad, el bienestar de los colaboradores y el 
                  desarrollo sostenible, con especial énfasis en el respeto al medio ambiente, 
                  responsabilidad con las comunidades, seguridad y salud laboral.
                </p>
              </div>

              {/* Visión */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ser una empresa de referencia en el mercado peruano, marcada por una 
                  cultura de emprendimiento e innovación y un comportamiento socialmente 
                  responsable, que genere fuertes y duraderas relaciones de confiabilidad; a 
                  través de servicios reconocidos por su alta competencia técnica, enfocada en 
                  resolver los retos de nuestros clientes.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Valores</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Contamos con 4 valores corporativos que representan la identidad de la 
                empresa y se refleja en cada una de nuestras operaciones.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg text-blue-600 mb-2">Ambición</h4>
                  <p className="text-gray-700 text-sm">
                    Anhelo siempre renovado de hacer más y mejor, encarando el presente y el futuro con osadía y 
                    confianza y asumiendo, de forma determinada y comprometida, nuevos retos que contribuyan al 
                    crecimiento de la empresa.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg text-blue-600 mb-2">Integridad</h4>
                  <p className="text-gray-700 text-sm">
                    Actuamos con honestidad, transparencia y coherencia en todas nuestras acciones, 
                    manteniendo siempre nuestros principios éticos.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg text-blue-600 mb-2">Excelencia</h4>
                  <p className="text-gray-700 text-sm">
                    Buscamos la mejora continua en todos nuestros procesos, servicios y productos, 
                    superando las expectativas de nuestros clientes.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg text-blue-600 mb-2">Responsabilidad</h4>
                  <p className="text-gray-700 text-sm">
                    Asumimos nuestros compromisos con seriedad y dedicación, tanto con nuestros 
                    clientes como con la sociedad y el medio ambiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'nuestra-gente':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Nuestra gente</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              En Nysa Inversiones el trabajo se basa en el talento los profesionales altamente especializados y 
              valorados en el medio por su capacidad integral de gestión en todos los servicios que ofrece.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-blue-800 font-semibold text-lg italic">
                "Ser parte de un Grupo internacional como Nysa-Engil, con más de 50,000 
                trabajadores en 20 países, permite globalizar conocimiento y promover un 
                clima favorable al aprendizaje, innovación, calidad y mejora continua en el 
                proceso de desempeño."
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/imagen-nosotros1.jpg" 
                  alt="Equipo de trabajo de Nysa Inversiones" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  El apoyo constante a la profesionalización, capacitación y el <em>know-how</em> 
                  corporativo son factores determinante para pertenecer a la familia MEP.
                </p>
                
                <div className="bg-orange-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Cuidamos a los nuestros</h3>
                  <p className="text-orange-700 text-sm">
                    Nuestra prioridad es la seguridad de nuestros trabajadores
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mt-8">
              <video 
                controls 
                className="w-full h-80 object-cover"
                poster="/imagen-nosotros1.jpg"
              >
                <source src="/video-quienes-somos.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
              <div className="p-4 bg-gray-800">
                <p className="text-white text-center">
                  Video Institucional de Nysa Inversiones
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <video 
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video-quienes-somos.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="bg-blue-600 text-white px-8 py-4 rounded-lg inline-block">
              <h1 className="text-4xl font-bold mb-2">Nosotros</h1>
              <p className="text-lg">Preparados para los desafíos del futuro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-blue-600 mb-4">Nysa Inversiones</h3>
                
                {/* Nysa Inversiones Submenu */}
                <div className="space-y-2 mb-6">
                  <button
                    onClick={() => setActiveSection('quienes-somos')}
                    className={`block w-full text-left px-4 py-2 rounded transition ${
                      activeSection === 'quienes-somos' 
                        ? 'bg-blue-100 text-blue-700 font-semibold' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Quienes Somos
                  </button>
                  <button
                    onClick={() => setActiveSection('historia')}
                    className={`block w-full text-left px-4 py-2 rounded transition ${
                      activeSection === 'historia' 
                        ? 'bg-blue-100 text-blue-700 font-semibold' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Historia
                  </button>
                </div>

                {/* Other Menu Items */}
                <button
                  onClick={() => setActiveSection('vision-mision')}
                  className={`block w-full text-left px-4 py-2 rounded transition mb-2 ${
                    activeSection === 'vision-mision' 
                      ? 'bg-blue-100 text-blue-700 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Visión, Misión y Valores
                </button>

                <button
                  onClick={() => setActiveSection('nuestra-gente')}
                  className={`block w-full text-left px-4 py-2 rounded transition ${
                    activeSection === 'nuestra-gente' 
                      ? 'bg-blue-100 text-blue-700 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Nuestra gente
                </button>
              </nav>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Nosotros; 