import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Galeria from "./componentes/galeria";
import Inicio from "./componentes/inicio";
import Layout from "./componentes/layout";
import Nosotros from "./componentes/nosotros";
import Proceso from "./componentes/proceso";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="proceso" element={<Proceso/>} />
        <Route path="galeria" element={<Galeria/>} />
      </Routes>
   
  );
}
export default App;