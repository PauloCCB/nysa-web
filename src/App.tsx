import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Sostenibilidad from './pages/Sostenibilidad';
import NuestrosServicios from './pages/NuestrosServicios';
import Contactanos from './pages/Contactanos';
import MedioAmbiente from './pages/Sostenibilidad/MedioAmbiente';
import Seguridad from './pages/Sostenibilidad/Seguridad';
import CompromisoComunidades from './pages/Sostenibilidad/CompromisoComunidades';
import SIG from './pages/Sostenibilidad/SIG';
import AlquilerMaquinariaPesada from './pages/Servicios/AlquilerMaquinariaPesada';
import EstructuraMetalica from './pages/Servicios/EstructuraMetalica';
import Carpinteria from './pages/Servicios/Carpinteria';

import './App.css'

function App() {
  

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/sostenibilidad" element={<Sostenibilidad />}>
            <Route path="medio-ambiente" element={<MedioAmbiente />} />
            <Route path="seguridad" element={<Seguridad />} />
            <Route path="compromiso-comunidades" element={<CompromisoComunidades />} />
            <Route path="sig" element={<SIG />} />
          </Route>
          <Route path="/servicios" element={<NuestrosServicios />} />
          <Route path="/servicios/alquiler-maquinaria-pesada" element={<AlquilerMaquinariaPesada />} />
          <Route path="/servicios/estructura-metalica" element={<EstructuraMetalica />} />
          <Route path="/servicios/carpinteria" element={<Carpinteria />} />
          <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
