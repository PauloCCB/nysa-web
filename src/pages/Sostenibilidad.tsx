import { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const Sostenibilidad = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Si estamos en la ruta base /sostenibilidad, redirigir a compromiso-comunidades
    if (location.pathname === '/sostenibilidad') {
      navigate('/sostenibilidad/compromiso-comunidades', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="/sostenibilidad.jpg" 
          alt="Sostenibilidad - Nysa Inversiones" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Sostenibilidad</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprometidos con un futuro sostenible y responsable
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <Outlet />
      
      <Footer />
    </>
  );
};

export default Sostenibilidad; 