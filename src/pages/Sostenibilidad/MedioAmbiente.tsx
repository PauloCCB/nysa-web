import React from 'react';
import { Link } from 'react-router-dom';

const MedioAmbiente = () => {
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
                  className="block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded transition"
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
                  <span className="text-blue-600">Medio Ambiente</span>
                </nav>
                
                <div className="mb-8">
                  <h1 className="text-blue-600 text-lg font-semibold mb-2">Sostenibilidad</h1>
                  <h2 className="text-3xl font-bold text-blue-600">Medio Ambiente</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    En Mota-Engil Perú, estamos comprometidos en liderar el desarrollo ambiental en todas nuestras 
                    actividades, por ello promovemos, funcionamos y mejoramos una cultura de protección ambiental dentro 
                    del sitio de la organización. A pesar de algunos problemas ambientales en las operaciones que operan los 
                    servicios de la operación que requieren desarrollo sostenible, los efectos pueden afectar positivamente 
                    alterando con nuestros clientes.
                  </p>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Como parte de nuestro compromiso medioambiental hemos desarrollado importantes campañas con nuestros 
                    clientes, constituidos en centro de apoyo a nuestros contratistas públicos.
                  </p>
                </div>

                {/* Sección: Política */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-blue-600">Política</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Contamos con una política que sustenta integrado de gestión, donde se establecen los principios y 
                    compromisos en el marco del desarrollo sostenible en Mota-Engil Perú y que son aplicables todos en la 
                    Dirección.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Esta política es la base integrada del Sistema de gestión de calidad medioambiental y de uso sostenible y 
                    elabora para la ejecución de cualquier área de trabajo proporcionada en cada materia.
                  </p>
                </div>

                {/* Sección: Identificación y Evaluación de Aspectos e Impactos Ambientales */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-blue-600">Identificación y Evaluación de Aspectos e Impactos Ambientales</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Contamos con una metodología que durante identificar los aspectos e evaluar los impactos ambientales 
                    dentro de la ejecución de proyectos para entender las métricas y programas de monitoreo necesarios 
                    de nuestro y seguimientos; Pero proporcionamos que esto sea evaluado.
                  </p>
                </div>

                {/* Sección: Controles Operacionales */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-blue-600">Controles Operacionales</h3>
                  <p className="text-gray-700 leading-relaxed">
                    En todos los proyectos implementamos una serie de actividades, procedimientos que son sólo de desarrollo donde 
                    se describen los controles a implementar. Estas actividades son desarrolladas a medición y seguimiento, 
                    medición antes y vigilancia, auditoria, cualitativa y trabajadores, aseguran bienestar liderado; actual de 
                    alta comunicación, formación de promociona, estados y territoriales.
                  </p>
                </div>

                {/* Sección: Campañas Ambientales */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-blue-600">Campañas Ambientales</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Una de las estrategias de comunicación y participación con las campañas, cuya ataque de aumentar e 
                    incrementar las comunicaciones necesarias a través personal. Estas actividades informantes por ejecutar 
                    contribuye conservación de métodos útiles, información, eficiencia hífrica entre otros.
                  </p>
                </div>

                {/* Sección: Educación Ambiental */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-blue-600">Educación Ambiental</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Es importante comunicar a la sociedad circundante a los proyectos la importancia de cuidar el medio 
                    ambiente y el desarrollo sostenible para sensibilizarlas en la problemática medioambiental actual 
                    y conseguir fomentaremos y mejoremos de manera que se realizan actividades ambientales.
                  </p>
                  
                  {/* Imagen panorámica */}
                  <div className="w-full">
                    <img 
                      src="/imagen-nosotros1.jpg" 
                      alt="Educación Ambiental - Paisaje natural" 
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-gray-600 text-center text-sm mt-2">
                      Comprometidos con la preservación del medio ambiente
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

export default MedioAmbiente; 