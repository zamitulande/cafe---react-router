import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/martin.png'

const Header = () => {
  return (
    <header className="header header-inicio">
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
          <h1>Disfruta de una deliciosa taza de cafe</h1>
        </div>
      </div>
    </header>
  )
}

export default Header