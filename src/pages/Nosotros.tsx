import React from 'react';

const Nosotros = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center bg-white pt-32 pb-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h1>
      <p className="text-gray-700 max-w-2xl text-center mb-6">
        Somos una empresa minera dedicada al alquiler de maquinaria pesada, comprometida con la excelencia, la seguridad y la sostenibilidad. Nuestra misión es brindar soluciones eficientes y responsables para el desarrollo de la industria minera en el país.
      </p>
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow w-full md:w-72">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Misión</h2>
          <p className="text-gray-700">Proveer maquinaria y servicios de alta calidad, priorizando la seguridad y el desarrollo sostenible.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow w-full md:w-72">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Visión</h2>
          <p className="text-gray-700">Ser líderes en el sector minero, reconocidos por nuestra innovación y compromiso social y ambiental.</p>
        </div>
      </div>
    </section>
  );
};

export default Nosotros; 