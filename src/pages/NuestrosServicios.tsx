import React from 'react';

const NuestrosServicios = () => {
  return (
    <section className="min-h-[60vh] pt-32 pb-10 px-4 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Nuestros Servicios</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
          <span className="text-5xl mb-4">🚜</span>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Alquiler de Excavadoras</h2>
          <p className="text-gray-700 text-center">Excavadoras modernas y eficientes para todo tipo de proyectos mineros.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
          <span className="text-5xl mb-4">🚚</span>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Alquiler de Volquetes</h2>
          <p className="text-gray-700 text-center">Volquetes de gran capacidad para el transporte seguro de materiales.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
          <span className="text-5xl mb-4">⛏️</span>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Alquiler de Perforadoras</h2>
          <p className="text-gray-700 text-center">Perforadoras de última generación para operaciones mineras precisas.</p>
        </div>
      </div>
    </section>
  );
};

export default NuestrosServicios; 