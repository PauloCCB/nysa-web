import React from 'react';
import { Outlet } from 'react-router-dom';

const Sostenibilidad = () => {
  return (
    <section className="min-h-[40vh] pt-32 pb-10 px-4 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sostenibilidad</h1>
      <p className="text-gray-700 max-w-2xl mb-6">
        Nuestro compromiso con la sostenibilidad abarca la seguridad, el medio ambiente, el trabajo con las comunidades y la gestión integrada. Descubre más en las secciones específicas.
      </p>
      <Outlet />
    </section>
  );
};

export default Sostenibilidad; 