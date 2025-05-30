import { Link } from 'react-router-dom';

const Seguridad = () => {
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
                  className="block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded transition"
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
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
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
                  <span className="text-blue-600">Seguridad</span>
                </nav>
                
                <div className="mb-8">
                  <h1 className="text-blue-600 text-lg font-semibold mb-2">Sostenibilidad</h1>
                  <h2 className="text-3xl font-bold text-blue-600">Seguridad</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    La seguridad y la salud constituyen uno de los pilares de nuestro modelo de gestión: compromete a los 
                    trabajadores a poner en el medio por su capacidad laboral y responsabilidad. Esta se basa en tres prácticas 
                    esenciales: satisfacción en todas las áreas de trabajo y es también una señal de salud empresarial que genera bienestar común.
                  </p>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    En MOTA-ENGIL tenemos la responsabilidad por la implementación de un sistema de gestión, desarrollando iniciativas que han aportado a la disminución de 
                    la frecuencia de accidentes llegando a alcanzar más de 5MHHT sin accidentes con tiempo perdido en 
                    varios proyectos, ya que la implementación nos ha dado como resultado que todo accidente es evitable.
                  </p>
                </div>

                {/* Sección: Liderazgo Comprometido */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="/imagen-nosotros1.jpg" 
                      alt="Liderazgo Comprometido" 
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                    
                    <div className="bg-blue-600 text-white p-4 rounded-lg mt-4">
                      <h3 className="font-bold text-center">Liderazgo Comprometido</h3>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Una Alta Dirección y línea de mando comprometidas con la responsabilidad de preservar y mejorar la 
                      salud ocupacional. Por ello hemos implementado la jornada anual de seguridad, donde los gerentes de 
                      todos los proyectos y el Directorio se reúnen con el objetivo de discutir las lecciones aprendidas 
                      reflexionar sobre nuestro desempeño y establecer estrategias que nos ayuden a minimizar los riesgos de 
                      nuestras actividades. Así mismo, estas jornadas se realizan en los diversos proyectos con la línea de 
                      mando presente y las direcciones corporativas de seguridad.
                    </p>
                    
                    <div className="mt-4">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-semibold transition">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sección: Sistema de Gestión de Seguridad y Salud Ocupacional */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Contamos con un sistema de gestión que cumple con las exigencias normativas nacionales e 
                      internacionales; al estar certificada en ISO 45001:2018.
                    </p>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Este sistema, que se ha nutrido de nuestra experiencia y evolución ejecutados en los 
                      diversos rubros a lo largo de 30 años, ha permitido gestionar de manera eficiente nuestros riesgos en 
                      seguridad y salud en el trabajo.
                    </p>
                    
                    <div className="bg-blue-600 text-white p-4 rounded-lg mb-4">
                      <h3 className="font-bold text-center">Sistema de Gestión de Seguridad y Salud Ocupacional</h3>
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
                      alt="Sistema de Gestión de Seguridad y Salud Ocupacional" 
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Sección: Comité de Seguridad y Salud en el Trabajo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="/imagen-nosotros1.jpg" 
                      alt="Comité de Seguridad y Salud en el Trabajo" 
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                    
                    <div className="bg-blue-600 text-white p-4 rounded-lg mt-4">
                      <h3 className="font-bold text-center">Comité de Seguridad y Salud en el Trabajo</h3>
                    </div>
                    
                    <div className="mt-4">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-semibold transition">
                        Ver más
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Este órgano paritario constituido por representantes del empleador y de los trabajadores, se encarga de 
                      promover el cuidado de la salud y seguridad en el trabajo, asesorar y vigilar el cumplimiento, de lo 
                      dispuesto por el Reglamento Interno de Seguridad y Salud en el Trabajo y la normativa nacional, 
                      favoreciendo el bienestar laboral y apoyando el desarrollo empresarial y sosteniendo el 
                      desarrollo de los trabajadores de manera que podamos brindar el soporte a las diferentes obras para el 
                      cumplimiento de sus funciones.
                    </p>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Siendo una empresa del sector construcción y con clientes muy exigentes, hemos recibido varios 
                    reconocimientos por nuestro logros en las metas de...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seguridad; 