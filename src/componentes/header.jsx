import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import Logo from '../assets/img/martin.png'

const Header = () => {
  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");
  console.log(splitLocation)
  
  return (
    <>
    <div className={splitLocation[1] === "galeria" ? "header-galeria" : "" || splitLocation[1] === "" ? "header-inicio" : "" || splitLocation[1] === "nosotros" ? "header-nosotros" : "" || splitLocation[1] === "proceso" ? "header-proceso" : ""   }>
    <header className="header">
      <div className="contenido-header contenedor">
        <div className="barra">
          <div className="logo">
                <img src={Logo} alt="logo" />
          </div>
          <nav className="nav-principal">
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link> 
            <Link to="/proceso">Proceso</Link> 
            <Link to="/galeria">Galeria</Link>          
          </nav>
        </div>
        <div className="texto-header">
        {splitLocation[1] === "galeria" ?<h1>desde galeria</h1>: "" || splitLocation[1] === "nosotros" ?<h1>desde nosotros</h1>: "" || splitLocation[1] === "proceso" ?<h1>desde proceso</h1>: "" || splitLocation[1] === "" ?<h1>desde inicio</h1>: ""   }
        </div>
      </div>
    </header>
    </div>
    </>
  )
}

export default Header