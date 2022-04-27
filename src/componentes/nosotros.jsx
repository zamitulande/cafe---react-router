import React from 'react'
import Layout from './layout'
import { useLocation } from 'react-router-dom';

const Nosotros = () => {
  const location = useLocation();

  const {pathname} = location;

  const splitLocation = pathname.split("/");
  console.log(splitLocation)
  return (
    <>
    
     <Layout>
   
    <main className="contenedor contenido-principal">
      <h2><span>Conoce Mas</span>sobre nosotros</h2>
      <div className="contenido-nosotros">
        <div className="imagen">
        </div>
        <div className="texto">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea expedita suscipit nihil c
            ommodi, aperiam eius quis voluptates molestiae maxime at ducimus quae consequuntur sit hic, 
            accusamus asperiores? Doloremque, asperiores aut.</p>
            <blockquote>Excelente Sabor!</blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ipsum optio earum molestias doloremque
             fugit aspernatur soluta libero reprehenderit dignissimos qui vero alias,
             non perspiciatis expedita tenetur? Recusandae, facere natus!</p>
        </div>
      </div>
    </main>
    

    </Layout>

    </>
    
  )
}

export default Nosotros