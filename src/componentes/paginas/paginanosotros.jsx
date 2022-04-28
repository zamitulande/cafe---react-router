import React from 'react'
import { useLocation } from 'react-router-dom';
import Cafe from '../../assets/img/icono_cafe.svg'
import Postre from '../../assets/img/icono_postre.svg'
import Te from '../../assets/img/icono_te.svg'

const PaginaNosotros = () => {
    const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");
  return (
    <main className="contenedor contenido-principal">
      <h2><span>Conoce Mas</span>sobre nosotros</h2>
      <div className={splitLocation[1] === "nosotros" ? "contenido-nosotros" : "contenido-centrar"}>
        <div className={splitLocation[1] === "nosotros" ? "imagen" : ""}>
        </div>
        <div className='texto'>
        <p>Nuestro reconocimiento se basa en el sabor y la atención, de la cual dan fe nuestros clientes y visitantes, aun durante
        la crisis de salubridad, nos adaptamos al cambio, respetando las leyes estipuladas de bioseguridad para el buen servicio
      </p>
      <p>Exclusividad en cada uno de nuestros productos, ingredientes de alta cálida, amplio espacio en nuestra cafeteria
        para que puedas degustar con tus familiares y amigos, nuestro talento humano con la mejor disposición te brindara
        una buena atención.
      </p>  
        </div>
        {splitLocation[1] === "nosotros" ? "" : <section className="iconos">
          <ul className="listado-iconos">
            <li className="vaso">
              <img src={Cafe} alt="iconocafe"/>
              <p>Cafe</p>
            </li >
            <li className="pan">
              <img src={Postre} alt="icono cafe"/>
              <p>Postres</p>
            </li>
            <li className="posillo">
              <img src={Te} alt="icono cafe"/>
              <p>Te</p>
            </li>
          </ul>
        </section>}
        
      </div>
    </main>
  )
}

export default PaginaNosotros