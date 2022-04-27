import React from 'react'
import Layout from './layout'
import { useLocation } from 'react-router-dom';

const Proceso = () => {
  const location = useLocation();

  const {pathname} = location;

  const splitLocation = pathname.split("/");
  console.log(splitLocation)
  return (
    <>
   
    <Layout>
           
        <main className="contenedor contenido-principal">
        <div className="proceso-cafe">
            <div className="imagen">
             
            </div>
            <div className="texto">
                <h3>Granos de Cafe</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea expedita suscipit nihil c
                ommodi, aperiam eius quis voluptates molestiae maxime at ducimus quae consequuntur sit hic, 
                accusamus asperiores? Doloremque, asperiores aut.</p>
            </div>
          </div>
          <div className="proceso-cafe">
            <div className="imagen">
             
            </div>
            <div className="texto">
                <h3>Tostar el Cafe</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea expedita suscipit nihil c
                ommodi, aperiam eius quis voluptates molestiae maxime at ducimus quae consequuntur sit hic, 
                accusamus asperiores? Doloremque, asperiores aut.</p>
            </div>
          </div>
          <div className="proceso-cafe">
            <div className="imagen">
              
            </div>
            <div className="texto">
                <h3>Empacar el Cafe</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea expedita suscipit nihil c
                ommodi, aperiam eius quis voluptates molestiae maxime at ducimus quae consequuntur sit hic, 
                accusamus asperiores? Doloremque, asperiores aut.</p>
            </div>
          </div>
          <div className="proceso-cafe">
            <div className="imagen">
              
            </div>
            <div className="texto">
                <h3>Moler Granos de Cafe</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea expedita suscipit nihil c
                ommodi, aperiam eius quis voluptates molestiae maxime at ducimus quae consequuntur sit hic, 
                accusamus asperiores? Doloremque, asperiores aut.</p>
            </div>
          </div>
          <div className="proceso-cafe">
            <div className="imagen">
              
            </div>
            <div className="texto">
                <h3>Disfruta una Taza</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea expedita suscipit nihil c
                ommodi, aperiam eius quis voluptates molestiae maxime at ducimus quae consequuntur sit hic, 
                accusamus asperiores? Doloremque, asperiores aut.</p>
            </div>
          </div>
    </main>
       
  
    </Layout>
 
    </>
  )
}

export default Proceso