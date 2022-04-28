import React from 'react'
import img1 from '../../assets/img/galeria/galeria_01.jpg'
import img2 from '../../assets/img/galeria/galeria_02.jpg'
import img3 from '../../assets/img/galeria/galeria_03.jpg'
import img4 from '../../assets/img/galeria/galeria_04.jpg'
import img5 from '../../assets/img/galeria/galeria_05.jpg'
import img6 from '../../assets/img/galeria/galeria_06.jpg'
import img7 from '../../assets/img/galeria/galeria_07.jpg'
import img8 from '../../assets/img/galeria/galeria_08.jpg'
import img9 from '../../assets/img/galeria/galeria_09.jpg'
import img10 from '../../assets/img/galeria/galeria_10.jpg'

const PaginasGaleria = () => {
  return (
    <section className="experiencia">
    <div className="contenedor galeria">
      <div className="imagen">
        <img src={img1} alt="imagen" />
    </div>
    <div className="imagen">
    <img src={img2} alt="imagen" />   
    </div>
    <div className="imagen">
    <img src={img3} alt="imagen" />
    </div>
    <div className="imagen">
    <img src={img4} alt="imagen" />
    </div>
    <div className="imagen">
    <img src={img5} alt="imagen" />
    </div>
    <div className="imagen">
    <img src={img6} alt="imagen" />
    </div>
    <div className="imagen">
    <img src={img7} alt="imagen" />
    </div>
    <div className="imagen">
    <img src={img8} alt="imagen" />
    </div>
    <div className="imagen">
    <img src={img9} alt="imagen" />
    </div>
    <div className="imagen">
    <img src={img10} alt="imagen" />    
      </div>            
    </div>
  </section>
  )
}

export default PaginasGaleria