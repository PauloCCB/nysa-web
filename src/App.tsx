import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Sostenibilidad from './pages/Sostenibilidad';
import NuestrosServicios from './pages/NuestrosServicios';
import Contactanos from './pages/Contactanos';
import MedioAmbiente from './pages/Sostenibilidad/MedioAmbiente';
import Seguridad from './pages/Sostenibilidad/Seguridad';
import CompromisoComunidades from './pages/Sostenibilidad/CompromisoComunidades';

import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/sostenibilidad" element={<Sostenibilidad />}>
          <Route path="medio-ambiente" element={<MedioAmbiente />} />
          <Route path="seguridad" element={<Seguridad />} />
          <Route path="compromiso-comunidades" element={<CompromisoComunidades />} />
        </Route>
        <Route path="/servicios" element={<NuestrosServicios />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
