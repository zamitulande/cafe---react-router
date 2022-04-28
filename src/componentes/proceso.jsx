import React from 'react'
import Layout from './layout'
import Proceso1 from '../assets/img/proceso_1.jpg'
import Proceso2 from '../assets/img/proceso_2.jpg'
import Proceso3 from '../assets/img/proceso_3.jpg'
import Proceso4 from '../assets/img/proceso_4.jpg'
import Proceso5 from '../assets/img/proceso_5.jpg'

const Proceso = () => {

  return (
    <>
   
    <Layout>
           
        <main className="contenedor contenido-principal">
        <div className="proceso-cafe">
            <div className="imagen">
                <img src={Proceso1} alt="imagen" />
            </div>
            <div className="texto">
                <h3>Granos de Café</h3>
              <p>Cada mes recibimos decenas de empaques llenos de café  pilado, que para llegar a este estado
                muchos recolectores en las fincas cafeteras llenan sus cestas con este fruto, para que al fin de 
                jornada de trabajo diaria sea separado el grano de la cascara, mediante el memétodo de despulpar en maquinas
                diseñadas para este oficio.
              </p>
            </div>
          </div>
          <div className="proceso-cafe">
            <div className="imagen">
            <img src={Proceso2} alt="imagen" />
            </div>
            <div className="texto">
                <h3>Tostar el Café</h3>
              <p>Una vez despulpado, el grano debe ser lavado para quitar toda la babaza, secado al sol, o en hornos de alta temperatura, 
                esto para que el grano de café este de contextura dura y de color gris claro.  Con lo anterior se procede a tostar el grano, 
                este proceso consiste en poner en un recipiente en alta temperatura y constantemente estar revolviendo 
                los granos de café hasta que su color se torne como su nombre lo dice; café. </p>
            </div>
          </div>
          <div className="proceso-cafe">
            <div className="imagen">
            <img src={Proceso3} alt="imagen" />
            </div>
            <div className="texto">
                <h3>Empacar el Café</h3>
              <p>Después de adquirir el color café, se procede a empacar en empaques de materiales de papel 
                o de aluminio, esto para garantizar su calidad y 
                que su aroma permanezca por mas tiempo. </p>
            </div>
          </div>
          <div className="proceso-cafe">
            <div className="imagen">
            <img src={Proceso4} alt="imagen" />
            </div>
            <div className="texto">
                <h3>Moler Granos de Café</h3>
              <p>Según el gusto de cada persona será lo fino que se deberá moler el café, 
                esto se hace con maquinas las cuales se pueden graduar para dar el fin deseado. </p>
            </div>
          </div>
          <div className="proceso-cafe">
            <div className="imagen">
            <img src={Proceso5} alt="imagen" />
            </div>
            <div className="texto">
                <h3>Disfruta una Taza</h3>
              <p>Ya tenemos el café en polvo, este polvo de colocara en una coladera (colador) para 
                echar agua muy caliente, con nuestro café casi terminado 
                solo queda acompañarlo con un pan para ser degustado. </p>
            </div>
          </div>
    </main>
       
  
    </Layout>
 
    </>
  )
}

export default Proceso