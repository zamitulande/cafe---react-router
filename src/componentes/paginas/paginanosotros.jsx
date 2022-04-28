import React from 'react'
import { useLocation } from 'react-router-dom';

const PaginaNosotros = () => {
    const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");
  return (
    <main className="contenedor contenido-principal">
      <h2><span>Conoce Mas</span>sobre nosotros</h2>
      <div className="contenido-nosotros">
        <div className={splitLocation[1] === "nosotros" ? "imagen" : ""}>
        </div>
        <div className="texto">
        <p>Nuestro reconocimiento se basa en el sabor y la atención, de la cual dan fe nuestros clientes y visitantes, aun durante
        la crisis de salubridad, nos adaptamos al cambio, respetando las leyes estipuladas de bioseguridad para el buen servicio
      </p>
      <p>Exclusividad en cada uno de nuestros productos, ingredientes de alta cálida, amplio espacio en nuestra cafeteria
        para que puedas degustar con tus familiares y amigos, nuestro talento humano con la mejor disposición te brindara
        una buena atención.
      </p>  
        </div>
      </div>
    </main>
  )
}

export default PaginaNosotros