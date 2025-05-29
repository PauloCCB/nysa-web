import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f5f5f5' }}>
      <Link to="/">Inicio</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link to="/sostenibilidad">Sostenibilidad</Link>
      <Link to="/servicios">Nuestros Servicios</Link>
      <Link to="/contactanos">Contáctanos</Link>
    </nav>
  );
};

export default Navbar; 