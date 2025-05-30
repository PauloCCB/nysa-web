import React from 'react';
import Footer from '../components/Footer';

const Contactanos = () => {
  const whatsappNumber = "51956763018"; // Número de WhatsApp de la empresa
  const whatsappMessage = encodeURIComponent("Hola, me interesa conocer más sobre los servicios de Inversiones Nysa");

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="/image1.jpg" 
          alt="Contáctanos - Inversiones Nysa" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Contáctanos</h1>
            <p className="text-xl">Estamos aquí para atender tus consultas y proyectos</p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Image */}
            <div className="space-y-6">
              <img 
                src="/image1.jpg" 
                alt="Oficinas Inversiones Nysa" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">¿Listo para comenzar tu proyecto?</h3>
                <p className="text-gray-700 mb-6">
                  Nuestro equipo de especialistas está preparado para asesorarte en cada etapa de tu proyecto. 
                  Desde la consulta inicial hasta la ejecución final.
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
                  </svg>
                  Contáctanos por WhatsApp
                </a>
              </div>
            </div>

            {/* Right Side - Office Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Nuestra Oficina</h2>
              </div>

              {/* Peru Office */}
              <div className="bg-white border-l-4 border-blue-600 pl-6 py-4 shadow-lg rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Perú</h3>
                    <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm inline-block mt-2">
                      Oficina Principal
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 font-semibold">TELÉFONO</p>
                    <p className="text-lg font-bold text-blue-600">956 763 018</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Dirección:</span><br />
                    Ancash, Huari<br />
                    Perú
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Email:</span><br />
                    Inversionesnysa@hotmail.com
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Otras formas de contactarnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700">Inversionesnysa@hotmail.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
              <p className="text-gray-700">956 763 018</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visítanos</h3>
              <p className="text-gray-700">Ancash, Huari</p>
              <p className="text-gray-700">Perú</p>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contactanos; 