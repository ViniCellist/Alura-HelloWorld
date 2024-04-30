import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Paginas/Inicio/index.js';
import SobreMim from './Paginas/SobreMim/index.js';
import Menu from './Components/Menu/index.js'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
