import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import Logo from '../assets/img/martin.png'

const Header = () => {
  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");
  
  return (
    <>
    <div className={splitLocation[1] === "galeria" ? "header-galeria" : "" || splitLocation[1] === "" ? "header-inicio" : "" || splitLocation[1] === "nosotros" ? "header-nosotros" : "" || splitLocation[1] === "proceso" ? "header-proceso" : "" || splitLocation[1] === "menu" ? "header-menu" : ""    }>
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
            <Link to="/galeria">Galería</Link>
            <Link to="/menu">Menú</Link>         
          </nav>
        </div>
        <div className="texto-header">
        {splitLocation[1] === "galeria" ?<h1>Los ojos también pueden degustar</h1>: "" || splitLocation[1] === "nosotros" ?<h1>muchas historias, pero aquí la nuestra</h1>: "" || splitLocation[1] === "proceso" ?<h1>vamos, aprendamos juntos</h1>: "" || splitLocation[1] === "" ?<h1>para un inicio, una buena taza de café</h1>: "" || splitLocation[1] === "menu" ?<h1>que sabores y olores vas a combinar?</h1>: ""   }
        </div>
      </div>
    </header>
    </div>
    </>
  )
}

export default Header