import React from 'react'
import Layout from './layout'
import { useLocation } from 'react-router-dom'
import PaginasGaleria from './paginas/paginagalerias';

const Galeria = () => {
  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");
  return (   
   <div>
      {splitLocation[1] === "galeria" ?<Layout> <PaginasGaleria/> </Layout>: <PaginasGaleria/>}
   </div>
  )
}
export default Galeria