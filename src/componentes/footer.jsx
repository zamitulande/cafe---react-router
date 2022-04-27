import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor contenido-footer">
        <div className="footer-box ubicacion">
            <h3>Ubicación</h3>
            <p>Popayan - norte</p>
            <p>Popayan-Cauca</p>
        </div>
        <div className="footer-box reservacion">
            <h3>Reservación</h3>
            <p>tel 8226584</p>
            <a href="tel 8226584">Llamar</a>
        </div>
        <div className="footer-box horario">
             <h3>Horario</h3>
             <p>Lun - Jue : 11:00 - 22:00</p>
             <p>Vie - Sab : 09:00 - 23:00</p>
             <p>Domingo - Cerrado</p>
        </div>
      </div>
      <div className="copyright">Todos los derechos reservados. Martinoli</div>
    </footer>
  )
}

export default Footer