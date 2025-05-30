import React from 'react';

const Contactanos = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center bg-white pt-32 pb-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h1>
      <p className="text-gray-700 mb-6 text-center">¿Tienes alguna consulta? Completa el formulario o escríbenos directamente a nuestro WhatsApp.</p>
      <form className="bg-gray-100 p-6 rounded-lg shadow w-full max-w-md flex flex-col gap-4">
        <input type="text" placeholder="Nombre" className="p-2 rounded border border-gray-300" />
        <input type="email" placeholder="Correo electrónico" className="p-2 rounded border border-gray-300" />
        <textarea placeholder="Mensaje" className="p-2 rounded border border-gray-300" rows={4}></textarea>
        <button type="submit" className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">Enviar</button>
      </form>
      <div className="mt-6 text-gray-700 text-center">
        <p>O escríbenos a: <a href="mailto:contacto@minera.com" className="text-blue-600 underline">contacto@minera.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/51999999999" className="text-blue-600 underline">+51 999 999 999</a></p>
      </div>
    </section>
  );
};

export default Contactanos; 