import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sostenibilidad = () => {
  return (
    <div>
      <h1>Sostenibilidad</h1>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Link to="medio-ambiente">Medio Ambiente</Link>
        <Link to="seguridad">Seguridad</Link>
        <Link to="compromiso-comunidades">Compromiso con las comunidades</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Sostenibilidad; 