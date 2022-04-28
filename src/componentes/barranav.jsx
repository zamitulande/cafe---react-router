import React from 'react'
import { useLocation, Link } from 'react-router-dom';

const BarraNav = () => {
    const location = useLocation();
    const {pathname} = location;
    const splitLocation = pathname.split("/");
  return (
    <nav className="nav-principal">
            <Link to="/" className={splitLocation[1] === "" ? "activo" : "" }>Inicio</Link>
            <Link to="/nosotros" className={splitLocation[1] === "nosotros" ? "activo" : "" }>Nosotros</Link> 
            <Link to="/proceso" className={splitLocation[1] === "proceso" ? "activo" : "" }>Proceso</Link> 
            <Link to="/galeria" className={splitLocation[1] === "galeria" ? "activo" : "" }>Galería</Link>
            <Link to="/menu" className={splitLocation[1] === "menu" ? "activo" : "" }>Menú</Link>         
          </nav>
  )
}

export default BarraNav