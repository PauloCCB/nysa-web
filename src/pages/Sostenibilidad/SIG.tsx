import { Link } from 'react-router-dom';

const SIG = () => {
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
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
                >
                  Compromiso con Comunidades
                </Link>
                
                <Link
                  to="/sostenibilidad/sig"
                  className="block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded transition"
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
                  <span className="text-blue-600">SIG</span>
                </nav>
                
                <div className="mb-8">
                  <h1 className="text-blue-600 text-lg font-semibold mb-2">Sostenibilidad</h1>
                  <h2 className="text-3xl font-bold text-blue-600">SIG</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Mota-Engil Perú, siguiendo a la vanguardia en el desarrollo de los aspectos vinculados a la Calidad, 
                    Seguridad, Salud Ocupacional y el Medio Ambiente, resalta su compromiso a través del cumplimiento de 
                    los requisitos del desarrollo empresarial sostenible respecto al Medio Ambiente y Asegurar 
                    la Salud y la Seguridad Ocupacional del personal.
                  </p>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    El Sistema Integrado de Gestión de MEP lidera el proceso de integración de los sistemas de gestión 
                    Calidad, Ambiente, Seguridad y Salud ocupacional como parte de la mejora continua de la empresa. El 
                    proceso de integración tiene como fin identificar oportunidades de mejora en la gestión de procesos, 
                    los estándares en la experiencia del grupo al que pertenecemos. Esta procesos transversales a toda la 
                    empresa son parte de un sistema que procuran el continuo análisis y mejora.
                  </p>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Optimizar los procesos y métodos de trabajo tras ventajas a largo plazo, permitiendo a MEP responder a 
                    nuevos desafíos e incrementar la eficiencia y productividad en beneficio de sus clientes y stakeholders.
                  </p>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Contamos con las certificaciones en las normas internacionales ISO 9001:2015, ISO 14001:2015, ISO 
                    45001:2018; emitidas por la certificadora Bureau Veritas.
                  </p>
                </div>

                {/* Sección con imagen: Lineamientos para proveedores */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <img 
                      src="/imagen-nosotros1.jpg" 
                      alt="Lineamientos para proveedores" 
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                    
                    <div className="bg-blue-600 text-white p-4 rounded-lg mt-4">
                      <h3 className="font-bold text-center">Lineamientos para proveedores</h3>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Nuestra gestión de proveedores está basada en la selección, registro y evaluación del desempeño, con la 
                      finalidad de asegurar que los bienes y/o servicios que suministran nuestros proveedores cumplan con los 
                      requisitos de Mota-Engil Perú.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Criterios de Evaluación de Proveedores.
                    </p>
                  </div>
                </div>

                {/* Sección: Diagrama SIG */}
                <div className="space-y-6">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img 
                      src="/imagen-nosotros1.jpg" 
                      alt="Diagrama del Sistema Integrado de Gestión" 
                      className="w-full h-96 object-contain rounded-lg"
                    />
                    <p className="text-gray-600 text-center text-sm mt-4">
                      Sistema Integrado de Gestión - Enfoque por procesos
                    </p>
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

export default SIG; 