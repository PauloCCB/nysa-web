import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => setDropdown(false), 120);
  };

  return (
    <nav className="bg-nysa-black w-full shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center">
          <img src="/nysalogo.png" alt="Logo" className="h-16 w-40 mr-4" />
        </Link>
        {/* Desktop */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <NavLink to="/" className={({ isActive }) => `font-medium ${isActive ? 'text-nysa-blue' : 'text-nysa-text'} hover:text-nysa-blue transition`}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className={({ isActive }) => `font-medium ${isActive ? 'text-nysa-blue' : 'text-nysa-text'} hover:text-nysa-blue transition`}>Nosotros</NavLink>
          </li>
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="font-medium text-nysa-text hover:text-nysa-blue transition cursor-pointer flex items-center">
              Sostenibilidad
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            {/* Dropdown */}
            <div
              className={`absolute left-0 mt-2 w-64 bg-white rounded shadow-lg transition-all duration-300 z-40
                ${dropdown ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}
              `}
              style={{ border: '1px solid #e5e7eb' }}
            >
              <NavLink to="/sostenibilidad/compromiso-comunidades" className={({ isActive }) => `block px-6 py-3 text-nysa-dark hover:bg-nysa-blue/10 transition ${isActive ? 'text-nysa-blue' : ''}`}>Compromiso Con las comunidades</NavLink>
              <NavLink to="/sostenibilidad/seguridad" className={({ isActive }) => `block px-6 py-3 text-nysa-dark hover:bg-nysa-blue/10 transition ${isActive ? 'text-nysa-blue' : ''}`}>Seguridad</NavLink>
              <NavLink to="/sostenibilidad/medio-ambiente" className={({ isActive }) => `block px-6 py-3 text-nysa-dark hover:bg-nysa-blue/10 transition ${isActive ? 'text-nysa-blue' : ''}`}>Medio Ambiente</NavLink>
              <NavLink to="/sostenibilidad/sig" className={({ isActive }) => `block px-6 py-3 text-nysa-dark hover:bg-nysa-blue/10 transition ${isActive ? 'text-nysa-blue' : ''}`}>SIG</NavLink>
            </div>
          </li>
          <li>
            <NavLink to="/servicios" className={({ isActive }) => `font-medium ${isActive ? 'text-nysa-blue' : 'text-nysa-text'} hover:text-nysa-blue transition`}>Nuestros Servicios</NavLink>
          </li>
          <li>
            <NavLink to="/contactanos" className={({ isActive }) => `font-medium ${isActive ? 'text-nysa-blue' : 'text-nysa-text'} hover:text-nysa-blue transition`}>Contáctanos</NavLink>
          </li>
        </ul>
        {/* Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-nysa-text mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-nysa-text mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-nysa-text transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-nysa-dark px-4 pb-4 space-y-2">
          <li>
            <NavLink to="/" className="block py-2 text-nysa-text" onClick={() => setMenuOpen(false)}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className="block py-2 text-nysa-text" onClick={() => setMenuOpen(false)}>Nosotros</NavLink>
          </li>
          <li>
            <details>
              <summary className="py-2 text-nysa-text cursor-pointer">Sostenibilidad</summary>
              <div className="pl-4">
                <NavLink to="/sostenibilidad/compromiso-comunidades" className="block py-1 text-nysa-dark" onClick={() => setMenuOpen(false)}>Compromiso Con las comunidades</NavLink>
                <NavLink to="/sostenibilidad/seguridad" className="block py-1 text-nysa-dark" onClick={() => setMenuOpen(false)}>Seguridad</NavLink>
                <NavLink to="/sostenibilidad/medio-ambiente" className="block py-1 text-nysa-dark" onClick={() => setMenuOpen(false)}>Medio Ambiente</NavLink>
                <NavLink to="/sostenibilidad/sig" className="block py-1 text-nysa-dark" onClick={() => setMenuOpen(false)}>SIG</NavLink>
              </div>
            </details>
          </li>
          <li>
            <NavLink to="/servicios" className="block py-2 text-nysa-text" onClick={() => setMenuOpen(false)}>Nuestros Servicios</NavLink>
          </li>
          <li>
            <NavLink to="/contactanos" className="block py-2 text-nysa-text" onClick={() => setMenuOpen(false)}>Contáctanos</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
