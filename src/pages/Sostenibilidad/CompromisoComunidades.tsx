import React from 'react';
import { Link } from 'react-router-dom';

const CompromisoComunidades = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Sostenibilidad</h3>
              
              <div className="space-y-2">
                <Link
                  to="/sostenibilidad/seguridad"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
                >
                  Seguridad
                </Link>
                
                <Link
                  to="/sostenibilidad/medio-ambiente"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
                >
                  Medio Ambiente
                </Link>
                
                <Link
                  to="/sostenibilidad/compromiso-comunidades"
                  className="block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded transition"
                >
                  Compromiso con Comunidades
                </Link>
                
                <Link
                  to="/sostenibilidad/sig"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
                >
                  SIG
                </Link>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-600 mb-2">Acreditaciones / Certificaciones</h4>
              </div>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <nav className="text-sm text-gray-500 mb-4">
                  <Link to="/" className="hover:text-blue-600">Home</Link>
                  <span className="mx-2">/</span>
                  <Link to="/sostenibilidad" className="hover:text-blue-600">Sostenibilidad</Link>
                  <span className="mx-2">/</span>
                  <span className="text-blue-600">Compromiso con Comunidades</span>
                </nav>
                
                <div className="mb-8">
                  <h1 className="text-blue-600 text-lg font-semibold mb-2">Sostenibilidad</h1>
                  <h2 className="text-3xl font-bold text-blue-600">Compromiso con Comunidades</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Por la naturaleza de nuestra labor y la realidad del país, operamos en contextos marcados por realidades 
                    culturales distintas principalmente en zonas rurales que desafían nuestras aptitudes, habilidades y 
                    capacidades, pero que a la vez representan oportunidades de nuevos aprendizajes y nuevas 
                    responsabilidades que tenemos hacer nuestras también con las poblaciones locales.
                  </p>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Buscamos que nuestra presencia en las obras, contribuya con el desarrollo local; promoviendo una 
                    relación de respeto mutuo, confianza y comunicación asertiva. La gestión de relaciones comunitaria se 
                    adecua a la realidad de cada obra, y las condiciones sociales, económicas, culturales y ambientales 
                    donde se ubica la operación siempre en el marco de nuestros estándares de nuestros clientes.
                  </p>
                </div>

                {/* Sección con imagen: Prevención y Gestión de Conflictos Sociales */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      En nuestras operaciones contamos con un equipo multidisciplinario de profesionales que integra el área 
                      de responsabilidad social y relaciones comunitarias. La capacidad de gestión de nuestro equipo se 
                      fortalece con un profundo conocimiento y respeto por el país, lo que asegura relaciones 
                      armónicas y fluidas con las comunidades donde operamos.
                    </p>
                    
                    <div className="bg-blue-600 text-white p-4 rounded-lg">
                      <h3 className="font-bold mb-2">Prevención y Gestión de Conflictos Sociales</h3>
                    </div>
                  </div>
                  
                  <div>
                    <img 
                      src="/imagen-nosotros1.jpg" 
                      alt="Prevención y Gestión de Conflictos Sociales" 
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Sección: Desarrollo Local */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <img 
                      src="/imagen-nosotros1.jpg" 
                      alt="Desarrollo Local" 
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Nuestra política de compromiso con el desarrollo sostenible busca crear valor y generar bienestar en 
                      nuestras zonas de influencia. En ese sentido, a través de la generación de oportunidades de empleo 
                      contribuimos con el desarrollo socio económico de las poblaciones locales. Contratamos personal local 
                      para ocupar puestos no calificados y calificados, y promovemos también la contratación de proveedores 
                      locales que nos ofrezcan sus servicios durante la ejecución de la obra.
                    </p>
                    
                    <div className="bg-blue-600 text-white p-4 rounded-lg">
                      <h3 className="font-bold mb-2">Desarrollo Local</h3>
                    </div>
                    
                    <div className="mt-4">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-semibold transition">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sección: Programas Sociales */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Buscamos contribuir a la mejora de la calidad de vida de las poblaciones locales a partir de la 
                      implementación de programas sociales y acciones de apoyo social. Nuestra intervención se realiza en 
                      períodos de corto plazo, tiempo de duración de las obras, ya que nuestro objetivo es contribuir a procesos mayores de 
                      desarrollo local que implican la participación de múltiples actores sociales, cliente, gobierno local y 
                      regional, etc.; con quienes nos aliamos para que el modelo social sea sostenible.
                    </p>
                    
                    <div className="bg-blue-600 text-white p-4 rounded-lg">
                      <h3 className="font-bold mb-2">Programas Sociales</h3>
                    </div>
                    
                    <div className="mt-4">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-semibold transition">
                        Ver más
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <img 
                      src="/imagen-nosotros1.jpg" 
                      alt="Programas Sociales" 
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompromisoComunidades; 