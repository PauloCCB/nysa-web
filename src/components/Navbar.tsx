import { Link } from "react-router-dom";
import nyssalogo from "../public/nyssalogo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <img src={nyssalogo} alt="logo" />
      <nav className="flex justify-end items-center p-4">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/sostenibilidad">Sostenibilidad</Link>
        <Link to="/servicios">Nuestros Servicios</Link>
        <Link to="/contactanos">Contáctanos</Link>
      </nav>
    </div>
  );
};

export default Navbar;
